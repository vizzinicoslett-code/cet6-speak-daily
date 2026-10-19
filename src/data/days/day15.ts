import type { TrainingDay } from "../../types";

const day = {
  id: "day15",
  day: 15,
  topic: "Volunteering",
  topicZh: "志愿服务",
  category: "Society",
  estimatedMinutes: 18,
  focus: "互动训练：清楚同意，并用理由、实例和追问推进讨论",
  talkingPoints: [
    {
      en: "Community needs",
      zh: "社区需求",
    },
    {
      en: "Skills and responsibility",
      zh: "技能与责任",
    },
    {
      en: "Sustained commitment",
      zh: "持续投入",
    },
  ],
  expressions: [
    {
      en: "reading support",
      zh: "阅读辅导",
      example:
        "Our volunteers provide reading support to children at the community center.",
    },
    {
      en: "time commitment",
      zh: "时间投入要求",
      example:
        "I asked about the time commitment before agreeing to join the project.",
    },
    {
      en: "listen before offering solutions",
      zh: "先倾听再提供解决办法",
      example:
        "Volunteers should listen before offering solutions to residents’ problems.",
    },
    {
      en: "receive suitable training",
      zh: "接受适当培训",
      example:
        "Students receive suitable training before helping older residents use appointment apps.",
    },
    {
      en: "build trust",
      zh: "建立信任",
      example:
        "Returning at the same time every week helps volunteers build trust.",
    },
    {
      en: "follow through",
      zh: "坚持完成承诺",
      example:
        "A reliable team will follow through even after the initial excitement fades.",
    },
  ],
  sentenceFrames: [
    {
      en: "I agree, and one reason is that ...",
      zh: "我同意，其中一个原因是……",
    },
    {
      en: "Your point about ... reminds me of ...",
      zh: "你关于……的观点让我想起……",
    },
    {
      en: "We could build on that by ...",
      zh: "我们可以在此基础上……",
    },
    {
      en: "What would help us keep this going?",
      zh: "什么能帮助我们持续做下去？",
    },
  ],
  upgrades: [
    {
      basic: "Volunteering is good.",
      better:
        "Volunteering connects students’ abilities with needs beyond the classroom.",
      zh: "具体说明价值来源。",
    },
    {
      basic: "I agree with you.",
      better:
        "I agree that reliability matters because residents plan around our visits.",
      zh: "用原因扩展同意。",
    },
    {
      basic: "We can help children.",
      better:
        "We can offer weekly reading support designed with local teachers.",
      zh: "加入频率与协作对象。",
    },
    {
      basic: "More people should join.",
      better:
        "A clear timetable and short training session could encourage more students to join.",
      zh: "说明促进参与的办法。",
    },
  ],
  quickResponses: [
    {
      prompt:
        "Would you like to take part in a community volunteering project?",
      hints: ["明确承诺意味着什么"],
      reference: {
        paragraphs: [
          "Yes, I would like to join a project that offers reading support to local children. I enjoy explaining stories, and a regular session would let me see whether my help makes a difference. I would first ask the organizers about training and the time commitment. Wanting to help is a useful starting point, but being dependable matters just as much to the children involved.",
        ],
        structure: ["表明意愿", "说明适合项目", "强调可靠投入"],
        highlights: ["reading support", "being dependable"],
      },
      id: "d15-q1",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
    {
      prompt: "What can students learn from volunteering?",
      hints: ["选一个具体学习过程"],
      reference: {
        paragraphs: [
          "Students can learn to listen before offering solutions. During a community visit, they may discover that residents need help using appointment systems more than another public performance. This experience challenges assumptions and improves communication. It can also teach teamwork, since volunteers must divide tasks and arrive on time. These lessons are valuable because they develop through responsibility to real people, rather than a classroom exercise.",
        ],
        structure: ["提出核心收获", "用需求差异举例", "解释学习方式"],
        highlights: [
          "listen before offering solutions",
          "challenges assumptions",
        ],
      },
      id: "d15-q2",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
  ],
  personalStatement: {
    prompt:
      "Explain why university students should volunteer and how they can make their service effective.",
    hints: ["说明怎样让服务有效"],
    reference: {
      paragraphs: [
        "I believe volunteering can be an important part of university education because it connects knowledge with responsibility. Students often have useful skills, such as language ability or familiarity with digital tools, while nearby communities may lack people who can provide regular support. A well designed project can bring these two sides together.",
        "The main benefit is not simply adding an activity to a résumé. Volunteers learn to understand needs from another person’s perspective. For example, a student helping an older resident use a hospital appointment app must speak patiently and check whether each step is clear. That kind of interaction develops both practical communication and respect for people whose experiences are different.",
        "However, effective service requires preparation. Students should choose a role that matches their skills, receive suitable training, and make a realistic commitment. Organizers should also ask community members whether the service is useful. I would prefer one dependable weekly reading session to several impressive events that disappear after a month. When volunteers listen carefully and follow through, the community gains reliable help and students become more thoughtful members of society.",
      ],
      structure: [
        "连接知识与责任",
        "通过服务实例说明成长",
        "提出培训与持续机制",
      ],
      highlights: [
        "another person’s perspective",
        "realistic commitment",
        "follow through",
      ],
    },
    id: "d15-statement",
    type: "statement",
    prepareSeconds: 60,
    speakingSeconds: 90,
  },
  discussion: [
    {
      prompt: "Agree with your partner’s view and give a concrete reason.",
      hints: ["同意之后继续推进"],
      reference: {
        paragraphs: [
          "I agree that regular volunteering is more useful than a single impressive event. People can build trust when they know the same volunteers will return. For example, a weekly reading group allows children to become comfortable asking questions, while volunteers can adjust activities to their progress. We could start with a small team and a schedule everyone can maintain. Which afternoon would suit our group best?",
        ],
        structure: ["明确同意", "说明信任机制", "把观点落实为安排"],
        highlights: ["build trust", "a schedule"],
        alternatives: [
          {
            label: "Agree",
            text: "I agree because a repeated visit lets volunteers notice changes and adapt their help.",
          },
          {
            label: "Partly agree",
            text: "Regular service is valuable, although a large event can introduce people to an ongoing project.",
          },
          {
            label: "Disagree",
            text: "For a short emergency response, a single well organized event may meet the most urgent need.",
          },
          {
            label: "Follow-up",
            text: "How often could students volunteer without making promises they cannot keep?",
          },
        ],
      },
      partner: "Regular volunteering is more valuable than one big event.",
      interaction: "练习同意：明确表态、解释理由、补充行动或追问。",
      id: "d15-discussion1",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Support your partner’s suggestion and add an implementation detail.",
      hints: ["补充可执行细节"],
      reference: {
        paragraphs: [
          "That sounds sensible. Training would help volunteers avoid misunderstandings and feel more confident when something unexpected happens. If we visit older residents, we could practice explaining a phone setting slowly and checking permission before touching their devices. An experienced volunteer could demonstrate first. This would make the service more respectful as well as more effective. Could we include that practice in the first meeting?",
        ],
        structure: ["赞同方案", "提供具体训练情境", "提出实施问题"],
        highlights: ["checking permission", "demonstrate first"],
        alternatives: [
          {
            label: "Agree",
            text: "I support training because enthusiasm alone does not prepare us for every situation.",
          },
          {
            label: "Partly agree",
            text: "A short introduction is useful, but complex roles may also require supervision during the first visit.",
          },
          {
            label: "Disagree",
            text: "For a simple park cleanup, a clear safety briefing may be enough without a separate training event.",
          },
          {
            label: "Follow-up",
            text: "Could experienced volunteers demonstrate a difficult conversation during the first session?",
          },
        ],
      },
      partner: "Every new volunteer should attend a short training session.",
      interaction: "用赞同加实例帮助伙伴完善建议。",
      id: "d15-discussion2",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Agree on how to judge whether a volunteering project is successful.",
      hints: ["提出简单反馈办法"],
      reference: {
        paragraphs: [
          "I agree that feedback from the people receiving help should come first. The number of volunteers tells us how many students joined, but not whether the service was useful. We could ask residents two simple questions after each month: what helped, and what should change? Then we should discuss the answers with the team. That would give our project a clear way to improve.",
        ],
        structure: ["同意评价标准", "区分投入与效果", "设计反馈循环"],
        highlights: ["feedback", "what should change"],
        alternatives: [
          {
            label: "Agree",
            text: "Yes, their experience is the clearest evidence of whether we are meeting the intended need.",
          },
          {
            label: "Partly agree",
            text: "Their feedback matters most, and we should also check whether volunteers can maintain the schedule.",
          },
          {
            label: "Disagree",
            text: "For some services, anonymous participation data may be more practical than asking every person directly.",
          },
          {
            label: "Follow-up",
            text: "How could we collect honest feedback without making residents feel obliged to praise us?",
          },
        ],
      },
      partner:
        "We should ask community members whether our service actually helps them.",
      interaction: "在同意基础上共同确定评价方式。",
      id: "d15-discussion3",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
  ],
  finalQuestion: {
    prompt: "Should volunteering be compulsory for all university students?",
    hints: ["用现实差异支持观点"],
    reference: {
      paragraphs: [
        "I would encourage every student to try volunteering, but I would hesitate to make a fixed number of hours compulsory. Students have different schedules, financial pressures, and caring responsibilities. A requirement could also turn service into a task completed only for a certificate. Universities should instead provide accessible projects, basic training, and clear information about the commitment. A student who works at weekends might help with a short evening translation task. Giving people suitable choices can create more willing and dependable participation while keeping the focus on community needs.",
      ],
      structure: ["提出有条件立场", "解释差异与动机", "建议多样入口"],
      highlights: ["caring responsibilities", "suitable choices"],
    },
    id: "d15-final",
    type: "final",
    prepareSeconds: 5,
    speakingSeconds: 45,
  },
} satisfies TrainingDay;

export default day;
