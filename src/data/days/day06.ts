import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day06",
  day: 6,
  topic: "Exercise and Fitness",
  topicZh: "运动与体能",
  category: "Lifestyle",
  estimatedMinutes: 18,
  focus: "用低门槛的运动场景展开，说明坚持的方法与现实限制。",
  talkingPoints: [
    {
      en: "Choose enjoyable movement",
      zh: "把兴趣与能够持续的运动联系起来",
    },
    {
      en: "Fit exercise into daily routines",
      zh: "利用课间、通勤或固定时段增加活动",
    },
    {
      en: "Value consistency over competition",
      zh: "用稳定参与而不是单一成绩衡量进步",
    },
  ],
  expressions: [
    {
      en: "stay physically active",
      zh: "保持身体活动",
      example: "I walk to class to stay physically active.",
    },
    {
      en: "build up gradually",
      zh: "逐渐增加",
      example:
        "Beginners can build up gradually as they feel more comfortable.",
    },
    {
      en: "fit into my routine",
      zh: "融入日常安排",
      example: "A short evening walk fits into my routine.",
    },
    {
      en: "work out with a friend",
      zh: "和朋友一起锻炼",
      example: "I work out with a friend when we both have free time.",
    },
    {
      en: "a sense of progress",
      zh: "进步感",
      example:
        "Walking farther without feeling tired gives me a sense of progress.",
    },
    {
      en: "keep the habit going",
      zh: "让习惯持续",
      example: "An enjoyable activity helps me keep the habit going.",
    },
  ],
  sentenceFrames: [
    {
      en: "The form of exercise I enjoy most is ...",
      zh: "我最喜欢的运动方式是……",
    },
    {
      en: "I find it easier to exercise when ...",
      zh: "当……时，我更容易坚持运动",
    },
    {
      en: "For someone who is just starting, I would suggest ...",
      zh: "对刚开始运动的人，我建议……",
    },
    {
      en: "My goal is not simply to ..., but to ...",
      zh: "我的目标不仅是……，还包括……",
    },
  ],
  quickResponses: [
    {
      id: "d06-q1",
      type: "quick",
      prompt: "What kind of exercise do you enjoy?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: ["选一项你熟悉的运动", "描述过程中的乐趣", "说明你如何安排频率"],
      reference: {
        paragraphs: [
          "I enjoy badminton because quick decisions help me stay physically active and alert. My roommate and I usually play after our Thursday classes. We are not highly skilled, so we focus on keeping a rally going rather than counting every point. The game helps me stop thinking about assignments for a while. It is also an enjoyable way to spend time together without looking at screens.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: [
          "quick decisions",
          "keeping a rally going",
          "enjoyable way",
        ],
      },
    },
    {
      id: "d06-q2",
      type: "quick",
      prompt: "What makes it difficult for students to exercise regularly?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选时间、场地、费用或缺少伙伴",
        "举一个典型场景",
        "提出一个可以开始的小改变",
      ],
      reference: {
        paragraphs: [
          "A common difficulty is thinking that exercise requires a large block of free time. After classes and homework, students may feel that a full gym session is impossible. I think smaller opportunities are easier to use. Walking part of the way to class or stretching during a study break can be a beginning. Once movement fits the day, a longer activity may become more realistic. I would build up gradually from there.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: ["free time", "smaller opportunities", "fits the day"],
      },
    },
  ],
  personalStatement: {
    id: "d06-statement",
    type: "statement",
    prompt:
      "Describe how you would build a sustainable exercise routine as a student.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [
      "先选适合自己的活动",
      "安排具体时间与替代方案",
      "解释如何看待进步和中断",
      "可加入与朋友约定的情境",
    ],
    reference: {
      paragraphs: [
        "To build an exercise routine, I would start with an activity I actually enjoy and a schedule I can maintain during an ordinary study week, so movement can fit into my routine. An ambitious plan may feel exciting, but it is less useful if I stop after three days.",
        "My first choice would be two short badminton sessions each week. I would arrange them with a friend after classes, when we are already near the sports hall. Making a clear appointment would reduce the chance of postponing it. If the hall were full, we could take a walk instead. Having an alternative would help us keep the habit going without treating one changed plan as a failure.",
        "I would judge progress by consistency and how I feel, rather than comparing myself with experienced players. I might notice better concentration after a game or greater confidence with a new movement. During a very busy week, I could shorten a session and return to the normal routine afterward. For me, sustainable exercise should support student life and remain enjoyable enough to repeat.",
      ],
      structure: [
        "开头提出个人观点",
        "分层解释原因与具体做法",
        "用经历或场景支撑观点",
        "总结收获并回扣主题",
      ],
      highlights: [
        "schedule I can maintain",
        "clear appointment",
        "keep the habit going",
        "judge progress",
      ],
    },
  },
  discussion: [
    {
      id: "d06-discussion1",
      type: "discussion",
      prompt:
        "Discuss whether exercising with friends is better than exercising alone.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "回应同伴的鼓励作用",
        "考虑时间和个人偏好",
        "提出灵活组合两种方式",
      ],
      reference: {
        paragraphs: [
          "Exercising with friends can make it easier to begin because someone is expecting us to show up. It also makes activities like badminton possible. However, waiting for everyone to be free can become another excuse. I would combine a regular group activity where I work out with a friend and something simple I can do alone, such as walking. Which arrangement would work best during a busy exam week?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: ["show up", "regular group activity", "do alone"],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that company can make exercise more enjoyable and consistent.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but shared schedules are not always easy to arrange.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that exercising alone is necessarily less motivating.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could students keep a solo option for days when friends are busy?",
          },
        ],
      },
      partner:
        "Students are more likely to exercise regularly if they always do it with friends.",
      interaction: "赞同同伴支持，但提出不依赖所有人同时有空的方案。",
    },
    {
      id: "d06-discussion2",
      type: "discussion",
      prompt: "Discuss how universities should encourage physical activity.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "从便利性而非口号入手",
        "给场地、器材或活动设计的建议",
        "询问不同学生的需求",
      ],
      reference: {
        paragraphs: [
          "I think convenient access would encourage participation more than another poster telling students to exercise. Universities could offer simple booking systems, lend basic equipment, and provide beginner sessions at different times. Students who feel inexperienced may need a welcoming introduction before joining a game. We should also include activities that do not require expensive facilities. What obstacles do students on our campus mention most often?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "convenient access",
          "beginner sessions",
          "welcoming introduction",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that affordable sports facilities would remove a practical barrier.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but facilities need opening hours that match students’ schedules.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree with relying only on competitive events to attract beginners.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could students help design activities for people with little experience?",
          },
        ],
      },
      partner:
        "The university should organize more sports competitions to encourage exercise.",
      interaction: "把竞赛建议扩展到便利性与新手参与，提出需求调查。",
    },
    {
      id: "d06-discussion3",
      type: "discussion",
      prompt:
        "Discuss whether exercise goals should focus on results or habits.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "区分成绩目标与参与目标",
        "举初学者容易受挫的例子",
        "提出可观察但不苛刻的指标",
      ],
      reference: {
        paragraphs: [
          "Results can give people a sense of direction, but I would focus on habits at the beginning. A beginner who checks speed every day may feel disappointed even while becoming more consistent. A goal such as attending two enjoyable sessions each week is easier to control. Later, performance targets can be added if the person wants them. What would count as meaningful progress for you? Consistency gives me a sense of progress.",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "sense of direction",
          "more consistent",
          "easier to control",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that a clear target can make progress easier to notice.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but results should not be the only source of motivation.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that comparing scores with others is essential for improvement.",
          },
          {
            label: "Follow-up · 追问",
            text: "Would a weekly participation goal be more encouraging for beginners?",
          },
        ],
      },
      partner:
        "Students need clear performance targets, or their exercise will have no effect.",
      interaction: "保留目标价值，强调初期可控制的习惯指标。",
    },
  ],
  finalQuestion: {
    id: "d06-final",
    type: "final",
    prompt:
      "What would you recommend to a student who dislikes traditional sports?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: ["避免假设人人喜欢比赛", "给两种低门槛选择", "让学生自行尝试并判断"],
    reference: {
      paragraphs: [
        "I would suggest exploring movement that does not feel like a traditional sports lesson. The student could try walking with music, dancing with friends, or cycling along a pleasant route. Enjoyment matters because a disliked activity is hard to repeat. I would also encourage a small experiment, such as choosing one activity for two weeks and noticing how it fits their schedule. They do not need to become competitive or buy special equipment immediately. The useful goal is to find a comfortable way to stay active regularly.",
      ],
      structure: ["明确回应问题", "比较或解释两个要点", "用具体行动形成结论"],
      highlights: [
        "small experiment",
        "fits their schedule",
        "stay active regularly",
      ],
    },
  },
  upgrades: [
    {
      basic: "Exercise is good.",
      better: "Regular movement helps me feel more energetic during the day.",
      zh: "把好处落到个人体验",
    },
    {
      basic: "I do sports often.",
      better: "I play badminton twice a week with my roommates.",
      zh: "补充频率和场景",
    },
    {
      basic: "Running is boring.",
      better: "I lose motivation when I repeat the same route every day.",
      zh: "解释感受形成的原因",
    },
    {
      basic: "Everyone should go to the gym.",
      better:
        "Students can choose an affordable activity that suits their interests.",
      zh: "让建议适合不同条件",
    },
  ],
};

export default day;
