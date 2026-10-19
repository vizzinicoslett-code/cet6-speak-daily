import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day11",
  day: 11,
  topic: "Healthy Habits",
  topicZh: "健康习惯",
  category: "Lifestyle",
  estimatedMinutes: 18,
  focus: "把抽象的健康建议变为具体习惯，解释诱因、环境与恢复策略。",
  talkingPoints: [
    {
      en: "Start with a manageable change",
      zh: "先挑一个生活场景作小幅调整",
    },
    {
      en: "Design supportive surroundings",
      zh: "用环境和安排降低坚持难度",
    },
    {
      en: "Recover after interruptions",
      zh: "解释偶尔中断之后怎样继续",
    },
  ],
  expressions: [
    {
      en: "a regular sleep schedule",
      zh: "规律的睡眠时间",
      example: "A regular sleep schedule helps me plan the rest of my day.",
    },
    {
      en: "prepare in advance",
      zh: "提前准备",
      example: "I prepare in advance so breakfast is easier on a busy morning.",
    },
    {
      en: "reduce the temptation",
      zh: "减少诱惑",
      example:
        "Keeping my phone away from the bed can reduce the temptation to scroll.",
    },
    {
      en: "make a small adjustment",
      zh: "做小幅调整",
      example:
        "I make a small adjustment instead of changing every habit at once.",
    },
    {
      en: "return to my routine",
      zh: "恢复日常习惯",
      example: "After a busy weekend, I return to my routine gradually.",
    },
    {
      en: "notice a pattern",
      zh: "注意到一种规律",
      example:
        "I notice a pattern between late-night videos and rushed mornings.",
    },
  ],
  sentenceFrames: [
    {
      en: "A habit I would like to improve is ...",
      zh: "我想改善的一个习惯是……",
    },
    {
      en: "The situation that makes this difficult is ...",
      zh: "让这件事变难的情境是……",
    },
    {
      en: "I can make the healthier choice easier by ...",
      zh: "我可以通过……让更健康的选择变得容易",
    },
    {
      en: "If I miss a day, I will ...",
      zh: "如果中断一天，我会……",
    },
  ],
  quickResponses: [
    {
      id: "d11-q1",
      type: "quick",
      prompt: "Which daily habit would you most like to improve?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: ["选一个习惯", "指出常见诱因", "给一个今晚或明早就能做的改变"],
      reference: {
        paragraphs: [
          "I would like to improve my bedtime routine. I often finish studying at a reasonable hour but then spend too long checking videos. The next morning feels rushed, even though the delay seemed small at night. My first change would be charging my phone across the room and preparing my bag before bed. That would make ending the day feel more deliberate. I want a regular sleep schedule.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: ["bedtime routine", "charging my phone", "more deliberate"],
      },
    },
    {
      id: "d11-q2",
      type: "quick",
      prompt: "What helps you make a healthier choice on a busy day?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选择提前准备或调整环境",
        "描述一个具体忙碌场景",
        "解释为什么比临时下决心有效",
      ],
      reference: {
        paragraphs: [
          "I try to prepare in advance. When I have an early class, I make sure there is something simple available for breakfast and fill my water bottle the night before. Otherwise, I may rush out without thinking about either. These arrangements are small, but they reduce the number of decisions I need to make when I am tired or in a hurry.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: [
          "prepare in advance",
          "small",
          "reduce the number of decisions",
        ],
      },
    },
  ],
  personalStatement: {
    id: "d11-statement",
    type: "statement",
    prompt:
      "Explain how students can make a positive daily habit easier to maintain.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [
      "用一个习惯贯穿90秒",
      "说明触发情境、环境安排和跟进方式",
      "加入一次中断后的处理",
      "避免把健康等同于意志力",
    ],
    reference: {
      paragraphs: [
        "Students can make a positive habit easier to maintain by giving it a clear place in an existing routine. A vague promise to live more healthily is difficult to follow because it does not tell us what to do at a particular moment.",
        "For example, a student who wants a calmer morning could prepare a bag and choose clothes after brushing their teeth at night. Connecting the new action with something familiar makes it easier to remember. The environment matters as well. Keeping a water bottle visible or placing a phone away from the bed can make one choice more convenient than another. These arrangements reduce the need for constant self-control. They also reduce the temptation to make distracting choices.",
        "It is also useful to review the habit without demanding perfection. If a late group meeting interrupts the routine, the student can restart the next evening and consider a simpler version for busy days. A brief weekly check can show what is actually helping. In my view, maintaining a habit is less about making impressive promises and more about designing practical actions that fit ordinary student life.",
      ],
      structure: [
        "开头提出个人观点",
        "分层解释原因与具体做法",
        "用经历或场景支撑观点",
        "总结收获并回扣主题",
      ],
      highlights: [
        "existing routine",
        "environment matters",
        "constant self-control",
        "practical actions",
      ],
    },
  },
  discussion: [
    {
      id: "d11-discussion1",
      type: "discussion",
      prompt:
        "Discuss whether strict routines are the best way to develop healthy habits.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["认可稳定线索的作用", "考虑临时课程和活动", "提出最低可行版本"],
      reference: {
        paragraphs: [
          "A consistent routine can reduce daily decision-making, so I understand the attraction of clear rules. However, an extremely strict plan may collapse when classes or meetings change. I would make a small adjustment and keep a basic version of the habit for busy days. For example, a shorter walk is easier to maintain than cancelling movement entirely. Could flexibility actually help a routine become more reliable?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: ["consistent routine", "basic version", "more reliable"],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that predictable times can make a habit easier to remember.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but a routine needs alternatives for unusual days.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that breaking one rule means the entire plan has failed.",
          },
          {
            label: "Follow-up · 追问",
            text: "What is the smallest useful version of the habit we could maintain?",
          },
        ],
      },
      partner:
        "The stricter a daily routine is, the more likely students are to maintain it.",
      interaction: "从稳定性谈起，解释为什么弹性有助长期坚持。",
    },
    {
      id: "d11-discussion2",
      type: "discussion",
      prompt: "Discuss whether friends should monitor each other’s habits.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["承认同伴支持", "区分提醒与监督压力", "提出双方同意的反馈方式"],
      reference: {
        paragraphs: [
          "Friends can help someone notice a pattern and provide encouragement, especially when they share a goal. Still, monitoring every choice could feel uncomfortable and damage trust. I would ask what kind of support the person actually wants. A friendly invitation to walk or a weekly conversation may be enough. The student should remain in control of their decisions. How could we offer support without turning it into criticism?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "provide encouragement",
          "remain in control",
          "offer support",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that a supportive friend can make a new routine more enjoyable.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but reminders should be welcomed rather than imposed.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree with criticizing every choice in the name of helping.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could friends agree beforehand on what kind of check-in feels useful?",
          },
        ],
      },
      partner:
        "Students should ask their friends to watch them closely and correct unhealthy choices.",
      interaction: "建立同伴支持的边界，用询问代替单方面监督。",
    },
    {
      id: "d11-discussion3",
      type: "discussion",
      prompt: "Discuss what universities can do to support healthier routines.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "从环境便利性谈起",
        "选饮食、作息或活动的一项措施",
        "考虑不同时间表和经济条件",
      ],
      reference: {
        paragraphs: [
          "Universities can support healthier routines by making helpful options easier to access. Affordable meals at sensible times, drinking water near classrooms, and clear paths for walking are practical examples. Information campaigns alone may have limited value if students cannot act on the advice. We should also consider evening classes and tight budgets. Which small campus change would remove the biggest daily obstacle?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "easier to access",
          "practical examples",
          "daily obstacle",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that universities can influence the everyday choices students face.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but facilities should suit different schedules and budgets.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that posters alone are enough when useful options are unavailable.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could students identify one inconvenient part of campus life to improve first?",
          },
        ],
      },
      partner:
        "Students already know about healthy habits, so universities do not need to do anything.",
      interaction: "从知识转向行动条件，提出可观察的环境改变。",
    },
  ],
  finalQuestion: {
    id: "d11-final",
    type: "final",
    prompt:
      "Why do small changes sometimes work better than ambitious lifestyle plans?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [
      "解释实施难度与重复频率",
      "给一个具体的小改变",
      "说明成功后如何逐渐扩展",
    ],
    reference: {
      paragraphs: [
        "Small changes can work well because they require less effort to repeat during an ordinary busy day. Preparing a water bottle before bed, for example, is easier to define and remember than a broad promise to change every routine. Repetition also provides useful feedback: we can notice what gets in the way and adjust the plan. Once one action feels natural, another can be added gradually. Ambitious goals may provide direction, but manageable steps make progress visible and help students continue after an occasional interruption. When I miss a day, I return to my routine.",
      ],
      structure: ["明确回应问题", "比较或解释两个要点", "用具体行动形成结论"],
      highlights: [
        "less effort to repeat",
        "useful feedback",
        "manageable steps",
      ],
    },
  },
  upgrades: [
    {
      basic: "I need a healthy life.",
      better:
        "I want a routine that leaves me rested and ready for my classes.",
      zh: "把抽象目标转成日常体验",
    },
    {
      basic: "I must sleep early.",
      better:
        "I plan to stop studying at a consistent time and begin winding down.",
      zh: "解释如何形成睡前安排",
    },
    {
      basic: "I have no willpower.",
      better: "My current environment makes the distracting choice too easy.",
      zh: "分析情境而不是给自己贴标签",
    },
    {
      basic: "I failed my plan.",
      better: "One interruption shows where my plan needs to be more flexible.",
      zh: "把中断视为调整信息",
    },
  ],
};

export default day;
