import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day08",
  day: 8,
  topic: "Reading",
  topicZh: "阅读习惯",
  category: "Education",
  estimatedMinutes: 18,
  focus: "练习把观点扩展到90秒：加入具体书籍体验、原因解释和适用条件。",
  talkingPoints: [
    {
      en: "Read for different purposes",
      zh: "区分获取知识、放松与理解他人",
    },
    {
      en: "Choose a workable format",
      zh: "比较纸书和电子阅读的具体场景",
    },
    {
      en: "Turn reading into reflection",
      zh: "用笔记、讨论或行动巩固阅读收获",
    },
  ],
  expressions: [
    {
      en: "get absorbed in a book",
      zh: "沉浸在一本书中",
      example: "I get absorbed in a book when the characters feel convincing.",
    },
    {
      en: "read at my own pace",
      zh: "按自己的节奏阅读",
      example: "A paper book allows me to read at my own pace.",
    },
    {
      en: "see the world through someone else’s eyes",
      zh: "从他人的视角看世界",
      example: "Stories help me see the world through someone else’s eyes.",
    },
    {
      en: "make a note of",
      zh: "记下",
      example:
        "I make a note of a question instead of highlighting every sentence.",
    },
    {
      en: "a reading habit",
      zh: "阅读习惯",
      example: "A reading habit can begin with ten minutes before bed.",
    },
    {
      en: "put an idea into practice",
      zh: "把想法付诸实践",
      example:
        "I try to put an idea into practice after reading a useful chapter.",
    },
  ],
  sentenceFrames: [
    {
      en: "What stayed with me after reading ... was ...",
      zh: "读完……后让我记住的是……",
    },
    {
      en: "The value of this kind of reading lies in ...",
      zh: "这类阅读的价值在于……",
    },
    {
      en: "This is particularly helpful when ...",
      zh: "当……时，这尤其有帮助",
    },
    {
      en: "An example can show why ...",
      zh: "一个例子可以说明为什么……",
    },
  ],
  quickResponses: [
    {
      id: "d08-q1",
      type: "quick",
      prompt: "What do you enjoy reading outside your courses?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: ["先说明类型", "补一个具体内容或阅读场景", "解释它带来的独特体验"],
      reference: {
        paragraphs: [
          "Outside my courses, I often get absorbed in a book of short stories about ordinary life. A brief conversation or a small decision can reveal a great deal about a character. I like finishing a story in one sitting and then thinking about why someone acted in a particular way. This kind of reading helps me notice other perspectives without feeling that every book must teach an immediately practical lesson.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: ["short stories", "other perspectives", "practical lesson"],
      },
    },
    {
      id: "d08-q2",
      type: "quick",
      prompt: "Do you prefer paper books or digital books?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [
        "选一个主要偏好",
        "解释一个具体功能或环境",
        "补充另一种格式适用的条件",
      ],
      reference: {
        paragraphs: [
          "I prefer paper books for longer reading because I can read at my own pace and stay with one text. I can mark a page, move backward, and see how different sections connect without opening another application. However, digital books are useful when I travel or need to search for a phrase. My preference depends on the purpose, rather than a belief that one format is always better.",
        ],
        structure: [
          "直接回答问题并表明态度",
          "补充具体原因或生活例子",
          "用一句话说明结果",
        ],
        highlights: [
          "stay with one text",
          "digital books",
          "depends on the purpose",
        ],
      },
    },
  ],
  personalStatement: {
    id: "d08-statement",
    type: "statement",
    prompt:
      "Explain how reading can influence a university student’s way of thinking.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [
      "按“观点—机制—个人例子—限制—总结”扩展到90秒",
      "说明阅读如何让人接触不同选择",
      "加入一本书或一种文本的具体场景",
      "讨论阅读之后还需要怎样思考",
    ],
    reference: {
      paragraphs: [
        "Reading can influence how university students think because it gives them time to consider ideas beyond their immediate experience. In daily conversations, we often respond quickly. A book allows us to pause, return to a difficult point, and ask why an argument seems convincing.",
        "Fiction is especially useful for exploring different perspectives. It lets me see the world through someone else’s eyes. When a character makes a choice I dislike, I can examine the pressures behind it instead of judging immediately. For example, a story about a family disagreement may reveal how the same event looks different to each person. That habit can make real conversations more patient. Nonfiction offers another benefit: it can introduce a framework for understanding a problem, such as how cities use public space.",
        "However, reading does not automatically produce good judgment. Students still need to question evidence, compare sources, and discuss what they have read. I try to write down one question after finishing a chapter rather than simply collecting quotations. For me, the greatest value of reading is learning to think more carefully, not just acquiring more information.",
      ],
      structure: [
        "开头提出个人观点",
        "分层解释原因与具体做法",
        "用经历或场景支撑观点",
        "总结收获并回扣主题",
      ],
      highlights: [
        "different perspectives",
        "question evidence",
        "compare sources",
        "think more carefully",
      ],
    },
  },
  discussion: [
    {
      id: "d08-discussion1",
      type: "discussion",
      prompt: "Discuss whether students should read mainly practical books.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "先认可实用知识",
        "补充文学或历史的长期价值",
        "用一个具体场景推进讨论",
      ],
      reference: {
        paragraphs: [
          "Practical books can help with an immediate problem, so I understand their appeal. However, limiting reading to directly useful information may narrow our experience. A novel can help us understand another person's motives, while history can reveal how a current debate developed. These benefits may appear later, especially when we put an idea into practice. Could a balanced reading list include both practical guides and less predictable choices?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "immediate problem",
          "narrow our experience",
          "balanced reading list",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that practical books are valuable when students have a clear goal.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but usefulness can include empathy and historical understanding.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that a book must offer immediate instructions to deserve our time.",
          },
          {
            label: "Follow-up · 追问",
            text: "What is one book whose value became clearer after you finished it?",
          },
        ],
      },
      partner:
        "Busy students should spend their reading time on books that provide practical skills.",
      interaction: "部分赞同后扩展“有用”的含义，用例子而非抽象反驳。",
    },
    {
      id: "d08-discussion2",
      type: "discussion",
      prompt: "Discuss how a reading group could encourage participation.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "回应阅读进度要求",
        "考虑时间和阅读速度差异",
        "提出可参加的一次讨论设计",
      ],
      reference: {
        paragraphs: [
          "A common schedule can give the group direction, but a strict requirement may discourage students who read more slowly. We could choose shorter sections and begin discussions with one question from each person. Nobody would need an impressive interpretation to participate. Sharing a confusing passage could be just as useful, so I make a note of questions while reading. Would occasional meetings about a short article make the group easier to join?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "common schedule",
          "shorter sections",
          "confusing passage",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that a shared target helps a reading group stay active.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but the target should leave room for different reading speeds.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree with excluding members who have not completed every page.",
          },
          {
            label: "Follow-up · 追问",
            text: "Could the group choose one short text together for its first meeting?",
          },
        ],
      },
      partner:
        "A reading group should require everyone to finish the whole book before each meeting.",
      interaction: "保留共同目标，提出降低参与门槛的讨论形式。",
    },
    {
      id: "d08-discussion3",
      type: "discussion",
      prompt: "Discuss whether summaries can replace full books.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [
        "承认摘要适合筛选",
        "解释细节和论证链条的价值",
        "用具体阅读目的区分选择",
      ],
      reference: {
        paragraphs: [
          "Summaries are useful for deciding whether a book deserves closer attention. They can also remind us of an argument we have already read. Yet they often remove the examples and uncertainties that make an idea meaningful. If I want to understand how an author reaches a conclusion, I need more than the final points. Could we use summaries as a starting point rather than a replacement?",
        ],
        structure: [
          "先回应搭档的观点",
          "解释自己的判断并举例",
          "提出建议或追问以推进讨论",
        ],
        highlights: [
          "closer attention",
          "examples and uncertainties",
          "starting point",
        ],
        alternatives: [
          {
            label: "Agree · 赞同",
            text: "I agree that a summary can save time when we are surveying a topic.",
          },
          {
            label: "Partly agree · 部分赞同",
            text: "I partly agree, but complex arguments may lose important qualifications.",
          },
          {
            label: "Disagree · 不同意",
            text: "I disagree that knowing the conclusion is always equivalent to reading the book.",
          },
          {
            label: "Follow-up · 追问",
            text: "When would you decide that a summary is insufficient for your purpose?",
          },
        ],
      },
      partner:
        "Book summaries give us the main ideas, so reading the complete book is unnecessary.",
      interaction: "区分筛选信息与深入理解两个目的，并提出折中用法。",
    },
  ],
  finalQuestion: {
    id: "d08-final",
    type: "final",
    prompt: "How would you help a busy student build a lasting reading habit?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [
      "给出小规模起点",
      "解释选书、时间与干扰管理",
      "补充中断之后如何恢复",
    ],
    reference: {
      paragraphs: [
        "To build a reading habit, I would begin with a short, enjoyable text and a predictable moment in the day. Ten minutes after lunch may be more realistic than promising to finish a book every week. The student could keep the book visible and put their phone aside during that brief period. I would also suggest stopping to note one interesting idea, so reading feels like an active experience. If a busy day interrupts the routine, they can restart without trying to repay every missed minute. A lasting habit needs a manageable rhythm and genuine interest.",
      ],
      structure: ["明确回应问题", "比较或解释两个要点", "用具体行动形成结论"],
      highlights: [
        "predictable moment",
        "active experience",
        "manageable rhythm",
      ],
    },
  },
  upgrades: [
    {
      basic: "Reading gives knowledge.",
      better:
        "Reading helps me connect unfamiliar ideas with questions from everyday life.",
      zh: "从知识积累扩展到建立联系",
    },
    {
      basic: "This book is interesting.",
      better:
        "The story kept me engaged because its characters faced believable choices.",
      zh: "说明作品吸引人的原因",
    },
    {
      basic: "E-books are convenient.",
      better:
        "I can carry several books on one device and search for a passage quickly.",
      zh: "用两个具体功能支撑便利性",
    },
    {
      basic: "I should read more.",
      better:
        "I plan to reserve ten minutes each evening for uninterrupted reading.",
      zh: "用可执行安排表达计划",
    },
  ],
};

export default day;
