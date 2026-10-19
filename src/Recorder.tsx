import { useEffect, useRef, useState } from "react";
import { Mic, RotateCcw, ShieldCheck, Square, Trash2 } from "lucide-react";
import type { Question, Recording } from "./types";
import type { TimerPhase } from "./domain";
import { timerState } from "./domain";

export function AudioPlayer({ recording }: { recording: Recording }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const objectUrl = URL.createObjectURL(recording.audio);
    setUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [recording]);
  return (
    <div className="audio-player">
      <audio controls preload="metadata" src={url} aria-label="播放本题录音" />
      <span>{Math.round(recording.duration)} 秒 · 保存在本机</span>
    </div>
  );
}
interface Props {
  question: Question;
  recording?: Recording;
  onSave: (blob: Blob, duration: number) => Promise<void>;
  onDelete: () => Promise<void>;
  onBusy: (busy: boolean) => void;
}
export default function Recorder({
  question,
  recording,
  onSave,
  onDelete,
  onBusy,
}: Props) {
  const [phase, setPhase] = useState<TimerPhase>("idle");
  const [remaining, setRemaining] = useState(question.prepareSeconds);
  const [error, setError] = useState("");
  const [requesting, setRequesting] = useState(false);
  const controller = useRef<{
    stream?: MediaStream;
    recorder?: MediaRecorder;
    interval?: number;
    cancelled: boolean;
    started: number;
    mounted: boolean;
    attempt: number;
  }>({ cancelled: false, started: 0, mounted: true, attempt: 0 });
  const saveRef = useRef(onSave);
  saveRef.current = onSave;
  const busyRef = useRef(onBusy);
  busyRef.current = onBusy;
  const active =
    requesting ||
    phase === "prepare" ||
    phase === "speaking" ||
    phase === "saving";
  useEffect(() => {
    busyRef.current(active);
    return () => busyRef.current(false);
  }, [active]);
  useEffect(() => {
    const state = controller.current;
    state.mounted = true;
    return () => {
      state.mounted = false;
      state.cancelled = true;
      window.clearInterval(state.interval);
      if (state.recorder?.state === "recording") state.recorder.stop();
      state.stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);
  useEffect(() => {
    if (!active) return;
    const prevent = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };
    window.addEventListener("beforeunload", prevent);
    return () => window.removeEventListener("beforeunload", prevent);
  }, [active]);
  function stopResources() {
    const state = controller.current;
    window.clearInterval(state.interval);
    state.stream?.getTracks().forEach((track) => track.stop());
  }
  function cancel() {
    if (!window.confirm("取消本次录音？已有保存的录音会保留。")) return;
    const state = controller.current;
    state.cancelled = true;
    state.attempt++;
    window.clearInterval(state.interval);
    if (state.recorder?.state === "recording") state.recorder.stop();
    stopResources();
    setPhase("idle");
    setRemaining(question.prepareSeconds);
    setRequesting(false);
  }
  async function start() {
    if (
      recording &&
      !window.confirm("重新录制会在新录音保存成功后覆盖当前录音，是否继续？")
    )
      return;
    setError("");
    if (!window.isSecureContext) {
      setError("录音需要 HTTPS 或 localhost，请使用安全地址打开。");
      return;
    }
    if (
      !navigator.mediaDevices?.getUserMedia ||
      typeof MediaRecorder === "undefined"
    ) {
      setError(
        "此浏览器不支持录音。请使用支持 MediaRecorder 的新版 Chrome、Edge 或 Safari。",
      );
      return;
    }
    const state = controller.current;
    const attempt = ++state.attempt;
    state.cancelled = false;
    setRequesting(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (!state.mounted || state.cancelled || attempt !== state.attempt) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }
      state.stream = stream;
      setRequesting(false);
      const mime = [
        "audio/webm;codecs=opus",
        "audio/mp4",
        "audio/webm",
        "audio/ogg;codecs=opus",
      ].find((type) => MediaRecorder.isTypeSupported(type));
      const recorder = new MediaRecorder(
        stream,
        mime ? { mimeType: mime } : undefined,
      );
      state.recorder = recorder;
      const chunks: Blob[] = [];
      recorder.ondataavailable = (event) => {
        if (event.data.size) chunks.push(event.data);
      };
      recorder.onerror = () => {
        if (attempt !== state.attempt) return;
        state.cancelled = true;
        stopResources();
        if (state.mounted) {
          setError("录音中断，请检查麦克风后重试。");
          setPhase("idle");
        }
      };
      recorder.onstop = () => {
        if (attempt !== state.attempt) return;
        stopResources();
        if (state.cancelled || !state.mounted) return;
        const duration = (Date.now() - state.started) / 1000;
        const blob = new Blob(chunks, {
          type: recorder.mimeType || mime || "audio/webm",
        });
        setPhase("saving");
        saveRef
          .current(blob, duration)
          .then(() => {
            if (state.mounted) setPhase("finished");
          })
          .catch((cause: unknown) => {
            if (state.mounted) {
              setError(
                cause instanceof Error
                  ? cause.message
                  : "录音保存失败，请重试。",
              );
              setPhase("idle");
            }
          });
      };
      const prepareEnd = Date.now() + question.prepareSeconds * 1000;
      const speakingEnd = prepareEnd + question.speakingSeconds * 1000;
      setPhase("prepare");
      setRemaining(question.prepareSeconds);
      const tick = () => {
        if (attempt !== state.attempt || !state.mounted) return;
        const timer = timerState(Date.now(), prepareEnd, speakingEnd);
        if (timer.phase === "prepare") {
          setRemaining(timer.remaining);
          return;
        }
        if (timer.phase === "speaking") {
          if (recorder.state === "inactive" && Date.now() - prepareEnd > 1500) {
            state.cancelled = true;
            stopResources();
            setError(
              "浏览器暂停了准备阶段，录音未能准时开始。请保持页面在前台并重新录制。",
            );
            setPhase("idle");
            return;
          }
          if (recorder.state === "inactive") {
            state.started = Date.now();
            try {
              recorder.start(250);
            } catch {
              state.cancelled = true;
              stopResources();
              setError("麦克风启动失败，请重试。");
              setPhase("idle");
              return;
            }
            setPhase("speaking");
          }
          setRemaining(timer.remaining);
          return;
        }
        window.clearInterval(state.interval);
        setRemaining(0);
        if (recorder.state === "recording") recorder.stop();
        else {
          stopResources();
          setError("浏览器暂停了训练。请保持页面在前台并重新录制。");
          setPhase("idle");
        }
      };
      state.interval = window.setInterval(tick, 100);
      tick();
    } catch (cause) {
      if (attempt !== state.attempt || !state.mounted) return;
      stopResources();
      setRequesting(false);
      setPhase("idle");
      const name = cause instanceof DOMException ? cause.name : "";
      setError(
        name === "NotAllowedError"
          ? "需要麦克风权限才能完成录音训练。请在浏览器地址栏允许麦克风后重试。"
          : name === "NotFoundError"
            ? "未找到麦克风，请连接设备后重试。"
            : "麦克风暂时无法使用，请检查设备或关闭其他占用麦克风的应用。",
      );
    }
  }
  return (
    <div className={`recorder ${phase === "speaking" ? "is-speaking" : ""}`}>
      <div className="timer-label">
        {requesting
          ? "等待麦克风授权"
          : phase === "prepare"
            ? "PREPARE · 准备中"
            : phase === "speaking"
              ? "SPEAKING · 正在录音"
              : phase === "saving"
                ? "SAVING · 正在保存"
                : recording
                  ? "FINISHED · 已完成"
                  : "READY · 准备开口"}
      </div>
      <div className="timer" aria-live="off">
        {String(
          Math.floor((active ? remaining : question.speakingSeconds) / 60),
        ).padStart(2, "0")}
        <span>:</span>
        {String((active ? remaining : question.speakingSeconds) % 60).padStart(
          2,
          "0",
        )}
      </div>
      <div className="timer-wave" aria-hidden="true">
        {Array.from({ length: 25 }, (_, i) => (
          <i
            key={i}
            style={{
              height: `${10 + Math.sin(i * 2.4) ** 2 * 22}px`,
              animationDelay: `${i * 0.04}s`,
            }}
          />
        ))}
      </div>
      <p className="muted">
        {phase === "prepare"
          ? "想好观点、理由和一个例子。准备结束后自动录音。"
          : phase === "speaking"
            ? "把注意力放在表达上，计时结束后会自动保存。"
            : `准备 ${question.prepareSeconds} 秒 · 回答 ${question.speakingSeconds} 秒 · 自动保存`}
      </p>
      {error && (
        <div className="error" role="alert">
          {error}
        </div>
      )}
      {active ? (
        <button
          className="button secondary"
          disabled={phase === "saving"}
          onClick={cancel}
        >
          <Square size={16} />
          取消本次训练
        </button>
      ) : (
        <button className="button primary" onClick={() => void start()}>
          {recording ? <RotateCcw size={18} /> : <Mic size={18} />}{" "}
          {recording
            ? "重新录制"
            : question.type === "statement"
              ? "开始准备"
              : "开始回应"}
        </button>
      )}
      {!active && recording && (
        <div className="saved-audio">
          <div className="saved-label">
            <ShieldCheck size={16} />
            录音已保存{" "}
            <button
              className="icon-button"
              aria-label="删除本题录音"
              onClick={() => {
                if (
                  window.confirm(
                    "删除这条录音？未打卡的训练需要重新录音才能完成。",
                  )
                )
                  void onDelete().catch((cause) =>
                    setError(
                      cause instanceof Error ? cause.message : "删除失败",
                    ),
                  );
              }}
            >
              <Trash2 size={16} />
            </button>
          </div>
          <AudioPlayer recording={recording} />
        </div>
      )}
    </div>
  );
}
