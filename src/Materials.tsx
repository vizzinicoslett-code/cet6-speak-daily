import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bookmark,
  Check,
  Layers,
} from "lucide-react";
import { materials, generalExpressions } from "./materialData";
import type {
  FavoriteExpression,
  MaterialProgress,
  SpeakingMaterial,
} from "./materialTypes";
import {
  loadMaterialProgress,
  saveMaterialProgress,
  loadFavoriteExpressions,
  saveFavoriteExpression,
  removeFavoriteExpression,
} from "./storage";
import {
  newMaterialProgress,
  beginMaterialStudy,
  updateMaterialPosition,
  markMaterialChunk,
  rateMaterial,
  recommendMaterials,
} from "./materialDomain";
import { questionsForMaterial } from "./materialLinks";
import { localDate } from "./domain";
import type { TrainingDay, Question } from "./types";
import "./materials.css";

const statusLabels = {
  new: "新素材",
  learning: "学习中",
  reviewing: "复习中",
  mastered: "已掌握",
};
const sourceLabels = {
  "verified-recall": "考后回忆",
  "historical-topic": "历年高频",
  "practice-material": "备考素材",
};
const stageLabels = ["中英对照", "关键词提示", "中文提示复述", "整篇回忆"];
function resumeLabel(material: SpeakingMaterial, progress: MaterialProgress) {
  if (progress.currentStage === 4) return "继续整篇回忆";
  const currentIndex = material.chunks.findIndex(chunk => chunk.id === progress.currentChunkId);
  const resumeIndex = currentIndex >= 0 && !progress.masteredChunkIds.includes(material.chunks[currentIndex].id)
    ? currentIndex : material.chunks.findIndex(chunk => !progress.masteredChunkIds.includes(chunk.id));
  return `继续第 ${Math.max(0, resumeIndex < 0 ? currentIndex : resumeIndex) + 1} 段 · ${stageLabels[progress.currentStage - 1]}`;
}
const openMaterial = (id = "", recite = false) => {
  location.hash = `/materials${id ? `/${encodeURIComponent(id)}` : ""}${recite ? "/recite" : ""}`;
  window.scrollTo({ top: 0, behavior: "instant" });
};

