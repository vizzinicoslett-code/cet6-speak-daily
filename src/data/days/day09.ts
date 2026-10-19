import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day09",
  day: 9,
  topic: "Travel and Discovery",
  topicZh: "旅行与发现",
  category: "Lifestyle",
  estimatedMinutes: 18,
  focus: "用旅行中的选择、观察与意外来扩展观点，避免只说开阔眼界。",
  talkingPoints: [
    {
      en: "Plan around priorities",
      zh: "根据预算、时间和兴趣作出旅行选择",
    },
    {
      en: "Learn from ordinary places",
      zh: "用市场、交通和日常交流说明观察所得",
    },
    {
      en: "Travel responsibly",
      zh: "考虑对当地生活与环境的影响",
    },
  ],
  expressions: [
    {
      en: "travel on a budget",
      zh: "节约旅行开支",
      example:
        "Students can travel on a budget by choosing nearby destinations.",
    },
    {
      en: "leave room for discovery",
      zh: "为探索留出空间",
      example: "I plan the essentials but leave room for discovery.",
    },
    {
      en: "get a sense of local life",
      zh: "感受当地生活",
      example: "A morning market helps me get a sense of local life.",
    },
    {
      en: "adapt to unexpected changes",
      zh: "适应意外变化",
      example: "A delayed train taught us to adapt to unexpected changes.",
    },
    {
      en: "respect local customs",
      zh: "尊重当地习俗",
      example:
        "Visitors should ask questions politely and respect local customs.",
    },
    {
      en: "go beyond the tourist attractions",
      zh: "走出热门景点",
      example:
        "I like to go beyond the tourist attractions and explore a quiet neighborhood.",
    },
  ],
  sentenceFrames: [
    {
      en: "A journey can be memorable because ..., rather than only because ...",
      zh: "一次旅行令人难忘，可能因为……，而不只是因为……",
    },
    {
      en: "Before making a travel plan, I would consider ...",
      zh: "制定旅行计划前，我会考虑……",
    },
    {
      en: "What surprised me most was ...",
      zh: "最让我惊讶的是……",
    },
    {
      en: "This experience changed the way I ...",
      zh: "这次经历改变了我……的方式",
    },
  ],
  quickResponses: [
    {
      id: "d09-q1",
      type: "quick",
      prompt: "What kind of place would you like to visit next?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选一个类型并说明原因",
        "描述想做的一项具体活动",
        "补充预算或时间条件",
      ],
      reference: {
        paragraphs: [
          "I would like to visit a small coastal town rather than a very crowded destination. I want to walk near the sea, explore a local market, and notice how daily life differs from my own city. A short trip would be enough if I did not rush between attractions. I would travel outside the busiest holiday period to keep the cost manageable and travel on a budget.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: ["coastal town", "daily life", "cost manageable"],
      },
    },
    {
      id: "d09-q2",
      type: "quick",
      prompt: "Do you prefer traveling alone or with other people?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "给出主要偏好",
        "用一次决策情境解释",
        "说明什么情况下会改选另一种方式",
      ],
      reference: {
        paragraphs: [
          "I usually prefer traveling with one or two friends. We can share practical tasks and discuss what we notice, which often makes the experience richer. However, we need to agree on a budget and a general pace before leaving. If our interests are very different, spending part of a day separately may be better than forcing everyone to follow the same plan. I prefer to leave room for discovery.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: [
          "share practical tasks",
          "general pace",
          "spending part of a day separately",
        ],
      },
    },
  ],
  personalStatement: {
    id: "d09-statement",
    type: "statement",
    prompt:
      "Explain what students can learn from a short trip without spending much money.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [
      "用一个附近目的地贯穿90秒",
      "展开规划、观察、适应三个方面",
      "加一个具体变化或意外",
      "最后解释学习不取决于距离",
    ],
    reference: {
      paragraphs: [
        "Students do not need an expensive journey to learn from travel. A short visit to a nearby town can provide opportunities to make decisions, notice differences, and respond to unfamiliar situations. The learning depends partly on how we approach the trip.",
        "Planning a modest journey is useful practice in itself. Students must compare transport costs, choose priorities, and decide what they can realistically do in a day. During the visit, ordinary places may offer more insight than a long list of attractions. They help visitors get a sense of local life. Watching how a local market works or asking about a regional dish can raise questions about work, history, and daily habits.",
        "Unexpected changes can also teach flexibility. If a planned museum visit becomes impossible, the group has to find another activity and consider everyone's preferences. That is a practical lesson in communication. After returning, students could discuss one assumption that changed rather than simply count their photographs. For me, the value of travel lies in paying attention and making sense of new experiences. Distance and expense are only part of the story.",
      ],
      structure: [
        "开头提出个人观点",
        "分层解释原因与具体做法",
        "用经历或场景支撑观点",
        "总结收获并回扣主题",
      ],
      highlights: [
        "modest journey",
        "ordinary places",
        "teach flexibility",
        "paying attention",
      ],
    },
  },
  discussion: [
    {
      id: "d09-discussion1",
      type: "discussion",
      prompt: "Discuss how much of a trip should be planned in advance.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "认可交通住宿需确认",
        "解释过满行程的成本",
        "提出必选项目加自由时间的方案",
      ],
      reference: {
        paragraphs: [
          "I would book the essential transport and accommodation in advance, especially during busy periods. However, planning every stop can make a trip feel like completing a checklist. We may discover an interesting street or need more rest than expected. We need to adapt to unexpected changes. A few priorities and some open time would give us both security and freedom. Which decisions must be made before we leave?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "essential transport",
          "completing a checklist",
          "open time",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that planning essential arrangements reduces avoidable problems.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but a detailed timetable may limit unexpected discoveries.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that every hour of a holiday needs to be organized beforehand.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could we each choose one essential activity and leave the rest flexible?",
          },
        ],
      },
      partner: "A successful trip requires a detailed timetable for every day.",
      interaction: "区分必要安排与探索时间，邀请搭档确定共同优先项。",
    },
    {
      id: "d09-discussion2",
      type: "discussion",
      prompt:
        "Discuss whether visiting famous attractions is the best way to understand a place.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["承认地标提供历史线索", "补充普通生活观察", "给一组可互补的活动"],
      reference: {
        paragraphs: [
          "Famous attractions can provide helpful historical context, so I would not skip them automatically. Still, a place is more than its most photographed buildings. Taking a local bus, visiting a neighborhood café, or observing a public square may show how people actually spend their time. I would visit one landmark, then go beyond the tourist attractions. What could we learn from a market that a monument might not reveal?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "historical context",
          "go beyond the tourist attractions",
          "public square",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that important landmarks can explain part of a city’s history.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but everyday places reveal a different side of local life.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that seeing the main attractions means fully understanding a place.",
          },
          {
            label: "Follow-up · 追问",
            text: "How could visitors observe daily life without intruding on residents?",
          },
        ],
      },
      partner:
        "To understand a city, tourists should focus mainly on its famous attractions.",
      interaction: "补充日常生活视角，并注意观察当地人的方式。",
    },
    {
      id: "d09-discussion3",
      type: "discussion",
      prompt: "Discuss how to travel responsibly on a student budget.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "选择交通、垃圾或消费中的两点",
        "避免只提昂贵做法",
        "把尊重当地人与预算联系起来",
      ],
      reference: {
        paragraphs: [
          "Responsible travel does not always require extra money. We can use public transport where practical, carry a reusable bottle, and avoid leaving litter in public spaces. We should respect local customs too. Spending some of our budget at a small local business may also make the visit more meaningful. Most importantly, we should remember that residents are living their normal lives. How could we keep a group trip considerate without making it complicated?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: ["Responsible travel", "public transport", "normal lives"],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that visitors should consider the impact of their choices.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but recommendations must remain realistic for a student budget.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that responsible travel is only possible through expensive tours.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could our group agree on a few simple habits before departure?",
          },
        ],
      },
      partner:
        "Traveling responsibly sounds expensive and is difficult for students.",
      interaction: "用低成本行动回应顾虑，再提出全组能遵守的习惯。",
    },
  ],
  finalQuestion: {
    id: "d09-final",
    type: "final",
    prompt: "What makes a travel experience genuinely valuable to a student?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [
      "提出评价标准",
      "用具体观察或问题解决支撑",
      "解释旅行后的反思有什么作用",
    ],
    reference: {
      paragraphs: [
        "A valuable travel experience changes what a student notices or understands, even in a small way. It might involve learning to navigate an unfamiliar station, asking a thoughtful question at a museum, or realizing that local routines differ from familiar ones. These experiences encourage curiosity and practical judgment. I would also include reflection after the trip: discussing what surprised us and which assumptions were inaccurate. Without that step, travel may become only a series of photographs. A worthwhile journey leaves us with better questions and a more attentive view of everyday life.",
      ],
      structure: ["明确回应问题", "比较或解释两个要点", "用具体行动形成结论"],
      highlights: [
        "practical judgment",
        "reflection after the trip",
        "better questions",
      ],
    },
  },
  upgrades: [
    {
      basic: "Travel is fun.",
      better:
        "Travel introduces small challenges that make unfamiliar places memorable.",
      zh: "说明旅行乐趣来自哪里",
    },
    {
      basic: "I saw many places.",
      better:
        "I spent time observing how people used the market and public spaces.",
      zh: "把景点数量变成观察深度",
    },
    {
      basic: "We had a problem.",
      better: "A cancelled bus forced us to compare alternative routes.",
      zh: "用具体意外展示解决问题",
    },
    {
      basic: "We should be polite.",
      better:
        "Visitors should ask before taking photos of people or private spaces.",
      zh: "把尊重转化为可执行行为",
    },
  ],
};

export default day;
