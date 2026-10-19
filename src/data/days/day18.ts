import type { TrainingDay } from "../../types";

const day = {
  id: "day18",
  day: 18,
  topic: "Online Shopping",
  topicZh: "网络购物",
  category: "Lifestyle",
  estimatedMinutes: 18,
  focus: "互动训练：承接观点，补充新维度，避免重复伙伴的话",
  talkingPoints: [
    {
      en: "Convenience and choice",
      zh: "便利与选择",
    },
    {
      en: "Consumer decisions",
      zh: "消费决策",
    },
    {
      en: "Packaging and local shops",
      zh: "包装与本地商店",
    },
  ],
  expressions: [
    {
      en: "compare editions",
      zh: "比较版本",
      example:
        "I compare editions to make sure I buy the textbook used in my course.",
    },
    {
      en: "promotional notifications",
      zh: "促销通知",
      example:
        "Turning off promotional notifications helps me avoid browsing during study time.",
    },
    {
      en: "unnecessary consumption",
      zh: "不必要的消费",
      example:
        "Waiting a day before ordering can reduce unnecessary consumption.",
    },
    {
      en: "total cost",
      zh: "总成本",
      example:
        "I compare the total cost, including delivery, before choosing a seller.",
    },
    {
      en: "separate deliveries",
      zh: "分开的配送",
      example:
        "Combining necessary orders may reduce separate deliveries to the dormitory.",
    },
    {
      en: "repeated complaints",
      zh: "反复出现的投诉",
      example:
        "Repeated complaints about the same fault make me question a product’s quality.",
    },
  ],
  sentenceFrames: [
    {
      en: "Building on your point, another issue is ...",
      zh: "在你的观点基础上，另一个问题是……",
    },
    {
      en: "We have discussed ..., and we should also consider ...",
      zh: "我们讨论了……，还应考虑……",
    },
    {
      en: "That affects ... as well as ...",
      zh: "那既影响……也影响……",
    },
    {
      en: "Could we include ... in our decision?",
      zh: "我们能否在决定中考虑……？",
    },
  ],
  upgrades: [
    {
      basic: "Shopping online is cheap.",
      better:
        "Online platforms make price comparison easier, although delivery and return costs can change the total.",
      zh: "加入总成本视角。",
    },
    {
      basic: "I buy too much.",
      better:
        "Limited time offers sometimes persuade me to buy items I had not planned to purchase.",
      zh: "说明冲动来源。",
    },
    {
      basic: "There is another problem.",
      better:
        "Another issue is the packaging created when several small orders arrive separately.",
      zh: "直接点明新维度。",
    },
    {
      basic: "Read reviews.",
      better:
        "Compare detailed reviews from several buyers and look for repeated concerns.",
      zh: "说明如何读评价。",
    },
  ],
  quickResponses: [
    {
      prompt: "What do you usually buy online, and why?",
      hints: ["按商品特点解释选择"],
      reference: {
        paragraphs: [
          "I usually buy books online because I can compare editions and find titles that nearby shops do not keep. Reading the product details also helps me avoid ordering the wrong version for a course. However, I prefer buying shoes in a physical store, where I can check the fit. My choice depends on whether the item is easy to judge from a description and photographs.",
        ],
        structure: ["说明品类及原因", "对比线下选择", "概括判断标准"],
        highlights: ["compare editions", "check the fit"],
      },
      id: "d18-q1",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
    {
      prompt: "How do you avoid unnecessary online purchases?",
      hints: ["讲一个具体抑制冲动的做法"],
      reference: {
        paragraphs: [
          "I keep a short list of things I need and wait until the next day before buying something outside it. The delay helps me separate a real need from the excitement of a discount. I also turn off promotional notifications. Last month, I decided not to buy another pair of headphones after realizing that my current pair worked perfectly well for study and travel.",
        ],
        structure: ["提出方法", "解释延迟作用", "给出个人实例"],
        highlights: ["real need", "promotional notifications"],
      },
      id: "d18-q2",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
  ],
  personalStatement: {
    prompt:
      "Describe how online shopping has changed people’s lives and discuss how consumers can shop responsibly.",
    hints: ["加入消费者之外的影响"],
    reference: {
      paragraphs: [
        "Online shopping has made a wide range of products available without a journey to a large shopping center. Students can compare prices, find specialized books, and order necessities when they are busy with classes. For people living far from major stores, this access may be particularly valuable. Detailed product information can also support a more informed choice.",
        "However, convenient access can encourage unnecessary consumption. Promotions make ordinary items appear urgent, and photographs do not always show quality accurately. Returning unsuitable purchases costs time and may create additional transport and packaging. Local shops may also struggle when customers use them only to inspect products before ordering elsewhere.",
        "Responsible shopping begins before clicking the purchase button. I would check whether I need the item, compare the total cost, and read the return conditions. Combining several necessary orders can reduce separate deliveries, while choosing a nearby shop is sensible when personal advice or fitting matters. Platforms should make product information and complaint procedures clear. The aim is not to reject online shopping, but to use its convenience with awareness of the financial, social, and environmental consequences.",
      ],
      structure: [
        "说明便利与可及性",
        "分析消费和外部影响",
        "提出购物前决策步骤",
      ],
      highlights: [
        "unnecessary consumption",
        "total cost",
        "separate deliveries",
      ],
    },
    id: "d18-statement",
    type: "statement",
    prepareSeconds: 60,
    speakingSeconds: 90,
  },
  discussion: [
    {
      prompt: "Build on your partner’s point by adding a different benefit.",
      hints: ["补充不同维度"],
      reference: {
        paragraphs: [
          "I agree that lower prices can help students manage a limited budget. Building on that, online shopping also gives people access to products that local stores may not stock. For example, a student in a small town could order a specialized engineering textbook. This is about availability as well as price. Perhaps we should compare which kinds of goods benefit most from wider access.",
        ],
        structure: ["回应已有观点", "补充可及性", "提出分类比较"],
        highlights: [
          "availability as well as price",
          "specialized engineering textbook",
        ],
        alternatives: [
          {
            label: "Agree",
            text: "Lower prices can be important when students have to budget carefully for books and daily necessities.",
          },
          {
            label: "Partly agree",
            text: "Price matters, although reliable delivery may be more valuable when the product is urgently needed.",
          },
          {
            label: "Disagree",
            text: "For me, being able to find a specialized product matters more than saving a small amount of money.",
          },
          {
            label: "Follow-up",
            text: "Which products are difficult to find locally even when buyers are willing to pay more?",
          },
        ],
      },
      partner:
        "The biggest advantage of online shopping is that prices are often lower.",
      interaction: "练习补充观点：承接后加入不同的原因或影响。",
      id: "d18-discussion1",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt: "Add a consequence that your partner has not mentioned.",
      hints: ["不要重复省钱理由"],
      reference: {
        paragraphs: [
          "You are right that unnecessary purchases waste money. Another issue is the material used to deliver them. A small order may arrive in a box with plastic padding, and returning it creates another journey. If we combine purchases that we already need, we may reduce some separate packages. We should also check whether a nearby shop has the item before placing an order.",
        ],
        structure: ["承接经济影响", "新增环境影响", "提出相关行动"],
        highlights: ["plastic padding", "combine purchases"],
        alternatives: [
          {
            label: "Agree",
            text: "Unplanned spending can leave students with less money for essential items later in the month.",
          },
          {
            label: "Partly agree",
            text: "Money is one concern, and wasted storage space can also make unnecessary purchases inconvenient.",
          },
          {
            label: "Disagree",
            text: "I would focus first on misleading product information because even a planned purchase can turn out badly.",
          },
          {
            label: "Follow-up",
            text: "Could a waiting period reduce both unnecessary spending and the number of packages we receive?",
          },
        ],
      },
      partner:
        "Impulse buying is a problem because students may spend more than they can afford.",
      interaction: "从经济维度扩展到环境维度。",
      id: "d18-discussion2",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Help design a responsible shopping campaign by adding one practical action.",
      hints: ["补充一种具体活动"],
      reference: {
        paragraphs: [
          "Your suggestion to teach price comparison is useful. We could also show students how to examine product reviews. Instead of trusting a high score, they can look for specific details and repeated complaints across different buyers. A workshop could compare two descriptions of the same item and ask which offers better evidence. That activity would make careful judgment more memorable than a general warning to shop wisely.",
        ],
        structure: ["认可已有行动", "新增评价技能", "设计体验活动"],
        highlights: ["repeated complaints", "better evidence"],
        alternatives: [
          {
            label: "Agree",
            text: "A price comparison activity would help students see that the first advertised deal is not always the cheapest.",
          },
          {
            label: "Partly agree",
            text: "Comparison helps, but we should include delivery fees so students compare the full cost.",
          },
          {
            label: "Disagree",
            text: "I would start by discussing needs because a cheap item is still wasteful if nobody uses it.",
          },
          {
            label: "Follow-up",
            text: "Could we ask participants to identify repeated concerns in several reviews of one product?",
          },
        ],
      },
      partner:
        "Our campaign should teach students to compare prices before ordering.",
      interaction: "把新维度转化成可操作的共同计划。",
      id: "d18-discussion3",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
  ],
  finalQuestion: {
    prompt: "Will online shopping completely replace physical stores?",
    hints: ["按商品需求作出判断"],
    reference: {
      paragraphs: [
        "I do not expect online shopping to replace every physical store. It is convenient for standard products, but some purchases depend on trying, touching, or receiving personal advice. A student buying a musical instrument may want to hear it and ask an experienced assistant questions. Physical shops can also serve as places where local people meet and exchange information. I think the two forms will increasingly work together, with customers checking stock online and collecting or testing items nearby. The best combination will depend on the product and the customer’s needs.",
      ],
      structure: ["提出判断", "用体验型商品解释", "预测结合方式"],
      highlights: ["personal advice", "work together"],
    },
    id: "d18-final",
    type: "final",
    prepareSeconds: 5,
    speakingSeconds: 45,
  },
} satisfies TrainingDay;

export default day;
