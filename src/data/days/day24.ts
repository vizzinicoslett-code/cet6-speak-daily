import type { TrainingDay } from "../../types";

const day = {
  id: "day24",
  day: 24,
  topic: "City Life",
  topicZh: "城市生活",
  category: "Society",
  estimatedMinutes: 18,
  focus: "综合模拟：独立比较城市需求，回应分歧，形成可行决策；提示最少",
  talkingPoints: [
    {
      en: "Opportunity and affordability",
      zh: "机会与可负担性",
    },
    {
      en: "Mobility and public space",
      zh: "出行与公共空间",
    },
    {
      en: "Inclusive urban planning",
      zh: "包容的城市规划",
    },
  ],
  expressions: [
    {
      en: "living costs",
      zh: "生活成本",
      example:
        "I compare living costs before deciding whether a city job is affordable.",
    },
    {
      en: "daily needs",
      zh: "日常需求",
      example:
        "A neighborhood should let residents meet daily needs without long journeys.",
    },
    {
      en: "a shaded bench",
      zh: "有遮阴的长椅",
      example:
        "A shaded bench can make waiting for the bus easier for older residents.",
    },
    {
      en: "everyday access",
      zh: "日常可达性",
      example:
        "Better walking routes improve everyday access to clinics and shops.",
    },
    {
      en: "reliable buses",
      zh: "可靠的公交服务",
      example:
        "Reliable buses can reduce the need to drive into the city center.",
    },
    {
      en: "essential vehicles",
      zh: "必要通行车辆",
      example:
        "The pedestrian trial needs a clear route for essential vehicles.",
    },
  ],
  sentenceFrames: [
    {
      en: "The city offers ..., but residents also face ...",
      zh: "城市提供……，但居民也面临……",
    },
    {
      en: "The best choice depends on ...",
      zh: "最好的选择取决于……",
    },
    {
      en: "Before deciding, we should consider how ... affects ...",
      zh: "决定之前，我们应考虑……如何影响……",
    },
    {
      en: "A small trial would help us see whether ...",
      zh: "小范围试行能帮助我们了解是否……",
    },
  ],
  upgrades: [
    {
      basic: "Big cities are better.",
      better:
        "Large cities may offer more specialized jobs, but housing costs can limit those opportunities.",
      zh: "同时说明机会和进入成本。",
    },
    {
      basic: "Traffic is bad.",
      better:
        "Unreliable commuting can make daily routines stressful and reduce access to work.",
      zh: "解释交通对生活的影响。",
    },
    {
      basic: "Build more parks.",
      better:
        "Provide safe, shaded spaces within walking distance of residential areas.",
      zh: "加入可达性与使用条件。",
    },
    {
      basic: "Ask the public.",
      better:
        "Consult commuters, shop owners, older residents, and people with mobility needs before changing the street.",
      zh: "明确受影响群体。",
    },
  ],
  quickResponses: [
    {
      prompt: "Would you prefer to live in a large city after graduation?",
      hints: [],
      reference: {
        paragraphs: [
          "I might choose a large city if it offered a suitable first job and a realistic way to cover living costs. I would enjoy access to museums, different communities, and specialized training. However, a long commute and expensive rent could reduce those benefits. I would compare actual neighborhoods and job conditions rather than choose a place only because its name sounds exciting or successful.",
        ],
        structure: ["给出条件性选择", "说明吸引力", "比较现实生活条件"],
        highlights: ["living costs", "actual neighborhoods"],
      },
      id: "d24-q1",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
    {
      prompt: "What makes a city neighborhood pleasant to live in?",
      hints: [],
      reference: {
        paragraphs: [
          "A pleasant neighborhood lets people handle daily needs without unnecessary stress. Safe walking routes, nearby groceries, reliable public transport, and somewhere to sit outdoors matter more to me than impressive buildings. It should also feel welcoming to people of different ages. For example, a shaded bench near a bus stop can make a real difference to an older resident who cannot stand for a long time.",
        ],
        structure: ["提出日常需求标准", "列举具体设施", "用使用者实例说明"],
        highlights: ["Safe walking routes", "a shaded bench"],
      },
      id: "d24-q2",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
  ],
  personalStatement: {
    prompt:
      "Discuss the advantages and challenges of city life and suggest how cities can become more livable.",
    hints: [],
    reference: {
      paragraphs: [
        "City life offers opportunities that are difficult to find in smaller communities. Universities, specialized jobs, hospitals, and cultural activities are often located close enough for residents to reach them regularly. Living among people with different backgrounds can also broaden our understanding and create valuable personal and professional connections.",
        "However, access to these benefits is uneven. High housing costs may force workers to live far from their jobs, while unreliable transport makes daily travel tiring. Crowded streets can also leave little safe space for children, older people, or anyone who wants a quiet place to rest. A city can look successful while many residents struggle with ordinary routines.",
        "To improve livability, planners should focus on everyday access rather than only impressive projects. Reliable public transport, affordable housing near employment, and safe walking routes can reduce pressure on residents. Small public spaces with shade and seating also matter. Before changing a neighborhood, officials should listen to people with different needs and test proposals where possible. A livable city is one where opportunity is not merely present, but realistically reachable by the people who call it home.",
      ],
      structure: [
        "说明城市机会与多样性",
        "分析机会获取的不平等",
        "提出日常可达性导向规划",
      ],
      highlights: [
        "access to these benefits",
        "everyday access",
        "realistically reachable",
      ],
    },
    id: "d24-statement",
    type: "statement",
    prepareSeconds: 60,
    speakingSeconds: 90,
  },
  discussion: [
    {
      prompt:
        "Discuss your partner’s proposal to improve transport in a growing city.",
      hints: [],
      reference: {
        paragraphs: [
          "More roads might relieve pressure in a particular location, but they also use land and may encourage more driving. I would first examine whether reliable buses could move more people along the same route. Safer walking links to bus stops matter too. We could compare travel times and costs for several options before choosing a major construction project. Which journey is currently causing residents the most difficulty?",
        ],
        structure: ["评估道路建议", "提出公交替代", "先明确具体出行问题"],
        highlights: ["reliable buses", "travel times and costs"],
        alternatives: [
          {
            label: "Agree",
            text: "An additional road may help if a specific missing connection forces every journey through the same junction.",
          },
          {
            label: "Partly agree",
            text: "Some road changes may be needed, but public transport could reduce the number of cars using them.",
          },
          {
            label: "Disagree",
            text: "I would prioritize reliable buses because adding road space alone may not reduce long term congestion.",
          },
          {
            label: "Follow-up",
            text: "Which group of travelers would benefit most from the proposed road, and who might lose public space?",
          },
        ],
      },
      partner:
        "The city should build more roads because that is the best way to solve traffic problems.",
      interaction: "回应、比较并形成城市改善决策。",
      id: "d24-discussion1",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Respond to a proposal for replacing a small public garden with parking.",
      hints: [],
      reference: {
        paragraphs: [
          "Parking is a real concern for some residents, but the garden serves people who do not drive as well. Older neighbors may use it to rest, and children may have few other safe outdoor spaces. Before removing it, we should check parking demand at different times and explore shared use of nearby spaces. Could we consult both drivers and regular garden users before making a decision?",
        ],
        structure: ["承认停车需求", "指出公共空间使用者", "提出调查及协商"],
        highlights: ["safe outdoor spaces", "parking demand"],
        alternatives: [
          {
            label: "Agree",
            text: "Additional parking could help residents with mobility difficulties if there are no suitable spaces nearby.",
          },
          {
            label: "Partly agree",
            text: "Parking needs attention, but removing the only garden may create a larger problem for other residents.",
          },
          {
            label: "Disagree",
            text: "I would protect the garden because a shared green space benefits people across ages and does not require owning a car.",
          },
          {
            label: "Follow-up",
            text: "Have we counted how people use the garden and checked whether nearby parking could be shared?",
          },
        ],
      },
      partner:
        "We should turn the neighborhood garden into a car park to make life more convenient.",
      interaction: "回应、比较并形成城市改善决策。",
      id: "d24-discussion2",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Reach a shared plan for making one neighborhood street more livable.",
      hints: [],
      reference: {
        paragraphs: [
          "A weekend pedestrian trial sounds worth exploring, provided deliveries and access for residents are planned. We could keep one clear route for essential vehicles and speak to shop owners about suitable delivery times. Then we could measure walking numbers, business feedback, and any access problems. A trial would let us adjust the design before making it permanent. Should the first test last one weekend or several?",
        ],
        structure: ["回应试行提案", "处理必要通行", "明确评价和期限"],
        highlights: ["pedestrian trial", "essential vehicles"],
        alternatives: [
          {
            label: "Agree",
            text: "A pedestrian street could provide safer space for walking and encourage people to spend time in local shops.",
          },
          {
            label: "Partly agree",
            text: "I support more walking space, but we should test access arrangements before a permanent closure.",
          },
          {
            label: "Disagree",
            text: "I would avoid immediate closure because some residents and businesses may depend on vehicle access.",
          },
          {
            label: "Follow-up",
            text: "How would deliveries and residents with limited mobility reach their destinations during the trial?",
          },
        ],
      },
      partner:
        "Let us close the street to cars permanently so that people can walk and meet there.",
      interaction: "回应、比较并形成城市改善决策。",
      id: "d24-discussion3",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
  ],
  finalQuestion: {
    prompt: "What should be the main goal of urban development?",
    hints: [],
    reference: {
      paragraphs: [
        "The main goal should be to improve people’s everyday lives while keeping opportunities accessible in the future. A new landmark may attract attention, but reliable transport, safe housing, and nearby services often matter more to residents. Development should also consider who benefits and who may be displaced or excluded. For example, improving a neighborhood should not automatically force its original residents to leave because rents rise. Listening to different groups and checking practical outcomes can help a city grow in a way that is both welcoming and sustainable.",
      ],
      structure: ["提出日常生活目标", "比较建设优先级", "强调受益与包容性"],
      highlights: ["everyday lives", "original residents"],
    },
    id: "d24-final",
    type: "final",
    prepareSeconds: 5,
    speakingSeconds: 45,
  },
} satisfies TrainingDay;

export default day;
