import { useCallback, useEffect, useRef, useState } from "react";
import {
  AudioLines,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock3,
  Flame,
  Headphones,
  Info,
  Leaf,
  LockKeyhole,
  Mic,
  NotebookPen,
  Play,
  ShieldCheck,
  Sparkles,
  Sprout,
  Target,
  WifiOff,
  X,
} from "lucide-react";
import { useRegisterSW } from "virtual:pwa-register/react";
import { days } from "./data";
import {
  allQuestions,
  canComplete,
  finishProgress,
  localDate,
  newProgress,
  statistics,
  taskDone,
} from "./domain";
import {
  deleteRecording,
  loadProgress,
  loadRecordings,
  loadSettings,
  saveProgress,
  saveRecording,
  saveSettings,
} from "./storage";
import type { DailyProgress, Question, Recording, TrainingDay } from "./types";
import Recorder, { AudioPlayer } from "./Recorder";

const steps = [
  "今日输入",
  "快速回答",
  "个人陈述",
  "讨论互动",
  "最终问答",
  "参考表达",
  "回听复盘",
  "今日打卡",
];
const reflections = [
  "经常不知道说什么",
  "出现明显长停顿",
  "表达重复",
  "句子太简单",
  "观点组织不清楚",
  "个人陈述时间明显不够",
  "Discussion 不知道怎么接话",
  "今天整体比之前更顺",
];
const categories = [
  "全部主题",
  "Campus",
  "Technology",
  "Education",
  "Career",
  "Society",
  "Lifestyle",
  "Environment",
];
type View = "today" | "calendar" | "library" | "records" | "train";
const navItems = [
  { id: "today", label: "今日训练", icon: Sprout },
  { id: "calendar", label: "训练日历", icon: CalendarDays },
  { id: "library", label: "题库", icon: BookOpen },
  { id: "records", label: "我的记录", icon: Headphones },
] as const;
function readRoute(): { view: View; sessionId?: string } {
  const [page, id] = location.hash.replace(/^#\/?/, "").split("/");
  return page === "train" && id
    ? { view: "train", sessionId: decodeURIComponent(id) }
    : { view: navItems.some((n) => n.id === page) ? (page as View) : "today" };
}
const message = (cause: unknown) =>
  cause instanceof Error ? cause.message : "本地操作失败，请重试。";
function percent(day: TrainingDay, p?: DailyProgress) {
  return p
    ? Math.round(
        ((Number(p.inputViewed) +
          allQuestions(day).filter((q) => p.completedQuestionIds.includes(q.id))
            .length +
          Number(p.referencesViewed) +
          Number(p.status === "completed")) /
          (allQuestions(day).length + 3)) *
          100,
      )
    : 0;
}
function prettyDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "long",
  });
}
function PhaseBadge({ day }: { day: number }) {
  return (
    <span className="tag">
      {day <= 7
        ? "第一阶段 · 有话可说"
        : day <= 14
          ? "第二阶段 · 说得更长"
          : day <= 21
            ? "第三阶段 · 自然接话"
            : day <= 28
              ? "第四阶段 · 综合训练"
              : "第五阶段 · 模拟训练"}
    </span>
  );
}

