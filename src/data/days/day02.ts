import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day02",
  day: 2,
  topic: "Time Management",
  topicZh: "时间管理",
  category: "Lifestyle",
  estimatedMinutes: 18,
  focus: "用具体的一天或一周展开，解释优先级、干扰和调整方法。",
  talkingPoints: [
    {
      en: "Set realistic priorities",
      zh: "先分清必须完成与可以推迟的事",
    },
    {
      en: "Protect focused time",
      zh: "安排能够真正专注的一段时间",
    },
    {
      en: "Leave room for changes",
      zh: "为突发任务和休息预留空间",
    },
  ],
  expressions: [
    {
      en: "set priorities",
      zh: "确定优先级",
      example: "I set priorities before opening my messages.",
    },
    {
      en: "break a task down",
      zh: "拆分任务",
      example: "I break a task down into three small steps.",
    },
    {
      en: "leave a time buffer",
      zh: "预留缓冲时间",
      example: "I leave a time buffer between two commitments.",
    },
    {
      en: "put things off",
      zh: "拖延事情",
      example: "I tend to put things off when the goal is unclear.",
    },
    {
      en: "stay on schedule",
      zh: "按计划进行",
      example: "A short checklist helps me stay on schedule.",
    },
    {
      en: "make time for",
      zh: "腾出时间做……",
      example: "I make time for exercise even during exam week.",
    },
  ],
  sentenceFrames: [
    {
      en: "I tend to waste time when ...",
      zh: "当……时，我容易浪费时间",
    },
    {
      en: "Instead of trying to finish everything, I ...",
      zh: "我不会试图完成所有事，而会……",
    },
    {
      en: "I divide ... into ..., so that ...",
      zh: "我把……分成……，这样……",
    },
    {
      en: "If my plan changes, I ...",
      zh: "如果计划改变，我会……",
    },
  ],
  quickResponses: [
    {
      id: "d02-q1",
      type: "quick",
      prompt: "When are you most productive during the day?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选早晨、下午或晚上",
        "说清环境和精神状态",
        "给一个适合该时段的任务",
      ],
      reference: {
        paragraphs: [
          "I am usually most productive in the morning, especially after breakfast. My mind feels clearer, and there are fewer messages competing for my attention. I use that time for difficult reading or writing, rather than routine tasks. Of course, this depends on getting enough sleep. When I stay up late, even a carefully planned morning can become a struggle. That is when I set priorities for the day.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: [
          "most productive",
          "routine tasks",
          "getting enough sleep",
        ],
      },
    },
    {
      id: "d02-q2",
      type: "quick",
      prompt: "What is your biggest source of wasted time?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选刷视频、犹豫或反复查消息",
        "解释它如何打断任务",
        "给一个小而具体的改变",
      ],
      reference: {
        paragraphs: [
          "My biggest source of wasted time is checking short videos between study tasks. I often intend to watch for two minutes, but the next video appears automatically. To reduce this habit, I put my phone in my bag and decide on a proper break beforehand. This does not make me perfectly disciplined, but it helps me return to work more quickly. I tend to put things off without that clear boundary.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: ["wasted time", "proper break", "return to work"],
      },
    },
  ],
  personalStatement: {
    id: "d02-statement",
    type: "statement",
    prompt: "Explain how you would plan a busy week with several deadlines.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [
      "按“列任务—定顺序—分步骤—留缓冲”展开",
      "举作业与社团冲突的例子",
      "解释计划改变时怎么办",
      "不要把全部时间填满",
    ],
    reference: {
      paragraphs: [
        "When several deadlines fall in the same week, I first write everything down instead of keeping it all in my head. I include classes, assignments, meals, and rest, because a plan that ignores daily needs will not last. Then I identify the tasks that are both urgent and difficult.",
        "For a large assignment, I break a task down into reading, outlining, drafting, and checking. This helps me start earlier and see real progress. If a club activity conflicts with an important submission, I contact the organizer in advance and adjust my contribution. I also leave a time buffer every afternoon, since unexpected problems are normal.",
        "Finally, I review the plan each evening. I do not treat an unfinished checklist as a personal failure. Instead, I ask whether I estimated the time accurately or accepted too many commitments. Good time management means making thoughtful choices about limited energy. A useful weekly plan should help me finish essential work while leaving enough time to sleep and enjoy university life.",
      ],
      structure: [
        "开头提出个人观点",
        "分层解释原因与具体做法",
        "用经历或场景支撑观点",
        "总结收获并回扣主题",
      ],
      highlights: ["break a task down", "time buffer", "limited energy"],
    },
  },
  discussion: [
    {
      id: "d02-discussion1",
      type: "discussion",
      prompt: "Discuss whether every hour should be scheduled.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "先回应详细安排的好处",
        "指出容易被打断的实际情境",
        "提出更灵活的替代做法",
      ],
      reference: {
        paragraphs: [
          "A detailed schedule can reduce uncertainty, and I understand why you like it. However, planning every hour may create extra pressure when a class runs late or a friend needs help. I prefer fixed times for essential commitments and flexible blocks for smaller tasks. That gives the day some direction without making it fragile. Would a daily priority list suit both approaches?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: ["flexible blocks", "daily priority list"],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that fixed study hours can reduce procrastination.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but unexpected events require some empty space.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that every hour needs a task; rest deserves flexibility too.",
          },
          {
            label: "Follow-up · 追问",
            text: "Which parts of a student day should remain flexible?",
          },
        ],
      },
      partner:
        "The most efficient students plan exactly what they will do during every hour.",
      interaction: "先认可细致安排，再用具体情境提出有弹性的方案。",
    },
    {
      id: "d02-discussion2",
      type: "discussion",
      prompt: "Discuss whether phones should be removed during study.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["谈通知如何打断思路", "考虑查资料的需求", "一起提出可实行的规则"],
      reference: {
        paragraphs: [
          "I agree that putting phones away can protect focused time, especially during difficult reading. One notification can lead to several unrelated conversations. Still, some tasks require a dictionary or access to course materials. We could silence notifications and keep only the necessary tool open, then check messages during a planned break. How long should a study block be before that break? Clear boundaries help me stay on schedule.",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: ["focused time", "silence notifications", "planned break"],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree because physical distance makes casual checking less tempting.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, although a phone can also be a useful study tool.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree with a total ban when the activity requires online resources.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could students choose one distraction setting to try this week?",
          },
        ],
      },
      partner:
        "Students should leave their phones in another room whenever they study.",
      interaction: "赞同核心目标，同时处理工具使用的例外。",
    },
    {
      id: "d02-discussion3",
      type: "discussion",
      prompt: "Discuss how to respond when a plan falls behind.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "避免只说 work harder",
        "区分低估时间与任务过多",
        "建议重新排序并说明截止时间",
      ],
      reference: {
        paragraphs: [
          "I would first check why the plan has fallen behind. If a task is taking longer than expected, simply working faster may produce careless results. We could identify the essential section, postpone a less urgent activity, and ask for clarification where needed. A revised plan is more useful than feeling guilty about the original one. Have you ever had to renegotiate a deadline?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "essential section",
          "revised plan",
          "renegotiate a deadline",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that taking action quickly can stop one delay affecting everything.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but working late should not become the normal solution.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that a missed target always means poor discipline.",
          },
          {
            label: "Follow-up · 追问",
            text: "How would you decide which task can safely be postponed?",
          },
        ],
      },
      partner:
        "When we cannot follow our plan, we should work late until everything is finished.",
      interaction: "提出原因分析，用具体调整替代笼统的加班建议。",
    },
  ],
  finalQuestion: {
    id: "d02-final",
    type: "final",
    prompt:
      "Which matters more for time management: a good plan or the ability to adjust?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [
      "选择重点，也承认另一项价值",
      "给一个计划遇到变化的例子",
      "以平衡且明确的判断收束",
    ],
    reference: {
      paragraphs: [
        "I think the ability to adjust matters slightly more, although a good plan provides the starting point. Student life includes changes that we cannot fully predict, such as an extra assignment or an illness. Someone who follows a timetable rigidly may become frustrated, while a flexible person can protect the most important goals and move other tasks. For example, I would shorten a club meeting rather than sacrifice sleep before an exam. Effective time management therefore requires clear priorities and the confidence to revise a plan when circumstances change. I also make time for rest.",
      ],
      structure: ["明确回应问题", "比较或解释两个要点", "用具体行动形成结论"],
      highlights: ["ability to adjust", "clear priorities", "revise a plan"],
    },
  },
  upgrades: [
    {
      basic: "I am very busy.",
      better:
        "My schedule is full of classes, assignments, and club activities.",
      zh: "具体说明忙碌来源",
    },
    {
      basic: "I do important things first.",
      better: "I rank tasks by urgency and importance.",
      zh: "精确表达排序方法",
    },
    {
      basic: "I use my phone less.",
      better: "I put my phone out of reach during focused study sessions.",
      zh: "把目标转化为可观察行动",
    },
    {
      basic: "Plans are useful.",
      better: "A realistic plan helps me use my energy more effectively.",
      zh: "点出计划的实际作用",
    },
  ],
};

export default day;
