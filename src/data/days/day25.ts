import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day25",
  day: 25,
  topic: "Responsible Spending",
  topicZh: "理性消费",
  category: "Lifestyle",
  estimatedMinutes: 18,
  focus: "综合检验：独立陈述预算选择，并协商有边界的消费方案。",
  talkingPoints: [
    {
      en: "Separate genuine needs from temporary wants.",
      zh: "区分真实需要与一时欲望。",
    },
    {
      en: "Compare total costs instead of headline prices.",
      zh: "比较总成本而非宣传价格。",
    },
    {
      en: "Protect shared budgets without judging others.",
      zh: "维护共同预算，避免评判他人。",
    },
  ],
  expressions: [
    {
      en: "live within my means",
      zh: "量入为出",
      example: "I try to live within my means even during shopping festivals.",
    },
    {
      en: "impulse purchase",
      zh: "冲动购物",
      example: "Waiting overnight can prevent an impulse purchase.",
    },
    {
      en: "value for money",
      zh: "性价比",
      example: "A durable backpack offers better value for money.",
    },
    {
      en: "set a spending limit",
      zh: "设定消费上限",
      example: "We should set a spending limit before planning the dinner.",
    },
    {
      en: "hidden costs",
      zh: "隐性成本",
      example: "Delivery fees are hidden costs worth checking.",
    },
    {
      en: "financial cushion",
      zh: "财务缓冲",
      example: "A small financial cushion helps me handle unexpected bills.",
    },
  ],
  sentenceFrames: [
    {
      en: "Before buying ..., I ask myself whether ...",
      zh: "购买……之前，我会问自己是否……",
    },
    {
      en: "Although ... seems cheaper, ...",
      zh: "虽然……看起来更便宜，但……",
    },
    {
      en: "We could keep ... while reducing ...",
      zh: "我们可以保留……，同时减少……",
    },
    {
      en: "Would everyone be comfortable with ...?",
      zh: "大家能接受……吗？",
    },
  ],
  quickResponses: [
    {
      id: "d25-q1",
      type: "quick",
      prompt: "What do you usually consider before buying an expensive item?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: ["need", "budget"],
      reference: {
        paragraphs: [
          "Before buying an expensive item, I consider whether I will use it regularly and whether it fits my budget. For example, I would compare the repair service and battery life of two laptops instead of choosing by appearance alone. I also wait a few days before deciding. That pause helps me avoid an impulse purchase and notice what I actually need.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["impulse purchase"],
      },
    },
    {
      id: "d25-q2",
      type: "quick",
      prompt: "Would you buy a product simply because it is on sale?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: ["use", "price"],
      reference: {
        paragraphs: [
          "A discount alone would not persuade me to buy something. A cheap jacket still wastes money if I never wear it. I usually check the original need, the final price, and any hidden costs, including delivery. However, if an item is already on my shopping list, a genuine sale can be a sensible chance to buy it for less.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["hidden costs"],
      },
    },
  ],
  personalStatement: {
    id: "d25-statement",
    type: "statement",
    prompt:
      "Describe how university students can develop responsible spending habits without giving up all enjoyment.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: ["budget", "balance"],
    reference: {
      paragraphs: [
        "Responsible spending should help students feel in control of their lives. It should not make every small pleasure seem like a mistake. I would begin with a simple monthly plan covering food, transport, study materials, and a modest amount for entertainment. This makes essential expenses visible before optional purchases compete for attention.",
        "Another useful habit is to check value for money rather than price alone. Last term, I considered buying very cheap headphones, but several reviews mentioned that they broke quickly. A more durable pair cost slightly more and was a better choice for my daily listening practice. I also keep a short waiting list for things I want, which reduces purchases made just because I am tired or excited.",
        "Friends can support these habits by choosing activities with different price levels. A picnic may be as enjoyable as an expensive restaurant. Finally, saving even a small financial cushion matters. Students cannot predict every expense, but they can build enough room to manage a broken bicycle or an urgent journey without panic.",
      ],
      structure: [
        "提出明确观点",
        "展开理由并举例",
        "回应限制或不同情况",
        "总结个人行动",
      ],
      highlights: ["value for money", "financial cushion"],
    },
  },
  discussion: [
    {
      id: "d25-discussion1",
      type: "discussion",
      prompt:
        "Your group is planning a graduation dinner. Respond and suggest a fair arrangement.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["limit", "choice"],
      reference: {
        paragraphs: [
          "I understand that we want the evening to feel special, but the proposed price may be difficult for some classmates. Could we set a spending limit before choosing a restaurant? We might compare two affordable venues and make any extra activities optional. That would let more people join without explaining their personal finances. What price range do you think would work for everyone?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["set a spending limit"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "I agree that the atmosphere matters; let us find a memorable place within a shared budget.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "A special meal is worthwhile, but optional extras should be paid for separately.",
          },
          {
            label: "不同意 · Disagree",
            text: "I would avoid that venue because the price could quietly exclude some classmates.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could we ask classmates anonymously which price range they can manage?",
          },
        ],
      },
      partner:
        "A famous restaurant would make our graduation dinner more memorable, even if it costs a lot.",
      interaction: "先认可纪念意义，再提出预算方案，并征询搭档。",
    },
    {
      id: "d25-discussion2",
      type: "discussion",
      prompt:
        "Discuss whether a shopping festival is a good time to buy study equipment.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["compare", "wait"],
      reference: {
        paragraphs: [
          "Buying during a shopping festival can be sensible if we have compared prices in advance. However, a countdown can make ordinary purchases feel urgent. I would list the equipment we truly need, check its usual price, and ignore bundles with unnecessary accessories. We should also consider the return policy. Would you be willing to wait if the discount turned out to be small?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["return policy"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Agreed, provided the equipment is needed and the discount is genuine.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Some items may be cheaper, but we should evaluate each purchase separately.",
          },
          {
            label: "不同意 · Disagree",
            text: "I would avoid buying everything at once because a sale does not create a real need.",
          },
          {
            label: "追问 · Follow-up",
            text: "Have you checked what the same items cost last month?",
          },
        ],
      },
      partner:
        "Everything is cheaper this week, so we should buy all our equipment now.",
      interaction: "区分真实优惠与紧迫感，并给出核查步骤。",
    },
    {
      id: "d25-discussion3",
      type: "discussion",
      prompt: "Agree on a useful campus activity about student spending.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["practice", "privacy"],
      reference: {
        paragraphs: [
          "A talk from a finance expert could help, but students may learn more from practical decisions. We could run a workshop where small groups plan a week of meals and activities with a fixed budget. Nobody would need to reveal their own income. Afterwards, groups could compare tradeoffs and share ways to live within their means. How could we make the exercise realistic?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["fixed budget"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "An experienced speaker could introduce budgeting before the group exercise begins.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "A talk may attract attention, but the workshop should focus on everyday choices.",
          },
          {
            label: "不同意 · Disagree",
            text: "Becoming wealthy is too broad a goal for a short student workshop.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could students bring anonymous examples of difficult spending decisions?",
          },
        ],
      },
      partner:
        "We should invite a successful businessperson to tell students how to become wealthy.",
      interaction: "回应活动提议，转向可实践且尊重隐私的目标。",
    },
  ],
  finalQuestion: {
    id: "d25-final",
    type: "final",
    prompt: "What is one spending habit you would like to change, and why?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: ["habit", "action"],
    reference: {
      paragraphs: [
        "I would like to stop ordering food whenever I feel stressed. The individual payments seem small, but they add up and often include dishes I do not really want. I plan to prepare two easy meals each week and keep a few convenient ingredients in my room. I will still order with friends occasionally because sharing food is part of my social life. The aim is to live within my means while enjoying deliberate choices, instead of letting tiredness decide how I spend my money.",
      ],
      structure: ["概括个人立场", "用实例解释原因", "提出下一步行动"],
      highlights: ["live within my means"],
    },
  },
  upgrades: [
    {
      basic: "I buy fewer things.",
      better:
        "I postpone nonessential purchases until I have checked my budget.",
      zh: "用具体行为解释少买。",
    },
    {
      basic: "It is cheap.",
      better: "Its low price is attractive, but the repair costs may be high.",
      zh: "从价格扩展到总成本。",
    },
    {
      basic: "Do not spend too much.",
      better: "Could we agree on a limit that everyone can afford?",
      zh: "将命令改为协商。",
    },
    {
      basic: "Saving is good.",
      better: "Regular saving gives me room to handle unexpected expenses.",
      zh: "说明储蓄的实际作用。",
    },
  ],
};

export default day;
