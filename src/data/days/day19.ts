import type { TrainingDay } from "../../types";

const day = {
  id: "day19",
  day: 19,
  topic: "Campus Events",
  topicZh: "校园活动",
  category: "Campus",
  estimatedMinutes: 18,
  focus: "互动训练：提出追问，回应信息，并共同推进活动计划",
  talkingPoints: [
    {
      en: "Participation and belonging",
      zh: "参与与归属",
    },
    {
      en: "Inclusive event design",
      zh: "包容的活动设计",
    },
    {
      en: "Planning and feedback",
      zh: "策划与反馈",
    },
  ],
  expressions: [
    {
      en: "shared task",
      zh: "共同任务",
      example:
        "A shared task gives students who arrive alone a reason to start talking.",
    },
    {
      en: "remove uncertainty",
      zh: "消除不确定感",
      example:
        "Clear information about cost and duration can remove uncertainty for newcomers.",
    },
    {
      en: "interest survey",
      zh: "兴趣调查",
      example:
        "An interest survey helped us choose a workshop that students wanted.",
    },
    {
      en: "divide responsibilities",
      zh: "分配职责",
      example:
        "We divide responsibilities for equipment, registration, and welcoming participants.",
    },
    {
      en: "useful connections",
      zh: "有用的人际联系",
      example:
        "The event should create useful connections rather than only attract a large crowd.",
    },
    {
      en: "small discussion groups",
      zh: "小型讨论组",
      example:
        "Small discussion groups allow everyone to speak after the film.",
    },
  ],
  sentenceFrames: [
    {
      en: "What would make it easier for ... to join?",
      zh: "什么能让……更容易参加？",
    },
    {
      en: "When you say ..., are you thinking of ...?",
      zh: "你说……时，想到的是……吗？",
    },
    {
      en: "How could we find out whether ...?",
      zh: "我们怎样了解是否……？",
    },
    {
      en: "If we choose that option, who could ...?",
      zh: "如果选这个方案，谁可以……？",
    },
  ],
  upgrades: [
    {
      basic: "We need more students.",
      better:
        "We need to understand why interested students decide not to attend.",
      zh: "从人数转向参与原因。",
    },
    {
      basic: "When is it?",
      better:
        "Which time would avoid the main lecture and laboratory schedules?",
      zh: "让追问服务于具体决策。",
    },
    {
      basic: "The event should be fun.",
      better:
        "A short team activity could help strangers start talking comfortably.",
      zh: "说明互动机制。",
    },
    {
      basic: "Ask people afterward.",
      better:
        "A two question survey could reveal what participants enjoyed and what prevented others from joining.",
      zh: "明确反馈内容。",
    },
  ],
  quickResponses: [
    {
      prompt: "What kind of campus event would you like to attend?",
      hints: ["解释为何愿意独自参加"],
      reference: {
        paragraphs: [
          "I would like to attend a small workshop where students teach one another practical skills. Someone could demonstrate simple bicycle repairs, while another person could explain basic photography. I enjoy events where I can participate rather than only watch. A short beginner session would also make it easier to join alone, because everyone would have a shared task and an obvious reason to start talking.",
        ],
        structure: ["选择活动", "解释参与价值", "说明新手友好设计"],
        highlights: ["practical skills", "shared task"],
      },
      id: "d19-q1",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
    {
      prompt: "Why do some students avoid campus events?",
      hints: ["分析参与门槛"],
      reference: {
        paragraphs: [
          "Some students avoid campus events because they do not know what will happen or whether they need experience. Others have part time work, long journeys, or a timetable that clashes with the event. Organizers sometimes assume a colorful poster solves everything. I think clear information about the activity, duration, cost, and accessibility would remove uncertainty and help students decide whether they can realistically take part.",
        ],
        structure: ["列出不同障碍", "指出宣传误区", "提出信息改进"],
        highlights: ["remove uncertainty", "accessibility"],
      },
      id: "d19-q2",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
  ],
  personalStatement: {
    prompt:
      "Propose a campus event that would help students build connections and explain how to organize it.",
    hints: ["让组织细节服务于交友目标"],
    reference: {
      paragraphs: [
        "I would organize a campus skill exchange afternoon where students offer short beginner workshops. Possible sessions could include repairing a bicycle tire, preparing a simple meal, or editing a photograph. The purpose would be to help students meet through doing something together, especially those who find a large party uncomfortable.",
        "Planning should begin with a short interest survey rather than assumptions about what students enjoy. We could ask which skills they want to learn and what times are convenient. The event should be free, held in an accessible room, and advertised with clear information about duration and required materials. Participants should also be able to attend alone without feeling that everyone else already belongs to a group.",
        "A small team could divide responsibilities for registration, equipment, hosting, and safety. Each workshop would last about twenty minutes, followed by time for questions and informal conversation. Afterward, a brief survey could ask what participants learned and whether they met someone new. If the first event works well, the university could repeat it monthly with different student hosts. Success would mean useful connections, not simply an impressive attendance total.",
      ],
      structure: ["提出活动与目标", "从调查出发降低门槛", "分工执行并评价效果"],
      highlights: ["skill exchange", "interest survey", "useful connections"],
    },
    id: "d19-statement",
    type: "statement",
    prepareSeconds: 60,
    speakingSeconds: 90,
  },
  discussion: [
    {
      prompt:
        "Ask a useful follow-up question about your partner’s event idea.",
      hints: ["让追问影响后续决定"],
      reference: {
        paragraphs: [
          "A campus film night sounds enjoyable, especially if students can discuss the story afterward. What kind of audience are you hoping to attract: film enthusiasts or students who simply want to meet people? That choice could affect the film, the publicity, and the seating arrangement. If the main goal is conversation, we might choose small discussion groups rather than leaving immediately after the final scene.",
        ],
        structure: ["回应提案", "追问目标人群", "说明答案如何影响方案"],
        highlights: ["What kind of audience", "small discussion groups"],
        alternatives: [
          {
            label: "Agree",
            text: "A film night could attract students who prefer a relaxed activity to a competitive event.",
          },
          {
            label: "Partly agree",
            text: "I like the idea, although we should plan a way for people to talk rather than only watch.",
          },
          {
            label: "Disagree",
            text: "I would choose a skill workshop because participants would have more chances to interact throughout.",
          },
          {
            label: "Follow-up",
            text: "Who is the main audience, and what do we want them to gain from attending?",
          },
        ],
      },
      partner: "I think we should organize a campus film night next month.",
      interaction: "练习追问：围绕目标、细节或可行性获取关键信息。",
      id: "d19-discussion1",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Follow up on a practical difficulty instead of changing the topic.",
      hints: ["围绕时间可行性追问"],
      reference: {
        paragraphs: [
          "A weekend could work, but how many students stay on campus then? Some people travel home or have jobs, so we should check before booking the room. Perhaps the registration form could offer Saturday afternoon and Wednesday evening as options. Once we see the responses, we can choose the time that includes more students. Do you know which office could help us circulate that short survey?",
        ],
        structure: ["追问关键假设", "说明受影响群体", "设计获取信息办法"],
        highlights: ["check before booking", "registration form"],
        alternatives: [
          {
            label: "Agree",
            text: "Saturday might allow a longer session because most students have fewer scheduled classes.",
          },
          {
            label: "Partly agree",
            text: "It could suit many students, but those with weekend jobs may need another option.",
          },
          {
            label: "Disagree",
            text: "I would not assume Saturday works because many students leave campus after Friday classes.",
          },
          {
            label: "Follow-up",
            text: "Could we compare responses to two possible time slots before reserving the room?",
          },
        ],
      },
      partner:
        "Let us hold the event on Saturday because everyone will be free.",
      interaction: "对绝对判断追问，并提出核实方式。",
      id: "d19-discussion2",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Ask how your group will measure the event’s impact, then suggest a method.",
      hints: ["追问人数背后的效果"],
      reference: {
        paragraphs: [
          "A large audience would be encouraging, but how will we know whether students actually made connections? We could ask each participant whether they spoke to someone new and whether they would attend another session. A short conversation with student hosts might reveal useful details too. This would help us understand the experience behind the attendance figure and improve the next event. Would two survey questions be enough?",
        ],
        structure: ["追问成效", "建议具体指标", "讨论反馈负担"],
        highlights: ["made connections", "attendance figure"],
        alternatives: [
          {
            label: "Agree",
            text: "Good attendance would show that our publicity reached people and that the idea attracted interest.",
          },
          {
            label: "Partly agree",
            text: "Attendance matters, but it does not tell us whether newcomers felt included.",
          },
          {
            label: "Disagree",
            text: "I would not call it successful if many students came but left feeling isolated.",
          },
          {
            label: "Follow-up",
            text: "What evidence would show that the event helped people form a new connection?",
          },
        ],
      },
      partner:
        "If two hundred students attend, our event will definitely be successful.",
      interaction: "围绕评价证据追问，避免只接受人数指标。",
      id: "d19-discussion3",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
  ],
  finalQuestion: {
    prompt: "What should organizers prioritize when planning a campus event?",
    hints: ["用两类活动说明优先级"],
    reference: {
      paragraphs: [
        "Organizers should prioritize a clear purpose and the experience of the intended participants. A beautiful poster and a large room do not help much if students cannot understand why they should come. For a friendship event, this means creating comfortable ways to start talking and making newcomers feel welcome. For a career workshop, it means useful information and enough time for questions. Once the purpose is clear, decisions about timing, cost, accessibility, and publicity become easier. Feedback should then show whether the event achieved that purpose and what needs to change.",
      ],
      structure: ["提出目的导向原则", "比较两类活动", "连接执行与反馈"],
      highlights: ["a clear purpose", "intended participants"],
    },
    id: "d19-final",
    type: "final",
    prepareSeconds: 5,
    speakingSeconds: 45,
  },
} satisfies TrainingDay;

export default day;
