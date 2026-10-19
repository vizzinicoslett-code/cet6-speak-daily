import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day31",
  day: 31,
  topic: "Youth Resilience",
  topicZh: "青年韧性",
  category: "Lifestyle",
  estimatedMinutes: 18,
  focus: "模拟三：在陌生提问中阐释挫折、支持与恢复，并保持有同理心的互动。",
  talkingPoints: [
    {
      en: "Treat a setback as information rather than a label.",
      zh: "把挫折视为信息而非个人标签。",
    },
    {
      en: "Combine personal effort with appropriate support.",
      zh: "将个人努力与适当支持结合。",
    },
    {
      en: "Build manageable steps after disappointment.",
      zh: "失落后建立可完成的小步骤。",
    },
  ],
  expressions: [
    {
      en: "bounce back",
      zh: "恢复过来",
      example: "It took time to bounce back after the unsuccessful interview.",
    },
    {
      en: "put things in perspective",
      zh: "客观看待事情",
      example: "Talking with a friend helped me put things in perspective.",
    },
    {
      en: "a manageable step",
      zh: "可完成的一步",
      example: "Sending one application felt like a manageable step.",
    },
    {
      en: "ask for support",
      zh: "寻求支持",
      example: "Learning to ask for support is part of becoming independent.",
    },
    {
      en: "learn from a setback",
      zh: "从挫折中学习",
      example:
        "I try to learn from a setback without judging my whole ability.",
    },
    {
      en: "regain confidence",
      zh: "重拾信心",
      example: "Completing a small task helped me regain confidence.",
    },
  ],
  sentenceFrames: [
    {
      en: "The experience was difficult because ..., but ...",
      zh: "那次经历很困难，因为……，但……",
    },
    {
      en: "What helped me most was ...",
      zh: "对我帮助最大的是……",
    },
    {
      en: "We could begin with ... rather than expecting ...",
      zh: "我们可以先……，而不必期望……",
    },
    {
      en: "Would you prefer ... or ... right now?",
      zh: "你现在更希望……还是……？",
    },
  ],
  quickResponses: [
    {
      id: "d31-q1",
      type: "quick",
      prompt: "What helps you recover after a disappointing result?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "After a disappointing result, I first give myself time to feel upset instead of pretending that I do not care. Then I try to separate what happened from what it says about me as a person. Looking at one specific mistake helps me choose a manageable step. A conversation with someone I trust can also help me put things in perspective. It may take time to bounce back.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["a manageable step", "put things in perspective"],
      },
    },
    {
      id: "d31-q2",
      type: "quick",
      prompt: "Does resilience mean solving every problem independently?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "No. I think resilience includes knowing when to ask for support. Independence is useful, but some difficulties become easier to understand when another person offers experience or a different view. For example, a tutor might help a student improve an unsuccessful application. The student still makes decisions and does the work. Accepting guidance does not remove their responsibility; it can make their effort more effective.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["ask for support"],
      },
    },
  ],
  personalStatement: {
    id: "d31-statement",
    type: "statement",
    prompt:
      "Describe a setback a university student might face and explain how they could respond constructively.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [],
    reference: {
      paragraphs: [
        "A university student might work hard for an internship and still receive a rejection. This can be especially disappointing when classmates seem to move ahead. A constructive response should help them learn from a setback while preventing one result from becoming a judgment about the student's entire future.",
        "First, the student could pause before making major decisions. A walk or a conversation with a trusted friend might help them put things in perspective. Then they could review the application and identify what can actually be improved. Was their experience unclear, or did they struggle to explain an example during the interview? Specific questions lead to more useful action than simply saying they are not talented.",
        "Next, they could choose a manageable step, such as practising two interview questions or asking a careers adviser to review one paragraph. Progress would rebuild confidence through evidence. They should also consider other opportunities that develop similar skills.",
        "Resilience would not mean forgetting the rejection overnight. It would mean learning from the experience, accepting support, and gradually returning to purposeful action without expecting complete certainty about the future.",
      ],
      structure: [
        "提出明确观点",
        "展开理由并举例",
        "回应限制或不同情况",
        "总结个人行动",
      ],
      highlights: ["put things in perspective", "a manageable step"],
    },
  },
  discussion: [
    {
      id: "d31-discussion1",
      type: "discussion",
      prompt:
        "Respond to a friend who wants to motivate a disappointed classmate.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "Encouragement matters, but saying the result does not matter might make our classmate feel misunderstood. We could first acknowledge how much effort they invested and ask whether they want company or practical advice. If they want help, we can review one part of the task together. What do you think they need most right now: someone to listen, or a plan for the next attempt?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["practical advice"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Reassurance could help if we also recognise why the result hurts.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "I agree we should offer hope, but we should not dismiss their feelings.",
          },
          {
            label: "不同意 · Disagree",
            text: "Calling it nothing may make them less willing to talk to us.",
          },
          {
            label: "追问 · Follow-up",
            text: "Have they asked for advice, or would they rather be heard first?",
          },
        ],
      },
      partner:
        "Let us tell our classmate to stop worrying because this failure is nothing.",
      interaction: "自主表达同理心，区分倾听与建议，并向搭档追问。",
    },
    {
      id: "d31-discussion2",
      type: "discussion",
      prompt: "Plan a campus activity that helps students handle setbacks.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "A successful speaker could offer encouragement, but students might connect more with honest accounts of difficulty and recovery. We could invite several people to discuss a setback, including what support they needed and what remained uncertain. Small groups could then identify useful campus resources. The aim should be practical understanding rather than pressure to become instantly positive. How could we make questions feel safe?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["honest accounts"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "An engaging speaker could attract students if the discussion includes genuine difficulties.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Success stories can inspire, but they do not describe every person's circumstances.",
          },
          {
            label: "不同意 · Disagree",
            text: "I would avoid suggesting that positivity alone can overcome every obstacle.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could anonymous questions help students discuss problems they would not raise publicly?",
          },
        ],
      },
      partner:
        "A celebrity success story will teach everyone to stay positive and overcome any problem.",
      interaction: "对成功叙事补充现实边界，并设计可参与的活动。",
    },
    {
      id: "d31-discussion3",
      type: "discussion",
      prompt:
        "Discuss how to help a teammate after an unsuccessful presentation.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "Practising again could help, but immediately repeating the whole presentation might feel overwhelming. Let us ask which part felt hardest and work on that section first. We can offer specific feedback on the opening or the transitions, then try a short rehearsal. This gives our teammate a realistic way to regain confidence. Would you be willing to act as a supportive audience tomorrow?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["regain confidence"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Practice is useful if it focuses on a clear goal and includes breaks.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Repetition may improve fluency, but feedback is needed to guide it.",
          },
          {
            label: "不同意 · Disagree",
            text: "Ten complete rehearsals tonight could increase exhaustion without solving the main difficulty.",
          },
          {
            label: "追问 · Follow-up",
            text: "Which moment in the presentation made our teammate lose their place?",
          },
        ],
      },
      partner:
        "Our teammate should repeat the presentation ten times tonight until there are no mistakes.",
      interaction: "把过高要求转成有重点、可承受的练习方案。",
    },
  ],
  finalQuestion: {
    id: "d31-final",
    type: "final",
    prompt: "What does personal growth after a setback look like to you?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [],
    reference: {
      paragraphs: [
        "Personal growth after a setback does not always look dramatic. It may mean recognising a familiar worry earlier, asking for help sooner, or preparing differently for the next attempt. For example, after a difficult group project, I might learn to clarify responsibilities before work begins. That is a small change, but it can prevent the same confusion later. I would judge growth by how I respond and what I understand, rather than whether I immediately achieve an impressive result or never feel disappointed again.",
      ],
      structure: ["概括个人立场", "用实例解释原因", "提出下一步行动"],
      highlights: ["clarify responsibilities"],
    },
  },
  upgrades: [
    {
      basic: "Failure is good.",
      better:
        "A setback can reveal a skill I need to develop, although it is still disappointing.",
      zh: "避免美化挫折并指出学习价值。",
    },
    {
      basic: "Be strong.",
      better:
        "You do not have to solve everything today; we can choose one manageable step.",
      zh: "用具体支持代替口号。",
    },
    {
      basic: "I did badly.",
      better:
        "My preparation did not match the interview questions, so I need more varied practice.",
      zh: "把自我否定转为可改进问题。",
    },
    {
      basic: "Ask someone.",
      better:
        "A tutor could help you separate the urgent decision from the longer-term worry.",
      zh: "说明向谁求助及其作用。",
    },
  ],
};

export default day;
