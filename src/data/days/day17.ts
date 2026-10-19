import type { TrainingDay } from "../../types";

const day = {
  id: "day17",
  day: 17,
  topic: "Artificial Intelligence",
  topicZh: "人工智能",
  category: "Technology",
  estimatedMinutes: 18,
  focus: "互动训练：礼貌反对，用理由和反例支撑不同立场",
  talkingPoints: [
    {
      en: "Learning with AI",
      zh: "人工智能辅助学习",
    },
    {
      en: "Accuracy and judgment",
      zh: "准确性与判断",
    },
    {
      en: "Responsible use",
      zh: "负责任地使用",
    },
  ],
  expressions: [
    {
      en: "course materials",
      zh: "课程材料",
      example:
        "I compare an AI explanation with our course materials before relying on it.",
    },
    {
      en: "additional practice",
      zh: "额外练习",
      example:
        "A question generator gives me additional practice when my partner is busy.",
    },
    {
      en: "critical judgment",
      zh: "批判性判断",
      example:
        "Critical judgment helps students notice an answer that ignores important evidence.",
    },
    {
      en: "checking evidence",
      zh: "核查证据",
      example:
        "Checking evidence is essential when a generated paragraph includes factual claims.",
    },
    {
      en: "without permission",
      zh: "未经许可",
      example:
        "We should not upload interview records without permission from the participants.",
    },
    {
      en: "review our draft",
      zh: "审阅我们的草稿",
      example:
        "We could ask the tool to review our draft after writing the argument ourselves.",
    },
  ],
  sentenceFrames: [
    {
      en: "I see your reasoning, but I disagree because ...",
      zh: "我理解你的思路，但我不同意，因为……",
    },
    {
      en: "A counterexample would be ...",
      zh: "一个反例是……",
    },
    {
      en: "I would draw the line at ...",
      zh: "我会把界限定在……",
    },
    {
      en: "Could we use it to ... rather than let it ...?",
      zh: "我们能否用它来……，而不是让它……？",
    },
  ],
  upgrades: [
    {
      basic: "AI knows everything.",
      better:
        "An AI system can produce fluent answers that still need checking against reliable evidence.",
      zh: "区分语言流利和证据可靠。",
    },
    {
      basic: "I do not agree.",
      better:
        "I disagree because completing the task for students can remove the practice they need.",
      zh: "用因果支持反对。",
    },
    {
      basic: "AI helps study.",
      better:
        "AI can suggest practice questions and explain unfamiliar terms when students verify the results.",
      zh: "加入用途与核实条件。",
    },
    {
      basic: "People are important.",
      better:
        "Teachers notice confusion and motivation that a generated response may miss.",
      zh: "指出人的具体能力。",
    },
  ],
  quickResponses: [
    {
      prompt: "How could AI support your English learning?",
      hints: ["说明你仍需完成的学习步骤"],
      reference: {
        paragraphs: [
          "AI could help me practice answering questions when a conversation partner is unavailable. I might ask it to suggest a topic, then record my own answer before reading its suggestions. This sequence matters because I still need to produce language independently. I would also check unfamiliar expressions in a reliable dictionary. The tool can create extra practice, but I should remain responsible for what I learn.",
        ],
        structure: ["给出使用情境", "解释先独立输出", "补充核查责任"],
        highlights: ["produce language independently", "extra practice"],
      },
      id: "d17-q1",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
    {
      prompt: "Should students trust every answer produced by AI?",
      hints: ["用一个学科情境说明核实"],
      reference: {
        paragraphs: [
          "No, students should treat an AI answer as something to examine rather than automatically accept. It can sound confident while misunderstanding a question or inventing a reference. If I use it to explain a scientific concept, I compare the explanation with our course materials. This check may take time, but it helps me notice gaps in my understanding instead of simply copying a polished paragraph.",
        ],
        structure: ["明确反对", "说明错误可能", "给出核实流程"],
        highlights: ["sound confident", "course materials"],
      },
      id: "d17-q2",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
  ],
  personalStatement: {
    prompt:
      "Discuss the opportunities and risks of using AI in university education.",
    hints: ["坚持观点并解释学习过程"],
    reference: {
      paragraphs: [
        "AI offers university students new ways to practice and explore ideas. A student can request another explanation of a difficult term, compare possible outlines, or generate questions for revision. These options are especially useful when a teacher or study partner is unavailable. Used carefully, the tool can make independent study more active.",
        "The main risk is confusing a fluent response with a reliable one. Generated content may include incorrect details or references, and students who copy it may miss the thinking that an assignment is designed to develop. There are also questions about privacy when someone uploads classmates’ work or personal interview records without permission.",
        "I therefore support guided use rather than automatic acceptance. Students should attempt important tasks themselves, check factual claims, and explain any assistance according to course rules. Teachers can design activities that require students to defend their choices and discuss their working process. For example, comparing a generated explanation with experimental evidence could become a useful lesson. AI should expand the opportunities to learn, while responsibility for judgment, honesty, and understanding remains with the student.",
      ],
      structure: [
        "说明辅助学习机会",
        "分析准确性与隐私风险",
        "提出过程导向的使用规则",
      ],
      highlights: ["fluent response", "guided use", "experimental evidence"],
    },
    id: "d17-statement",
    type: "statement",
    prepareSeconds: 60,
    speakingSeconds: 90,
  },
  discussion: [
    {
      prompt: "Politely disagree with your partner’s proposal and explain why.",
      hints: ["反对具体做法并给替代"],
      reference: {
        paragraphs: [
          "I understand the wish to make studying faster, but I disagree with asking AI to complete every assignment. The process of struggling with a question is often where learning happens. For instance, writing an argument teaches us to choose evidence and connect ideas. If a tool does all of that, we may submit a good answer without developing the ability ourselves. Could it review our draft instead?",
        ],
        structure: ["理解效率目标", "明确反对", "举例并给替代"],
        highlights: ["where learning happens", "review our draft"],
        alternatives: [
          {
            label: "Agree",
            text: "For routine formatting, automation can free time for more demanding parts of an assignment.",
          },
          {
            label: "Partly agree",
            text: "AI may handle a repetitive step, but students should still make the central argument and verify the evidence.",
          },
          {
            label: "Disagree",
            text: "I disagree because outsourcing the entire assignment removes the practice the course is trying to provide.",
          },
          {
            label: "Follow-up",
            text: "How would students demonstrate their understanding if the tool produced the whole answer?",
          },
        ],
      },
      partner:
        "Students should let AI complete all their assignments to save time.",
      interaction: "练习礼貌反对：承认动机，给出理由与替代方案。",
      id: "d17-discussion1",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt: "Challenge the idea that AI should replace university teachers.",
      hints: ["用课堂观察反驳"],
      reference: {
        paragraphs: [
          "I would question that conclusion. AI can provide quick explanations, but teaching also involves noticing confusion, encouraging participation, and adapting to a particular group. A teacher may realize that several students are silent because they misunderstand the same assumption. A generated answer does not necessarily reveal that shared problem. I would use AI for additional practice while teachers guide discussion and assess understanding. Which task do you think is most replaceable?",
        ],
        structure: ["质疑结论", "说明教师功能", "提出互补与追问"],
        highlights: ["noticing confusion", "assess understanding"],
        alternatives: [
          {
            label: "Agree",
            text: "AI could take over some repetitive explanations when students only need another practice example.",
          },
          {
            label: "Partly agree",
            text: "Fast answers are helpful, but effective teaching also requires understanding the students and their goals.",
          },
          {
            label: "Disagree",
            text: "I disagree because the speed of answering does not cover the social and diagnostic work of a teacher.",
          },
          {
            label: "Follow-up",
            text: "Who would notice that a whole class has misunderstood an assumption behind the answer?",
          },
        ],
      },
      partner:
        "AI can answer questions quickly, so universities will not need teachers.",
      interaction: "针对论据中的跳跃提出有理有据的异议。",
      id: "d17-discussion2",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Disagree with unrestricted uploading of personal data and suggest a practical boundary.",
      hints: ["说明同意范围"],
      reference: {
        paragraphs: [
          "I do not think we should upload those interviews without permission. The participants agreed to speak to our research group, and that does not automatically include sharing their words with another service. Even removing names may leave details that identify someone. We could summarize the themes ourselves or use invented examples for testing. Before uploading anything real, we should check the consent conditions together.",
        ],
        structure: ["明确反对", "解释同意范围", "提出保护性替代"],
        highlights: ["without permission", "consent conditions"],
        alternatives: [
          {
            label: "Agree",
            text: "Automatic summaries could save time if participants have explicitly agreed and the service is appropriate for the data.",
          },
          {
            label: "Partly agree",
            text: "Summarizing is useful, but we must first check permission and remove unnecessary personal details.",
          },
          {
            label: "Disagree",
            text: "I disagree with uploading everything because our participants have not agreed to that additional use.",
          },
          {
            label: "Follow-up",
            text: "What exactly did our consent form promise about how the interviews would be stored and analyzed?",
          },
        ],
      },
      partner:
        "We can upload all our interview records to AI because it will summarize them quickly.",
      interaction: "用隐私边界表达反对并保留任务目标。",
      id: "d17-discussion3",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
  ],
  finalQuestion: {
    prompt: "What ability will become more important as AI tools improve?",
    hints: ["把能力与使用场景相连"],
    reference: {
      paragraphs: [
        "I think critical judgment will become more important. When a tool can produce a polished response in seconds, the difficult task is deciding whether the response is accurate, relevant, and appropriate for the situation. For example, a suggested solution may look efficient while ignoring the needs of the people affected. Students should practice checking evidence, identifying assumptions, and explaining why they accept or reject a recommendation. These habits help us use powerful tools with a clear purpose. They also keep us responsible for decisions that should never depend on fluent language alone.",
      ],
      structure: ["提出核心能力", "解释判断维度", "给出学习方法"],
      highlights: ["critical judgment", "identifying assumptions"],
    },
    id: "d17-final",
    type: "final",
    prepareSeconds: 5,
    speakingSeconds: 45,
  },
} satisfies TrainingDay;

export default day;
