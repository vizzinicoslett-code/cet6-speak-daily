import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day04",
  day: 4,
  topic: "Friendship",
  topicZh: "友谊与相处",
  category: "Lifestyle",
  estimatedMinutes: 18,
  focus: "通过具体互动说明友谊的价值，并练习礼貌处理分歧。",
  talkingPoints: [
    {
      en: "Build trust through actions",
      zh: "用守约和倾听说明信任如何建立",
    },
    {
      en: "Respect different boundaries",
      zh: "解释独处、隐私和不同习惯的需要",
    },
    {
      en: "Handle disagreements openly",
      zh: "把矛盾转化为具体、可谈的问题",
    },
  ],
  expressions: [
    {
      en: "keep in touch",
      zh: "保持联系",
      example: "We keep in touch through short calls every weekend.",
    },
    {
      en: "be there for someone",
      zh: "在某人需要时给予支持",
      example: "A good friend will be there for you during difficult times.",
    },
    {
      en: "respect personal boundaries",
      zh: "尊重个人边界",
      example: "Close friends should still respect personal boundaries.",
    },
    {
      en: "see things from another perspective",
      zh: "从另一个角度看问题",
      example: "Her questions help me see things from another perspective.",
    },
    {
      en: "clear up a misunderstanding",
      zh: "消除误解",
      example: "We met after class to clear up a misunderstanding.",
    },
    {
      en: "build mutual trust",
      zh: "建立相互信任",
      example: "Keeping small promises helps build mutual trust.",
    },
  ],
  sentenceFrames: [
    {
      en: "A quality I value in a friend is ..., because ...",
      zh: "我看重朋友的……品质，因为……",
    },
    {
      en: "We became closer when ...",
      zh: "当……时，我们的关系变得更亲近",
    },
    {
      en: "If a disagreement arose, I would first ...",
      zh: "如果出现分歧，我首先会……",
    },
    {
      en: "Although we have different ..., we ...",
      zh: "虽然我们的……不同，我们仍然……",
    },
  ],
  quickResponses: [
    {
      id: "d04-q1",
      type: "quick",
      prompt: "What quality do you value most in a friend?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选诚实、可靠或愿意倾听之一",
        "用一次小事证明",
        "说明它为何比共同爱好更重要",
      ],
      reference: {
        paragraphs: [
          "I value reliability most in a friend. Shared interests are enjoyable, but I feel especially comfortable with someone who keeps promises and tells me honestly when plans change. For example, my friend once helped me rehearse a presentation even during her busy week. That small action showed me I could depend on her. Trust grows through these ordinary moments rather than impressive words.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: ["value reliability", "keeps promises", "ordinary moments"],
      },
    },
    {
      id: "d04-q2",
      type: "quick",
      prompt: "How do you stay in touch with an old friend?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: ["说明一种常用方式", "给出消息或通话内容", "强调频率之外的用心"],
      reference: {
        paragraphs: [
          "I keep in touch with an old school friend by sending short messages about things that remind me of her. Sometimes it is a funny photo, and sometimes it is a question about her studies. We also arrange a call when both of us have time. We do not speak every day, but the conversations feel natural because we remain interested in each other.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: ["keep in touch", "remain interested", "feel natural"],
      },
    },
  ],
  personalStatement: {
    id: "d04-statement",
    type: "statement",
    prompt: "Describe what makes a friendship last through changes in life.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [
      "按“联系—理解—信任”三个方面组织",
      "给出朋友搬到别处的情境",
      "说明关系不必维持同样频率",
      "结尾强调双方的行动",
    ],
    reference: {
      paragraphs: [
        "I think a friendship lasts when both people remain interested in each other while accepting that life will change. Friends may attend different universities, develop new interests, or become busy at different times. Expecting the relationship to stay exactly the same can create unnecessary disappointment.",
        "Regular contact is helpful, but its quality matters more than its frequency. A thoughtful message asking about an important exam can mean more than dozens of empty greetings. When my school friend moved to another city, we started arranging occasional calls instead of expecting immediate replies throughout the day. That made our conversations more relaxed.",
        "Trust is equally important. Friends should respect personal boundaries and feel able to say when something has hurt them. To clear up a misunderstanding, both people need to listen before defending themselves. For me, lasting friendship does not require constant agreement or constant contact. It requires small, reliable efforts from both sides and enough generosity to let each other grow into different stages of life.",
      ],
      structure: [
        "开头提出个人观点",
        "分层解释原因与具体做法",
        "用经历或场景支撑观点",
        "总结收获并回扣主题",
      ],
      highlights: [
        "remain interested",
        "quality matters",
        "respect personal boundaries",
        "reliable efforts",
      ],
    },
  },
  discussion: [
    {
      id: "d04-discussion1",
      type: "discussion",
      prompt: "Discuss whether close friends need the same interests.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "先谈共同兴趣带来的便利",
        "再举不同兴趣的益处",
        "提出比兴趣更深的共同基础",
      ],
      reference: {
        paragraphs: [
          "Common interests certainly make it easier to start a conversation. However, I do not think close friends need identical hobbies. One of my friends enjoys painting, while I prefer sport, and we help each other see things from another perspective. What matters more is being curious and respectful. We can support an interest without sharing it ourselves. Would you put shared values above shared activities?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "Common interests",
          "curious and respectful",
          "shared values",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that shared activities provide natural opportunities to meet.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but common hobbies alone do not guarantee trust.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that different interests prevent a close friendship.",
          },
          {
            label: "Follow-up · 追问",
            text: "Which differences can make a friendship more interesting?",
          },
        ],
      },
      partner:
        "People become close friends mainly because they enjoy the same activities.",
      interaction: "承认共同兴趣的作用，再比较兴趣与价值观。",
    },
    {
      id: "d04-discussion2",
      type: "discussion",
      prompt: "Discuss how friends should resolve a disagreement.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "先回应直接沟通",
        "选择合适时间与语气",
        "说清具体行为而不是给人贴标签",
      ],
      reference: {
        paragraphs: [
          "I agree that an honest conversation is usually better than avoiding each other. Timing matters, though. If both friends are angry, a short pause may help them speak more clearly. I would describe the specific behavior that upset me and explain its effect, then listen to the other side. That approach leaves room for a misunderstanding. How could we begin without sounding accusatory? The aim is to be there for someone, even during disagreement.",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "Timing matters",
          "specific behavior",
          "listen to the other side",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that discussing the issue early can prevent resentment.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but people may need time to calm down first.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree with criticizing a friend publicly to force an explanation.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could we start with how we felt rather than what the friend is like?",
          },
        ],
      },
      partner:
        "Friends should discuss a disagreement immediately and say everything they think.",
      interaction: "保留坦诚沟通，补充时机和表达方式的条件。",
    },
    {
      id: "d04-discussion3",
      type: "discussion",
      prompt: "Discuss whether friendship needs daily contact.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "区分回复速度与关心程度",
        "考虑课程和生活差异",
        "提出双方能够维持的联系方法",
      ],
      reference: {
        paragraphs: [
          "Daily contact can be enjoyable, but making it a rule may put pressure on a friendship. People have different schedules, and a slow reply does not always mean a lack of care. I would rather agree on occasional calls and send meaningful messages when something happens. Consistency matters more than a fixed number of conversations. What would feel comfortable for friends in different cities?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "a lack of care",
          "meaningful messages",
          "Consistency matters",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that regular contact helps friends understand each other’s lives.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but daily messages should remain a choice.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that a slow reply automatically shows a weak friendship.",
          },
          {
            label: "Follow-up · 追问",
            text: "How could friends discuss different expectations about messaging?",
          },
        ],
      },
      partner:
        "If friends do not message every day, they will gradually stop being close.",
      interaction: "反对绝对推断，提出兼顾关心与边界的联系方式。",
    },
  ],
  finalQuestion: {
    id: "d04-final",
    type: "final",
    prompt:
      "How can a student build meaningful friendships in a new environment?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: ["从重复接触和真实互动谈起", "给一个校园场景", "强调时间与双方投入"],
    reference: {
      paragraphs: [
        "A student can begin by joining a small activity that meets regularly, such as a reading group or a sports club. Seeing the same people repeatedly creates chances for natural conversation. Then the student should show interest in others by asking questions, remembering details, and keeping small promises. Inviting a classmate for lunch can be more useful than collecting many online contacts. Meaningful friendships usually grow gradually, so it is also important to be patient. The aim is to build mutual trust through shared experiences and considerate actions over time.",
      ],
      structure: ["明确回应问题", "比较或解释两个要点", "用具体行动形成结论"],
      highlights: ["meets regularly", "show interest", "build mutual trust"],
    },
  },
  upgrades: [
    {
      basic: "My friend is very good.",
      better: "My friend is reliable and listens without interrupting.",
      zh: "用行为呈现品质",
    },
    {
      basic: "We talk a lot.",
      better: "We make time for honest conversations about our daily lives.",
      zh: "说明交流的内容和质量",
    },
    {
      basic: "We never fight.",
      better: "We can disagree without losing respect for each other.",
      zh: "用成熟处理分歧替代绝对表述",
    },
    {
      basic: "Friends are important.",
      better:
        "Friendship gives me both emotional support and a broader perspective.",
      zh: "把重要性分成具体价值",
    },
  ],
};

export default day;
