import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day30",
  day: 30,
  topic: "Sustainable Transport",
  topicZh: "可持续交通",
  category: "Environment",
  estimatedMinutes: 18,
  focus: "模拟二：独立比较出行选择，在安全、可达性与环境目标之间协商。",
  talkingPoints: [
    {
      en: "Compare complete journeys, including transfers.",
      zh: "比较包含换乘在内的完整行程。",
    },
    {
      en: "Make greener transport practical and accessible.",
      zh: "让绿色出行实用且可达。",
    },
    {
      en: "Consider safety before promoting a travel option.",
      zh: "推广出行方式前先考虑安全。",
    },
  ],
  expressions: [
    {
      en: "public transport",
      zh: "公共交通",
      example: "Reliable public transport can reduce dependence on cars.",
    },
    {
      en: "a safe cycling route",
      zh: "安全骑行路线",
      example: "Students need a safe cycling route to the nearest station.",
    },
    {
      en: "reduce car dependence",
      zh: "减少对汽车的依赖",
      example: "Frequent buses could reduce car dependence.",
    },
    {
      en: "the last part of the journey",
      zh: "行程的最后一段",
      example: "A shared bicycle can cover the last part of the journey.",
    },
    {
      en: "travel at off-peak times",
      zh: "错峰出行",
      example: "We could travel at off-peak times to avoid crowded trains.",
    },
    {
      en: "accessible to everyone",
      zh: "人人可用",
      example: "A transport plan should be accessible to everyone.",
    },
  ],
  sentenceFrames: [
    {
      en: "For a journey of ..., I would choose ...",
      zh: "对于……的行程，我会选择……",
    },
    {
      en: "The greener option becomes practical when ...",
      zh: "当……时，更环保的选择才切实可行。",
    },
    {
      en: "We should consider ... as well as ...",
      zh: "我们应该同时考虑……与……",
    },
    {
      en: "Could we test the route before ...?",
      zh: "在……之前，我们能否实测路线？",
    },
  ],
  quickResponses: [
    {
      id: "d30-q1",
      type: "quick",
      prompt: "How do you usually travel for short journeys?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "For short journeys, I usually walk if the route is safe and I have enough time. Walking is inexpensive, and it helps me notice places I might miss from a bus. If I am carrying heavy books or the weather is unpleasant, I use public transport instead. My choice depends on the whole journey, including how easily I can reach the destination.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["public transport"],
      },
    },
    {
      id: "d30-q2",
      type: "quick",
      prompt: "What would encourage more students to cycle?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "I think a safe cycling route would encourage more students to cycle than a colourful advertising campaign. People need to feel comfortable crossing busy roads and finding secure parking when they arrive. Basic repair facilities would also help. If cycling becomes a convenient part of an ordinary day, students are more likely to continue using it after the initial enthusiasm has faded.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["a safe cycling route"],
      },
    },
  ],
  personalStatement: {
    id: "d30-statement",
    type: "statement",
    prompt:
      "Suggest a practical plan to make travel between your campus and the city centre more sustainable.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [],
    reference: {
      paragraphs: [
        "A practical transport plan should make a greener journey easier from beginning to end. Simply asking students to drive less would have limited effect if the alternatives are unreliable or difficult to reach. I would begin by studying when students travel and where the main difficulties occur.",
        "One improvement could be a frequent shuttle linking campus with a major public transport station. The timetable should match early classes and evening activities, because a service that ends too soon cannot replace many car journeys. Clear information about waiting times would also make travel more predictable.",
        "Next, the campus needs safe walking and cycling connections. A covered bicycle parking area near the shuttle stop would help with the last part of the journey. Paths must also be accessible to everyone, including people who cannot cycle or walk long distances.",
        "Before expanding the plan, the university could run a short trial and collect feedback about missed connections, crowding, and safety. The aim would be to reduce car dependence by providing useful choices. Students should feel that sustainable transport fits their real schedules rather than adds another obstacle to daily life.",
      ],
      structure: [
        "提出明确观点",
        "展开理由并举例",
        "回应限制或不同情况",
        "总结个人行动",
      ],
      highlights: [
        "public transport",
        "accessible to everyone",
        "reduce car dependence",
      ],
    },
  },
  discussion: [
    {
      id: "d30-discussion1",
      type: "discussion",
      prompt: "Choose transport for a class visit outside the city.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "Cycling could be enjoyable, but forty kilometres may exclude classmates who lack the fitness, confidence, or equipment. We should compare a hired coach with a train connection and check the total travel time. If people want to cycle, that could be an optional activity on another day. Which shared option would get the whole class there safely and leave enough time for the visit?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["total travel time"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Cycling could work for a small group after we check the route and abilities.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Bicycles are worth considering, but the distance may not suit everyone.",
          },
          {
            label: "不同意 · Disagree",
            text: "A shared coach would be more practical for this particular class trip.",
          },
          {
            label: "追问 · Follow-up",
            text: "How far is the museum, and are there protected paths along the route?",
          },
        ],
      },
      partner:
        "We should all cycle to the museum because bicycles are the greenest choice.",
      interaction: "自主回应环保主张，兼顾群体差异并协商共同方案。",
    },
    {
      id: "d30-discussion2",
      type: "discussion",
      prompt:
        "Discuss whether a campus campaign should reward greener journeys.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "Rewards might encourage students to try a new route, but counting kilometres could favour people who already live far away. We could reward trying a practical alternative and sharing an honest account of the experience. That would reveal obstacles as well as successes. We should also include students with different mobility needs. How could we recognise participation without turning every journey into a competition?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["mobility needs"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Prizes could attract attention if the categories reflect different circumstances.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Distance is easy to measure, although it may not show a meaningful change in behaviour.",
          },
          {
            label: "不同意 · Disagree",
            text: "I would avoid ranking kilometres because students do not start from equal positions.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could participants set personal travel goals instead of competing on distance?",
          },
        ],
      },
      partner:
        "Let us give prizes to the students who cycle the greatest number of kilometres.",
      interaction: "检验奖励规则是否公平，并提出包容性的活动机制。",
    },
    {
      id: "d30-discussion3",
      type: "discussion",
      prompt: "Prioritise one improvement to transport near campus.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "An extra bus would help only if students could reliably reach it. At present, crossing the main road is difficult, especially after dark. I would first ask for a safe crossing and better lighting, then review whether the bus frequency meets demand. These changes support walking and public transport together. Could we collect observations at the busiest times to support our request?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["public transport"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "A bus could be the priority if current services are consistently full.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "More buses may help, but access to the stop also needs attention.",
          },
          {
            label: "不同意 · Disagree",
            text: "Without a safe crossing, another bus would leave a major barrier unresolved.",
          },
          {
            label: "追问 · Follow-up",
            text: "What do students currently describe as the hardest part of the journey?",
          },
        ],
      },
      partner:
        "The university should spend its entire transport budget on a new bus.",
      interaction: "根据真实瓶颈排序，提出收集证据的办法。",
    },
  ],
  finalQuestion: {
    id: "d30-final",
    type: "final",
    prompt:
      "Should convenience or environmental impact matter more when choosing transport?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [],
    reference: {
      paragraphs: [
        "For everyday journeys, I would consider both because a choice must be practical enough to repeat. If a bus takes only a little longer than a taxi, its lower environmental impact would persuade me to use it. However, a late journey with heavy luggage might justify a different decision. The broader goal is to improve convenient alternatives so people face fewer difficult tradeoffs. Personally, I can plan ahead, combine errands, and travel at off-peak times. Institutions can help by making public transport, walking, and cycling safer and more reliable.",
      ],
      structure: ["概括个人立场", "用实例解释原因", "提出下一步行动"],
      highlights: ["environmental impact", "public transport"],
    },
  },
  upgrades: [
    {
      basic: "Buses are good.",
      better:
        "A frequent bus service would make daily travel more predictable.",
      zh: "说明公共交通的具体优点。",
    },
    {
      basic: "Everyone should cycle.",
      better:
        "Cycling is suitable when the route is safe and the rider feels confident.",
      zh: "给建议加入适用条件。",
    },
    {
      basic: "Cars cause problems.",
      better:
        "Heavy car traffic makes the campus entrance noisy and difficult to cross.",
      zh: "描述可观察的问题。",
    },
    {
      basic: "Make transport green.",
      better: "Connect the bus stop to campus with safe paths and clear signs.",
      zh: "将目标变为实施措施。",
    },
  ],
};

export default day;
