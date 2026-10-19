import type { TrainingDay } from "../../types";

const day = {
  id: "day13",
  day: 13,
  topic: "Social Media",
  topicZh: "社交媒体",
  category: "Technology",
  estimatedMinutes: 18,
  focus: "扩展回答：观点、原因、生活实例与适度让步",
  talkingPoints: [
    {
      en: "Connection and distraction",
      zh: "连接与分心",
    },
    {
      en: "Reliable information",
      zh: "可靠的信息",
    },
    {
      en: "Healthy boundaries",
      zh: "健康的使用边界",
    },
  ],
  expressions: [
    {
      en: "keep in touch",
      zh: "保持联系",
      example:
        "Our class group helps exchange students keep in touch during the holidays.",
    },
    {
      en: "without a purpose",
      zh: "没有明确目的地",
      example:
        "Opening a feed without a purpose often distracts me from revision.",
    },
    {
      en: "support networks",
      zh: "支持网络",
      example:
        "New students build support networks through course groups and campus clubs.",
    },
    {
      en: "purposeful use",
      zh: "有明确目的的使用",
      example:
        "Purposeful use means opening the app to complete a particular task.",
    },
    {
      en: "media literacy",
      zh: "媒介素养",
      example:
        "A media literacy workshop can teach us how to check a scholarship notice.",
    },
    {
      en: "planned breaks",
      zh: "计划好的休息时段",
      example:
        "We read group messages only during planned breaks in our study session.",
    },
  ],
  sentenceFrames: [
    {
      en: "One benefit I value is ..., especially when ...",
      zh: "我看重的一个好处是……，尤其当……",
    },
    {
      en: "That said, I have noticed that ...",
      zh: "不过，我注意到……",
    },
    {
      en: "A small change that helped me was ...",
      zh: "对我有帮助的一个小改变是……",
    },
    {
      en: "The key is to use it for ... instead of ...",
      zh: "关键是把它用于……而非……",
    },
  ],
  upgrades: [
    {
      basic: "Social media is useful.",
      better:
        "Social media helps me maintain friendships across different cities.",
      zh: "用具体用途替代笼统评价。",
    },
    {
      basic: "It wastes time.",
      better:
        "Unplanned scrolling often takes time away from sleep and revision.",
      zh: "说明被挤占的活动。",
    },
    {
      basic: "Some news is wrong.",
      better: "A convincing headline may still come from an unreliable source.",
      zh: "指出可信外表与来源之间的区别。",
    },
    {
      basic: "We should use it less.",
      better: "We can reserve two short periods a day for checking updates.",
      zh: "把建议变成可执行安排。",
    },
  ],
  quickResponses: [
    {
      prompt: "How do you usually use social media?",
      hints: ["主要用途", "一次校园实例", "潜在问题"],
      reference: {
        paragraphs: [
          "I mainly use social media to keep in touch with friends and find useful campus information. For example, our class group shares changes to lecture rooms, which saves everyone time. I also follow a few science accounts. However, I try to avoid opening the app without a purpose, because a short check can easily become half an hour of scrolling.",
        ],
        structure: ["说明用途", "举出实例", "补充边界"],
        highlights: ["keep in touch", "without a purpose"],
      },
      id: "d13-q1",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
    {
      prompt: "Can social media make people feel lonely?",
      hints: ["先作判断", "对比浏览与交流", "个人经历"],
      reference: {
        paragraphs: [
          "Yes, it can, although the effect depends on how people use it. Looking at other people’s carefully selected photos may make an ordinary evening seem disappointing. Last winter, I felt better after calling a friend instead of silently checking her updates. Social media supports friendship when it starts a real conversation, but simply watching other lives may increase the distance between us.",
        ],
        structure: ["有条件地表态", "说明心理机制", "用经历收束"],
        highlights: ["depends on", "real conversation"],
      },
      id: "d13-q2",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
  ],
  personalStatement: {
    prompt:
      "Describe the role of social media in university students’ lives and suggest ways to use it well.",
    hints: ["先谈两类价值", "用学习照片说明压力", "给出可落实的建议"],
    reference: {
      paragraphs: [
        "Social media has become part of university life because it combines practical information with personal connection. A student can find a secondhand textbook, discover a club activity, and speak to a friend abroad through the same phone. These uses are particularly valuable for new students who are still building their support networks.",
        "However, convenience does not guarantee a healthy experience. Information spreads quickly, while checking its accuracy takes time. There is also pressure to present an exciting life. During an examination period, I once kept checking other students’ study photos and became anxious about my own progress, even though those pictures revealed very little about their actual learning.",
        "I think the solution is purposeful use. Before opening an app, students can decide what they need and stop when that task is finished. They should check the original source of important claims and protect private details. Universities can also teach practical media literacy through realistic examples. With these habits, social media can support relationships and learning while leaving enough attention for activities beyond the screen.",
      ],
      structure: ["介绍校园价值", "分析信息与比较压力", "提出个人及学校措施"],
      highlights: ["support networks", "purposeful use", "media literacy"],
    },
    id: "d13-statement",
    type: "statement",
    prepareSeconds: 60,
    speakingSeconds: 90,
  },
  discussion: [
    {
      prompt:
        "Your partner suggests banning social media during all study sessions. Respond and develop the idea.",
      hints: ["先承认干扰", "区分学习用途", "提出追问"],
      reference: {
        paragraphs: [
          "I agree that social media can interrupt concentration, especially when every notification feels urgent. Still, some study groups need a shared chat to exchange documents or ask questions. Perhaps we could mute unrelated accounts and check the course group only at planned breaks. That would protect focused work while keeping useful communication available. Have you tried studying with notifications turned off?",
        ],
        structure: ["回应建议", "限定适用范围", "提出折中并追问"],
        highlights: ["planned breaks", "focused work"],
        alternatives: [
          {
            label: "Agree",
            text: "I agree with a ban during individual reading because repeated interruptions make it difficult to follow a complex argument.",
          },
          {
            label: "Partly agree",
            text: "I agree about casual browsing, but a course group may still be useful when students need to coordinate a project.",
          },
          {
            label: "Disagree",
            text: "I would avoid a complete ban because some students rely on these platforms to access their class materials.",
          },
          {
            label: "Follow-up",
            text: "Would your rule also apply when a group needs to contact an absent team member?",
          },
        ],
      },
      partner:
        "We should completely ban social media whenever students are studying.",
      interaction: "先回应对方，再补充条件，并邀请对方参与。",
      id: "d13-discussion1",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Your partner thinks popular posts are usually trustworthy. Explain your concern politely.",
      hints: ["解释传播量的局限", "给出通知实例", "邀请判断"],
      reference: {
        paragraphs: [
          "I understand why a widely shared post seems convincing, since so many people appear to support it. However, popularity tells us about attention rather than accuracy. A scholarship notice in my class group once used an old deadline, although dozens of students forwarded it. We should check the university website before acting. What signs would help you judge whether a post deserves trust?",
        ],
        structure: ["理解对方", "反例解释", "给出核实办法"],
        highlights: ["rather than accuracy", "before acting"],
        alternatives: [
          {
            label: "Agree",
            text: "Many shares can help us notice an issue, and sometimes a popular post links to strong original evidence.",
          },
          {
            label: "Partly agree",
            text: "A popular post may be useful, but I would still inspect its author and publication date.",
          },
          {
            label: "Disagree",
            text: "I disagree because repeated sharing can spread an attractive mistake just as easily as a verified fact.",
          },
          {
            label: "Follow-up",
            text: "Would you check the original source before forwarding a notice about an important deadline?",
          },
        ],
      },
      partner: "If thousands of people share a post, it is probably reliable.",
      interaction: "用礼貌质疑加具体反例推进交流。",
      id: "d13-discussion2",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Agree on one realistic habit that would improve students’ social media use.",
      hints: ["承接伙伴想法", "安排两个时段", "讨论如何评估"],
      reference: {
        paragraphs: [
          "Your idea of a daily limit is useful, and I would make it easier by choosing specific checking times. For instance, we could read updates after lunch and dinner, while keeping phones away during conversations. This habit has a clear routine and does not require deleting every app. We could try it for one week and compare our concentration and mood afterward.",
        ],
        structure: ["承接建议", "具体化习惯", "约定试行反馈"],
        highlights: ["specific checking times", "one week"],
        alternatives: [
          {
            label: "Agree",
            text: "A daily limit is a helpful start because it makes the amount of time visible.",
          },
          {
            label: "Partly agree",
            text: "A limit can work, but choosing when to check may be more practical than counting every minute.",
          },
          {
            label: "Disagree",
            text: "I would focus on removing distracting accounts first because a timer alone may not change what we consume.",
          },
          {
            label: "Follow-up",
            text: "Should we compare screen time and mood after trying the routine for a week?",
          },
        ],
      },
      partner: "Let us set a strict time limit, but I worry we will ignore it.",
      interaction: "把共同想法转化成可评估的小行动。",
      id: "d13-discussion3",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
  ],
  finalQuestion: {
    prompt:
      "What is the most important principle for using social media responsibly?",
    hints: ["一个核心原则", "说明后果", "具体行为"],
    reference: {
      paragraphs: [
        "For me, the most important principle is to pause before reacting. A short pause gives us time to ask whether information is accurate, whether a comment is fair, and whether sharing a photo respects someone else’s privacy. This matters because an impulsive action can reach far beyond our original audience. For example, I now ask friends before posting pictures from a private gathering. The pause does not remove the enjoyment of social media. It helps us make choices that protect both our own attention and other people’s trust.",
      ],
      structure: ["提出原则", "解释三种应用", "实例与结论"],
      highlights: ["pause before reacting", "other people’s trust"],
    },
    id: "d13-final",
    type: "final",
    prepareSeconds: 5,
    speakingSeconds: 45,
  },
} satisfies TrainingDay;

export default day;