export default function App() {
  const [route, setRoute] = useState(readRoute);
  const [progress, setProgress] = useState<DailyProgress[]>([]);
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [today, setToday] = useState(localDate());
  const [online, setOnline] = useState(navigator.onLine);
  const [install, setInstall] = useState<InstallEvent>();
  const progressRef = useRef(progress);
  const routeRef = useRef(route);
  routeRef.current = route;
  const activeRef = useRef(busy);
  activeRef.current = busy;
  const queue = useRef<Promise<unknown>>(Promise.resolve());
  const {
    needRefresh: [needRefresh],
    offlineReady: [offlineReady],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisterError: () =>
      setError("离线资源暂时未准备好，联网后重新打开即可重试。"),
  });
  useEffect(() => {
    let cancelled = false;
    Promise.all([loadProgress(), loadRecordings(), loadSettings()])
      .then(async ([p, r, s]) => {
        if (!s)
          await saveSettings({
            id: "settings",
            version: 1,
            startedOn: localDate(),
          });
        if (!cancelled) {
          progressRef.current = p;
          setProgress(p);
          setRecordings(r);
          setReady(true);
        }
      })
      .catch((cause) => {
        if (!cancelled) {
          setError(message(cause));
          setReady(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);
  useEffect(() => {
    const handle = () => {
      if (activeRef.current) {
        const old = routeRef.current;
        history.replaceState(
          null,
          "",
          old.view === "train"
            ? `#/train/${encodeURIComponent(old.sessionId || "")}`
            : `#/${old.view}`,
        );
        return;
      }
      setRoute(readRoute());
    };
    const focus = () => {
      setToday(localDate());
      setOnline(navigator.onLine);
    };
    const prompt = (event: Event) => {
      event.preventDefault();
      setInstall(event as InstallEvent);
    };
    window.addEventListener("hashchange", handle);
    window.addEventListener("focus", focus);
    window.addEventListener("online", focus);
    window.addEventListener("offline", focus);
    window.addEventListener("beforeinstallprompt", prompt);
    return () => {
      window.removeEventListener("hashchange", handle);
      window.removeEventListener("focus", focus);
      window.removeEventListener("online", focus);
      window.removeEventListener("offline", focus);
      window.removeEventListener("beforeinstallprompt", prompt);
    };
  }, []);
  const navigate = useCallback(
    (view: View, id?: string) => {
      if (busy) return;
      location.hash =
        view === "train"
          ? `/train/${encodeURIComponent(id || "")}`
          : `/${view}`;
      window.scrollTo({ top: 0, behavior: "instant" });
    },
    [busy],
  );
  function sync(p: DailyProgress) {
    const next = [...progressRef.current.filter((x) => x.id !== p.id), p];
    progressRef.current = next;
    setProgress(next);
  }
  function enqueue<T>(action: () => Promise<T>): Promise<T> {
    const next = queue.current.then(action, action);
    queue.current = next.catch(() => undefined);
    return next;
  }
  function updateSession(
    id: string,
    change: (p: DailyProgress) => DailyProgress,
  ) {
    return enqueue(async () => {
      const current = progressRef.current.find((p) => p.id === id);
      if (!current) throw new Error("找不到训练记录");
      const next = change(current);
      await saveProgress(next);
      sync(next);
      return next;
    });
  }
  async function start(
    day: TrainingDay,
    mode: "daily" | "practice" = "daily",
    step = 0,
  ) {
    try {
      const date = localDate();
      setToday(date);
      const completed = new Set(
        progressRef.current
          .filter((p) => p.mode === "daily" && p.status === "completed")
          .map((p) => p.dayId),
      );
      const freshDay =
        mode === "daily"
          ? days.find((d) => !completed.has(d.id)) || days[34]
          : day;
      let p =
        mode === "daily"
          ? progressRef.current.find(
              (x) => x.mode === "daily" && x.date === date,
            )
          : undefined;
      if (!p) {
        p = { ...newProgress(freshDay.id, date, mode), step };
        await saveProgress(p);
        sync(p);
      }
      navigate("train", p.id);
    } catch (cause) {
      setError(message(cause));
    }
  }
  const daily = progress.find((p) => p.mode === "daily" && p.date === today);
  const completedIds = new Set(
    progress
      .filter((p) => p.mode === "daily" && p.status === "completed")
      .map((p) => p.dayId),
  );
  const day =
    (daily && days.find((d) => d.id === daily.dayId)) ||
    days.find((d) => !completedIds.has(d.id)) ||
    days[34];
  const stats = statistics(progress, recordings, today);
  const session = progress.find((p) => p.id === route.sessionId);
  const trainingDay = session && days.find((d) => d.id === session.dayId);
  const attempt = (action: Promise<unknown>) => {
    void action.catch((cause) => setError(message(cause)));
  };
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <a
            className="brand"
            href="#/today"
            onClick={(event) => {
              if (busy) event.preventDefault();
            }}
          >
            <span className="brand-icon">
              <AudioLines size={24} />
            </span>
            <span>
              CET6 <strong>Speak Daily</strong>
              <small>六级口语每日练</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="主导航">
            {navItems.map((item) => (
              <button
                key={item.id}
                disabled={busy}
                className={
                  route.view === item.id ||
                  (route.view === "train" && item.id === "today")
                    ? "active"
                    : ""
                }
                onClick={() => navigate(item.id)}
              >
                <item.icon size={17} />
                {item.label}
              </button>
            ))}
          </nav>
          <div className="local-badge">
            <span className={online ? "status-dot" : "status-dot offline"} />
            {online ? "本地优先 · 安心练习" : "正在离线使用"}
          </div>
        </div>
      </header>
      <main>
        {error && (
          <div className="global-error" role="alert">
            <Info size={19} />
            <span>{error}</span>
            <button aria-label="关闭提示" onClick={() => setError("")}>
              <X size={17} />
            </button>
          </div>
        )}
        {needRefresh && !busy && (
          <div className="notice">
            新版本已准备好。当前进度已保存在本机。
            <button onClick={() => void updateServiceWorker(true)}>
              更新应用
            </button>
          </div>
        )}
        {!online && (
          <div className="offline-note">
            <WifiOff size={15} />
            离线训练中 · 录音与进度继续保存到本机
          </div>
        )}
        {!ready ? (
          <div className="empty-state">
            <AudioLines size={36} />
            <h2>正在准备你的训练空间</h2>
          </div>
        ) : !day ? (
          <div className="empty-state">课程加载失败，请刷新重试。</div>
        ) : route.view === "today" ? (
          <Home
            day={day}
            daily={daily}
            progress={progress}
            stats={stats}
            today={today}
            start={() => attempt(start(day))}
            openHistory={(id) => navigate("train", id)}
          />
        ) : route.view === "calendar" ? (
          <Calendar
            progress={progress}
            today={today}
            onOpen={(id) => navigate("train", id)}
          />
        ) : route.view === "library" ? (
          <Library onStart={(d, step) => attempt(start(d, "practice", step))} />
        ) : route.view === "records" ? (
          <Records
            progress={progress}
            recordings={recordings}
            stats={stats}
            onOpen={(id) => navigate("train", id)}
            install={install}
            onInstalled={() => setInstall(undefined)}
          />
        ) : session && trainingDay ? (
          <Training
            key={session.id}
            day={trainingDay}
            progress={session}
            recordings={recordings.filter((r) => r.sessionId === session.id)}
            busy={busy}
            onBusy={setBusy}
            onBack={() => navigate("today")}
            onUpdate={(change) => updateSession(session.id, change)}
            onSave={async (q, blob, duration) => {
              await enqueue(async () => {
                const current = progressRef.current.find(
                  (p) => p.id === session.id,
                )!;
                const recording: Recording = {
                  id: `${session.id}:${q.id}`,
                  sessionId: session.id,
                  date: session.date,
                  dayId: trainingDay.id,
                  questionId: q.id,
                  taskType: q.type,
                  createdAt: new Date().toISOString(),
                  duration,
                  mimeType: blob.type,
                  audio: blob,
                };
                const next = await saveRecording(recording, current);
                sync(next);
                setRecordings((list) => [
                  ...list.filter((r) => r.id !== recording.id),
                  recording,
                ]);
              });
            }}
            onDelete={async (recording) => {
              await enqueue(async () => {
                const current = progressRef.current.find(
                  (p) => p.id === session.id,
                )!;
                const next = await deleteRecording(recording, current);
                sync(next);
                setRecordings((list) =>
                  list.filter((r) => r.id !== recording.id),
                );
              });
            }}
          />
        ) : (
          <div className="empty-state">
            <h2>没有找到这次训练</h2>
            <p>记录保存在开始训练时使用的浏览器中。</p>
            <button
              className="button primary"
              onClick={() => navigate("today")}
            >
              返回今日训练
            </button>
          </div>
        )}
      </main>
      <footer className="site-footer">
        <span>
          <Leaf size={14} />
          每天一小步，让表达更自然。
        </span>
        <span>
          <ShieldCheck size={14} />
          所有录音与学习记录仅保存在本机
        </span>
        {offlineReady && <span className="offline-ready">离线已就绪</span>}
      </footer>
      <nav className="mobile-nav" aria-label="底部导航">
        {navItems.map((item) => (
          <button
            key={item.id}
            disabled={busy}
            className={
              route.view === item.id ||
              (route.view === "train" && item.id === "today")
                ? "active"
                : ""
            }
            onClick={() => navigate(item.id)}
          >
            <item.icon size={21} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
interface InstallEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: string }>;
}
interface Stats {
  completed: number;
  streak: number;
  longest: number;
  recordings: number;
  statements: number;
  discussions: number;
}
function Home({
  day,
  daily,
  progress,
  stats,
  today,
  start,
  openHistory,
}: {
  day: TrainingDay;
  daily?: DailyProgress;
  progress: DailyProgress[];
  stats: Stats;
  today: string;
  start: () => void;
  openHistory: (id: string) => void;
}) {
  const latest = [...progress].sort((a, b) => b.date.localeCompare(a.date))[0];
  const completed = daily?.status === "completed";
  return (
    <>
      <div className="page-heading">
        <div>
          <div className="eyebrow">A LITTLE PRACTICE, EVERY DAY</div>
          <h1>
            把想法，<span>说出来。</span>
            <Sprout className="heading-leaf" size={32} />
          </h1>
          <p>每天 18 分钟，积累一点更自然的英语表达。</p>
        </div>
        <div className="date-label">
          <CalendarDays size={17} />
          {prettyDate(today)}
        </div>
      </div>
      <div className="home-top">
        <section className="hero-card">
          <div className="hero-topline">
            <PhaseBadge day={day.day} />
            <span className="day-counter">
              DAY <b>{String(day.day).padStart(2, "0")}</b>
              <span>/ 35</span>
            </span>
          </div>
          <div className="hero-content">
            <div className="hero-copy">
              <div className="overline">TODAY'S TOPIC</div>
              <h2>{day.topic}</h2>
              <p>{day.topicZh}</p>
              <div className="hero-meta">
                <span>
                  <Clock3 size={16} />
                  {day.estimatedMinutes} min
                </span>
                <i />
                <span>{day.category}</span>
                <i />
                <span>7 项口语任务</span>
              </div>
            </div>
            <div className="speaking-art" aria-hidden="true">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <span className="art-star">✦</span>
              <div className="art-bubble">Hello, a better me.</div>
              <div className="art-mic">
                <Mic size={65} strokeWidth={1.3} />
              </div>
              <div className="art-bars">
                {[12, 24, 39, 25, 15, 30, 44, 27, 14].map((h, i) => (
                  <i key={i} style={{ height: h }} />
                ))}
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="progress-title">
              <span>
                {completed ? "今日训练已完成，做得很好。" : "今日训练进度"}{" "}
                <b>{percent(day, daily)}%</b>
              </span>
              <span>{daily?.completedQuestionIds.length || 0} / 7 项录音</span>
            </div>
            <div className="progress-track">
              <i style={{ width: `${percent(day, daily)}%` }} />
            </div>
            <button className="button primary hero-button" onClick={start}>
              {completed ? (
                <CheckCircle2 size={19} />
              ) : (
                <Play size={18} fill="currentColor" />
              )}
              {completed
                ? "回顾今日训练"
                : daily
                  ? "继续今日训练"
                  : "开始今日训练"}
              <ArrowRight size={18} />
            </button>
            <div className="hero-footnote">
              <Mic size={13} />
              找一个安静的地方，给自己一点开口的时间
            </div>
          </div>
        </section>
        <aside className="goal-card">
          <div className="goal-icon">
            <Target size={23} />
          </div>
          <div className="overline">TODAY'S FOCUS</div>
          <h3>
            先有想法，
            <br />
            再有好表达。
          </h3>
          <p>{day.focus}</p>
          <div className="goal-rule" />
          <div className="goal-step">
            <span>01</span>
            <div>
              先自己说<small>给真实的想法一次机会</small>
            </div>
          </div>
          <div className="goal-step">
            <span>02</span>
            <div>
              再学表达<small>完成录音，解锁参考回答</small>
            </div>
          </div>
          <div className="goal-step">
            <span>03</span>
            <div>
              回听与复盘<small>发现一个可以进步的地方</small>
            </div>
          </div>
          <div className="goal-note">
            <Sparkles size={14} />
            不必完美，开口就是进步。
          </div>
        </aside>
      </div>
      <div className="habit-strip">
        <div>
          <span className="stat-icon peach">
            <Flame size={21} />
          </span>
          <span>
            <b>
              {stats.streak}
              <small>天</small>
            </b>
            <label>当前连续打卡</label>
          </span>
        </div>
        <div>
          <span className="stat-icon sage">
            <CheckCircle2 size={21} />
          </span>
          <span>
            <b>
              {stats.completed}
              <small>/ 35 天</small>
            </b>
            <label>累计完成训练</label>
          </span>
        </div>
        <div className="last-training">
          <span className="stat-icon lavender">
            <AudioLines size={21} />
          </span>
          <span>
            <b>
              {latest
                ? latest.status === "completed"
                  ? "已完成"
                  : "进行中"
                : "准备好开始"}
            </b>
            <label>
              {latest
                ? `最近训练 · ${latest.date} ${latest.mode === "practice" ? "· 自由练习" : ""}`
                : "今天是新的起点"}
            </label>
          </span>
          {latest && (
            <button
              aria-label="查看最近训练"
              className="icon-button"
              onClick={() => openHistory(latest.id)}
            >
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>
      <section className="journey-section">
        <div className="section-heading">
          <h2>今天，跟着这条路线练</h2>
          <span>小步完成，循序渐进</span>
        </div>
        <div className="journey-grid">
          {[
            {
              n: "01",
              icon: BookOpen,
              title: "先输入一点",
              text: "角度、表达与句型支架",
              time: "3 min",
            },
            {
              n: "02",
              icon: Mic,
              title: "独立开口练",
              text: "快答 · 陈述 · 讨论 · 问答",
              time: "9 min",
            },
            {
              n: "03",
              icon: NotebookPen,
              title: "学表达，做复盘",
              text: "参考回答、回听与今日打卡",
              time: "6 min",
            },
          ].map((item) => (
            <div className="journey-item" key={item.n}>
              <span className="journey-number">{item.n}</span>
              <item.icon size={22} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="journey-time">
                {item.time}
                <ArrowRight size={15} />
              </span>
            </div>
          ))}
        </div>
      </section>
      <div className="home-note">
        <ShieldCheck size={16} />
        <span>专注练习，没有分数焦虑。你的录音只属于你。</span>
      </div>
    </>
  );
}

interface TrainingProps {
  day: TrainingDay;
  progress: DailyProgress;
  recordings: Recording[];
  busy: boolean;
  onBusy: (value: boolean) => void;
  onBack: () => void;
  onUpdate: (
    change: (p: DailyProgress) => DailyProgress,
  ) => Promise<DailyProgress>;
  onSave: (q: Question, blob: Blob, duration: number) => Promise<void>;
  onDelete: (r: Recording) => Promise<void>;
}
function Training({
  day,
  progress,
  recordings,
  busy,
  onBusy,
  onBack,
  onUpdate,
  onSave,
  onDelete,
}: TrainingProps) {
  const [step, setStep] = useState(
    progress.status === "completed" ? 7 : progress.step,
  );
  const [selected, setSelected] = useState(0);
  const [error, setError] = useState("");
  const [note, setNote] = useState(progress.reflection.note);
  const [checks, setChecks] = useState(progress.reflection.checks);
  const [saving, setSaving] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const questions =
    step === 1
      ? day.quickResponses
      : step === 2
        ? [day.personalStatement]
        : step === 3
          ? day.discussion
          : step === 4
            ? [day.finalQuestion]
            : [];
  const question = questions[Math.min(selected, questions.length - 1)];
  const complete = taskDone(allQuestions(day), progress);
  const historical = progress.status === "completed";
  const report = (promise: Promise<unknown>) => {
    void promise.catch((cause) => setError(message(cause)));
  };
  function go(next: number) {
    if (busy || saving) return;
    setStep(next);
    setSelected(0);
    setError("");
    window.scrollTo({ top: 0, behavior: "instant" });
    report(onUpdate((p) => ({ ...p, step: next })));
  }
  function stepCompleted(index: number) {
    return index === 0
      ? progress.inputViewed
      : index === 1
        ? taskDone(day.quickResponses, progress)
        : index === 2
          ? taskDone([day.personalStatement], progress)
          : index === 3
            ? taskDone(day.discussion, progress)
            : index === 4
              ? taskDone([day.finalQuestion], progress)
              : index === 5
                ? progress.referencesViewed
                : index === 6
                  ? Boolean(progress.reflection.updatedAt) &&
                    progress.referencesViewed
                  : historical;
  }
  async function nextInput() {
    setSaving(true);
    try {
      await onUpdate((p) => ({ ...p, inputViewed: true, step: 1 }));
      setStep(1);
    } catch (cause) {
      setError(message(cause));
    } finally {
      setSaving(false);
    }
  }
  async function finish() {
    setSaving(true);
    try {
      await onUpdate((p) =>
        finishProgress(day, {
          ...p,
          reflection: {
            ...p.reflection,
            note,
            updatedAt: new Date().toISOString(),
          },
        }),
      );
      setStep(7);
    } catch (cause) {
      setError(message(cause));
    } finally {
      setSaving(false);
    }
  }
  const currentRecording =
    question && recordings.find((r) => r.questionId === question.id);
  return (
    <>
      <div className="training-top">
        <button className="text-button" disabled={busy} onClick={onBack}>
          <ArrowLeft size={17} />
          返回今日训练
        </button>
        <span>
          {progress.mode === "practice"
            ? "自由练习 · 不计入正式打卡"
            : `${prettyDate(progress.date)} · 正式训练`}
          <span className="tag">DAY {String(day.day).padStart(2, "0")}</span>
        </span>
      </div>
      <div className="training-layout">
        <aside className="training-sidebar">
          <div className="overline">YOUR DAILY PRACTICE</div>
          <h2>{day.topicZh}</h2>
          <div className="small-progress">
            已完成 {progress.completedQuestionIds.length} / 7 项录音
          </div>
          <ol>
            {steps.map((label, i) => (
              <li key={label}>
                <button
                  disabled={busy || saving}
                  className={step === i ? "active" : ""}
                  onClick={() => go(i)}
                >
                  {stepCompleted(i) ? (
                    <CheckCircle2 size={19} />
                  ) : (
                    <span className="step-dot">{i + 1}</span>
                  )}
                  <span>
                    {label}
                    <small>
                      {
                        [
                          "Input",
                          "Quick Response",
                          "Personal Statement",
                          "Discussion Practice",
                          "Final Question",
                          "Learn expressions",
                          "Listen & reflect",
                          "Daily check-in",
                        ][i]
                      }
                    </small>
                  </span>
                  {i === 5 && !complete && <LockKeyhole size={13} />}
                </button>
              </li>
            ))}
          </ol>
          <div className="sidebar-privacy">
            <ShieldCheck size={15} />
            本机保存 · 随时继续
          </div>
        </aside>
        <section className="training-main">
          {error && (
            <div className="error" role="alert">
              {error}
            </div>
          )}
          {step === 0 ? (
            <>
              <div className="section-kicker">01 / INPUT</div>
              <h1>给表达，一点灵感。</h1>
              <p className="intro">先花三分钟熟悉主题，然后用自己的话说。</p>
              <div className="white-card input-topic">
                <PhaseBadge day={day.day} />
                <h2>{day.topic}</h2>
                <p>{day.topicZh}</p>
              </div>
              {day.day <= 28 && (
                <div className="white-card">
                  <h3>
                    <Target size={18} />
                    {day.day <= 14 ? "三个可讲角度" : "少量思路关键词"}
                  </h3>
                  <div className="talking-points">
                    {day.talkingPoints
                      .slice(0, day.day <= 14 ? 3 : 2)
                      .map((point, i) => (
                        <div key={point.en}>
                          <span>0{i + 1}</span>
                          <strong>{point.en}</strong>
                          <small>{point.zh}</small>
                        </div>
                      ))}
                  </div>
                </div>
              )}
              {day.day >= 29 && (
                <div className="notice">
                  模拟阶段：不提前提供内容思路。请独立组织观点，训练后再学习参考表达。
                </div>
              )}
              <div className="white-card">
                <h3>
                  <Sparkles size={18} />
                  今日表达{" "}
                  <span className="muted">
                    {day.expressions.length} 个可以说出口的表达
                  </span>
                </h3>
                <div className="expression-list">
                  {day.expressions.map((e) => (
                    <div key={e.en}>
                      <strong>{e.en}</strong>
                      <span>{e.zh}</span>
                      <p>{e.example}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="white-card">
                <h3>今日句型支架</h3>
                <div className="frames">
                  {day.sentenceFrames.map((frame) => (
                    <div key={frame.en}>
                      <b>{frame.en}</b>
                      <span>{frame.zh}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="button primary next-button"
                disabled={saving}
                onClick={() => void nextInput()}
              >
                输入完成，开始快速回答
                <ArrowRight size={18} />
              </button>
            </>
          ) : step >= 1 && step <= 4 && question ? (
            <>
              <div className="section-kicker">
                0{step + 1} /{" "}
                {
                  [
                    "",
                    "QUICK RESPONSE",
                    "PERSONAL STATEMENT",
                    "DISCUSSION PRACTICE",
                    "FINAL QUESTION",
                  ][step]
                }
              </div>
              <h1>
                {steps[step]}
                <span className="title-caption">
                  {step === 2
                    ? "练习把一个想法说完整"
                    : step === 3
                      ? "听懂观点，也能接住话"
                      : "先想一想，再清楚地表达"}
                </span>
              </h1>
              {questions.length > 1 && (
                <div className="question-tabs">
                  {questions.map((q, i) => (
                    <button
                      key={q.id}
                      disabled={busy}
                      className={selected === i ? "active" : ""}
                      onClick={() => setSelected(i)}
                    >
                      {progress.completedQuestionIds.includes(q.id) ? (
                        <CheckCircle2 size={15} />
                      ) : (
                        <Circle size={15} />
                      )}{" "}
                      {step === 3 ? "回合" : "问题"} {i + 1}
                    </button>
                  ))}
                </div>
              )}
              <div className="white-card question-card">
                <div className="question-meta">
                  <span>
                    {question.type === "discussion"
                      ? question.interaction
                      : question.type === "statement"
                        ? "90 秒个人陈述"
                        : "YOUR QUESTION"}
                  </span>
                  <span>
                    <Clock3 size={14} />
                    {question.prepareSeconds}s 准备 / {question.speakingSeconds}
                    s 回答
                  </span>
                </div>
                <h2>{question.prompt}</h2>
                {question.partner && (
                  <div className="partner">
                    <span className="partner-avatar">P</span>
                    <div>
                      <small>模拟搭档 · 预设观点</small>
                      <p>“{question.partner}”</p>
                    </div>
                  </div>
                )}
                {question.hints.length > 0 && (
                  <details className="hints" open={day.day <= 14}>
                    <summary>
                      思路提示{" "}
                      <span>
                        {day.day <= 14
                          ? "观点 → 理由 → 例子 → 补充 → 总结"
                          : "少量关键词"}
                      </span>
                    </summary>
                    <ul>
                      {question.hints.map((hint) => (
                        <li key={hint}>{hint}</li>
                      ))}
                    </ul>
                  </details>
                )}
                <Recorder
                  key={question.id}
                  question={question}
                  recording={currentRecording}
                  onSave={(blob, duration) => onSave(question, blob, duration)}
                  onDelete={() =>
                    currentRecording
                      ? onDelete(currentRecording)
                      : Promise.resolve()
                  }
                  onBusy={onBusy}
                />
              </div>
              {progress.completedQuestionIds.includes(question.id) ? (
                <details className="white-card unlocked-reference">
                  <summary>
                    <BookOpen size={17} />
                    本题参考表达已解锁<span>先回想自己的回答，再展开学习</span>
                  </summary>
                  <Reference question={question} />
                </details>
              ) : (
                <div className="locked-note">
                  <LockKeyhole size={16} />
                  完成本题首次有效录音后，解锁对应参考表达
                </div>
              )}
              <div className="training-actions">
                <button
                  className="button secondary"
                  disabled={busy || saving}
                  onClick={() => go(step - 1)}
                >
                  <ChevronLeft size={16} />
                  上一步
                </button>
                <button
                  className="button primary"
                  disabled={busy || saving || !taskDone(questions, progress)}
                  onClick={() => go(step + 1)}
                >
                  {step === 4 ? "学习今日参考表达" : "本项完成，继续"}
                  <ArrowRight size={17} />
                </button>
              </div>
            </>
          ) : step === 5 ? (
            <>
              <div className="section-kicker">06 / LEARN EXPRESSIONS</div>
              <h1>同一个想法，可以这样说。</h1>
              <p className="intro">
                参考表达提供一种思路。关注组织方式，也找到你能用上的句子。
              </p>
              <div className="reference-list">
                {allQuestions(day).map((q, i) => (
                  <details
                    key={q.id}
                    className={`white-card reference-card ${progress.completedQuestionIds.includes(q.id) ? "" : "is-locked"}`}
                    open={referenceId === q.id}
                    onToggle={(event) => {
                      if (event.currentTarget.open) setReferenceId(q.id);
                    }}
                  >
                    <summary>
                      {progress.completedQuestionIds.includes(q.id) ? (
                        <BookOpen size={19} />
                      ) : (
                        <LockKeyhole size={19} />
                      )}
                      <span>
                        <small>
                          {q.type === "quick"
                            ? "Quick Response"
                            : q.type === "statement"
                              ? "Personal Statement"
                              : q.type === "discussion"
                                ? "Discussion"
                                : "Final Question"}{" "}
                          · {String(i + 1).padStart(2, "0")}
                        </small>
                        {q.prompt}
                      </span>
                      <ChevronRight size={17} />
                    </summary>
                    {progress.completedQuestionIds.includes(q.id) ? (
                      <Reference question={q} />
                    ) : (
                      <p className="muted">
                        请先完成本题录音，再来学习对应表达。
                      </p>
                    )}
                  </details>
                ))}
              </div>
              {complete && (
                <>
                  <div className="white-card">
                    <h3>
                      <Sparkles size={18} />
                      值得带走的表达
                    </h3>
                    <div className="expression-list">
                      {day.expressions.map((e) => (
                        <div key={e.en}>
                          <strong>{e.en}</strong>
                          <span>{e.zh}</span>
                          <p>{e.example}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="white-card">
                    <h3>可以这样说得更自然</h3>
                    <div className="upgrades">
                      {day.upgrades.map((u) => (
                        <div key={u.basic}>
                          <span>{u.basic}</span>
                          <ArrowDown size={16} />
                          <strong>{u.better}</strong>
                          <small>{u.zh}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
              <div className="training-actions">
                <button className="button secondary" onClick={() => go(4)}>
                  <ChevronLeft size={16} />
                  返回训练
                </button>
                <button
                  className="button primary"
                  disabled={!complete || saving}
                  onClick={() => {
                    setSaving(true);
                    report(
                      onUpdate((p) => ({
                        ...p,
                        referencesViewed: true,
                        step: 6,
                      }))
                        .then(() => setStep(6))
                        .finally(() => setSaving(false)),
                    );
                  }}
                >
                  已阅读，进入回听复盘
                  <ArrowRight size={17} />
                </button>
              </div>
            </>
          ) : step === 6 ? (
            <>
              <div className="section-kicker">07 / LISTEN & REFLECT</div>
              <h1>听一听，今天的自己。</h1>
              <p className="intro">
                不用给自己打分，找到一个值得保留的进步和一个可改进的地方。
              </p>
              <div className="white-card">
                <h3>
                  <Headphones size={19} />
                  今日录音 <span className="muted">{recordings.length} 条</span>
                </h3>
                {recordings.length ? (
                  allQuestions(day).map((q) => {
                    const r = recordings.find(
                      (item) => item.questionId === q.id,
                    );
                    return r ? (
                      <div className="review-recording" key={r.id}>
                        <h4>
                          {q.type === "statement"
                            ? "个人陈述"
                            : q.type === "discussion"
                              ? "讨论互动"
                              : q.type === "quick"
                                ? "快速回答"
                                : "最终问答"}
                          <span>{q.prompt}</span>
                        </h4>
                        <AudioPlayer recording={r} />
                      </div>
                    ) : null;
                  })
                ) : (
                  <p className="muted">
                    还没有录音。先回到训练，完成一次自己的表达。
                  </p>
                )}
              </div>
              <div className="white-card">
                <h3>
                  <NotebookPen size={18} />
                  今天是否出现…
                </h3>
                <div className="reflection-checks">
                  {reflections.map((text) => (
                    <label key={text}>
                      <input
                        type="checkbox"
                        checked={checks.includes(text)}
                        onChange={(event) => {
                          const checked = event.target.checked;
                          setChecks(previous => checked ? [...new Set([...previous,text])] : previous.filter(item => item !== text));
                          report(
                            onUpdate((p) => ({
                              ...p,
                              reflection: {
                                ...p.reflection,
                                checks: checked
                                  ? [...new Set([...p.reflection.checks, text])]
                                  : p.reflection.checks.filter(
                                      (c) => c !== text,
                                    ),
                                updatedAt: new Date().toISOString(),
                              },
                            })),
                          );
                        }}
                      />
                      {text}
                    </label>
                  ))}
                </div>
                <label className="note-label" htmlFor="reflection-note">
                  今日一句复盘 <span>可选</span>
                </label>
                <textarea
                  id="reflection-note"
                  placeholder="例如：今天讲独立生活时，举自己的例子更顺了。"
                  value={note}
                  maxLength={600}
                  onChange={(event) => setNote(event.target.value)}
                  onBlur={() =>
                    report(
                      onUpdate((p) => ({
                        ...p,
                        reflection: {
                          ...p.reflection,
                          note,
                          updatedAt: new Date().toISOString(),
                        },
                      })),
                    )
                  }
                />
                <small className="muted">
                  复盘保存在本机，之后可以在「我的记录」查看。
                </small>
              </div>
              <div className="training-actions">
                <button className="button secondary" onClick={() => go(5)}>
                  再看看参考表达
                </button>
                <button
                  className="button primary"
                  disabled={!complete || !progress.referencesViewed || saving}
                  onClick={() => {
                    report(
                      onUpdate((p) => ({
                        ...p,
                        step: 7,
                        reflection: {
                          ...p.reflection,
                          note,
                          updatedAt: new Date().toISOString(),
                        },
                      })).then(() => setStep(7)),
                    );
                  }}
                >
                  保存复盘，前往打卡
                  <ArrowRight size={17} />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="checkin-card white-card">
                <div className="checkin-icon">
                  {historical ? (
                    <CheckCircle2 size={42} />
                  ) : (
                    <Sprout size={42} />
                  )}
                </div>
                <div className="section-kicker">08 / DAILY CHECK-IN</div>
                <h1>
                  {historical
                    ? "今天的表达，已被好好记录。"
                    : progress.mode === "practice"
                      ? "为自己多练习了一次。"
                      : "完成一小步，积累大改变。"}
                </h1>
                <p>
                  {historical
                    ? `${progress.date} · Day ${day.day} · ${day.topicZh}`
                    : "从独立开口到学习表达，每一步都算数。"}
                </p>
                <div className="checkin-requirements">
                  {[
                    { label: "完成今日输入", done: progress.inputViewed },
                    {
                      label: "2 道快速回答",
                      done: taskDone(day.quickResponses, progress),
                    },
                    {
                      label: "90 秒个人陈述",
                      done: taskDone([day.personalStatement], progress),
                    },
                    {
                      label: "3 回合讨论互动",
                      done: taskDone(day.discussion, progress),
                    },
                    {
                      label: "最终独立问答",
                      done: taskDone([day.finalQuestion], progress),
                    },
                    {
                      label: "查看今日参考表达",
                      done: progress.referencesViewed,
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      {item.done ? (
                        <CheckCircle2 size={18} />
                      ) : (
                        <Circle size={18} />
                      )}
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
                {historical ? (
                  <>
                    <span className="completed-pill">
                      <Check size={16} />
                      今日已打卡
                    </span>
                    <button className="button secondary" onClick={() => go(6)}>
                      回听与复盘
                    </button>
                  </>
                ) : progress.mode === "practice" ? (
                  <>
                    <div className="notice">
                      自由练习保存在「我的记录」，不会改变正式打卡历史。
                    </div>
                    <button className="button primary" onClick={onBack}>
                      结束本次练习，返回首页
                    </button>
                  </>
                ) : (
                  <button
                    className="button primary"
                    disabled={!canComplete(day, progress) || saving}
                    onClick={() => void finish()}
                  >
                    <CheckCircle2 size={19} />
                    {saving ? "正在保存…" : "完成今日训练"}
                  </button>
                )}
                {!historical && !complete && (
                  <button
                    className="text-button"
                    onClick={() => {
                      const index = allQuestions(day).find(
                        (q) => !progress.completedQuestionIds.includes(q.id),
                      );
                      go(
                        index?.type === "quick"
                          ? 1
                          : index?.type === "statement"
                            ? 2
                            : index?.type === "discussion"
                              ? 3
                              : 4,
                      );
                    }}
                  >
                    继续未完成的训练
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
}

function Reference({ question }: { question: Question }) {
  const ref = question.reference;
  return (
    <div className="reference-content">
      <div className="reference-disclaimer">
        参考表达 · 一种可学习的回答方式
      </div>
      <div className="answer-paragraphs">
        {ref.paragraphs.map((text, i) => (
          <p key={i}>{highlight(text, ref.highlights)}</p>
        ))}
      </div>
      <div className="structure-card">
        <h4>这段话怎么组织</h4>
        <ol>
          {ref.structure.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
      {ref.alternatives && (
        <div className="discussion-alternatives">
          <h4>换一种立场，也能接住话</h4>
          {ref.alternatives.map((item) => (
            <div key={item.label}>
              <b>{item.label}</b>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      )}
      <div className="reference-highlights">
        <span>值得留意</span>
        {ref.highlights.map((h) => (
          <mark key={h}>{h}</mark>
        ))}
      </div>
    </div>
  );
}
function highlight(text: string, terms: string[]) {
  const escaped = terms
    .filter(Boolean)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (!escaped.length) return text;
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  return text
    .split(regex)
    .map((part, i) =>
      terms.some((term) => term.toLowerCase() === part.toLowerCase()) ? (
        <mark key={i}>{part}</mark>
      ) : (
        part
      ),
    );
}

function Calendar({
  progress,
  today,
  onOpen,
}: {
  progress: DailyProgress[];
  today: string;
  onOpen: (id: string) => void;
}) {
  const [month, setMonth] = useState(
    () => new Date(`${today.slice(0, 7)}-01T12:00:00`),
  );
  const [selected, setSelected] = useState(today);
  const year = month.getFullYear(),
    m = month.getMonth();
  const total = new Date(year, m + 1, 0).getDate();
  const offset = (new Date(year, m, 1).getDay() + 6) % 7;
  const selectedProgress = progress.find(
    (p) => p.mode === "daily" && p.date === selected,
  );
  const day = days.find((d) => d.id === selectedProgress?.dayId);
  const count = progress.filter(
    (p) =>
      p.mode === "daily" &&
      p.status === "completed" &&
      p.date.startsWith(`${year}-${String(m + 1).padStart(2, "0")}`),
  ).length;
  return (
    <>
      <div className="page-heading">
        <div>
          <div className="eyebrow">A RECORD OF YOUR SMALL STEPS</div>
          <h1>每一天，都有回响。</h1>
          <p>点亮的是练习的日子，也是更敢开口的自己。</p>
        </div>
      </div>
      <div className="calendar-layout">
        <section className="white-card calendar-card">
          <div className="calendar-heading">
            <button
              className="icon-button"
              aria-label="上个月"
              onClick={() => setMonth(new Date(year, m - 1, 1, 12))}
            >
              <ChevronLeft size={22} />
            </button>
            <h2>
              {year} 年 {m + 1} 月
            </h2>
            <button
              className="icon-button"
              aria-label="下个月"
              onClick={() => setMonth(new Date(year, m + 1, 1, 12))}
            >
              <ChevronRight size={22} />
            </button>
          </div>
          <div className="calendar-grid weekday">
            {["一", "二", "三", "四", "五", "六", "日"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="calendar-grid">
            {Array.from({ length: offset }, (_, i) => (
              <span key={`empty-${i}`} />
            ))}
            {Array.from({ length: total }, (_, i) => {
              const date = `${year}-${String(m + 1).padStart(2, "0")}-${String(i + 1).padStart(2, "0")}`;
              const done = progress.some(
                (p) =>
                  p.mode === "daily" &&
                  p.date === date &&
                  p.status === "completed",
              );
              return (
                <button
                  key={date}
                  aria-label={`${date}${done ? " 已完成" : date === today ? " 今天" : date > today ? " 未来日期" : " 未完成"}`}
                  aria-pressed={date === selected}
                  disabled={date > today}
                  className={`${done ? "done" : ""} ${date === today ? "is-today" : ""} ${date === selected ? "selected" : ""}`}
                  onClick={() => setSelected(date)}
                >
                  <span>{i + 1}</span>
                  {done ? <Check size={13} /> : date === today ? <i /> : null}
                </button>
              );
            })}
          </div>
          <div className="calendar-legend">
            <span>
              <i className="legend-done" />
              已完成
            </span>
            <span>
              <i className="legend-today" />
              今天
            </span>
            <span>
              <i />
              未完成
            </span>
            <span className="muted">本月完成 {count} 天</span>
          </div>
        </section>
        <aside className="white-card calendar-detail">
          <span className="overline">YOUR PRACTICE</span>
          <h2>{prettyDate(selected)}</h2>
          {selectedProgress && day ? (
            <>
              <span className="tag">
                {selectedProgress.status === "completed" ? "已完成" : "进行中"}{" "}
                · DAY {day.day}
              </span>
              <h3>{day.topic}</h3>
              <p>{day.topicZh}</p>
              <div className="detail-line">
                <Mic size={17} />
                {selectedProgress.completedQuestionIds.length} / 7 项录音已完成
              </div>
              {selectedProgress.reflection.note && (
                <blockquote>{selectedProgress.reflection.note}</blockquote>
              )}
              <button
                className="button primary"
                onClick={() => onOpen(selectedProgress.id)}
              >
                查看训练记录
                <ArrowRight size={17} />
              </button>
            </>
          ) : (
            <div className="calendar-empty">
              <Sprout size={40} />
              <p>
                {selected === today
                  ? "今天的练习，正等着你开始。"
                  : "这一天没有训练记录。"}
              </p>
              <small>按自己的节奏继续，随时都能重新出发。</small>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}

function Library({
  onStart,
}: {
  onStart: (day: TrainingDay, step: number) => void;
}) {
  const [category, setCategory] = useState("全部主题");
  const [type, setType] = useState("Full Practice");
  const [search, setSearch] = useState("");
  const filtered = days.filter(
    (day) =>
      (category === "全部主题" || day.category === category) &&
      `${day.topic} ${day.topicZh}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  const index =
    type === "Quick Response"
      ? 1
      : type === "Personal Statement"
        ? 2
        : type === "Discussion"
          ? 3
          : 0;
  return (
    <>
      <div className="page-heading">
        <div>
          <div className="eyebrow">35 DAYS, MORE WAYS TO SPEAK</div>
          <h1>再练一次，多一点从容。</h1>
          <p>按主题或任务自由练习。这里的练习会独立保存，不影响正式打卡。</p>
        </div>
        <span className="tag">35 套完整训练</span>
      </div>
      <div className="library-toolbar">
        <div className="filter-tabs">
          {[
            "Full Practice",
            "Quick Response",
            "Personal Statement",
            "Discussion",
          ].map((t) => (
            <button
              key={t}
              className={type === t ? "active" : ""}
              onClick={() => setType(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <input
          className="search-input"
          aria-label="搜索主题"
          placeholder="搜索中英文主题…"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="category-filters">
        {categories.map((c) => (
          <button
            className={c === category ? "active" : ""}
            key={c}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="library-grid">
        {filtered.map((day) => (
          <article className="white-card library-card" key={day.id}>
            <div className="library-card-top">
              <span>DAY {String(day.day).padStart(2, "0")}</span>
              <span className="tag">{day.category}</span>
            </div>
            <h2>{day.topic}</h2>
            <p>{day.topicZh}</p>
            <small>{day.focus}</small>
            <div className="library-card-bottom">
              <span>
                <Clock3 size={14} />
                {type === "Full Practice"
                  ? `${day.estimatedMinutes} min`
                  : type === "Personal Statement"
                    ? "60s + 90s"
                    : type === "Discussion"
                      ? "3 回合"
                      : "2 道快答"}
              </span>
              <button
                className="text-button"
                onClick={() => onStart(day, index)}
              >
                开始练习
                <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          <BookOpen size={36} />
          <h2>没有找到这个主题</h2>
          <button
            className="text-button"
            onClick={() => {
              setSearch("");
              setCategory("全部主题");
            }}
          >
            清除筛选
          </button>
        </div>
      )}
    </>
  );
}

function Records({
  progress,
  recordings,
  stats,
  onOpen,
  install,
  onInstalled,
}: {
  progress: DailyProgress[];
  recordings: Recording[];
  stats: Stats;
  onOpen: (id: string) => void;
  install?: InstallEvent;
  onInstalled: () => void;
}) {
  const [tab, setTab] = useState("最近训练");
  const [info, setInfo] = useState("");
  const recent = [...progress].sort(
    (a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id),
  );
  return (
    <>
      <div className="page-heading">
        <div>
          <div className="eyebrow">LISTEN TO YOUR PROGRESS</div>
          <h1>听见自己的进步。</h1>
          <p>每一次开口都留下痕迹。回头看看，已经走了多远。</p>
        </div>
      </div>
      <div className="records-stats">
        {[
          { value: stats.completed, label: "已完成天数", unit: "天" },
          { value: stats.streak, label: "当前连续", unit: "天" },
          { value: stats.longest, label: "最长连续", unit: "天" },
          { value: stats.recordings, label: "总录音次数", unit: "次" },
          { value: stats.statements, label: "个人陈述录音", unit: "次" },
          { value: stats.discussions, label: "讨论回应录音", unit: "次" },
        ].map((s) => (
          <div className="white-card" key={s.label}>
            <span>{s.label}</span>
            <b>
              {s.value}
              <small>{s.unit}</small>
            </b>
          </div>
        ))}
      </div>
      <div className="records-layout">
        <section>
          <div className="filter-tabs records-tabs">
            {["最近训练", "复盘记录", "全部录音"].map((t) => (
              <button
                key={t}
                className={tab === t ? "active" : ""}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
          {tab === "全部录音" ? (
            <div className="white-card">
              {recordings.length ? (
                [...recordings]
                  .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                  .map((r) => {
                    const day = days.find((d) => d.id === r.dayId);
                    const q =
                      day &&
                      allQuestions(day).find((q) => q.id === r.questionId);
                    return (
                      <div className="review-recording" key={r.id}>
                        <small className="muted">
                          {r.date} · DAY {day?.day} · {r.taskType}
                        </small>
                        <h4>{q?.prompt}</h4>
                        <AudioPlayer recording={r} />
                        <button
                          className="text-button"
                          onClick={() => onOpen(r.sessionId)}
                        >
                          进入训练管理录音
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    );
                  })
              ) : (
                <EmptyRecords />
              )}
            </div>
          ) : (
            <div className="history-list">
              {(tab === "复盘记录"
                ? recent.filter(
                    (p) => p.reflection.note || p.reflection.checks.length,
                  )
                : recent
              ).map((p) => {
                const day = days.find((d) => d.id === p.dayId);
                return (
                  <article className="white-card history-card" key={p.id}>
                    <span className="history-day">
                      {String(day?.day || 0).padStart(2, "0")}
                      <small>DAY</small>
                    </span>
                    <div className="history-copy">
                      <small>
                        {p.date} ·{" "}
                        {p.mode === "practice"
                          ? "自由练习"
                          : p.status === "completed"
                            ? "已打卡"
                            : "进行中"}
                      </small>
                      <h3>{day?.topicZh}</h3>
                      {tab === "复盘记录" ? (
                        <>
                          <p>
                            {p.reflection.note || "今天的练习已留下复盘标记。"}
                          </p>
                          <div className="reflection-tags">
                            {p.reflection.checks.map((c) => (
                              <span key={c}>{c}</span>
                            ))}
                          </div>
                        </>
                      ) : (
                        <p>
                          {p.completedQuestionIds.length} / 7 项录音 ·{" "}
                          {day?.topic}
                        </p>
                      )}
                    </div>
                    <button
                      className="icon-button"
                      aria-label={`查看 ${p.date} Day ${day?.day} 记录`}
                      onClick={() => onOpen(p.id)}
                    >
                      <ArrowRight size={19} />
                    </button>
                  </article>
                );
              })}
              {(tab === "最近训练"
                ? recent.length
                : recent.filter(
                    (p) => p.reflection.note || p.reflection.checks.length,
                  ).length) === 0 && (
                <div className="white-card">
                  <EmptyRecords />
                </div>
              )}
            </div>
          )}
        </section>
        <aside className="white-card records-info">
          <div className="goal-icon">
            <ShieldCheck size={24} />
          </div>
          <h3>属于你的练习空间</h3>
          <p>
            录音、进度和复盘都在此设备的浏览器里。更换设备、清除网站数据或使用隐私模式，可能导致记录丢失。
          </p>
          <p>统计包含每次成功录音。重录会覆盖音频文件，累计练习次数会保留。</p>
          <button
            className="button secondary"
            onClick={() => {
              if (navigator.storage?.persist)
                void navigator.storage
                  .persist()
                  .then((granted) =>
                    setInfo(
                      granted
                        ? "浏览器已允许持久存储。仍建议避免清除网站数据。"
                        : "浏览器暂未授予持久存储。请保留此网站数据并经常回听。",
                    ),
                  )
                  .catch(() => setInfo("此浏览器暂时无法申请持久存储。"));
              else setInfo("此浏览器不支持申请持久存储。");
            }}
          >
            申请保留本地数据
          </button>
          {install ? (
            <button
              className="button primary"
              onClick={() =>
                void install
                  .prompt()
                  .then(() => install.userChoice)
                  .then(() => onInstalled())
              }
            >
              添加到主屏幕
            </button>
          ) : (
            <div className="install-help">
              <BookOpen size={16} />
              <span>
                安装提示：在手机浏览器菜单中选择「添加到主屏幕」。iPhone 请使用
                Safari 的分享菜单。
              </span>
            </div>
          )}
          {info && (
            <p className="notice" role="status">
              {info}
            </p>
          )}
        </aside>
      </div>
    </>
  );
}
function EmptyRecords() {
  return (
    <div className="empty-state">
      <Headphones size={36} />
      <h3>从第一次开口开始</h3>
      <p>完成训练后，录音和复盘会出现在这里。</p>
    </div>
  );
}
