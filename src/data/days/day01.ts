import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day01",
  day: 1,
  topic: "Independent Living",
  topicZh: "独立生活",
  category: "Lifestyle",
  estimatedMinutes: 18,
  focus:
    "先说一个真实困难，再给出原因、做法和结果，避免只说 independent 很重要。",
  talkingPoints: [
    {
      en: "Handle everyday responsibilities",
      zh: "用洗衣、缴费、整理等日常任务说明独立",
    },
    {
      en: "Ask for help wisely",
      zh: "独立不等于拒绝帮助，说明何时求助",
    },
    {
      en: "Build confidence gradually",
      zh: "把小成功与信心建立联系起来",
    },
  ],
  expressions: [
    {
      en: "take care of myself",
      zh: "照顾自己",
      example: "Living on campus has taught me to take care of myself.",
    },
    {
      en: "live within my means",
      zh: "量入为出",
      example: "I plan my meals so that I can live within my means.",
    },
    {
      en: "learn by trial and error",
      zh: "在尝试和犯错中学习",
      example: "I learned to cook by trial and error.",
    },
    {
      en: "keep track of expenses",
      zh: "记录开支",
      example: "I use a notebook to keep track of expenses.",
    },
    {
      en: "ask for practical advice",
      zh: "寻求实用建议",
      example: "I ask for practical advice when a problem is unfamiliar.",
    },
    {
      en: "be responsible for",
      zh: "对……负责",
      example: "I am responsible for keeping my room clean.",
    },
  ],
  sentenceFrames: [
    {
      en: "The hardest part of living independently is ..., because ...",
      zh: "独立生活最难的是……，因为……",
    },
    {
      en: "At first I ..., but now I ...",
      zh: "起初我……，但现在我……",
    },
    {
      en: "One small habit that helps me is ...",
      zh: "对我有帮助的一个小习惯是……",
    },
    {
      en: "Being independent does not mean ...; it means ...",
      zh: "独立并不意味着……，它意味着……",
    },
  ],
  quickResponses: [
    {
      id: "d01-q1",
      type: "quick",
      prompt: "What daily task makes you feel more independent?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选一件小事：做饭、洗衣或管理零花钱",
        "说起初的困难，再说现在能做到什么",
        "结尾说明信心如何变化",
      ],
      reference: {
        paragraphs: [
          "Cooking a simple dinner makes me feel more independent. Before university, my parents prepared almost every meal for me. Now I can buy vegetables, follow a recipe, and clean the kitchen afterward. My food is not always delicious, but completing the whole process gives me confidence. It also helps me appreciate how much effort my family puts into everyday life. The process helps me take care of myself.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: [
          "more independent",
          "follow a recipe",
          "gives me confidence",
        ],
      },
    },
    {
      id: "d01-q2",
      type: "quick",
      prompt: "Who do you ask for help when you face a practical problem?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "可以选择室友、家人或有经验的同学",
        "给出一个具体问题",
        "说明听建议之后仍由自己行动",
      ],
      reference: {
        paragraphs: [
          "I usually ask my roommate first because we face similar problems on campus. For example, when I could not use the washing machine, she showed me which setting to choose. I tried it myself the next time. When I ask for practical advice, I still make the decision. It gives me the knowledge I need to solve the same problem on my own.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: ["practical advice", "on my own"],
      },
    },
  ],
  personalStatement: {
    id: "d01-statement",
    type: "statement",
    prompt:
      "Describe an important lesson you have learned from living away from home.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [
      "准备时写四个词：困难—行动—例子—收获",
      "可选预算、作息、饮食或整理",
      "讲一个小事件，而不是列出所有生活技能",
      "结尾用一句话重新定义独立",
    ],
    reference: {
      paragraphs: [
        "Living away from home has taught me that independence is mainly about taking responsibility for ordinary decisions. At home, someone often reminded me to get up or bring an umbrella. At university, the consequences of forgetting these things are mine.",
        "My biggest lesson came from spending too much money during my first month. I bought snacks and ordered food without checking the total. When I had little money left, I made a weekly budget and started to keep track of expenses so I could live within my means. I also learned to prepare a few affordable meals. These changes were small, but they made daily life much calmer.",
        "Another lesson is that asking for help can be a responsible choice. When I do not understand a bill or a safety rule, I ask someone experienced instead of pretending to know everything. I listen, make a decision, and carry it out myself. For me, becoming independent is a gradual process of learning useful skills, accepting mistakes, and making better choices the next time.",
      ],
      structure: [
        "开头提出个人观点",
        "分层解释原因与具体做法",
        "用经历或场景支撑观点",
        "总结收获并回扣主题",
      ],
      highlights: [
        "taking responsibility",
        "weekly budget",
        "keep track of expenses",
        "gradual process",
      ],
    },
  },
  discussion: [
    {
      id: "d01-discussion1",
      type: "discussion",
      prompt: "Discuss whether first-year students should live on campus.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "先回应“住校有助独立”",
        "补充一个校园生活场景",
        "把话题交还给搭档",
      ],
      reference: {
        paragraphs: [
          "I agree that living on campus is a useful first step toward independence. Students must organize their own mornings, share responsibility for a room, and be responsible for their choices, but support is still nearby. For instance, a roommate can help when someone feels ill. This balance seems better than moving into an apartment immediately. Which campus responsibility do you think teaches students the most?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "first step",
          "share responsibility",
          "support is still nearby",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree because campus life offers both responsibility and support.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, although some students need time at home to adjust.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that everyone must live on campus; commuting students can develop these skills too.",
          },
          {
            label: "Follow-up · 追问",
            text: "How could universities support students who feel overwhelmed?",
          },
        ],
      },
      partner:
        "I think living on campus is the best way for new students to become independent.",
      interaction: "先承认住校的价值，再补充一个理由，最后提出一个具体问题。",
    },
    {
      id: "d01-discussion2",
      type: "discussion",
      prompt: "Discuss how students can manage their living expenses.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "回应预算是否有必要",
        "举饮食或购物的例子",
        "提出一种不复杂的记录方式",
      ],
      reference: {
        paragraphs: [
          "Your idea of a budget sounds sensible. I would keep it simple, though, because a complicated system is easy to abandon. Students could divide their money into food, transport, and other needs, then check the totals every Sunday. Leaving a small amount for enjoyable activities also matters. Otherwise, the plan may feel like punishment. Shall we include an emergency fund as well?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: ["keep it simple", "emergency fund"],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that a weekly spending limit can prevent unpleasant surprises.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but the budget should allow some flexibility.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree with recording every tiny purchase if it makes students anxious.",
          },
          {
            label: "Follow-up · 追问",
            text: "What would be a realistic amount to save for emergencies?",
          },
        ],
      },
      partner:
        "Students should record every purchase to avoid running out of money.",
      interaction: "用温和限定表达部分赞同，并共同完善预算建议。",
    },
    {
      id: "d01-discussion3",
      type: "discussion",
      prompt:
        "Discuss the relationship between independence and asking for help.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "明确独立与求助可以共存",
        "区分索要答案与学习方法",
        "可用一次维修或生活困难作例子",
      ],
      reference: {
        paragraphs: [
          "I see your point, but I would not judge independence by how rarely someone asks for help. A more useful measure is whether they learn from the advice. If I ask a friend to explain a repair and then do it myself, I gain a skill. Depending on others to do everything is different. What kinds of help actually build independence?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: ["learn from the advice", "gain a skill"],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that students should attempt manageable tasks before requesting help.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but unfamiliar safety problems require immediate guidance.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that asking questions shows weakness; it can prevent repeated mistakes.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could we distinguish getting guidance from avoiding responsibility?",
          },
        ],
      },
      partner:
        "If students keep asking other people for help, they are not truly independent.",
      interaction: "礼貌反对绝对化观点，给出区分标准后追问。",
    },
  ],
  finalQuestion: {
    id: "d01-final",
    type: "final",
    prompt:
      "What is one practical step you would recommend to a student preparing to live independently?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [
      "只选一个可执行的起点",
      "说明如何连续实践一周",
      "收尾点明它能迁移到哪些生活任务",
    ],
    reference: {
      paragraphs: [
        "I would recommend taking responsibility for one complete daily task before leaving home. Preparing dinner is a good example. The student should choose a meal, check the ingredients, buy what is needed, cook, and clean up. Doing the full task helps them learn by trial and error and reveals details that are easy to overlook when parents help. After repeating it for a week, the student can reflect on cost and time. This small practice builds confidence and a habit of planning, which are useful for managing many other parts of independent life.",
      ],
      structure: ["明确回应问题", "比较或解释两个要点", "用具体行动形成结论"],
      highlights: [
        "one complete daily task",
        "builds confidence",
        "habit of planning",
      ],
    },
  },
  upgrades: [
    {
      basic: "I can do many things.",
      better: "I can manage my meals, laundry, and weekly budget.",
      zh: "用具体任务替换笼统的 many things",
    },
    {
      basic: "Living alone is hard.",
      better: "Living away from home requires careful planning.",
      zh: "解释困难体现在哪里",
    },
    {
      basic: "I ask my parents.",
      better: "I seek advice from my parents before making my own decision.",
      zh: "保留求助与自主决定的关系",
    },
    {
      basic: "I feel good.",
      better: "Finishing everyday tasks gives me a sense of achievement.",
      zh: "准确表达完成任务后的成就感",
    },
  ],
};

export default day;
