import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day26",
  day: 26,
  topic: "Work-Life Balance",
  topicZh: "工作与生活平衡",
  category: "Career",
  estimatedMinutes: 18,
  focus: "综合检验：明确时间边界，在合作任务中协调效率、休息与公平。",
  talkingPoints: [
    {
      en: "Distinguish urgent tasks from constant availability.",
      zh: "区分紧急任务与随时在线。",
    },
    {
      en: "Protect rest while meeting shared responsibilities.",
      zh: "兼顾休息与共同责任。",
    },
    {
      en: "Judge progress by outcomes rather than hours.",
      zh: "按成果而非工时判断进展。",
    },
  ],
  expressions: [
    {
      en: "set clear boundaries",
      zh: "设定清晰界限",
      example: "We need to set clear boundaries for evening messages.",
    },
    {
      en: "switch off",
      zh: "暂时放下工作",
      example: "A short walk helps me switch off after studying.",
    },
    {
      en: "a realistic workload",
      zh: "合理的工作量",
      example: "A realistic workload leaves time for unexpected problems.",
    },
    {
      en: "share the workload",
      zh: "分担工作量",
      example: "We should share the workload before the deadline approaches.",
    },
    {
      en: "protect my downtime",
      zh: "保护休息时间",
      example: "I protect my downtime by checking messages at agreed times.",
    },
    {
      en: "sustainable pace",
      zh: "可持续的节奏",
      example:
        "A sustainable pace matters more than a single productive night.",
    },
  ],
  sentenceFrames: [
    {
      en: "Being available ... does not necessarily mean ...",
      zh: "……随时在线并不一定意味着……",
    },
    {
      en: "I can finish ... provided that ...",
      zh: "只要……，我就能完成……",
    },
    {
      en: "Could we agree on ... so that ...?",
      zh: "我们能否商定……，以便……？",
    },
    {
      en: "If the workload grows, we should ...",
      zh: "如果工作量增加，我们应该……",
    },
  ],
  quickResponses: [
    {
      id: "d26-q1",
      type: "quick",
      prompt: "How do you relax after a demanding day?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: ["routine", "effect"],
      reference: {
        paragraphs: [
          "After a demanding day, I usually take a walk without listening to study materials. Watching the street and moving at an easy pace helps me switch off. If I go directly from work to social media, I often remain mentally busy. A short walk gives me a clearer break, and afterwards I can decide whether I need company or an early night.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["switch off"],
      },
    },
    {
      id: "d26-q2",
      type: "quick",
      prompt: "Is working late a reliable sign of dedication?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: ["results", "pace"],
      reference: {
        paragraphs: [
          "Working late sometimes shows dedication, especially when a team faces an unusual problem. However, it is not a reliable measure on its own. Someone may finish excellent work during normal hours because they planned carefully. If late nights become routine, we should examine the workload and priorities. I respect people who meet their responsibilities while keeping a sustainable pace over time.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["sustainable pace"],
      },
    },
  ],
  personalStatement: {
    id: "d26-statement",
    type: "statement",
    prompt:
      "Explain what work-life balance means to you and how you would maintain it in your first full-time job.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: ["priorities", "boundaries"],
    reference: {
      paragraphs: [
        "For me, work-life balance means having enough energy for both my responsibilities and the people and activities that matter outside work. It does not require dividing every day into equal parts. A busy week may be reasonable, provided that it does not become the permanent pattern.",
        "In my first job, I would start by understanding what good performance actually involves. If I know the main priorities and deadlines, I can plan a realistic workload instead of treating every message as equally urgent. I would also ask how the team handles evening communication, because assumptions can create pressure that nobody intended.",
        "Outside work, I would protect my downtime by reserving regular time for exercise and conversations with family. These plans would remind me to leave space for recovery. When an exceptional deadline required extra hours, I would discuss which other tasks could move and when I could take time back.",
        "Of course, a new employee cannot control every decision. Still, communicating early is better than silently becoming exhausted. I hope to build a reputation for dependable work, sensible judgment, and the ability to maintain a sustainable pace.",
      ],
      structure: [
        "提出明确观点",
        "展开理由并举例",
        "回应限制或不同情况",
        "总结个人行动",
      ],
      highlights: ["a realistic workload", "sustainable pace"],
    },
  },
  discussion: [
    {
      id: "d26-discussion1",
      type: "discussion",
      prompt: "Plan your team communication rules before a busy project.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["window", "urgent"],
      reference: {
        paragraphs: [
          "A quick response can help in an emergency, but expecting one every evening may keep everyone tense. Could we set clear boundaries by choosing a normal response window and one urgent contact method? We could post routine updates before dinner and read them the next morning. That protects rest without leaving the project unsupported. What situations would you classify as genuinely urgent?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["set clear boundaries"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Immediate replies make sense during an agreed emergency period.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Fast replies help, but routine messages can wait until working hours.",
          },
          {
            label: "不同意 · Disagree",
            text: "Constant availability would make this project difficult to sustain.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could we list emergencies before choosing a response rule?",
          },
        ],
      },
      partner:
        "Everyone should reply to project messages immediately, even at night.",
      interaction: "承认紧急需求，再协商常规与紧急沟通方式。",
    },
    {
      id: "d26-discussion2",
      type: "discussion",
      prompt: "Discuss what to do when a teammate seems overloaded.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["capacity", "tasks"],
      reference: {
        paragraphs: [
          "Taking over everything might solve tonight's problem, but it could hide a workload issue. I suggest asking our teammate which tasks are taking longest, then checking everyone's remaining capacity. We can share the workload and tell the supervisor if the deadline is unrealistic. This approach supports the person while protecting the team. Could you help review the task list with me?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["share the workload"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "I agree that immediate help is needed; let us offer a specific task first.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "We can cover urgent work, but we should also address the cause.",
          },
          {
            label: "不同意 · Disagree",
            text: "Doing everything silently may create another exhausted teammate tomorrow.",
          },
          {
            label: "追问 · Follow-up",
            text: "Do we know whether the difficulty is time, skills, or unclear instructions?",
          },
        ],
      },
      partner:
        "Our teammate looks exhausted. Let us quietly complete all their remaining work.",
      interaction: "体现关心，同时提出透明、公平的任务调整。",
    },
    {
      id: "d26-discussion3",
      type: "discussion",
      prompt: "Decide whether to add a weekend meeting to improve a project.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["purpose", "choice"],
      reference: {
        paragraphs: [
          "A weekend meeting could be useful if we have a specific decision to make, but an open discussion may take too much personal time. Let us first collect comments in one document and identify the unresolved issue. If a meeting is still necessary, we can keep it short and agree on the time together. What decision cannot wait until Monday?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["personal time"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "A short meeting may be worthwhile before this particular deadline.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Saturday could work once, but a recurring meeting needs stronger justification.",
          },
          {
            label: "不同意 · Disagree",
            text: "I would protect weekends and improve our weekday planning first.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could written updates solve the same problem with less disruption?",
          },
        ],
      },
      partner: "We should meet every Saturday until the project is finished.",
      interaction: "检验会议目的，提出替代方案并收束讨论。",
    },
  ],
  finalQuestion: {
    id: "d26-final",
    type: "final",
    prompt:
      "What advice would you give a friend who feels guilty whenever they rest?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: ["recovery", "conversation"],
    reference: {
      paragraphs: [
        "I would tell my friend that rest supports the responsibilities they care about. Constant effort can reduce concentration, so another hour at the desk may achieve less than a good break. I would suggest starting with one planned activity, such as a walk after dinner, and treating it as part of the schedule. They could then notice whether they return with more energy. I would also ask what creates the guilt, because unrealistic expectations may need a conversation with a manager, teacher, or teammate.",
      ],
      structure: ["概括个人立场", "用实例解释原因", "提出下一步行动"],
      highlights: ["unrealistic expectations"],
    },
  },
  upgrades: [
    {
      basic: "I am very busy.",
      better:
        "My deadlines overlap this week, so I need to renegotiate one task.",
      zh: "将忙碌具体化并提出应对。",
    },
    {
      basic: "Rest is important.",
      better:
        "Regular breaks help me return to difficult work with better concentration.",
      zh: "解释休息与表现的联系。",
    },
    {
      basic: "Do not message me late.",
      better: "Could we reserve late messages for genuinely urgent issues?",
      zh: "以合作语气设定边界。",
    },
    {
      basic: "We must work hard.",
      better:
        "We should maintain a sustainable pace and review our progress daily.",
      zh: "把努力转化为可持续行动。",
    },
  ],
};

export default day;
