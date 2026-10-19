import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day27",
  day: 27,
  topic: "Technology and Privacy",
  topicZh: "科技与隐私",
  category: "Technology",
  estimatedMinutes: 18,
  focus: "综合检验：权衡便利与隐私，提出清晰且可执行的数据使用规则。",
  talkingPoints: [
    {
      en: "Ask what information a service really needs.",
      zh: "判断服务真正需要哪些信息。",
    },
    {
      en: "Make consent understandable and voluntary.",
      zh: "让授权易懂且自愿。",
    },
    {
      en: "Consider who can access stored information.",
      zh: "考虑谁能访问已存储的信息。",
    },
  ],
  expressions: [
    {
      en: "personal data",
      zh: "个人数据",
      example: "A fitness app may collect more personal data than it needs.",
    },
    {
      en: "give informed consent",
      zh: "作出知情同意",
      example: "Users need clear explanations to give informed consent.",
    },
    {
      en: "opt out",
      zh: "选择退出",
      example: "Students should be able to opt out of optional tracking.",
    },
    {
      en: "data collection",
      zh: "数据收集",
      example: "The purpose of data collection should be clear.",
    },
    {
      en: "privacy settings",
      zh: "隐私设置",
      example: "I review my privacy settings when installing a new app.",
    },
    {
      en: "a less intrusive option",
      zh: "干扰隐私更少的选项",
      example:
        "A card reader is a less intrusive option than continuous tracking.",
    },
  ],
  sentenceFrames: [
    {
      en: "The convenience is useful, but I would want to know ...",
      zh: "这种便利有用，但我想了解……",
    },
    {
      en: "Only ... should have access to ...",
      zh: "只有……才应能访问……",
    },
    {
      en: "Students should be able to choose ... without ...",
      zh: "学生应该能够选择……，而不必……",
    },
    {
      en: "Could the same goal be achieved by ...?",
      zh: "能否通过……实现同样目标？",
    },
  ],
  quickResponses: [
    {
      id: "d27-q1",
      type: "quick",
      prompt: "Do you read an app's permission requests before accepting them?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: ["purpose", "access"],
      reference: {
        paragraphs: [
          "I read the main permission requests, especially those involving location, contacts, and the microphone. I do not always read every line of a long policy, but I check whether each request matches the app's purpose. A dictionary should not need my contact list. If a permission seems unnecessary, I refuse it or look for a less intrusive option that provides the same service.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["a less intrusive option"],
      },
    },
    {
      id: "d27-q2",
      type: "quick",
      prompt: "Would you share your location with friends through a phone app?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: ["purpose", "duration"],
      reference: {
        paragraphs: [
          "I would share my location temporarily when meeting friends in an unfamiliar place. It can save several confusing calls and help us find each other. However, I would turn sharing off afterwards rather than leave it active all day. Trusting a friend does not mean every movement needs to be recorded. I prefer a clear purpose, a limited period, and an easy way to stop.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["limited period"],
      },
    },
  ],
  personalStatement: {
    id: "d27-statement",
    type: "statement",
    prompt:
      "Your university plans to introduce a smart campus app. Explain how it could offer useful services while respecting student privacy.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: ["minimum", "choice"],
    reference: {
      paragraphs: [
        "A smart campus app could be useful if it brings together room bookings, timetable changes, and library reminders. However, usefulness alone does not justify collecting every possible detail about students. The university should decide what each service needs before asking for personal data.",
        "For example, a room booking system needs a student account and a chosen time. It probably does not need continuous location tracking. Keeping data collection limited would reduce the consequences if information were accidentally exposed. To let students give informed consent, the app should explain who can see each record and when it will be deleted.",
        "Choice is equally important. Optional features should require separate permission, and students should be able to opt out without losing access to essential campus services. A student who declines personalised recommendations must still be able to book a study room.",
        "Finally, privacy requires continuing attention. Students need a clear contact for questions and a simple way to correct or remove unnecessary information. If the university invites feedback and responds openly, the app is more likely to earn trust and become genuinely useful in daily campus life.",
      ],
      structure: [
        "提出明确观点",
        "展开理由并举例",
        "回应限制或不同情况",
        "总结个人行动",
      ],
      highlights: ["personal data", "data collection", "opt out"],
    },
  },
  discussion: [
    {
      id: "d27-discussion1",
      type: "discussion",
      prompt:
        "Respond to a proposal for facial recognition at library entrances.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["alternatives", "errors"],
      reference: {
        paragraphs: [
          "Facial recognition might shorten queues, but we should ask whether the same benefit requires collecting face images. A student card or a temporary code could be a less intrusive option. We also need to know how errors would be handled so nobody loses access unfairly. Could we compare these methods in a small trial before recommending a campuswide system?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["a less intrusive option"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Faster entry would help, provided students have an equally convenient alternative.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "It may reduce queues, but speed is only one factor in the decision.",
          },
          {
            label: "不同意 · Disagree",
            text: "I would prefer student cards because face images create additional privacy concerns.",
          },
          {
            label: "追问 · Follow-up",
            text: "How would a student enter if the system failed to recognise them?",
          },
        ],
      },
      partner:
        "Facial recognition would make entering the library much faster, so we should introduce it immediately.",
      interaction: "承认便利，比较替代方式，并提出试点评估。",
    },
    {
      id: "d27-discussion2",
      type: "discussion",
      prompt: "Decide what information a class survey should collect.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["purpose", "minimum"],
      reference: {
        paragraphs: [
          "Knowing broad study habits could help our report, but names and exact daily locations seem unnecessary. We can ask how often students use different study spaces and keep the results anonymous. That should answer our research question while making people more comfortable. We should explain the purpose before they begin. Which pieces of information are essential for the conclusion we want to draw?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["keep the results anonymous"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Detailed information can help if every field serves a clear research purpose.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Study locations matter, but broad categories should be enough.",
          },
          {
            label: "不同意 · Disagree",
            text: "Collecting names would add risk without improving our main analysis.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could we test whether anonymous answers still answer our research question?",
          },
        ],
      },
      partner:
        "Let us collect names, phone numbers, and daily locations so our study survey is more detailed.",
      interaction: "根据研究目的缩减字段，说明匿名处理的价值。",
    },
    {
      id: "d27-discussion3",
      type: "discussion",
      prompt:
        "Choose how to encourage students to use stronger privacy settings.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["demonstration", "privacy"],
      reference: {
        paragraphs: [
          "A poster can attract attention, but students may need help finding the relevant controls. We could run a short demonstration using a sample account and explain three common privacy settings. Participants should change their own devices privately, without showing passwords or personal messages. Afterwards, we can share a simple checklist. Would a lunchtime drop-in session be more convenient than a formal lecture?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["privacy settings"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Hands-on help is useful if the device owner stays in control throughout.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Volunteers could explain settings, but they should not handle private accounts.",
          },
          {
            label: "不同意 · Disagree",
            text: "I would avoid collecting phones because the activity itself could expose personal information.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could a demonstration account show every step without revealing anyone's data?",
          },
        ],
      },
      partner:
        "We can ask everyone to hand over their phones so volunteers can adjust the settings quickly.",
      interaction: "保护参与者隐私，提出可参与的教学方式。",
    },
  ],
  finalQuestion: {
    id: "d27-final",
    type: "final",
    prompt:
      "What personal rule would you follow when trying a new digital service?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: ["access", "review"],
    reference: {
      paragraphs: [
        "My rule would be to start with the least access the service can use. I would check the main privacy settings, refuse optional permissions, and add access later only if a feature genuinely needs it. For instance, a photo editor may need one selected picture, but it does not necessarily need my entire photo library. This approach takes a little extra time at the beginning. However, it helps me understand what I am sharing and makes it easier to notice a request that does not fit the service.",
      ],
      structure: ["概括个人立场", "用实例解释原因", "提出下一步行动"],
      highlights: ["privacy settings"],
    },
  },
  upgrades: [
    {
      basic: "This app knows too much.",
      better:
        "The app requests location access even when navigation is turned off.",
      zh: "说清多收集了什么信息。",
    },
    {
      basic: "Privacy is important.",
      better:
        "Students need control over who can view their attendance records.",
      zh: "明确隐私涉及的控制权。",
    },
    {
      basic: "Do not collect data.",
      better: "Collect only the information necessary for the stated purpose.",
      zh: "提出适度的数据原则。",
    },
    {
      basic: "People can agree.",
      better:
        "People can give informed consent only when the terms are understandable.",
      zh: "说明有效同意的前提。",
    },
  ],
};

export default day;
