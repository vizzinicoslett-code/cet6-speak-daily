import type { TrainingDay } from "../../types";

const day = {
  id: "day22",
  day: 22,
  topic: "Environmental Protection",
  topicZh: "环境保护",
  category: "Environment",
  estimatedMinutes: 18,
  focus: "综合模拟：独立组织观点，协商校园环保方案；提示最少",
  talkingPoints: [
    {
      en: "Individual and institutional action",
      zh: "个人与机构行动",
    },
    {
      en: "Waste and consumption",
      zh: "废弃物与消费",
    },
    {
      en: "Measurable campus change",
      zh: "可衡量的校园改变",
    },
  ],
  expressions: [
    {
      en: "disposable drink cups",
      zh: "一次性饮料杯",
      example:
        "Disposable drink cups fill the library bins during examination weeks.",
    },
    {
      en: "better systems",
      zh: "更完善的制度与设施",
      example:
        "Individual effort becomes easier when better systems make reuse convenient.",
    },
    {
      en: "reusable options",
      zh: "可重复使用的选择",
      example:
        "Dining halls should make reusable options easy to find and borrow.",
    },
    {
      en: "deposit system",
      zh: "押金制度",
      example:
        "A simple deposit system can encourage students to return food containers.",
    },
    {
      en: "small trial",
      zh: "小范围试点",
      example:
        "A small trial will reveal whether the return points are convenient.",
    },
    {
      en: "take the lead",
      zh: "发挥带头作用",
      example:
        "The university should take the lead by installing reliable refill stations.",
    },
  ],
  sentenceFrames: [
    {
      en: "The most effective step would be ..., because ...",
      zh: "最有效的一步是……，因为……",
    },
    {
      en: "We need both ... and ... to make this work.",
      zh: "要使其奏效，我们既需要……也需要……",
    },
    {
      en: "I support the aim, although we should check ...",
      zh: "我支持这个目标，不过我们应检查……",
    },
    {
      en: "We could judge success by ...",
      zh: "我们可以通过……判断是否成功。",
    },
  ],
  upgrades: [
    {
      basic: "We should protect the environment.",
      better:
        "Our campus could reduce disposable waste by making reusable options convenient.",
      zh: "明确地点、问题与机制。",
    },
    {
      basic: "Students must change.",
      better:
        "Students need accessible alternatives as well as a reason to change their routines.",
      zh: "加入设施条件。",
    },
    {
      basic: "Recycling is enough.",
      better:
        "Recycling helps, but preventing unnecessary waste reduces the problem earlier.",
      zh: "扩展到源头。",
    },
    {
      basic: "The campaign worked.",
      better:
        "The campaign reduced the number of disposable cups used each week.",
      zh: "用可衡量结果表达成效。",
    },
  ],
  quickResponses: [
    {
      prompt: "What environmental problem do you notice on your campus?",
      hints: [],
      reference: {
        paragraphs: [
          "I notice many disposable drink cups near the library, especially during examination weeks. The bins become full even though most students stay in the same building for hours. More drinking water refill points and a small discount for reusable cups could reduce that waste. I would first check whether students know where the existing facilities are, because better signs might help immediately without a large construction project.",
        ],
        structure: ["观察具体问题", "提出设施与激励", "先核实已有条件"],
        highlights: ["disposable drink cups", "better signs"],
      },
      id: "d22-q1",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
    {
      prompt: "Is individual action important for environmental protection?",
      hints: [],
      reference: {
        paragraphs: [
          "Yes, individual action matters because daily choices influence demand and the amount of waste a community creates. Bringing a reusable bottle is a small example. However, personal effort becomes easier when institutions provide clean refill stations and businesses offer suitable options. I would therefore connect individual responsibility with better systems. Asking everyone to care without changing inconvenient conditions is unlikely to produce a lasting improvement.",
        ],
        structure: ["肯定个人作用", "解释制度条件", "提出共同责任"],
        highlights: ["daily choices", "better systems"],
      },
      id: "d22-q2",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
  ],
  personalStatement: {
    prompt:
      "Explain how a university could reduce waste and encourage lasting environmentally responsible habits.",
    hints: [],
    reference: {
      paragraphs: [
        "A university can reduce waste most effectively by changing daily systems as well as raising awareness. Students may understand environmental problems but still choose disposable products when convenient alternatives are missing. The first step should therefore be to find out where waste is produced and what prevents people from choosing reusable options.",
        "For example, the campus could install clearly marked water refill stations, provide reusable containers through a simple deposit system, and work with dining halls to offer suitable portion sizes. These measures address waste before it reaches a recycling bin. Students should help test the arrangements, while staff who clean and maintain the facilities should be consulted about practical difficulties.",
        "Education still matters, but it should connect directly with action. Instead of only displaying slogans, a campaign could show how to use the container system and explain what happens to separated waste. The university should compare results before and after a small trial, using measures such as disposable cup purchases and food waste weight. Successful changes can then expand gradually. This approach turns environmental responsibility into a realistic shared routine rather than a brief event that depends entirely on enthusiasm.",
      ],
      structure: [
        "从系统与行为分析问题",
        "提出源头减少方案",
        "用试点数据支持推广",
      ],
      highlights: ["reusable options", "deposit system", "small trial"],
    },
    id: "d22-statement",
    type: "statement",
    prepareSeconds: 60,
    speakingSeconds: 90,
  },
  discussion: [
    {
      prompt:
        "Discuss whether awareness posters should be the main part of a campus environmental campaign.",
      hints: [],
      reference: {
        paragraphs: [
          "Posters can remind people of the issue, but I would not make them the main action. If students cannot find a water refill point, a message about reusable bottles will have limited effect. We could combine clear signs with a map of existing facilities and check whether more people use them. That would connect awareness to a specific choice. Which building should we try first?",
        ],
        structure: ["评价宣传作用", "指出行动条件", "建议小范围试点"],
        highlights: ["limited effect", "a specific choice"],
        alternatives: [
          {
            label: "Agree",
            text: "Posters could be a low cost starting point if many students do not know about facilities already available.",
          },
          {
            label: "Partly agree",
            text: "Reminders help, but the campaign needs an accessible action that students can take immediately.",
          },
          {
            label: "Disagree",
            text: "I would spend most of the effort improving reusable options rather than repeating a message students already recognize.",
          },
          {
            label: "Follow-up",
            text: "What exactly should a student be able to do after reading our poster?",
          },
        ],
      },
      partner:
        "Our campaign should mainly put up posters telling students to protect the environment.",
      interaction: "回应、论证并推进共同方案。",
      id: "d22-discussion1",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Respond to a proposal for charging students for every disposable container.",
      hints: [],
      reference: {
        paragraphs: [
          "A charge might encourage reusable containers, but we should check that a practical alternative is available to everyone. Some students eat between classes and may not have time to return a container far away. A deposit system with several return points could work better. We should also ask dining staff about cleaning and storage. Could we test it in one dining hall before setting a campus rule?",
        ],
        structure: ["承认激励作用", "考察公平与便利", "协商试点"],
        highlights: ["return points", "cleaning and storage"],
        alternatives: [
          {
            label: "Agree",
            text: "A visible charge can remind people that a disposable container has costs beyond the food itself.",
          },
          {
            label: "Partly agree",
            text: "A fee may help, but only after students have a convenient and affordable reusable alternative.",
          },
          {
            label: "Disagree",
            text: "I would introduce the reusable system first because a charge alone may punish students without changing their options.",
          },
          {
            label: "Follow-up",
            text: "Where could students borrow and return containers without missing their next class?",
          },
        ],
      },
      partner:
        "Students should pay an extra fee whenever they use a disposable food container.",
      interaction: "回应、论证并推进共同方案。",
      id: "d22-discussion2",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt: "Agree on a way to evaluate your environmental plan.",
      hints: [],
      reference: {
        paragraphs: [
          "Counting volunteers shows participation, but I suggest measuring the waste itself. We could record the number of disposable containers purchased by one dining hall for two weeks before and after the trial. We should compare similar weekdays and check whether customer numbers changed. A short student survey could then explain any difficulties. This combination would tell us both whether the plan reduced waste and how to improve it.",
        ],
        structure: ["区分人数与结果", "设计前后比较", "补充体验反馈"],
        highlights: ["measuring the waste", "similar weekdays"],
        alternatives: [
          {
            label: "Agree",
            text: "Volunteer participation is useful evidence that students are willing to help maintain the project.",
          },
          {
            label: "Partly agree",
            text: "Participation matters, but we also need to know whether fewer disposable items are actually used.",
          },
          {
            label: "Disagree",
            text: "I would not judge environmental impact from volunteer numbers because activity can increase without reducing waste.",
          },
          {
            label: "Follow-up",
            text: "Can the dining hall share purchasing figures so we can compare disposable container use?",
          },
        ],
      },
      partner:
        "If many volunteers join our campaign, we can say the environmental plan has succeeded.",
      interaction: "回应、论证并推进共同方案。",
      id: "d22-discussion3",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
  ],
  finalQuestion: {
    prompt:
      "Who should take the greatest responsibility for environmental protection?",
    hints: [],
    reference: {
      paragraphs: [
        "Responsibility should be shared, but institutions with greater control over systems should take the lead. A university decides what facilities it installs, and a business decides how products are packaged. These choices shape what individuals can realistically do. Students still have a responsibility to use available options and question wasteful routines. For example, a refill station works only if it is maintained and people use it. I would therefore judge each group by its ability to make a difference, rather than ask individuals to solve problems that require coordinated changes.",
      ],
      structure: ["提出能力对应责任", "举设施共同作用", "解释分工原则"],
      highlights: ["take the lead", "coordinated changes"],
    },
    id: "d22-final",
    type: "final",
    prepareSeconds: 5,
    speakingSeconds: 45,
  },
} satisfies TrainingDay;

export default day;