function Paragraphs({ text }: { text: string }) {
  return (
    <div className="material-prose" lang="en">
      {text.split(/\n\s*\n/).map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function Materials({
  routeId,
  reciting,
  onPractice,
}: {
  routeId?: string;
  reciting: boolean;
  onPractice: (day: TrainingDay, question: Question) => void;
}) {
  const [progress, setProgress] = useState<MaterialProgress[]>([]);
  const [favorites, setFavorites] = useState<FavoriteExpression[]>([]);
  const [ready, setReady] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");
  const [reveal, setReveal] = useState(false);
  const pending = useRef(false);
  useEffect(() => {
    let alive = true;
    Promise.all([loadMaterialProgress(), loadFavoriteExpressions()])
      .then(([p, f]) => {
        if (alive) {
          setProgress(p);
          setFavorites(f);
          setReady(true);
        }
      })
      .catch((cause) => {
        if (alive) {
          setLoadFailed(true);
          setError(String(cause instanceof Error ? cause.message : cause));
          setReady(true);
        }
      });
    return () => {
      alive = false;
    };
  }, []);
  const material = materials.find((item) => item.id === routeId);
  const current =
    material &&
    (progress.find((item) => item.materialId === material.id) ??
      newMaterialProgress(material));
  useEffect(() => {
    setReveal(false);
  }, [routeId, reciting, current?.currentStage, current?.currentChunkId]);

  async function persist(next: MaterialProgress) {
    if (pending.current || loadFailed || !ready) return false;
    pending.current = true;
    setSaving(true);
    setError("");
    try {
      await saveMaterialProgress(next);
      setProgress((previous) => [
        ...previous.filter((item) => item.materialId !== next.materialId),
        next,
      ]);
      return true;
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : "学习进度保存失败，请重试。",
      );
      return false;
    } finally {
      pending.current = false;
      setSaving(false);
    }
  }
  async function begin(item: SpeakingMaterial) {
    const existing =
      progress.find((p) => p.materialId === item.id) ??
      newMaterialProgress(item);
    if (await persist(beginMaterialStudy(item, existing)))
      openMaterial(item.id, true);
  }
  async function toggleFavorite(item: FavoriteExpression) {
    if (pending.current || loadFailed || !ready) return;
    pending.current = true;
    setSaving(true);
    setError("");
    try {
      if (favorites.some((f) => f.id === item.id)) {
        await removeFavoriteExpression(item.id);
        setFavorites((previous) => previous.filter((f) => f.id !== item.id));
      } else {
        await saveFavoriteExpression(item);
        setFavorites((previous) => [...previous, item]);
      }
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : "收藏保存失败，请重试。",
      );
    } finally {
      pending.current = false;
      setSaving(false);
    }
  }
  const favoriteButton = (item: FavoriteExpression) => {
    const saved = favorites.some((f) => f.id === item.id);
    return (
      <button
        className="text-button material-favorite"
        disabled={saving}
        aria-pressed={saved}
        aria-label={`${saved ? "取消收藏表达" : "收藏表达"} ${item.expression}`}
        onClick={() => void toggleFavorite(item)}
      >
        {saved ? <Check size={17} /> : <Bookmark size={17} />}
        {saved ? "已收藏" : "收藏"}
      </button>
    );
  };
  const card = (item: SpeakingMaterial) => {
    const p = progress.find((record) => record.materialId === item.id);
    return (
      <article className="white-card material-card" key={item.id}>
        <div className="material-meta">
          <span>{item.category}</span>
          <span className="tag">{sourceLabels[item.sourceType]}</span>
        </div>
        <button
          className="material-title"
          onClick={() => openMaterial(item.id)}
        >
          <h3 lang="en">{item.title}</h3>
          <p>{item.titleZh}</p>
        </button>
        <div className="material-progress-line">
          <span>
            {statusLabels[p?.status ?? "new"]} · {p?.mastery ?? 0}%
          </span>
          <span>
            {p?.masteredChunkIds.length ?? 0} / {item.chunks.length} 段
          </span>
        </div>
        <progress
          max={100}
          value={p?.mastery ?? 0}
          aria-label={`${item.title} 掌握度`}
        />
        <div className="material-card-actions">
          <button className="text-button" onClick={() => openMaterial(item.id)}>
            查看素材
            <ArrowRight size={16} />
          </button>
          <button
            className="button secondary"
            disabled={saving}
            onClick={() => void begin(item)}
          >
            {p?.status === "reviewing" || p?.status === "mastered"
              ? "开始复习"
              : p
                ? "继续背诵"
                : "开始背诵"}
          </button>
        </div>
      </article>
    );
  };
  if (!ready) return <div className="empty-state">正在读取素材学习记录…</div>;
  const alert = error && (
    <div className="global-error" role="alert">
      {error}
    </div>
  );
  if (loadFailed) return <section className="materials-page">{alert}<div className="empty-state"><h1>暂时无法读取素材学习记录</h1><p>读取成功前暂停学习操作，避免覆盖已有进度。请重试。</p><button className="button primary" onClick={() => location.reload()}>重新读取素材</button></div></section>;
  const back = (
    <button
      className="text-button material-back"
      disabled={saving}
      onClick={() => openMaterial()}
    >
      <ArrowLeft size={17} />
      返回素材积累
    </button>
  );
  if (routeId === "expressions")
    return (
      <section className="materials-page">
        {alert}
        {back}
        <div className="page-heading">
          <div>
            <div className="eyebrow">MY EXPRESSIONS</div>
            <h1>我的表达</h1>
            <p>收藏可以迁移到新题的表达，保存在本机。</p>
          </div>
        </div>
        {favorites.length ? (
          <div className="material-expression-list">
            {favorites.map((item) => (
              <article className="white-card" key={item.id}>
                <h2 lang="en">{item.expression}</h2>
                {item.meaningZh && <p>{item.meaningZh}</p>}
                {item.example && <p lang="en">{item.example}</p>}
                <div className="material-card-actions">
                  <button
                    className="text-button"
                    onClick={() => openMaterial(item.materialId ?? "general")}
                  >
                    来源：{item.sourceTitle}
                  </button>
                  {favoriteButton(item)}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Bookmark size={32} />
            <h2>还没有收藏表达</h2>
            <p>在素材或通用表达中点击收藏，就会出现在这里。</p>
          </div>
        )}
      </section>
    );
  if (routeId === "general")
    return (
      <section className="materials-page">
        {alert}
        {back}
        <div className="page-heading">
          <div>
            <div className="eyebrow">EXPRESSIONS TO REUSE</div>
            <h1>通用表达</h1>
            <p>按表达用途积累，也练习如何接住搭档的话。</p>
          </div>
        </div>
        <div className="general-expression-grid">
          {generalExpressions.map((group) => (
            <section className="white-card" key={group.id}>
              <h2>{group.category}</h2>
              {group.expressions.map((expression) => (
                <div className="general-expression" key={expression.id}>
                  <div>
                    <p lang="en">{expression.expression}</p>
                    {expression.meaningZh && (
                      <small>{expression.meaningZh}</small>
                    )}
                  </div>
                  {favoriteButton({
                    ...expression,
                    category: group.category,
                    sourceTitle: `通用表达 · ${group.category}`,
                    createdAt: new Date().toISOString(),
                  })}
                </div>
              ))}
            </section>
          ))}
        </div>
      </section>
    );
  if (routeId && !material)
    return (
      <section className="materials-page">
        {back}
        <div className="empty-state">
          <h1>没有找到这篇素材</h1>
          <p>请返回素材积累选择已有材料。</p>
        </div>
      </section>
    );

  if (material && current) {
    const chunkIndex = Math.max(
      0,
      material.chunks.findIndex((chunk) => chunk.id === current.currentChunkId),
    );
    const chunk = material.chunks[chunkIndex];
    const stage = current.currentStage;
    const setPosition = (nextStage: 1 | 2 | 3 | 4, index = chunkIndex) => {
      setReveal(false);
      void persist(
        updateMaterialPosition(current, nextStage, material.chunks[index].id),
      );
    };
    const title = (
      <div className="material-detail-heading">
        <div className="material-meta">
          <span>{material.category}</span>
          <span className="tag">{sourceLabels[material.sourceType]}</span>
          <span>
            {statusLabels[current.status]} · {current.mastery}%
          </span>
        </div>
        <h1 lang="en">{material.title}</h1>
        <p>{material.titleZh}</p>
      </div>
    );
    const structure = (
      <ol className="material-structure">
        {material.structureZh.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ol>
    );
    if (reciting)
      return (
        <section className="materials-page recitation-page">
          {alert}
          <button
            className="text-button material-back"
            disabled={saving}
            onClick={() => openMaterial(material.id)}
          >
            <ArrowLeft size={17} />
            返回素材详情
          </button>
          {title}
          <nav className="recite-stages" aria-label="背诵阶段">
            {stageLabels.map((label, index) => (
              <button
                disabled={saving}
                key={label}
                aria-current={stage === index + 1 ? "step" : undefined}
                className={stage === index + 1 ? "active" : ""}
                onClick={() => setPosition((index + 1) as 1 | 2 | 3 | 4)}
              >
                {index + 1} {label}
              </button>
            ))}
          </nav>
          <p className="material-help">
            按自己的速度练习，查看原文不会清零进度。分段完成度占 80%，整篇确认掌握后为 100%。当前掌握度 {current.mastery}%
          </p>
          {stage !== 4 ? (
            <>
              <div className="recite-chunk-tabs" aria-label="选择分段">
                {material.chunks.map((part, index) => (
                  <button
                    disabled={saving}
                    key={part.id}
                    aria-label={`第 ${index + 1} 段${current.masteredChunkIds.includes(part.id) ? " 已掌握" : ""}`}
                    aria-pressed={chunk.id === part.id}
                    onClick={() => setPosition(stage, index)}
                  >
                    {current.masteredChunkIds.includes(part.id) ? (
                      <Check size={14} />
                    ) : null}
                    {index + 1}
                  </button>
                ))}
              </div>
              <article className="white-card recite-chunk">
                <div className="section-kicker">
                  第 {chunkIndex + 1} / {material.chunks.length} 段
                </div>
                <h2>中文提示</h2>
                <p className="recite-cue">{chunk.cueZh}</p>
                {stage <= 2 && (
                  <div className="recite-keywords">
                    <h3>关键词</h3>
                    <div>
                      {chunk.keywords.map((keyword) => (
                        <span key={keyword} lang="en">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {(stage === 1 || reveal) && (
                  <div className="recite-english">
                    <h3>英文原文</h3>
                    <Paragraphs text={chunk.textEn} />
                  </div>
                )}
                {stage !== 1 && (
                  <button
                    className="button secondary"
                    onClick={() => setReveal((previous) => !previous)}
                  >
                    {reveal
                      ? "收起原文"
                      : stage === 2
                        ? "查看原文"
                        : "查看参考表达"}
                  </button>
                )}
                <div className="recite-mark">
                  <button
                    className="text-button"
                    disabled={saving}
                    aria-pressed={current.masteredChunkIds.includes(chunk.id)}
                    onClick={() =>
                      void persist(
                        markMaterialChunk(
                          material,
                          current,
                          chunk.id,
                          !current.masteredChunkIds.includes(chunk.id),
                        ),
                      )
                    }
                  >
                    <Check size={16} />
                    {current.masteredChunkIds.includes(chunk.id)
                      ? "已掌握本段 · 点击取消"
                      : "这一段已掌握"}
                  </button>
                </div>
              </article>
              <div className="recite-actions">
                <button
                  className="button secondary"
                  disabled={saving || chunkIndex === 0}
                  onClick={() => setPosition(stage, chunkIndex - 1)}
                >
                  上一段
                </button>
                <button
                  className="button primary"
                  disabled={saving}
                  onClick={async () => {
                    const next = markMaterialChunk(
                      material,
                      current,
                      chunk.id,
                      true,
                    );
                    const moved = updateMaterialPosition(
                      next,
                      stage,
                      material.chunks[
                        Math.min(chunkIndex + 1, material.chunks.length - 1)
                      ].id,
                    );
                    await persist(moved);
                  }}
                >
                  {stage === 1 ? "我熟悉了" : "本段已会"}
                </button>
                <button
                  className="button secondary"
                  disabled={saving || chunkIndex === material.chunks.length - 1}
                  onClick={() => setPosition(stage, chunkIndex + 1)}
                >
                  下一段
                </button>
              </div>
              <button
                className="text-button recite-next-stage"
                disabled={saving}
                onClick={() => setPosition((stage + 1) as 2 | 3 | 4, 0)}
              >
                进入下一阶段：{stageLabels[stage]}
                <ArrowRight size={17} />
              </button>
            </>
          ) : (
            <article className="white-card recite-structure">
              <h2>中文逻辑骨架</h2>
              {structure}
              <p className="material-help">
                根据这些要点，用自己的话复述整篇。不计时，也不评分。
              </p>
              <button
                className="button secondary"
                onClick={() => setReveal((previous) => !previous)}
              >
                {reveal ? "收起全文" : "查看全文"}
              </button>
              {reveal && (
                <div className="recite-english">
                  <Paragraphs text={material.fullAnswer} />
                </div>
              )}
              <div className="recite-rating" aria-label="整篇掌握情况">
                {(
                  [
                    ["learning", "这篇还不熟"],
                    ["reviewing", "基本会了"],
                    ["mastered", "已掌握"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    className={`button ${value === "mastered" ? "primary" : "secondary"}`}
                    aria-pressed={current.status === value}
                    key={value}
                    disabled={saving}
                    onClick={() =>
                      void persist(rateMaterial(material, current, value))
                    }
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="material-save-status" role="status">
                {saving
                  ? "正在保存…"
                  : `${statusLabels[current.status]} · 已保存在本机`}
              </div>
            </article>
          )}
        </section>
      );

    const related = questionsForMaterial(material.id);
    return (
      <section className="materials-page material-detail">
        {alert}
        {back}
        {title}
        <div className="material-study-start">
          <button
            className="button primary"
            disabled={saving}
            onClick={() => void begin(material)}
          >
            <Layers size={18} />
            {current.status === "new" ? "开始背诵" : "继续背诵"}
          </button>
          <span>
            {current.status === "new"
              ? "先理解，再分段熟悉"
              : resumeLabel(material, current)}
          </span>
        </div>
        <section className="white-card">
          <h2>可以应对哪些题</h2>
          <ul className="material-questions">
            {material.questions.map((question) => (
              <li key={question} lang="en">
                {question}
              </li>
            ))}
          </ul>
          {related.length > 0 && (
            <details className="material-related">
              <summary>查看相关题目</summary>
              <p className="material-help">
                以下是已有题库中的相关主题练习，可以迁移表达；并非完全相同的题目。
              </p>
              {related.map(({ day, question }) => (
                <button
                  className="material-related-question"
                  key={question.id}
                  onClick={() => onPractice(day, question)}
                >
                  <span>
                    Day {day.day} · {question.prompt}
                  </span>
                  <ArrowRight size={16} />
                </button>
              ))}
            </details>
          )}
        </section>
        <section className="white-card">
          <h2>中文逻辑骨架</h2>
          {structure}
        </section>
        <section className="white-card material-full-answer">
          <h2>90 秒完整准备稿</h2>
          <Paragraphs text={material.fullAnswer} />
        </section>
        <section className="white-card">
          <h2>分段背诵</h2>
          <p className="material-help">每段独立记录，无需一次背完整篇。</p>
          <div className="material-chunk-list">
            {material.chunks.map((part, index) => (
              <article key={part.id}>
                <div className="material-card-actions">
                  <h3>
                    第 {index + 1} / {material.chunks.length} 段
                  </h3>
                  <button
                    className="text-button"
                    disabled={saving}
                    aria-pressed={current.masteredChunkIds.includes(part.id)}
                    onClick={() =>
                      void persist(
                        markMaterialChunk(
                          material,
                          current,
                          part.id,
                          !current.masteredChunkIds.includes(part.id),
                        ),
                      )
                    }
                  >
                    {current.masteredChunkIds.includes(part.id)
                      ? "已掌握本段 · 点击取消"
                      : "这一段已掌握"}
                  </button>
                </div>
                <p className="recite-cue">{part.cueZh}</p>
                <div className="recite-keywords">
                  <div>
                    {part.keywords.map((keyword) => (
                      <span key={keyword} lang="en">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <Paragraphs text={part.textEn} />
              </article>
            ))}
          </div>
        </section>
        {material.shortAnswer && (
          <section className="white-card">
            <h2>45 秒短答</h2>
            <Paragraphs text={material.shortAnswer} />
          </section>
        )}
        <section className="white-card">
          <h2>可迁移表达</h2>
          {material.reusableExpressions.map((expression) => (
            <div className="general-expression" key={expression.id}>
              <div>
                <p lang="en">{expression.expression}</p>
                {expression.meaningZh && <small>{expression.meaningZh}</small>}
                {expression.example && <p lang="en">{expression.example}</p>}
              </div>
              {favoriteButton({
                ...expression,
                materialId: material.id,
                category: material.category,
                sourceTitle: material.title,
                createdAt: new Date().toISOString(),
              })}
            </div>
          ))}
        </section>
        {material.discussionExpressions?.length ? (
          <section className="white-card">
            <h2>讨论表达</h2>
            {material.discussionExpressions.map((text) => (
              <p lang="en" key={text}>
                {text}
              </p>
            ))}
          </section>
        ) : null}
      </section>
    );
  }

  const categories = [...new Set(materials.map((item) => item.category))];
  const recommendations = recommendMaterials(materials, progress, 3);
  const filtered = materials.filter(
    (item) =>
      (status === "all" ||
        (progress.find((p) => p.materialId === item.id)?.status ?? "new") ===
          status) &&
      (category === "all" || item.category === category) &&
      [
        item.title,
        item.titleZh,
        item.category,
        ...item.tags,
        ...item.questions,
        item.fullAnswer,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.trim().toLowerCase()),
  );
  const continuing = progress
    .filter((p) => p.status === "learning" || p.status === "reviewing")
    .sort((a, b) =>
      (b.lastStudiedAt ?? "").localeCompare(a.lastStudiedAt ?? ""),
    )
    .slice(0, 3);
  const stats = [
    [
      "今日已学",
      progress.filter(
        (p) =>
          p.lastStudiedAt &&
          localDate(new Date(p.lastStudiedAt)) === localDate(),
      ).length,
    ],
    ["学习中", progress.filter((p) => p.status === "learning").length],
    ["复习中", progress.filter((p) => p.status === "reviewing").length],
    ["已掌握", progress.filter((p) => p.status === "mastered").length],
    ["累计素材", materials.length],
  ];
  return (
    <section className="materials-page">
      {alert}
      <div className="page-heading">
        <div>
          <div className="eyebrow">INPUT BEFORE OUTPUT</div>
          <h1>素材积累</h1>
          <p>先输入，再输出。先把好表达装进脑子，再练真正的自由表达。</p>
        </div>
      </div>
      <div className="material-stats">
        {stats.map(([label, value]) => (
          <div className="white-card" key={label}>
            <span>{label}</span>
            <b>{value}</b>
          </div>
        ))}
      </div>
      <div className="material-shortcuts">
        <button
          className="button secondary"
          onClick={() => openMaterial("expressions")}
        >
          <Bookmark size={17} />
          我的表达 · {favorites.length}
        </button>
        <button
          className="button secondary"
          onClick={() => openMaterial("general")}
        >
          <BookOpen size={17} />
          通用表达
        </button>
      </div>
      <section className="material-home-section">
        <h2>今日背诵</h2>
        <p className="material-help">
          优先继续学习和复习；每天推荐少量素材，不要求全部完成。
        </p>
        <div className="material-grid">{recommendations.map(card)}</div>
      </section>
      <section className="material-home-section">
        <h2>继续学习</h2>
        {continuing.length ? (
          <div className="material-continue-list">
            {continuing.map((p) => {
              const item = materials.find((m) => m.id === p.materialId);
              return item ? (
                <button
                  className="white-card"
                  disabled={saving}
                  key={p.materialId}
                  onClick={() => void begin(item)}
                >
                  <span>
                    <b>{item.titleZh}</b>
                    <small>{resumeLabel(item, p)}</small>
                  </span>
                  <ArrowRight size={18} />
                </button>
              ) : null;
            })}
          </div>
        ) : (
          <p className="material-help">
            还没有学习中的素材，从今日背诵开始即可。
          </p>
        )}
      </section>
      <section className="material-home-section">
        <h2>主题分类</h2>
        <div className="material-category-grid">
          {categories.map((name) => {
            const items = materials.filter((m) => m.category === name);
            const mastered = items.filter((m) =>
              progress.some(
                (p) => p.materialId === m.id && p.status === "mastered",
              ),
            ).length;
            return (
              <button
                className={`white-card ${category === name ? "selected" : ""}`}
                key={name}
                onClick={() => {
                  setCategory(name);
                  document
                    .getElementById("all-materials")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <strong>{name}</strong>
                <span>
                  {items.length} 篇素材 · 已掌握 {mastered} / {items.length}
                </span>
                <progress
                  value={mastered}
                  max={items.length}
                  aria-label={`${name} 已掌握数量`}
                />
              </button>
            );
          })}
        </div>
      </section>
      <section className="material-home-section" id="all-materials">
        <h2>全部素材</h2>
        <div className="material-filters">
          <input
            className="search-input"
            aria-label="搜索素材"
            placeholder="搜索标题、话题或问题…"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <label>
            学习状态
            <select
              aria-label="学习状态"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="all">全部</option>
              {Object.entries(statusLabels).map(([value, label]) => (
                <option value={value} key={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label>
            素材分类
            <select
              aria-label="素材分类"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="all">全部分类</option>
              {categories.map((name) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="material-help">找到 {filtered.length} 篇素材</p>
        <div className="material-grid material-all-list">
          {filtered.map(card)}
        </div>
        {filtered.length === 0 && (
          <div className="empty-state">没有匹配的素材，请调整搜索或筛选。</div>
        )}
      </section>
    </section>
  );
}
