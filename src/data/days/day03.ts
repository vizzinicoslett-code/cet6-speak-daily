import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day03",
  day: 3,
  topic: "Managing Stress",
  topicZh: "应对压力",
  category: "Lifestyle",
  estimatedMinutes: 18,
  focus: "清楚区分压力来源、个人感受、可行行动与求助渠道。",
  talkingPoints: [
    {
      en: "Recognize early signs",
      zh: "用睡眠、注意力等变化描述压力信号",
    },
    {
      en: "Use manageable actions",
      zh: "提出散步、拆任务、交流等具体行动",
    },
    {
      en: "Find appropriate support",
      zh: "需要时联系可信任的人或校园支持",
    },
  ],
  expressions: [
    {
      en: "feel overwhelmed",
      zh: "感到不堪重负",
      example: "I feel overwhelmed when several assignments arrive together.",
    },
    {
      en: "take one step at a time",
      zh: "一步一步来",
      example: "I remind myself to take one step at a time.",
    },
    {
      en: "clear my head",
      zh: "理清思绪",
      example: "A short walk helps me clear my head.",
    },
    {
      en: "talk things through",
      zh: "把事情谈清楚",
      example: "I talk things through with a close friend.",
    },
    {
      en: "set realistic expectations",
      zh: "设定合理预期",
      example: "We should set realistic expectations during a busy week.",
    },
    {
      en: "reach out for support",
      zh: "主动寻求支持",
      example:
        "I reach out for support when the pressure becomes difficult to manage.",
    },
  ],
  sentenceFrames: [
    {
      en: "I notice that I am stressed when ...",
      zh: "当……时，我会意识到自己有压力",
    },
    {
      en: "What helps me most is ..., because ...",
      zh: "对我帮助最大的是……，因为……",
    },
    {
      en: "Rather than keeping the problem to myself, I ...",
      zh: "我不会独自憋着，而会……",
    },
    {
      en: "If the pressure continues, I would ...",
      zh: "如果压力持续，我会……",
    },
  ],
  quickResponses: [
    {
      id: "d03-q1",
      type: "quick",
      prompt: "What usually makes you feel stressed at university?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "可选重叠截止日期、公开发言或适应环境",
        "描述一种真实感受",
        "补充一个自己能采取的行动",
      ],
      reference: {
        paragraphs: [
          "I feel overwhelmed when several assignments are due within a few days. The problem is often not one difficult task, but the feeling that everything needs attention at once. I become distracted and keep switching between subjects. Writing a short priority list helps me regain a sense of control. Then I choose one manageable task and focus on completing it first.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: [
          "due within a few days",
          "sense of control",
          "manageable task",
        ],
      },
    },
    {
      id: "d03-q2",
      type: "quick",
      prompt: "What do you do after a tiring day?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选择一种普通且容易坚持的活动",
        "说它如何改变状态",
        "不要把放松方法说成适用于所有人",
      ],
      reference: {
        paragraphs: [
          "After a tiring day, I like taking a quiet walk around campus. I leave my headphones off and notice ordinary things, such as the trees or people playing basketball. This helps me clear my head and stop thinking about unfinished work for a while. Afterward, I usually feel calmer and can decide what truly needs doing that evening, instead of worrying about every possible task.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: ["quiet walk", "feel calmer", "unfinished work"],
      },
    },
  ],
  personalStatement: {
    id: "d03-statement",
    type: "statement",
    prompt:
      "Describe how you would deal with a period of heavy academic pressure.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [
      "开头说明压力来源",
      "按身体状态、任务安排、交流支持三层展开",
      "插入一次考试周的情境",
      "说明持续影响生活时会寻求进一步帮助",
    ],
    reference: {
      paragraphs: [
        "When academic pressure becomes heavy, I try to respond early rather than wait until I feel completely exhausted. The first step is noticing changes in my routine. I set realistic expectations for what I can finish. If I cannot concentrate or keep thinking about assignments at bedtime, I take those signs seriously.",
        "During an exam week, I would make a realistic list of what needs to be revised. I divide large topics into small sections and choose a limited number for each day. I also protect basic routines, including meals, sleep, and short breaks. These habits do not remove every difficulty, but they make the workload easier to face.",
        "Talking to someone is another useful step. A classmate may explain a confusing topic, while a friend can simply listen without judging. If pressure continues to affect daily life, I would contact the university support service for appropriate guidance. I do not think coping with stress means staying cheerful all the time. It means recognizing my limits, taking practical action, and being willing to reach out for support when I need it.",
      ],
      structure: [
        "开头提出个人观点",
        "分层解释原因与具体做法",
        "用经历或场景支撑观点",
        "总结收获并回扣主题",
      ],
      highlights: [
        "respond early",
        "basic routines",
        "recognizing my limits",
        "reach out",
      ],
    },
  },
  discussion: [
    {
      id: "d03-discussion1",
      type: "discussion",
      prompt: "Discuss whether stress always harms students.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "回应适度紧张可能促进行动",
        "区分短期动力与长期负担",
        "用演讲准备的场景说明",
      ],
      reference: {
        paragraphs: [
          "I agree that a small amount of pressure can encourage preparation. Before a presentation, for example, a little nervousness reminds me to practise. However, pressure stops being useful when it prevents sleep or concentration. We should avoid treating every stressful experience as either good or bad. Perhaps the important question is whether students still feel able to cope. What do you think?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: ["encourage preparation", "able to cope"],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that manageable pressure can motivate students to begin.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but the effects depend on its intensity and duration.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that constant pressure is necessary for achievement.",
          },
          {
            label: "Follow-up · 追问",
            text: "How could teachers tell when pressure has become excessive?",
          },
        ],
      },
      partner: "Stress is useful because it pushes students to work harder.",
      interaction: "限定赞同的范围，避免把所有压力都说成有益。",
    },
    {
      id: "d03-discussion2",
      type: "discussion",
      prompt: "Discuss how friends can support a stressed student.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "先听，再问对方需要什么",
        "避免替别人决定",
        "提出一种实际可提供的帮助",
      ],
      reference: {
        paragraphs: [
          "Listening is a good starting point, and I would avoid immediately giving a long list of solutions. A stressed friend may first need to explain what is happening. Then I could ask whether they want company, practical help, or advice. Offering to review one difficult chapter together might be useful. We should also respect their privacy. What would you say to start that conversation? We can talk things through without rushing toward an answer.",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "good starting point",
          "practical help",
          "respect their privacy",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that a caring conversation can make someone feel less alone.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but advice should follow an understanding of the problem.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree with telling a stressed friend simply to stop worrying.",
          },
          {
            label: "Follow-up · 追问",
            text: "Would you ask whether your friend wants advice or just a listener?",
          },
        ],
      },
      partner:
        "The best way to help a stressed friend is to tell them exactly what to do.",
      interaction: "温和修正直接给建议的方式，提出倾听与询问。",
    },
    {
      id: "d03-discussion3",
      type: "discussion",
      prompt: "Discuss whether universities should provide quiet spaces.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "明确空间能提供什么帮助",
        "考虑地点和使用规则",
        "把建议与学生不同需求联系起来",
      ],
      reference: {
        paragraphs: [
          "A quiet room could be valuable, especially for students whose dormitories are crowded. It would offer somewhere to pause, read, or collect their thoughts between classes. Still, the space should have clear rules and be easy to find. It cannot replace other support, but it can meet a practical daily need. Could the library reserve a small area for this purpose?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: ["collect their thoughts", "clear rules", "daily need"],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that accessible quiet areas could improve the campus environment.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but location and opening hours would affect their usefulness.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree with making quiet spaces available only to selected students.",
          },
          {
            label: "Follow-up · 追问",
            text: "How could students help decide the rules for such a space?",
          },
        ],
      },
      partner:
        "Universities should create quiet rooms where students can take a break.",
      interaction: "赞同后增加可实施细节，再邀请搭档讨论安排。",
    },
  ],
  finalQuestion: {
    id: "d03-final",
    type: "final",
    prompt: "What advice would you give a new student who feels overwhelmed?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [
      "用友善而具体的语言",
      "给两个可以今天开始的行动",
      "保留进一步求助的选择",
    ],
    reference: {
      paragraphs: [
        "I would tell the student that they do not have to solve every problem today. It helps to take one step at a time. First, we could write down what is worrying them and choose one small task, such as finding a classroom or emailing a tutor. Second, I would encourage them to speak with someone they trust instead of handling everything alone. A regular meal, a little movement, and enough rest can also support a difficult day. If the feeling continues or affects daily life, contacting the campus support service would be a sensible next step.",
      ],
      structure: ["明确回应问题", "比较或解释两个要点", "用具体行动形成结论"],
      highlights: [
        "one small task",
        "someone they trust",
        "sensible next step",
      ],
    },
  },
  upgrades: [
    {
      basic: "I have too much pressure.",
      better: "I feel under pressure when deadlines overlap.",
      zh: "描述压力出现的具体条件",
    },
    {
      basic: "I relax by walking.",
      better: "A short walk gives me distance from a difficult task.",
      zh: "解释行为如何帮助自己",
    },
    {
      basic: "My friend helps me.",
      better:
        "My friend listens carefully and helps me identify the next step.",
      zh: "用具体动作描述支持",
    },
    {
      basic: "Do not worry.",
      better:
        "We can start with one manageable task and review the rest later.",
      zh: "把空泛安慰改为可执行支持",
    },
  ],
};

export default day;
