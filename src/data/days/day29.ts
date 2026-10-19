import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day29",
  day: 29,
  topic: "Learning Methods",
  topicZh: "学习方法",
  category: "Education",
  estimatedMinutes: 18,
  focus: "模拟一：隐藏预先提示，在限时内自主组织学习方法与合作建议。",
  talkingPoints: [
    {
      en: "Choose a method for the task rather than its popularity.",
      zh: "根据任务而非流行度选择方法。",
    },
    {
      en: "Check understanding through recall and application.",
      zh: "通过回忆与应用检查理解。",
    },
    {
      en: "Adjust a plan using evidence from practice.",
      zh: "根据练习证据调整计划。",
    },
  ],
  expressions: [
    {
      en: "retrieve information",
      zh: "提取记忆中的信息",
      example: "I close the textbook and try to retrieve information.",
    },
    {
      en: "identify a weak point",
      zh: "识别薄弱环节",
      example: "A short quiz can identify a weak point in my understanding.",
    },
    {
      en: "space out practice",
      zh: "分散安排练习",
      example: "It helps to space out practice across several days.",
    },
    {
      en: "apply what I learn",
      zh: "应用所学",
      example: "I apply what I learn by explaining a real example.",
    },
    {
      en: "passive reading",
      zh: "被动阅读",
      example: "Passive reading can feel easy without testing understanding.",
    },
    {
      en: "adjust my approach",
      zh: "调整我的方法",
      example: "I adjust my approach when practice reveals the same mistake.",
    },
  ],
  sentenceFrames: [
    {
      en: "This method works for ... because ...",
      zh: "这种方法适合……，因为……",
    },
    {
      en: "I used to ..., whereas now ...",
      zh: "我过去……，而现在……",
    },
    {
      en: "Rather than measure ..., I would check ...",
      zh: "与其衡量……，我会检查……",
    },
    {
      en: "What evidence would show that ...?",
      zh: "什么证据能表明……？",
    },
  ],
  quickResponses: [
    {
      id: "d29-q1",
      type: "quick",
      prompt: "What study method has improved your learning recently?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "Recently, explaining ideas aloud has helped me more than simply rereading my notes. After studying a topic, I close the book and describe it as if I were teaching a classmate. If I cannot explain one step, I know where to look again. This helps me identify a weak point quickly and makes my next study session more focused and useful.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["identify a weak point"],
      },
    },
    {
      id: "d29-q2",
      type: "quick",
      prompt: "Do you prefer studying alone or with other people?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "I prefer studying alone when I first meet a difficult topic because I need time to work at my own speed. Later, studying with classmates helps me check my understanding. We can compare explanations and ask questions that I might overlook. The two approaches serve different purposes, so I usually combine them instead of treating either one as the best choice for every situation.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["check my understanding"],
      },
    },
  ],
  personalStatement: {
    id: "d29-statement",
    type: "statement",
    prompt:
      "Describe a learning difficulty you have experienced and explain how you would improve your approach.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [],
    reference: {
      paragraphs: [
        "One learning difficulty I have experienced is mistaking familiarity for understanding. With passive reading, the words become comfortable, and I feel prepared. However, a question phrased differently can still leave me unsure. This happened when I revised a statistics topic using only highlighted notes.",
        "To improve, I would make practice more active. After reading one explanation, I would close the book and retrieve information from memory. Then I would solve a problem that uses different numbers or a new situation. Any mistake would tell me which part of the process needs attention.",
        "I would also space out practice rather than repeat the same exercise many times in one evening. Returning after a short gap would show what I can actually remember. A study partner could occasionally ask me to explain the reasoning without relying on memorised phrases.",
        "Finally, I would review results honestly. If a method feels productive but does not improve my answers, I need to adjust my approach. The goal is not to produce beautiful notes. It is to understand ideas well enough to apply what I learn independently.",
      ],
      structure: [
        "提出明确观点",
        "展开理由并举例",
        "回应限制或不同情况",
        "总结个人行动",
      ],
      highlights: [
        "retrieve information",
        "space out practice",
        "adjust my approach",
      ],
    },
  },
  discussion: [
    {
      id: "d29-discussion1",
      type: "discussion",
      prompt: "Discuss a revision plan for a difficult examination.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "Rewriting notes might help us organise the material, but doing it for every chapter could consume most of our time. Let us first try a few questions without notes and identify where we struggle. We can rewrite only the explanations that remain unclear, then practise applying them. Would you like to compare our first attempts before we divide the revision topics?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["without notes"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Neat summaries could help after we have identified the hardest topics.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Rewriting has some value, but we also need to test whether we can use the material.",
          },
          {
            label: "不同意 · Disagree",
            text: "I would begin with practice questions because the exam requires more than recognition.",
          },
          {
            label: "追问 · Follow-up",
            text: "Which chapter would be a useful starting point for a short diagnostic exercise?",
          },
        ],
      },
      partner:
        "We should rewrite the entire textbook in neat notes before trying any practice questions.",
      interaction: "在无关键词提示下，回应搭档并协商具体复习顺序。",
    },
    {
      id: "d29-discussion2",
      type: "discussion",
      prompt: "Respond to your partner's idea about a group study session.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "Watching the lecture together may be convenient, but we could remain passive for an entire hour. I suggest pausing after each section so one person explains the main idea and another gives an example. We can collect unresolved questions for the teacher afterwards. That would turn the session into a check of understanding. How often should we pause without breaking the speaker's argument?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["check of understanding"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "A full viewing could help us see the overall argument before discussion.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "We can watch together, but pauses would give everyone a role.",
          },
          {
            label: "不同意 · Disagree",
            text: "Continuous viewing may repeat the same passive habits we are trying to change.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could each person prepare one question before the session begins?",
          },
        ],
      },
      partner:
        "Let us play the recorded lecture and watch it together without stopping.",
      interaction: "自主提出互动学习办法，并通过追问推进讨论。",
    },
    {
      id: "d29-discussion3",
      type: "discussion",
      prompt: "Decide how to evaluate a new study technique.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "Feeling motivated is valuable, but we need another way to judge whether the technique improves learning. We could choose similar topics, use the new method for one, and test both after a few days. We should compare accuracy and the ability to explain ideas, not just study time. What would count as enough improvement for us to keep using the technique?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["compare accuracy"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Motivation is a useful benefit if the technique also improves understanding.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "It feels promising, although we need to see what we remember later.",
          },
          {
            label: "不同意 · Disagree",
            text: "Excitement alone cannot show that a method produces better learning.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could we test the same material again next week without looking at our notes?",
          },
        ],
      },
      partner:
        "This new study technique feels exciting, so it must be better than our old method.",
      interaction: "区分主观感受与可观察效果，提出公平的比较。",
    },
  ],
  finalQuestion: {
    id: "d29-final",
    type: "final",
    prompt: "What is more important for learning: persistence or flexibility?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [],
    reference: {
      paragraphs: [
        "I think persistence and flexibility need to work together, but flexibility tells persistence where to go. Repeating the same ineffective routine may show determination without producing progress. For example, if memorising model answers does not improve my speaking, I should practise responding to unfamiliar questions instead. That change still requires regular effort. I would keep the learning goal stable while reviewing the method after a reasonable period. In this way, persistence prevents me from giving up too early, and flexibility prevents me from wasting effort on an unsuitable approach.",
      ],
      structure: ["概括个人立场", "用实例解释原因", "提出下一步行动"],
      highlights: ["keep the learning goal stable"],
    },
  },
  upgrades: [
    {
      basic: "I study for a long time.",
      better:
        "I divide revision into short sessions and test recall after each one.",
      zh: "用方法而非时长描述学习。",
    },
    {
      basic: "This method is useful.",
      better:
        "Explaining the idea without notes reveals gaps I might otherwise miss.",
      zh: "说明方法如何发挥作用。",
    },
    {
      basic: "I forget things.",
      better:
        "I remember the definition but struggle to apply it to a new example.",
      zh: "精确界定困难。",
    },
    {
      basic: "We should study together.",
      better:
        "We could take turns explaining difficult concepts and checking each other's reasoning.",
      zh: "赋予合作学习具体任务。",
    },
  ],
};

export default day;
