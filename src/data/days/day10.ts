import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day10",
  day: 10,
  topic: "Online Learning",
  topicZh: "在线学习",
  category: "Education",
  estimatedMinutes: 18,
  focus: "在便利与效果之间建立因果联系，使用学习场景支撑90秒陈述。",
  talkingPoints: [
    {
      en: "Use flexibility deliberately",
      zh: "把灵活时间变成明确学习安排",
    },
    {
      en: "Stay actively involved",
      zh: "通过练习、提问和反馈保持主动参与",
    },
    {
      en: "Choose the right learning format",
      zh: "根据内容和互动需求选择线上线下方式",
    },
  ],
  expressions: [
    {
      en: "learn at my own pace",
      zh: "按自己的节奏学习",
      example: "Recorded lessons let me learn at my own pace.",
    },
    {
      en: "pause and replay",
      zh: "暂停与重播",
      example: "I pause and replay a difficult explanation.",
    },
    {
      en: "stay actively engaged",
      zh: "保持主动参与",
      example: "Short exercises help me stay actively engaged.",
    },
    {
      en: "seek timely feedback",
      zh: "寻求及时反馈",
      example: "I seek timely feedback before repeating the same mistake.",
    },
    {
      en: "a stable internet connection",
      zh: "稳定的网络连接",
      example: "A stable internet connection matters during live discussions.",
    },
    {
      en: "put learning into practice",
      zh: "把所学用于实践",
      example: "I put learning into practice by completing a small project.",
    },
  ],
  sentenceFrames: [
    {
      en: "Online learning works best for me when ...",
      zh: "当……时，在线学习对我效果最好",
    },
    {
      en: "The flexibility is valuable, but ...",
      zh: "灵活性很有价值，但……",
    },
    {
      en: "To check whether I understand, I ...",
      zh: "为了检验自己是否理解，我会……",
    },
    {
      en: "For a course involving ..., I would prefer ...",
      zh: "对于涉及……的课程，我更偏好……",
    },
  ],
  quickResponses: [
    {
      id: "d10-q1",
      type: "quick",
      prompt: "What do you like most about online learning?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选暂停、重播或灵活时间",
        "描述一个困难知识点的处理方法",
        "补充确保理解的动作",
      ],
      reference: {
        paragraphs: [
          "I like being able to pause and replay an explanation. In a classroom, I sometimes need more time to understand a difficult step, but the lesson has already moved on. With a recorded lesson, I can compare the explanation with my notes, learn at my own pace, and try the example again. I still need to test myself afterward, because recognizing an answer is not the same as understanding it.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: ["pause and replay", "test myself", "understanding it"],
      },
    },
    {
      id: "d10-q2",
      type: "quick",
      prompt: "What is the biggest challenge of studying online?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "可选分心、拖延或缺乏反馈",
        "解释它为何发生",
        "提出一个具体应对办法",
      ],
      reference: {
        paragraphs: [
          "For me, the biggest challenge is finding ways to stay actively engaged when no one can see whether I am paying attention. It is easy to let a video play while checking messages. I try to prevent this by setting a clear goal for each session and keeping a question beside my notes. At the end, I explain the main point aloud without looking at the screen.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: [
          "clear goal",
          "explain the main point",
          "paying attention",
        ],
      },
    },
  ],
  personalStatement: {
    id: "d10-statement",
    type: "statement",
    prompt:
      "Describe how you would use an online course to learn a new skill effectively.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [
      "按目标、安排、练习、反馈四步组织90秒",
      "选一个具体技能作为例子",
      "解释“看完”与“学会”的差别",
      "结尾提出检验成果的方式",
    ],
    reference: {
      paragraphs: [
        "If I used an online course to learn a new skill, I would first choose a clear and realistic outcome. For example, rather than deciding to learn all about photography, I might aim to take a well-composed set of campus photographs using my phone.",
        "Next, I would review the course outline and divide the lessons across several weeks. A regular study time would help me use the flexibility instead of postponing everything. During each lesson, I would pause to try the technique immediately. If the teacher discussed lighting, I could take photographs in two locations and compare the results. This would turn passive watching into an experiment.",
        "I would seek timely feedback too. I could share a small selection of work with classmates or an online study group and ask specific questions. At the end, I would complete a project without following the video step by step. Finishing every lesson is a useful milestone, but independent performance is a stronger sign of learning. A good online course provides resources; I still have to organize the practice that makes them useful.",
      ],
      structure: [
        "开头提出个人观点",
        "分层解释原因与具体做法",
        "用经历或场景支撑观点",
        "总结收获并回扣主题",
      ],
      highlights: [
        "realistic outcome",
        "passive watching",
        "specific questions",
        "independent performance",
      ],
    },
  },
  discussion: [
    {
      id: "d10-discussion1",
      type: "discussion",
      prompt: "Discuss whether recorded lessons are better than live lessons.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "从可重播性谈优势",
        "加入即时提问的需要",
        "用不同内容解释选择条件",
      ],
      reference: {
        paragraphs: [
          "Recorded lessons are useful when students need different amounts of time to follow an explanation. They can pause without interrupting anyone. Live lessons, however, allow immediate questions and discussion, which may be essential for a complex debate. I would choose the format according to the learning goal. Could a course combine short recordings with a weekly live session for questions?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "immediate questions",
          "learning goal",
          "weekly live session",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that recordings make repeated review much easier.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but live discussion can reveal misunderstandings quickly.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that one format is superior for every kind of subject.",
          },
          {
            label: "Follow-up · 追问",
            text: "Which parts of this course most need real-time interaction?",
          },
        ],
      },
      partner:
        "Recorded lessons are always better because students can watch them whenever they want.",
      interaction: "对比不同学习需求，提出结合两种形式的具体方案。",
    },
    {
      id: "d10-discussion2",
      type: "discussion",
      prompt: "Discuss how online teachers can keep students involved.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "回应签到和开摄像头的作用",
        "补充参与不等于被看见",
        "提出简短任务与反馈",
      ],
      reference: {
        paragraphs: [
          "Seeing students on camera may help a teacher notice reactions, but it does not prove that learning is happening. Some students also have limited privacy or lack a stable internet connection. I would use brief questions, small group tasks, and opportunities to explain an answer. These activities reveal understanding more directly. What kind of low-pressure task could make every student contribute during a lesson?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "limited privacy",
          "reveal understanding",
          "low-pressure task",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that teachers need ways to notice whether students are following.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but camera use should consider students’ circumstances.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that constant camera monitoring guarantees active learning.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could a short written response provide a more useful check of understanding?",
          },
        ],
      },
      partner:
        "Online teachers should require cameras to stay on so everyone pays attention.",
      interaction: "把可见性与学习效果分开，提出可检验理解的活动。",
    },
    {
      id: "d10-discussion3",
      type: "discussion",
      prompt: "Discuss whether online learning can replace classroom teaching.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "承认资源与地域便利",
        "考虑实验、合作或设备差异",
        "用适合条件表达判断",
      ],
      reference: {
        paragraphs: [
          "Online learning can expand access to useful resources, especially for students who cannot travel to a particular campus. Nevertheless, some activities depend on shared equipment, direct observation, or spontaneous discussion. A practical laboratory course is an obvious example. I would not ask whether everything can move online, but which parts benefit from each setting. How could universities make that decision course by course?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: ["expand access", "shared equipment", "each setting"],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that many explanations and revision materials can be delivered online.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but hands-on activities may still need a shared physical space.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that convenience alone proves online teaching can replace every classroom.",
          },
          {
            label: "Follow-up · 追问",
            text: "Which learning outcomes would help us choose the most suitable format?",
          },
        ],
      },
      partner:
        "Because online courses are convenient, universities could replace most classroom teaching.",
      interaction: "回应便利性，再用学习结果和课程类型建立判断标准。",
    },
  ],
  finalQuestion: {
    id: "d10-final",
    type: "final",
    prompt:
      "How should a student judge whether an online course is worthwhile?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [
      "给出选择前与学习后的标准",
      "不要只比较价格或证书",
      "用一个检验能力的行动收尾",
    ],
    reference: {
      paragraphs: [
        "A student should begin by checking whether the course has clear goals, suitable examples, and opportunities to practise and put learning into practice. The level should match what they already know, and the required time should fit their schedule. Reviews may help, but an attractive certificate does not guarantee useful learning. After trying a lesson, the student can ask whether they can explain or apply something new. For a design course, that might mean creating a simple poster independently. A worthwhile course should help the learner do something meaningful, rather than merely accumulate completed videos.",
      ],
      structure: ["明确回应问题", "比较或解释两个要点", "用具体行动形成结论"],
      highlights: [
        "clear goals",
        "opportunities to practise",
        "apply something new",
      ],
    },
  },
  upgrades: [
    {
      basic: "Online classes are easy.",
      better:
        "Recorded classes are accessible, but they still require active effort.",
      zh: "区分获取方便与学习投入",
    },
    {
      basic: "I can watch again.",
      better: "I can replay the explanation and compare it with my own notes.",
      zh: "增加复习的具体用途",
    },
    {
      basic: "There is no communication.",
      better:
        "Some online courses offer too few opportunities for immediate questions.",
      zh: "避免绝对化并指出具体缺陷",
    },
    {
      basic: "I finished many videos.",
      better:
        "I checked my understanding by solving a problem without the video.",
      zh: "用能力而不是观看量衡量学习",
    },
  ],
};

export default day;
