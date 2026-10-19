import type { TrainingDay } from "../../types";

const day = {
  id: "day14",
  day: 14,
  topic: "Mobile Phones",
  topicZh: "手机使用",
  category: "Technology",
  estimatedMinutes: 18,
  focus: "扩展论证：比较情境，解释因果，给出有条件的建议",
  talkingPoints: [
    {
      en: "Everyday convenience",
      zh: "日常便利",
    },
    {
      en: "Attention and relationships",
      zh: "注意力与人际关系",
    },
    {
      en: "Reasonable phone rules",
      zh: "合理的手机规则",
    },
  ],
  expressions: [
    {
      en: "emotional support",
      zh: "情感支持",
      example:
        "A video call with my parents offers emotional support during a difficult week.",
    },
    {
      en: "full attention",
      zh: "全部注意力",
      example:
        "Putting my phone in my bag helps me give a friend my full attention.",
    },
    {
      en: "urgent family message",
      zh: "紧急家庭消息",
      example: "I explained that I needed to answer an urgent family message.",
    },
    {
      en: "uninterrupted discussion",
      zh: "不被打断的讨论",
      example:
        "Our group needs twenty minutes of uninterrupted discussion to choose a topic.",
    },
    {
      en: "meaningful exchange",
      zh: "有意义的交流",
      example:
        "A longer call sometimes creates a more meaningful exchange than many short reactions.",
    },
    {
      en: "keep it in a bag",
      zh: "把它放在包里",
      example: "During a lecture, I silence my phone and keep it in a bag.",
    },
  ],
  sentenceFrames: [
    {
      en: "In situations such as ..., a phone can ...",
      zh: "在……这样的情境中，手机可以……",
    },
    {
      en: "The problem begins when ...",
      zh: "当……时，问题就出现了。",
    },
    {
      en: "I would distinguish between ... and ...",
      zh: "我会区分……和……",
    },
    {
      en: "A reasonable rule would allow ... while limiting ...",
      zh: "合理的规则应允许……同时限制……",
    },
  ],
  upgrades: [
    {
      basic: "Phones help us.",
      better:
        "Phones combine navigation, payment, and communication in one portable tool.",
      zh: "列举具体功能。",
    },
    {
      basic: "People look at phones too much.",
      better:
        "Frequent checking can interrupt a conversation even when each glance is brief.",
      zh: "解释短暂查看的累积影响。",
    },
    {
      basic: "Ban phones in class.",
      better:
        "Teachers could allow phones for assigned activities and request silent storage otherwise.",
      zh: "增加场景与例外。",
    },
    {
      basic: "I need my phone.",
      better: "I rely on my phone to receive urgent messages from my family.",
      zh: "说明依赖的具体原因。",
    },
  ],
  quickResponses: [
    {
      prompt: "Which mobile phone function is most useful to you?",
      hints: ["选一个功能", "讲一次经历", "补充注意事项"],
      reference: {
        paragraphs: [
          "The map function is probably the most useful one for me, because I study in a city I did not know before university. It helps me compare bus routes and estimate travel time. Last month, it guided me to a museum through an unfamiliar neighborhood. I still check road signs, though, because a phone can suggest a route that is inconvenient in real life.",
        ],
        structure: ["选择功能", "解释实际价值", "加入限制"],
        highlights: ["compare bus routes", "road signs"],
      },
      id: "d14-q1",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
    {
      prompt: "Should students check their phones while eating with friends?",
      hints: ["先说一般规则", "解释感受", "给出例外"],
      reference: {
        paragraphs: [
          "Usually, I think students should put their phones away during a shared meal. Eating together gives friends a chance to talk without rushing, and constant checking can make the other person feel ignored. There are reasonable exceptions, such as an urgent family message. In that case, I would explain briefly and answer it, then return my attention to the people at the table.",
        ],
        structure: ["明确日常原则", "解释关系影响", "说明合理例外"],
        highlights: ["reasonable exceptions", "feel ignored"],
      },
      id: "d14-q2",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
  ],
  personalStatement: {
    prompt:
      "Discuss how mobile phones influence campus life and propose a balanced approach to their use.",
    hints: ["功能与价值", "校园聚餐实例", "课堂和用餐规则"],
    reference: {
      paragraphs: [
        "Mobile phones make campus life considerably easier. Students can check their timetable, pay for lunch, and contact classmates without carrying several separate items. For students living away from home, a quick video call can also provide emotional support. These benefits explain why simply telling young people to stop using phones is unlikely to work.",
        "The difficulty is that useful tools and distractions appear on the same screen. A student may open a dictionary and then respond to a game notification. Phones can also affect relationships when people repeatedly interrupt a conversation to check messages. I noticed this during a club dinner where everyone was physically together but barely spoke during the first few minutes.",
        "A balanced approach should depend on the activity. In a lecture, phones can be useful for a teacher’s quiz but should remain silent during explanations. At meals, friends can agree to keep them in their bags, with exceptions for urgent calls. Personally, I charge my phone away from my desk when I read. Clear boundaries help us enjoy the convenience while giving important tasks and people our full attention.",
      ],
      structure: ["说明工具价值", "分析注意力与关系影响", "按场景提出规则"],
      highlights: [
        "emotional support",
        "depend on the activity",
        "full attention",
      ],
    },
    id: "d14-statement",
    type: "statement",
    prepareSeconds: 60,
    speakingSeconds: 90,
  },
  discussion: [
    {
      prompt:
        "Your partner wants to collect every student’s phone before a lecture. Discuss the proposal.",
      hints: ["认可课堂专注", "考虑例外", "比较实施方式"],
      reference: {
        paragraphs: [
          "I see why you want fewer distractions, and collecting phones might help in some classes. However, it could take time and create problems for students expecting urgent calls. A simpler option is to ask everyone to silence their phone and keep it in a bag. The teacher could allow it for a specific learning activity. Would that achieve the same purpose with fewer difficulties?",
        ],
        structure: ["认可目的", "分析实施成本", "给出可比较替代"],
        highlights: ["urgent calls", "a specific learning activity"],
        alternatives: [
          {
            label: "Agree",
            text: "Collecting phones could be effective during a short assessment when equal conditions matter.",
          },
          {
            label: "Partly agree",
            text: "I support the goal, but students with an urgent family situation may need an exception.",
          },
          {
            label: "Disagree",
            text: "I would avoid collection because it uses class time and makes teachers responsible for personal property.",
          },
          {
            label: "Follow-up",
            text: "Could a clear silent mode rule achieve the same result without collecting devices?",
          },
        ],
      },
      partner: "Teachers should collect all phones before every lecture.",
      interaction: "比较措施的实际效果和实施代价。",
      id: "d14-discussion1",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Your partner says phones strengthen every friendship. Add a different perspective.",
      hints: ["先用远程实例", "解释交流深度", "追问支持感"],
      reference: {
        paragraphs: [
          "Phones certainly help friends stay in touch across long distances. My roommate speaks to her school friends every weekend, which keeps those relationships active. At the same time, a phone cannot guarantee a meaningful exchange. Sending many brief reactions may not reveal how someone really feels. I would combine convenient online contact with occasional longer conversations. What kind of message makes you feel genuinely supported?",
        ],
        structure: ["承认远程价值", "区分频率与深度", "提出组合方式"],
        highlights: ["stay in touch", "a meaningful exchange"],
        alternatives: [
          {
            label: "Agree",
            text: "Easy contact is valuable when friends live in different cities and cannot meet regularly.",
          },
          {
            label: "Partly agree",
            text: "Frequent contact helps, but the quality of listening still determines whether a conversation supports the friendship.",
          },
          {
            label: "Disagree",
            text: "I disagree with every friendship because constant messages can also create pressure to reply immediately.",
          },
          {
            label: "Follow-up",
            text: "Do you feel closer after short daily messages or an occasional longer call?",
          },
        ],
      },
      partner:
        "Phones make every friendship stronger because communication is so easy.",
      interaction: "用补充视角拓展伙伴的绝对判断。",
      id: "d14-discussion2",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt: "Choose a phone habit that your study group could adopt.",
      hints: ["规定时段", "保留必要信息", "约定试行"],
      reference: {
        paragraphs: [
          "Let us keep our phones in our bags for the first twenty minutes of each meeting. We can choose one person to check the shared document on a laptop, so we still have access to necessary information. After that, we can take a short message break. This arrangement is easy to follow and gives everyone a clear period of uninterrupted discussion. Shall we test it tomorrow?",
        ],
        structure: ["确定共同习惯", "安排工具与休息", "邀请试行"],
        highlights: ["uninterrupted discussion", "message break"],
        alternatives: [
          {
            label: "Agree",
            text: "A shared rule should help because no one has to feel they are missing out alone.",
          },
          {
            label: "Partly agree",
            text: "I like a focused period, but twenty minutes may be more realistic than a whole evening.",
          },
          {
            label: "Disagree",
            text: "I would start with disabling notifications because some members need their phones to consult notes.",
          },
          {
            label: "Follow-up",
            text: "Who could keep the shared document open so the rest of us can put our phones away?",
          },
        ],
      },
      partner: "We need a practical rule for our next group study meeting.",
      interaction: "给出规则并与伙伴确认可行性。",
      id: "d14-discussion3",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
  ],
  finalQuestion: {
    prompt:
      "Would life without mobile phones be better for university students?",
    hints: ["避免绝对回答", "举昼夜对比", "回到学生需求"],
    reference: {
      paragraphs: [
        "Life without mobile phones might bring fewer interruptions, but I do not think it would generally be better for university students. We would lose easy access to maps, campus notices, and family support. The real improvement would come from changing our habits. For instance, I could leave my phone outside my bedroom at night while still using it to navigate during the day. Different situations call for different choices. A good student life includes both digital convenience and enough uninterrupted time to study, rest, and build friendships in person.",
      ],
      structure: ["权衡两面", "提出场景选择", "概括理想状态"],
      highlights: ["changing our habits", "Different situations"],
    },
    id: "d14-final",
    type: "final",
    prepareSeconds: 5,
    speakingSeconds: 45,
  },
} satisfies TrainingDay;

export default day;
