import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day33",
  day: 33,
  topic: "Career Choices",
  topicZh: "职业选择",
  category: "Career",
  estimatedMinutes: 18,
  focus: "模拟五：阐明职业选择标准，在不确定条件下协商探索路径。",
  talkingPoints: [
    {
      en: "Separate the image of a job from its daily work.",
      zh: "区分职业形象与日常工作。",
    },
    {
      en: "Test interests through small practical experiences.",
      zh: "通过小规模实践检验兴趣。",
    },
    {
      en: "Consider income, development, and personal priorities.",
      zh: "兼顾收入、成长与个人优先事项。",
    },
  ],
  expressions: [
    {
      en: "an informed decision",
      zh: "有依据的决定",
      example: "An internship can help me make an informed decision.",
    },
    {
      en: "transferable skills",
      zh: "可迁移技能",
      example:
        "Clear communication is useful as one of many transferable skills.",
    },
    {
      en: "gain first-hand experience",
      zh: "获得亲身经验",
      example:
        "I hope to gain first-hand experience through a short placement.",
    },
    {
      en: "career development",
      zh: "职业发展",
      example: "Good supervision can support early career development.",
    },
    {
      en: "weigh the tradeoffs",
      zh: "权衡取舍",
      example:
        "I need to weigh the tradeoffs between location and opportunity.",
    },
    {
      en: "keep my options open",
      zh: "保留选择空间",
      example: "Learning broad skills helps me keep my options open.",
    },
  ],
  sentenceFrames: [
    {
      en: "I would compare ... in terms of ...",
      zh: "我会从……方面比较……",
    },
    {
      en: "Before committing to ..., I would try ...",
      zh: "决定投入……之前，我会尝试……",
    },
    {
      en: "The higher salary matters, but so does ...",
      zh: "更高的薪水重要，但……也同样重要。",
    },
    {
      en: "What would the role involve on a typical day?",
      zh: "这个职位平时一天的工作包含什么？",
    },
  ],
  quickResponses: [
    {
      id: "d33-q1",
      type: "quick",
      prompt: "What do you value most in a first job?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "In a first job, I value good supervision and opportunities to develop useful skills. Salary matters because I need to cover living costs, but I would also ask who will guide new employees and how feedback is given. Support for career development could help me gain confidence and build transferable skills that remain useful even if my career direction changes later on.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["transferable skills"],
      },
    },
    {
      id: "d33-q2",
      type: "quick",
      prompt: "Would you choose a career simply because it is popular?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "I would not choose a career only because it is popular. Public attention can reflect real opportunities, but it can also hide the less attractive parts of daily work. I would speak with people in the field and try a related project before deciding. Their experiences would help me make an informed decision based on my abilities, priorities, and interest in the actual tasks.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["an informed decision"],
      },
    },
  ],
  personalStatement: {
    id: "d33-statement",
    type: "statement",
    prompt:
      "Explain how a university student could make a thoughtful career choice while remaining open to change.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [],
    reference: {
      paragraphs: [
        "A thoughtful career choice should connect personal priorities with evidence about real work. Students do not need a perfect lifelong plan, but they should move beyond choosing a job title because it sounds impressive. I would begin by listing the conditions that matter most, such as learning opportunities, location, income, and the kind of problems I enjoy solving.",
        "Next, I would gain first-hand experience. A short internship, a small project, or a conversation with someone doing the job can reveal tasks that are missing from recruitment advertisements. I would ask about an ordinary working day, not only major achievements.",
        "When comparing options, I would weigh the tradeoffs explicitly. A higher salary may come with a longer commute, while a smaller organisation might offer broader responsibilities but less formal training. No option is likely to satisfy every preference.",
        "Finally, I would keep my options open by developing transferable skills and reviewing my experience after several months. Changing direction later would not necessarily mean the original decision was careless. It could reflect new knowledge about the work and about myself. A sensible choice can be committed without being permanent.",
      ],
      structure: [
        "提出明确观点",
        "展开理由并举例",
        "回应限制或不同情况",
        "总结个人行动",
      ],
      highlights: [
        "weigh the tradeoffs",
        "keep my options open",
        "transferable skills",
      ],
    },
  },
  discussion: [
    {
      id: "d33-discussion1",
      type: "discussion",
      prompt: "Respond to a classmate choosing between two job offers.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "The higher salary is important, especially if your living costs are high, but it should not decide the comparison alone. We could look at the daily work, supervision, working hours, and opportunities to learn. You might also calculate what remains after rent and travel. Which offer would develop the skills you want while meeting your present financial responsibilities?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["daily work"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "The higher salary could be decisive if the other conditions are similar.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Income deserves serious weight, but the total experience still matters.",
          },
          {
            label: "不同意 · Disagree",
            text: "I would not decide before understanding the role and its working conditions.",
          },
          {
            label: "追问 · Follow-up",
            text: "How different are the offers once housing and transport costs are included?",
          },
        ],
      },
      partner:
        "One offer pays more, so there is no reason to consider the other one.",
      interaction: "自主扩展比较标准，并用追问帮助搭档作决定。",
    },
    {
      id: "d33-discussion2",
      type: "discussion",
      prompt: "Plan a useful career exploration activity for students.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "A ranking of popular careers may attract attention, but students need a clearer picture of everyday work. We could invite people from several fields to discuss a typical task and one unexpected difficulty. Small workshops could then let students try a related activity. That would offer first-hand experience without requiring an immediate commitment. How could we include careers that receive less publicity?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["first-hand experience"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Salary information can be one useful part of a broader careers event.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "High-paying fields interest students, although other kinds of work should be represented.",
          },
          {
            label: "不同意 · Disagree",
            text: "A salary-only event could encourage choices based on an incomplete picture.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could participants compare the daily tasks behind several different job titles?",
          },
        ],
      },
      partner:
        "Our careers event should focus only on the five jobs with the highest salaries.",
      interaction: "从单一薪酬排名转向职业理解，提出活动设计。",
    },
    {
      id: "d33-discussion3",
      type: "discussion",
      prompt: "Discuss whether changing career direction wastes earlier study.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "Changing direction may mean learning new material, but earlier study is not automatically wasted. Research, teamwork, and clear communication can become transferable skills in another field. We should identify which abilities carry over and which gaps need attention. A small project could test the new direction before a major commitment. What experience has made you interested in making the change?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["transferable skills"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Some specialist knowledge may be used less, but broader skills can remain valuable.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Changing fields has costs, although staying in an unsuitable path also has costs.",
          },
          {
            label: "不同意 · Disagree",
            text: "I do not think a new direction erases the abilities you have already developed.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could a short course or project reveal what additional preparation you need?",
          },
        ],
      },
      partner:
        "If I leave my original field, everything I studied at university will have been useless.",
      interaction: "回应担忧，指出可迁移能力并提出低成本试探。",
    },
  ],
  finalQuestion: {
    id: "d33-final",
    type: "final",
    prompt: "How would you respond if your first career plan did not work out?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [],
    reference: {
      paragraphs: [
        "I would first try to understand why the plan did not work out. A lack of vacancies requires a different response from discovering that I dislike the daily work. I would ask for feedback, review my practical needs, and identify one or two realistic alternatives. The skills I had already developed could help me move into a related role. I would still allow time to feel disappointed, but I would avoid treating one blocked route as proof that I had no useful future options.",
      ],
      structure: ["概括个人立场", "用实例解释原因", "提出下一步行动"],
      highlights: ["realistic alternatives"],
    },
  },
  upgrades: [
    {
      basic: "I want a good job.",
      better:
        "I want a role where I can develop analytical skills and receive useful feedback.",
      zh: "将好工作转为可比较标准。",
    },
    {
      basic: "This job is popular.",
      better:
        "The field attracts many applicants, but I need to understand its daily tasks.",
      zh: "由热度转向工作内容。",
    },
    {
      basic: "I do not know my future.",
      better:
        "I am exploring two fields through short projects before making a longer commitment.",
      zh: "将不确定变为探索计划。",
    },
    {
      basic: "Salary is important.",
      better:
        "The offer must cover living costs, while also providing room to develop.",
      zh: "把薪水放入完整决策。",
    },
  ],
};

export default day;
