// Uses Git Credential Manager in memory; never writes or prints credentials.
// Requires an existing authenticated HTTPS GitHub session.
import { spawnSync } from "node:child_process";
const repository = "cet6-speak-daily";
const account = "vizzinicoslett-code";
const cwd = new URL("..", import.meta.url);
const git = (args, options = {}) => {
  const result = spawnSync("git", args, {
    cwd,
    encoding: "utf8",
    timeout: 20000,
    env: { ...process.env, GIT_TERMINAL_PROMPT: "0", GCM_INTERACTIVE: "never" },
    ...options,
  });
  if (result.status !== 0)
    throw new Error(
      `Git operation failed: ${args[0]} (credentials and output omitted)`,
    );
  return result.stdout.trim();
};
let credential;
try {
  credential = git(["credential", "fill"], {
    input: "protocol=https\nhost=github.com\n\n",
  });
} catch {
  console.error(
    "No existing GitHub HTTPS credential is available to create a repository or configure Pages.",
  );
  process.exit(2);
}
const token = credential
  .split("\n")
  .find((line) => line.startsWith("password="))
  ?.slice(9);
if (!token) {
  console.error("GitHub credential contains no usable token.");
  process.exit(2);
}
const api = async (path, method = "GET", body) => {
  const response = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(20000),
  });
  const data = await response.json().catch(() => ({}));
  return { status: response.status, data };
};
try {
  const user = await api("/user");
  if (user.status !== 200 || user.data.login !== account)
    throw new Error(
      "Existing Git credential does not match the connected GitHub account.",
    );
  if (process.argv.includes("--check")) {
    console.log(`Authenticated HTTPS GitHub access: ${user.data.login}`);
    process.exit(0);
  }
  let repo = await api(`/repos/${account}/${repository}`);
  if (repo.status === 404)
    repo = await api("/user/repos", "POST", {
      name: repository,
      description:
        "Private, offline-first 35-day CET-SET6 speaking practice PWA. No backend or AI APIs.",
      private: false,
      auto_init: false,
    });
  if (![200, 201].includes(repo.status))
    throw new Error(`Repository access failed (HTTP ${repo.status}).`);
  // Refuse to replace an existing populated repository.
  const branches = await api(`/repos/${account}/${repository}/branches`);
  if (
    Array.isArray(branches.data) &&
    branches.data.length &&
    !process.argv.includes("--update")
  )
    throw new Error(
      "Repository already contains branches. Refusing to overwrite existing work.",
    );
  try {
    git(["remote", "get-url", "origin"]);
  } catch {
    git([
      "remote",
      "add",
      "origin",
      `https://github.com/${account}/${repository}.git`,
    ]);
  }
  const remote = git(["remote", "get-url", "origin"]);
  if (remote !== `https://github.com/${account}/${repository}.git`)
    throw new Error("Unexpected Git remote; refusing to push.");
  git(["push", "-u", "origin", "main"]);
  console.log(`Repository pushed: https://github.com/${account}/${repository}`);
  let pages = await api(`/repos/${account}/${repository}/pages`);
  if (pages.status === 404)
    pages = await api(`/repos/${account}/${repository}/pages`, "POST", {
      build_type: "workflow",
    });
  else if (pages.status === 200 && pages.data.build_type !== "workflow")
    pages = await api(`/repos/${account}/${repository}/pages`, "PUT", {
      build_type: "workflow",
    });
  if (![200, 201, 204].includes(pages.status))
    throw new Error(`Pages setup failed (HTTP ${pages.status}).`);
  console.log(
    `Pages configured: https://${account}.github.io/${repository}/ (deployment awaits successful Actions run)`,
  );
} catch (error) {
  console.error(
    error instanceof Error ? error.message : "GitHub publishing failed.",
  );
  process.exit(1);
}
