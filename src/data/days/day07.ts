import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day07",
  day: 7,
  topic: "Part-time Jobs",
  topicZh: "兼职工作",
  category: "Career",
  estimatedMinutes: 18,
  focus: "练习在收益、成本和现实条件之间作出有依据的判断。",
  talkingPoints: [
    {
      en: "Gain practical experience",
      zh: "说明兼职如何培养沟通或责任感",
    },
    {
      en: "Protect academic commitments",
      zh: "考虑工时、通勤和考试期安排",
    },
    {
      en: "Choose safe and suitable work",
      zh: "检查工作内容、报酬与可靠信息",
    },
  ],
  expressions: [
    {
      en: "gain hands-on experience",
      zh: "获得实践经验",
      example: "A campus job can help students gain hands-on experience.",
    },
    {
      en: "manage a limited budget",
      zh: "管理有限预算",
      example: "Part-time income helps me manage a limited budget.",
    },
    {
      en: "work flexible hours",
      zh: "弹性工作",
      example: "I would prefer to work flexible hours during term time.",
    },
    {
      en: "take on responsibility",
      zh: "承担责任",
      example: "Serving customers taught me to take on responsibility.",
    },
    {
      en: "interfere with my studies",
      zh: "影响我的学业",
      example: "A late shift could interfere with my studies.",
    },
    {
      en: "check the terms carefully",
      zh: "仔细核对条件",
      example: "I would check the terms carefully before accepting a job.",
    },
  ],
  sentenceFrames: [
    {
      en: "The main benefit of a part-time job would be ...",
      zh: "兼职的主要好处会是……",
    },
    {
      en: "I would accept the position only if ...",
      zh: "只有在……情况下，我才会接受这份工作",
    },
    {
      en: "Although the income is useful, ...",
      zh: "虽然收入有帮助，……",
    },
    {
      en: "Before deciding, I would find out ...",
      zh: "决定之前，我会了解……",
    },
  ],
  quickResponses: [
    {
      id: "d07-q1",
      type: "quick",
      prompt: "Would you like to have a part-time job while studying?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "先明确态度与条件",
        "挑一种适合学生的工作",
        "说一个收益和一个限制",
      ],
      reference: {
        paragraphs: [
          "I would like a small campus job if the hours were predictable. Working in the library, for example, could help me earn some money and become more organized. I would also learn how to answer questions patiently and take on responsibility. However, I would limit the hours during term time. A job should add useful experience to my education without leaving me too tired to study.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: [
          "hours were predictable",
          "useful experience",
          "limit the hours",
        ],
      },
    },
    {
      id: "d07-q2",
      type: "quick",
      prompt: "What skill could students learn from part-time work?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选择沟通、守时或解决问题",
        "描述一项真实任务",
        "解释它如何用于以后的学习或工作",
      ],
      reference: {
        paragraphs: [
          "Students can learn to communicate clearly with people whose needs are different from their own. In a café, for instance, a customer may ask a confusing question or complain about an order. The student worker has to listen, check the details, and respond politely. That practice can build patience and confidence, which are also useful in group projects and future professional situations. It is a way to gain hands-on experience.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: [
          "communicate clearly",
          "check the details",
          "respond politely",
        ],
      },
    },
  ],
  personalStatement: {
    id: "d07-statement",
    type: "statement",
    prompt:
      "Discuss the advantages and possible disadvantages of part-time work for university students.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [
      "先给出有条件的总体判断",
      "分别展开经验、收入、时间成本",
      "用一份具体兼职贯穿",
      "结尾提出选择标准",
    ],
    reference: {
      paragraphs: [
        "Part-time work can be valuable for university students when the job is suitable and the workload remains manageable. It offers a chance to experience responsibilities outside the classroom, but it should be chosen carefully rather than treated as an automatic requirement.",
        "One advantage is practical learning. A student working at a campus information desk must arrive on time, listen to visitors, and explain directions clearly. These tasks develop habits that are difficult to practise through lectures alone. The income can also cover small daily expenses and help students understand the effort behind earning money. It can help them manage a limited budget.",
        "The main disadvantage is the cost in time and energy. Late shifts or a long journey may reduce study time and rest. Students may also feel uncomfortable refusing extra hours. Before accepting a position, I would ask about the duties, payment, schedule, and arrangements during exams. I would start with a limited commitment and review its effects after a few weeks. In my view, a good part-time job should support a student's development without making essential academic work unmanageable.",
      ],
      structure: [
        "开头提出个人观点",
        "分层解释原因与具体做法",
        "用经历或场景支撑观点",
        "总结收获并回扣主题",
      ],
      highlights: [
        "workload remains manageable",
        "practical learning",
        "time and energy",
        "limited commitment",
      ],
    },
  },
  discussion: [
    {
      id: "d07-discussion1",
      type: "discussion",
      prompt:
        "Discuss whether every university student should have a part-time job.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "先认可实践经验",
        "考虑课程、经济和身体条件不同",
        "提出替代学习机会",
      ],
      reference: {
        paragraphs: [
          "Part-time work can teach useful skills, but I would not make it a requirement for everyone. Some students already have demanding courses or family responsibilities. Others can gain practical experience through a short volunteer project or an internship during a holiday. The important thing is meaningful responsibility, not one particular type of work. What alternatives could the university offer to students with limited time?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "family responsibilities",
          "practical experience",
          "meaningful responsibility",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that work experience can complement classroom learning.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but students need different routes to gain that experience.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that a student without a part-time job is less responsible.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could short holiday placements offer a more flexible alternative?",
          },
        ],
      },
      partner:
        "All university students should have a part-time job before graduation.",
      interaction: "反对一刀切的要求，同时认可工作经验的价值。",
    },
    {
      id: "d07-discussion2",
      type: "discussion",
      prompt: "Discuss how students should compare two job offers.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "从报酬拓展到工时和可靠性",
        "举高时薪但远距离的情况",
        "提出接受之前需要问的问题",
      ],
      reference: {
        paragraphs: [
          "Higher pay is attractive, but the hourly rate does not show the whole picture. A distant job may involve expensive transport and leave little time for rest. I would compare the total time required, the clarity of the duties, and the reliability of payment. The chance to work flexible hours during exams could matter more than a small pay difference. Which questions should we ask before making a decision?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "whole picture",
          "total time required",
          "reliability of payment",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that fair pay is an important part of a suitable job.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but travel and scheduling can change its real value.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree with choosing solely by the advertised hourly rate.",
          },
          {
            label: "Follow-up · 追问",
            text: "Would you ask whether exam periods allow reduced working hours?",
          },
        ],
      },
      partner:
        "When choosing a part-time job, students should simply take the highest-paying offer.",
      interaction: "用实际成本比较工作，提出核实条件的具体问题。",
    },
    {
      id: "d07-discussion3",
      type: "discussion",
      prompt: "Discuss what to do when work begins to affect studies.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "先判断影响是否持续",
        "提出与主管沟通或减少工时",
        "保留重新选择的可能",
      ],
      reference: {
        paragraphs: [
          "I would first identify the specific problem rather than immediately blame the job. Perhaps one late shift conflicts with an early class, or the commute is longer than expected. The student could discuss changing the schedule or reducing hours. If the problem continues, leaving the position may be reasonable. I would not let paid work interfere with my studies. How could the student explain this concern professionally?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "specific problem",
          "reducing hours",
          "explain this concern",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that students should act when their academic work begins to suffer.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but a schedule adjustment may solve the problem before quitting.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that accepting a job means students can never reduce their hours.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could the student propose an alternative shift when speaking with the manager?",
          },
        ],
      },
      partner:
        "If a part-time job affects study, the student should quit immediately.",
      interaction: "提出先诊断再调整的顺序，并练习职业化沟通。",
    },
  ],
  finalQuestion: {
    id: "d07-final",
    type: "final",
    prompt:
      "What is the most important question to ask before accepting a part-time job?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [
      "选一个关键问题但解释它包含什么",
      "给大学生时间安排的情境",
      "结尾说明如何据此决定",
    ],
    reference: {
      paragraphs: [
        "I would first ask what a normal working week actually looks like. This question covers the hours, the duties, and whether the schedule changes at short notice. A job advertisement may sound flexible, but the real expectations could be difficult to combine with classes. I would check the terms carefully, explain my timetable and ask about exam periods before agreeing. Clear information helps both sides avoid disappointment. If the employer cannot describe the arrangements clearly, I would continue looking for a position that fits my responsibilities as a student.",
      ],
      structure: ["明确回应问题", "比较或解释两个要点", "用具体行动形成结论"],
      highlights: [
        "normal working week",
        "real expectations",
        "Clear information",
      ],
    },
  },
  upgrades: [
    {
      basic: "Jobs teach us things.",
      better:
        "Dealing with real customers can improve communication and patience.",
      zh: "具体说明工作任务与能力的联系",
    },
    {
      basic: "I want more money.",
      better: "A small income would help cover my daily transport costs.",
      zh: "说明收入的实际用途",
    },
    {
      basic: "Study comes first.",
      better: "I would limit my working hours to protect essential study time.",
      zh: "把原则变成安排",
    },
    {
      basic: "This job looks good.",
      better:
        "The role offers clear duties, reliable pay, and manageable hours.",
      zh: "用条件解释判断",
    },
  ],
};

export default day;
