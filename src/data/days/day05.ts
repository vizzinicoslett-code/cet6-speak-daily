import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day05",
  day: 5,
  topic: "University Life",
  topicZh: "大学生活",
  category: "Campus",
  estimatedMinutes: 18,
  focus: "从一个校园选择出发，平衡学业、探索和归属感。",
  talkingPoints: [
    {
      en: "Explore beyond the classroom",
      zh: "选择能带来新体验的校园活动",
    },
    {
      en: "Develop a sense of belonging",
      zh: "通过持续参与形成校园归属感",
    },
    {
      en: "Balance freedom and responsibility",
      zh: "说明自主安排与承担后果的关系",
    },
  ],
  expressions: [
    {
      en: "step out of my comfort zone",
      zh: "走出舒适区",
      example: "Joining the debate club helped me step out of my comfort zone.",
    },
    {
      en: "a sense of belonging",
      zh: "归属感",
      example: "Working with other volunteers gave me a sense of belonging.",
    },
    {
      en: "make the most of",
      zh: "充分利用",
      example: "I want to make the most of the university library.",
    },
    {
      en: "take the initiative",
      zh: "主动行动",
      example: "Students often need to take the initiative to meet people.",
    },
    {
      en: "broaden my horizons",
      zh: "开阔视野",
      example: "Public lectures broaden my horizons beyond my major.",
    },
    {
      en: "strike a balance",
      zh: "取得平衡",
      example:
        "I try to strike a balance between coursework and campus activities.",
    },
  ],
  sentenceFrames: [
    {
      en: "One opportunity I would like to explore is ...",
      zh: "我想探索的一个机会是……",
    },
    {
      en: "Compared with high school, university life ...",
      zh: "与高中相比，大学生活……",
    },
    {
      en: "Taking part in ... has taught me ...",
      zh: "参加……教会了我……",
    },
    {
      en: "To avoid taking on too much, I ...",
      zh: "为了避免承担太多，我会……",
    },
  ],
  quickResponses: [
    {
      id: "d05-q1",
      type: "quick",
      prompt: "What is your favorite place on campus?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选图书馆、操场或食堂",
        "描述在那里做的一件事",
        "说明它与你大学生活的联系",
      ],
      reference: {
        paragraphs: [
          "My favorite place on campus is a small reading area beside the library windows. It is quieter than my dormitory, and the natural light makes studying pleasant. I often go there after lunch to make the most of quiet study time or read something outside my major. That routine gives me a peaceful part of the day and reminds me that university is also a place for exploration.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: [
          "reading area",
          "outside my major",
          "place for exploration",
        ],
      },
    },
    {
      id: "d05-q2",
      type: "quick",
      prompt: "What campus activity would you like to try?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: ["选择一项尚未尝试的活动", "说明兴趣或担心", "补充第一步怎么参加"],
      reference: {
        paragraphs: [
          "I would like to try the campus drama club. I have little acting experience, but I enjoy stories and would like to become more comfortable speaking in front of people. I could begin with a small backstage role instead of expecting a leading part. Helping with a performance would also introduce me to students from other departments and give us a shared goal. It would help me step out of my comfort zone.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: ["backstage role", "shared goal", "other departments"],
      },
    },
  ],
  personalStatement: {
    id: "d05-statement",
    type: "statement",
    prompt: "What does a meaningful university experience mean to you?",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [
      "先提出你判断“有意义”的标准",
      "学业、探索、人际关系各用一个具体行动",
      "讲一次活动如何促进成长",
      "避免简单堆积成绩与社团名称",
    ],
    reference: {
      paragraphs: [
        "A meaningful university experience means leaving with stronger abilities and a clearer understanding of myself. There is room to broaden my horizons. Good academic work is part of that, but I would not measure these years only by exam results or the number of certificates I collect.",
        "First, I want to develop the habit of asking questions. Attending classes carefully and discussing ideas with teachers can help me understand how knowledge is created. Second, I want to try something unfamiliar. When I helped organize a small campus exhibition, I discovered that arranging schedules and communicating with different people were harder than I expected. Solving those problems taught me lessons that a textbook could not provide.",
        "Finally, university should be a place to build considerate relationships and develop a sense of belonging. Sharing a room, working in groups, and supporting friends all require patience. I cannot participate in every activity, so choosing deliberately matters. If I leave university able to learn independently, cooperate respectfully, and make thoughtful decisions, I will consider my experience meaningful, even if some plans change along the way.",
      ],
      structure: [
        "开头提出个人观点",
        "分层解释原因与具体做法",
        "用经历或场景支撑观点",
        "总结收获并回扣主题",
      ],
      highlights: [
        "stronger abilities",
        "asking questions",
        "choosing deliberately",
        "thoughtful decisions",
      ],
    },
  },
  discussion: [
    {
      id: "d05-discussion1",
      type: "discussion",
      prompt: "Discuss how many clubs a first-year student should join.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "回应广泛尝试的好处",
        "考虑每周需要投入的时间",
        "提出先体验再选择的方式",
      ],
      reference: {
        paragraphs: [
          "Trying several clubs can help new students discover their interests. Still, membership means more than adding a name to a list. Each club needs time and reliable participation. I would suggest attending introductory sessions, then choosing one or two groups to join regularly. Students could add another activity later if they can strike a balance with their studies. Would a trial period help them decide?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "reliable participation",
          "introductory sessions",
          "trial period",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that clubs introduce students to unfamiliar people and activities.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but joining too many can weaken real participation.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that the number of memberships reflects a rich university experience.",
          },
          {
            label: "Follow-up · 追问",
            text: "How could a student estimate the weekly commitment before joining?",
          },
        ],
      },
      partner:
        "New students should join as many clubs as possible to enjoy university.",
      interaction: "将数量讨论转为投入质量，并提出选择流程。",
    },
    {
      id: "d05-discussion2",
      type: "discussion",
      prompt:
        "Discuss whether attendance at public lectures should be encouraged.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["给出专业之外的收获", "考虑时间和兴趣", "提出提高参与意愿的做法"],
      reference: {
        paragraphs: [
          "I support encouraging students to attend public lectures because they can connect our major with wider questions. A talk about city design, for instance, may interest students from engineering, art, and sociology. However, encouragement should include clear descriptions and convenient times. Students need to understand what they might gain. Could departments invite students to suggest topics rather than choosing everything themselves?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: ["wider questions", "convenient times", "suggest topics"],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that public lectures can broaden students’ academic interests.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but attendance is more meaningful when the topic is relevant.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree with requiring every student to attend every lecture.",
          },
          {
            label: "Follow-up · 追问",
            text: "What kind of lecture would attract students from several majors?",
          },
        ],
      },
      partner:
        "Universities should encourage everyone to attend more public lectures.",
      interaction: "赞同并提供具体的跨专业例子，推进到活动设计。",
    },
    {
      id: "d05-discussion3",
      type: "discussion",
      prompt:
        "Discuss how to help a student who feels disconnected from campus life.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "避免只建议“多社交”",
        "从小型、稳定的接触开始",
        "考虑通勤或性格差异",
      ],
      reference: {
        paragraphs: [
          "A big welcome party may help some students, but it can be uncomfortable for someone who already feels disconnected. I would suggest a smaller, regular activity with a clear purpose, such as a study group or volunteer shift. Repeated contact makes conversation less awkward. A mentor could help students take the initiative. We should also consider students who commute and cannot stay late. What daytime activity could be especially welcoming?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: ["regular activity", "Repeated contact", "less awkward"],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that invitations can help students feel noticed.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but large events are not comfortable for everyone.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that feeling disconnected always means someone lacks social skills.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could a peer mentor introduce the student to one small group?",
          },
        ],
      },
      partner:
        "The easiest solution for lonely students is to attend more large campus events.",
      interaction: "温和修正单一方案，为不同学生提供更易参与的选择。",
    },
  ],
  finalQuestion: {
    id: "d05-final",
    type: "final",
    prompt:
      "Which campus opportunity would you prioritize if your free time were limited?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: ["明确只选一个机会", "解释它的独特价值", "说明如何与课程安排兼容"],
    reference: {
      paragraphs: [
        "If my free time were limited, I would prioritize a regular volunteer project on campus. It would let me meet people while making a practical contribution, so one activity could serve several purposes. For example, helping new students find classrooms would develop my communication skills and make the university feel more welcoming. I would choose a manageable weekly shift and protect the time needed for coursework. A meaningful university experience does not require constant activity; it can grow from participating reliably in one opportunity that matters to me.",
      ],
      structure: ["明确回应问题", "比较或解释两个要点", "用具体行动形成结论"],
      highlights: [
        "practical contribution",
        "manageable weekly shift",
        "participating reliably",
      ],
    },
  },
  upgrades: [
    {
      basic: "University is interesting.",
      better:
        "University gives me room to explore subjects and activities independently.",
      zh: "具体解释有趣体现在哪里",
    },
    {
      basic: "I joined many clubs.",
      better: "I chose two clubs that matched my interests and available time.",
      zh: "突出有意识的选择",
    },
    {
      basic: "I learned a lot.",
      better:
        "Organizing the event improved my communication and planning skills.",
      zh: "说清成长的具体方面",
    },
    {
      basic: "Study is also important.",
      better:
        "Campus activities work best when they fit around essential academic commitments.",
      zh: "表达学业与活动的协调",
    },
  ],
};

export default day;
