import type { TrainingDay } from "../../types";

const day = {
  id: "day21",
  day: 21,
  topic: "Employment",
  topicZh: "就业选择",
  category: "Career",
  estimatedMinutes: 18,
  focus: "互动训练：用具体例子解释观点，并把实例带回共同决策",
  talkingPoints: [
    {
      en: "Skills and evidence",
      zh: "技能与证据",
    },
    {
      en: "Career values",
      zh: "职业价值取向",
    },
    {
      en: "Fair recruitment",
      zh: "公平招聘",
    },
  ],
  expressions: [
    {
      en: "proper support",
      zh: "适当支持",
      example:
        "New graduates can take on challenging tasks when they receive proper support.",
    },
    {
      en: "receive feedback",
      zh: "获得反馈",
      example: "I asked the employer how often new employees receive feedback.",
    },
    {
      en: "specific examples",
      zh: "具体实例",
      example:
        "Specific examples help an interviewer understand how I solved a problem.",
    },
    {
      en: "actual contribution",
      zh: "实际贡献",
      example:
        "My interview answer explains my actual contribution to the group project.",
    },
    {
      en: "personal circumstances",
      zh: "个人实际情况",
      example:
        "Personal circumstances affect how much financial risk a graduate can accept.",
    },
    {
      en: "transferable abilities",
      zh: "可迁移能力",
      example:
        "Research projects develop transferable abilities such as evaluating evidence.",
    },
  ],
  sentenceFrames: [
    {
      en: "A concrete example would be ...",
      zh: "一个具体例子是……",
    },
    {
      en: "That example shows why ...",
      zh: "这个例子说明了为什么……",
    },
    {
      en: "Imagine a graduate who ...",
      zh: "设想一位毕业生……",
    },
    {
      en: "How would your suggestion work for someone in that situation?",
      zh: "对于处于那种情境的人，你的建议会如何起作用？",
    },
  ],
  upgrades: [
    {
      basic: "I have teamwork skills.",
      better:
        "In our research project, I coordinated interviews and resolved a disagreement about the schedule.",
      zh: "用行为证明技能。",
    },
    {
      basic: "Salary matters.",
      better:
        "Starting salary matters because graduates may need to cover rent and support family members.",
      zh: "说明现实原因。",
    },
    {
      basic: "For example, a student.",
      better:
        "For example, a biology graduate could use a laboratory project to demonstrate careful record keeping.",
      zh: "让例子具有背景和行为。",
    },
    {
      basic: "Choose a good job.",
      better:
        "Compare the role’s responsibilities, supervision, income, and opportunities to keep learning.",
      zh: "给出可比较标准。",
    },
  ],
  quickResponses: [
    {
      prompt: "What matters most when choosing your first job?",
      hints: ["用具体问题评估岗位"],
      reference: {
        paragraphs: [
          "I would give priority to a role where I can learn useful skills with proper support. Starting salary matters, especially in a city with expensive rent, but a slightly higher wage would not compensate for having no guidance. I would ask how new employees receive feedback and what responsibilities they gradually take on. A first job should help me become more capable, not only pay this month’s bills.",
        ],
        structure: ["说明优先标准", "承认收入条件", "提出求职问题"],
        highlights: ["proper support", "receive feedback"],
      },
      id: "d21-q1",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
    {
      prompt: "How can students prepare for a job interview?",
      hints: ["说明例子的三个组成部分"],
      reference: {
        paragraphs: [
          "Students should prepare specific examples instead of memorizing broad claims about their strengths. If they say they solve problems well, they could describe a project difficulty, explain their action, and state the result. They should also research the role and prepare questions about the team. Practicing aloud with a friend can reveal unclear answers and help them sound more natural when an interviewer asks an unexpected question.",
        ],
        structure: ["提出实例准备法", "解释实例结构", "补充岗位了解与练习"],
        highlights: ["specific examples", "Practicing aloud"],
      },
      id: "d21-q2",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
  ],
  personalStatement: {
    prompt:
      "Discuss how university students can prepare for employment while making thoughtful career choices.",
    hints: ["用情境说明职业选择差异"],
    reference: {
      paragraphs: [
        "Preparing for employment involves more than collecting certificates. Students need to understand what employers expect, develop relevant abilities, and show evidence of what they can do. A group project, a part time job, or a volunteering role can all provide examples of communication, problem solving, and responsibility if students reflect on their actual contribution.",
        "Career decisions also require attention to personal circumstances. A graduate supporting family members may prioritize a stable income, while another may be able to accept a training role with a lower starting salary. Neither choice should be judged only by status. The important question is whether the person understands the tradeoffs and has reliable information about the work.",
        "Universities can help by providing accessible career advice, practice interviews, and contact with graduates from different backgrounds. Students should compare job responsibilities, supervision, working conditions, and opportunities to learn, as well as pay. They can then explain their abilities through concrete examples and ask informed questions. A thoughtful first choice does not need to determine an entire career, but it should offer a realistic starting point and room for future development.",
      ],
      structure: [
        "说明能力与证据准备",
        "承认个人约束差异",
        "提出学校支持与比较标准",
      ],
      highlights: [
        "actual contribution",
        "personal circumstances",
        "concrete examples",
      ],
    },
    id: "d21-statement",
    type: "statement",
    prepareSeconds: 60,
    speakingSeconds: 90,
  },
  discussion: [
    {
      prompt: "Use a concrete example to respond to your partner’s claim.",
      hints: ["实例要有具体行动"],
      reference: {
        paragraphs: [
          "I agree that certificates can show effort, but employers also need evidence of how a person uses their skills. For example, a student who organized a campus exhibition could explain how they divided tasks, handled a late delivery, and kept the event on schedule. That story reveals practical teamwork more clearly than simply listing a course. Could our career workshop help students prepare examples like that?",
        ],
        structure: ["回应证书观点", "给出有行为的实例", "连接共同计划"],
        highlights: ["handled a late delivery", "practical teamwork"],
        alternatives: [
          {
            label: "Agree",
            text: "A relevant certificate can show that an applicant has completed structured training in an important area.",
          },
          {
            label: "Partly agree",
            text: "Certificates help, but an interview example should show whether the applicant can apply the knowledge.",
          },
          {
            label: "Disagree",
            text: "I would not collect unrelated certificates because they may distract from building skills required for the role.",
          },
          {
            label: "Follow-up",
            text: "What example could a student use to show the skill behind that certificate?",
          },
        ],
      },
      partner:
        "Students mainly need more certificates to improve their chances of employment.",
      interaction: "练习举例：交代情境、具体行为，并说明例子支持什么。",
      id: "d21-discussion1",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Explain a different priority through an example rather than a general disagreement.",
      hints: ["例子需要说明选择为何不同"],
      reference: {
        paragraphs: [
          "A high salary is attractive, but imagine a graduate moving to an expensive city without family support. A larger monthly wage might still leave less money after rent and transport than a modest job near home. Another graduate might accept lower pay for excellent training. These examples show why we should compare the whole situation. What information would help someone calculate the real value of an offer?",
        ],
        structure: ["承认薪资吸引力", "提出两种情境", "回到比较决策"],
        highlights: ["after rent and transport", "the whole situation"],
        alternatives: [
          {
            label: "Agree",
            text: "Higher pay can be essential for someone who has debts or needs to support relatives.",
          },
          {
            label: "Partly agree",
            text: "Salary matters, but costs and working conditions determine how useful that income will actually be.",
          },
          {
            label: "Disagree",
            text: "I would choose a lower paid role if its supervision and training offered a much stronger foundation.",
          },
          {
            label: "Follow-up",
            text: "How much would the graduate keep after paying for housing and commuting in each location?",
          },
        ],
      },
      partner:
        "Every graduate should choose the offer with the highest starting salary.",
      interaction: "用具体生活条件解释不同职业取舍。",
      id: "d21-discussion2",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Give an example of a fairer recruitment method and invite a response.",
      hints: ["说明公平方法的具体操作"],
      reference: {
        paragraphs: [
          "Your concern about unequal opportunities is important. One practical example would be giving every applicant the same short task and evaluating it with published criteria. For a writing role, candidates could edit a sample notice rather than depend on expensive previous placements. This would not solve every inequality, but it could reveal relevant ability more directly. What support would applicants need to complete the task fairly?",
        ],
        structure: ["承接公平问题", "举统一任务实例", "承认局限并追问"],
        highlights: ["published criteria", "relevant ability"],
        alternatives: [
          {
            label: "Agree",
            text: "Access to informal contacts can matter when opportunities are shared privately rather than advertised openly.",
          },
          {
            label: "Partly agree",
            text: "Contacts can help people learn about a role, but selection should still use transparent standards.",
          },
          {
            label: "Disagree",
            text: "I would distinguish useful advice from unfair selection because speaking to graduates does not always create favoritism.",
          },
          {
            label: "Follow-up",
            text: "Could a common practical task reveal skills that a prestigious internship does not necessarily prove?",
          },
        ],
      },
      partner:
        "Students with influential contacts may have an unfair advantage in recruitment.",
      interaction: "用实例把抽象公平转为可讨论的招聘做法。",
      id: "d21-discussion3",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
  ],
  finalQuestion: {
    prompt:
      "Should graduates expect their first job to match their university major exactly?",
    hints: ["用职业要求限定灵活性"],
    reference: {
      paragraphs: [
        "Graduates should consider jobs related to their major, but an exact match is not always necessary. University study develops transferable abilities, such as analyzing evidence, explaining ideas, and managing projects. A history graduate, for example, may use careful source evaluation in a research or communications role. The important issue is whether the person understands the new work and can develop any missing skills. Some professions do require specific qualifications, so the decision depends on the role. A flexible search can reveal opportunities without ignoring the value of specialized training.",
      ],
      structure: ["提出灵活立场", "举可迁移技能实例", "说明专业资格边界"],
      highlights: ["transferable abilities", "specific qualifications"],
    },
    id: "d21-final",
    type: "final",
    prepareSeconds: 5,
    speakingSeconds: 45,
  },
} satisfies TrainingDay;

export default day;
