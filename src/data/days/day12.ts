import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day12",
  day: 12,
  topic: "Teamwork",
  topicZh: "团队合作",
  category: "Education",
  estimatedMinutes: 18,
  focus: "把团队问题拆成目标、分工、沟通与反馈，用具体项目完整展开90秒。",
  talkingPoints: [
    {
      en: "Agree on a shared goal",
      zh: "先明确成果标准与截止时间",
    },
    {
      en: "Match roles to real capacity",
      zh: "兼顾成员能力、负担与成长机会",
    },
    {
      en: "Address problems early",
      zh: "用事实和及时交流处理分歧",
    },
  ],
  expressions: [
    {
      en: "clarify expectations",
      zh: "明确期望",
      example: "We clarify expectations before dividing the project.",
    },
    {
      en: "divide responsibilities",
      zh: "分配责任",
      example: "The group meets to divide responsibilities fairly.",
    },
    {
      en: "keep everyone informed",
      zh: "让每个人及时了解情况",
      example: "A shared document helps keep everyone informed.",
    },
    {
      en: "raise a concern",
      zh: "提出顾虑",
      example: "I would raise a concern before a small delay became serious.",
    },
    {
      en: "build on someone’s idea",
      zh: "在他人的想法上继续完善",
      example:
        "We can build on someone’s idea instead of replacing it immediately.",
    },
    {
      en: "reach a workable agreement",
      zh: "达成可行共识",
      example: "The team needs to reach a workable agreement about deadlines.",
    },
  ],
  sentenceFrames: [
    {
      en: "A team works well when its members ...",
      zh: "当成员……时，团队运转良好",
    },
    {
      en: "Before dividing the work, we should ...",
      zh: "在分工之前，我们应该……",
    },
    {
      en: "If one member falls behind, I would ...",
      zh: "如果一位成员进度落后，我会……",
    },
    {
      en: "We could combine ... with ... to ...",
      zh: "我们可以把……与……结合，以便……",
    },
  ],
  quickResponses: [
    {
      id: "d12-q1",
      type: "quick",
      prompt: "What role do you usually take in a group project?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选组织、研究、设计或展示",
        "描述你实际会做的事",
        "补充想提高的能力",
      ],
      reference: {
        paragraphs: [
          "I often take the role of organizing the group's ideas. I like turning a long discussion into a clear outline and checking that each part connects with our main goal. I also remind members about the next meeting. However, I do not want to make every decision myself. I am learning to ask quieter members for their views before suggesting a final structure.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: ["clear outline", "main goal", "quieter members"],
      },
    },
    {
      id: "d12-q2",
      type: "quick",
      prompt: "What is a common difficulty in teamwork?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选目标不清、分工失衡或进度不同",
        "解释它如何影响结果",
        "给一个预防行动",
      ],
      reference: {
        paragraphs: [
          "A common difficulty is assuming that everyone understands the task in the same way. One person may expect a detailed report, while another thinks a short summary is enough. The difference becomes frustrating near the deadline. I would raise a concern sooner. I would prevent this by agreeing on the final format and showing a small example early. Clear expectations can save a surprising amount of repeated work later.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: ["final format", "small example", "Clear expectations"],
      },
    },
  ],
  personalStatement: {
    id: "d12-statement",
    type: "statement",
    prompt: "Describe how you would organize a successful group presentation.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [
      "从明确目标开始，避免立刻分割幻灯片",
      "用一场具体主题展示贯穿",
      "展开分工、检查与排练三个阶段",
      "说明你会怎样处理进度差异",
    ],
    reference: {
      paragraphs: [
        "To organize a successful group presentation, I would begin by making sure everyone understands the audience and the main message. If we were presenting a proposal to reduce campus food waste, we would first agree on the specific change we wanted our classmates to consider.",
        "Next, we would divide responsibilities according to both interests and available time. One member might gather student opinions, another could examine practical options, and someone else could organize the visual materials. However, we would create a shared outline before working separately. A shared document would keep everyone informed. That would prevent the final presentation from becoming several unrelated speeches.",
        "I would arrange an early progress check so that difficulties appeared while there was still time to respond. If a member fell behind, we could understand the obstacle and adjust the work fairly. Finally, we would rehearse together, checking transitions and timing rather than only individual parts. A successful presentation depends on more than talented speakers. It requires clear expectations, visible progress, and a willingness to help each other produce one coherent message.",
      ],
      structure: [
        "开头提出个人观点",
        "分层解释原因与具体做法",
        "用经历或场景支撑观点",
        "总结收获并回扣主题",
      ],
      highlights: [
        "shared outline",
        "progress check",
        "adjust the work fairly",
        "coherent message",
      ],
    },
  },
  discussion: [
    {
      id: "d12-discussion1",
      type: "discussion",
      prompt: "Discuss how responsibilities should be divided in a team.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "回应按能力分工的效率",
        "考虑负担与学习机会",
        "提出协商和检查的办法",
      ],
      reference: {
        paragraphs: [
          "Using each member's strengths can improve the quality of the work, but we should not give the same person every difficult task. Teamwork is also a chance to learn. I would discuss preferences and available time, then pair an experienced member with someone who wants practice. We can review the balance after the first stage. How could we make each person's contribution visible? We can build on someone’s idea collaboratively.",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "member's strengths",
          "chance to learn",
          "contribution visible",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that matching tasks to strengths can improve efficiency.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but workload and learning opportunities should be considered too.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree with assigning all demanding work to the most skilled member.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could two members share a difficult task while learning from each other?",
          },
        ],
      },
      partner:
        "The most skilled member should take the hardest tasks so the group gets a better result.",
      interaction: "认可效率，但纳入公平与成长机会，提出合作分工。",
    },
    {
      id: "d12-discussion2",
      type: "discussion",
      prompt: "Discuss how to respond to a team member who misses a deadline.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "先核实具体困难",
        "说明延期对其他部分的影响",
        "共同确认新的可行安排",
      ],
      reference: {
        paragraphs: [
          "I would speak to the member privately before assuming they do not care. There may be a confusing requirement or an unexpected problem. At the same time, I would explain how the delay affects the rest of the group. We need a specific revised deadline and, if necessary, a fair adjustment of tasks. What should we do if the same problem happens again?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "speak to the member privately",
          "revised deadline",
          "fair adjustment",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that missed deadlines need a clear response.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but understanding the cause should come before criticism.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree with publicly blaming someone before discussing the problem.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could the member show a partial draft so the group knows what help is needed?",
          },
        ],
      },
      partner:
        "A team member who misses a deadline should be criticized in the group chat immediately.",
      interaction: "用私下沟通与具体事实处理问题，同时维护团队进度。",
    },
    {
      id: "d12-discussion3",
      type: "discussion",
      prompt:
        "Discuss whether a strong leader should make all final decisions.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "说明统一方向的重要性",
        "考虑成员掌握的信息不同",
        "提出有时限的协商流程",
      ],
      reference: {
        paragraphs: [
          "A team needs a way to make decisions, especially when time is limited. However, one leader may not have all the relevant information. I would ask members to explain their strongest reasons, compare the options with our shared goal, and set a time to reach a workable agreement. The coordinator can guide that process without controlling every detail. Which decisions might reasonably be delegated to individual members?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "relevant information",
          "shared goal",
          "guide that process",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that a coordinator can prevent discussion from continuing indefinitely.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but members should contribute evidence before a final decision.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that effective leadership means controlling every choice.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could the team agree in advance on how unresolved decisions will be made?",
          },
        ],
      },
      partner:
        "To avoid wasting time, the leader should make all final decisions for the team.",
      interaction: "把领导职责表述为组织决策，给团队保留贡献空间。",
    },
  ],
  finalQuestion: {
    id: "d12-final",
    type: "final",
    prompt:
      "What is the most important lesson students can learn from teamwork?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [
      "选一个核心收获",
      "用具体合作情境展开",
      "解释它如何用于将来的学习或工作",
    ],
    reference: {
      paragraphs: [
        "The most important lesson is that a good result depends on making individual work useful to others. A brilliant section may still weaken a presentation if it ignores the shared message or arrives too late. Students learn to clarify expectations, communicate progress, and consider how their choices affect the group. They also discover that asking for help early can protect the whole project. These habits are valuable beyond university because most professional tasks involve some form of cooperation. Teamwork teaches responsibility toward both the task and the people involved.",
      ],
      structure: ["明确回应问题", "比较或解释两个要点", "用具体行动形成结论"],
      highlights: [
        "individual work useful to others",
        "communicate progress",
        "asking for help early",
      ],
    },
  },
  upgrades: [
    {
      basic: "Everyone should work hard.",
      better:
        "Each member should understand their task and report progress at agreed times.",
      zh: "把要求变成明确的责任与沟通",
    },
    {
      basic: "We had different ideas.",
      better:
        "Our disagreement concerned the audience and purpose of the presentation.",
      zh: "指出分歧的具体对象",
    },
    {
      basic: "He did not do his work.",
      better:
        "His section missed the first deadline, so we needed to understand the obstacle.",
      zh: "用事实描述情况并寻找原因",
    },
    {
      basic: "The leader decided.",
      better:
        "The coordinator summarized the options and helped the group reach an agreement.",
      zh: "体现协调而非单向命令",
    },
  ],
};

export default day;
