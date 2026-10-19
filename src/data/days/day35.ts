import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day35",
  day: 35,
  topic: "Lifelong Learning",
  topicZh: "终身学习",
  category: "Education",
  estimatedMinutes: 18,
  focus: "模拟七：完成末日综合模拟，反思长期学习、持续行动与交流中的自主性。",
  talkingPoints: [
    {
      en: "Connect a learning goal with real personal needs.",
      zh: "让学习目标联系真实个人需求。",
    },
    {
      en: "Build a routine that survives busy periods.",
      zh: "建立忙碌时仍能持续的习惯。",
    },
    {
      en: "Use reflection to decide the next learning step.",
      zh: "通过反思决定下一学习步骤。",
    },
  ],
  expressions: [
    {
      en: "stay curious",
      zh: "保持好奇",
      example: "I try to stay curious about tools I do not yet understand.",
    },
    {
      en: "a sustainable routine",
      zh: "可持续的日常安排",
      example:
        "A sustainable routine matters more than an ambitious first week.",
    },
    {
      en: "learn at my own pace",
      zh: "按自己的节奏学习",
      example: "Online materials allow me to learn at my own pace.",
    },
    {
      en: "put knowledge into practice",
      zh: "将知识付诸实践",
      example: "A small project helps me put knowledge into practice.",
    },
    {
      en: "reflect on my progress",
      zh: "反思我的进展",
      example: "I reflect on my progress before choosing the next goal.",
    },
    {
      en: "build on what I know",
      zh: "在已有知识上继续学习",
      example: "A new course should help me build on what I know.",
    },
  ],
  sentenceFrames: [
    {
      en: "I would keep learning ... because ...",
      zh: "我会持续学习……，因为……",
    },
    {
      en: "A small but regular ... would help me ...",
      zh: "少量但规律的……能帮助我……",
    },
    {
      en: "The next step is to apply ... by ...",
      zh: "下一步是通过……应用……",
    },
    {
      en: "Looking back, I can now ..., and I still need to ...",
      zh: "回顾起来，我现在能够……，而且仍需要……",
    },
  ],
  quickResponses: [
    {
      id: "d35-q1",
      type: "quick",
      prompt: "What skill would you like to keep learning after university?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "I would like to keep improving my spoken English after university because it connects several interests, including travel, reading, and meeting new people. I could learn at my own pace by choosing short recordings on subjects I enjoy. More importantly, I would arrange real conversations so the skill remains useful. Continued learning feels easier when it supports something I genuinely want to do.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["learn at my own pace"],
      },
    },
    {
      id: "d35-q2",
      type: "quick",
      prompt: "How can a busy person continue learning something new?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "A busy person can begin with a sustainable routine rather than a demanding schedule that lasts only a week. Ten focused minutes several times a week may be realistic. Choosing one clear goal also helps, such as learning to use a tool needed for work. Small opportunities to put knowledge into practice can make the learning relevant and reveal what needs attention next.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["a sustainable routine", "put knowledge into practice"],
      },
    },
  ],
  personalStatement: {
    id: "d35-statement",
    type: "statement",
    prompt:
      "Looking beyond university, explain how you would maintain a meaningful habit of lifelong learning.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [],
    reference: {
      paragraphs: [
        "Lifelong learning means remaining willing to develop when my needs or interests change. It does not mean collecting courses endlessly or feeling guilty whenever I rest. I want to stay curious while choosing goals that have a clear place in my life.",
        "My first priority would be a sustainable routine. For example, I could reserve three short sessions each week for spoken English and keep one longer conversation at the weekend. During busy periods, I would reduce the amount rather than abandon the habit completely. Materials that let me learn at my own pace would make this easier.",
        "I would also put knowledge into practice as early as possible. A real conversation, a simple spreadsheet, or a small repair can reveal whether I understand what I studied. The task should build on what I know while introducing a manageable challenge.",
        "Finally, I would regularly reflect on my progress. I could ask what has become easier, what remains difficult, and whether the goal still matters. Sometimes the right next step would be more practice; sometimes it would be a new direction. A useful learning habit should be steady enough to continue and flexible enough to change.",
      ],
      structure: [
        "提出明确观点",
        "展开理由并举例",
        "回应限制或不同情况",
        "总结个人行动",
      ],
      highlights: [
        "stay curious",
        "a sustainable routine",
        "reflect on my progress",
      ],
    },
  },
  discussion: [
    {
      id: "d35-discussion1",
      type: "discussion",
      prompt: "Choose how to continue speaking practice after a course ends.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "A new course might provide structure, but we should first identify what we still need. We could keep a weekly conversation appointment and choose unfamiliar questions to test spontaneous speaking. After each session, we can note one improvement and one difficulty. That would help us decide whether a course is necessary. Which part of speaking still feels least comfortable to you?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["spontaneous speaking"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Another course could help if it addresses a specific gap in our speaking.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Structure is useful, but a regular practice partnership may provide enough for now.",
          },
          {
            label: "不同意 · Disagree",
            text: "Enrolling automatically may add material without increasing actual speaking time.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could we review our recordings before deciding what kind of support we need?",
          },
        ],
      },
      partner:
        "Now that our course has ended, we must immediately enrol in another one or we will stop improving.",
      interaction: "自主识别学习需求，协商可持续安排并向搭档追问。",
    },
    {
      id: "d35-discussion2",
      type: "discussion",
      prompt:
        "Discuss whether a learning plan should stay unchanged for a year.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "Keeping a stable goal can support discipline, but the exact plan should respond to experience. If a task becomes too easy, we can increase the challenge; if the schedule becomes unrealistic, we can shorten sessions. I would review the plan monthly and build on what I know. That protects continuity without ignoring change. What signs would tell us that an adjustment is needed?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["build on what I know"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "A stable routine helps if it remains suitable for the learner's needs.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "The goal may stay steady, while the activities and timing can change.",
          },
          {
            label: "不同意 · Disagree",
            text: "Refusing every adjustment could preserve an ineffective plan for too long.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could a monthly review keep us accountable while allowing sensible changes?",
          },
        ],
      },
      partner:
        "A serious learner should follow the original plan for a full year without changing anything.",
      interaction: "平衡坚持与调整，给出评估节奏和调整信号。",
    },
    {
      id: "d35-discussion3",
      type: "discussion",
      prompt: "Plan a learning group for people of different ages.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "A shared textbook could provide a starting point, but different learners may have different reasons for joining. We should ask about their goals and experience, then choose a small project with several roles. Participants could contribute existing skills while learning something unfamiliar. This would help everyone stay curious and learn from each other. What project would offer useful roles without requiring the same background?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["stay curious"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Shared materials can support discussion if learners have flexible ways to use them.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Some common activities are helpful, but the pace should allow different starting points.",
          },
          {
            label: "不同意 · Disagree",
            text: "Identical pacing could leave some people confused and others unchallenged.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could participants first describe one skill they can share and one they want to learn?",
          },
        ],
      },
      partner:
        "Everyone should use the same textbook at the same speed, regardless of their experience.",
      interaction: "考虑学习者差异，提出共同项目和多样角色。",
    },
  ],
  finalQuestion: {
    id: "d35-final",
    type: "final",
    prompt:
      "What would count as success after a month of daily speaking practice?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [],
    reference: {
      paragraphs: [
        "Success would mean being better able to communicate when I do not know the question in advance. I would compare an early recording with a recent one and listen for clearer organisation, relevant examples, and more natural responses to another opinion. I would also reflect on my progress in confidence and consistency. Perfect grammar would not be my only measure. If I could express a useful idea, ask a genuine follow-up question, and recover when I lost a word, the month would have created a strong foundation for continued practice.",
      ],
      structure: ["概括个人立场", "用实例解释原因", "提出下一步行动"],
      highlights: ["reflect on my progress"],
    },
  },
  upgrades: [
    {
      basic: "Learning never stops.",
      better:
        "New responsibilities often require skills that formal education did not cover.",
      zh: "解释终身学习的真实驱动力。",
    },
    {
      basic: "I will study every day.",
      better:
        "I will reserve three short sessions each week and review the plan monthly.",
      zh: "把承诺变成可维持计划。",
    },
    {
      basic: "I learned a lot.",
      better:
        "I can now explain my opinion with an example and respond to a different view.",
      zh: "用可观察能力描述进步。",
    },
    {
      basic: "I need another course.",
      better:
        "Before enrolling, I will test whether a small project reveals a specific skill gap.",
      zh: "让课程选择基于需求。",
    },
  ],
};

export default day;
