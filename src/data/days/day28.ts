import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day28",
  day: 28,
  topic: "Social Responsibility",
  topicZh: "社会责任",
  category: "Society",
  estimatedMinutes: 18,
  focus: "综合检验：从受助者需求出发设计公益活动，协商长期承诺与实际效果。",
  talkingPoints: [
    {
      en: "Listen before deciding what help is needed.",
      zh: "先倾听，再判断需要何种帮助。",
    },
    {
      en: "Match a commitment to available time and skills.",
      zh: "让承诺符合时间与能力。",
    },
    {
      en: "Measure usefulness rather than publicity.",
      zh: "重视实际作用而非宣传效果。",
    },
  ],
  expressions: [
    {
      en: "make a practical contribution",
      zh: "作出实际贡献",
      example:
        "Students can make a practical contribution by teaching basic phone skills.",
    },
    {
      en: "a long-term commitment",
      zh: "长期承诺",
      example: "Weekly tutoring requires a long-term commitment.",
    },
    {
      en: "listen to local needs",
      zh: "倾听当地需求",
      example:
        "Volunteers should listen to local needs before planning activities.",
    },
    {
      en: "follow through",
      zh: "把承诺落实到底",
      example: "It is better to promise less and follow through.",
    },
    {
      en: "respect people's dignity",
      zh: "尊重他人的尊严",
      example:
        "We should respect people's dignity when sharing project photos.",
    },
    {
      en: "make a lasting difference",
      zh: "产生持久影响",
      example: "Reliable support can make a lasting difference.",
    },
  ],
  sentenceFrames: [
    {
      en: "Before offering ..., we should ask ...",
      zh: "在提供……之前，我们应该询问……",
    },
    {
      en: "Our contribution would be more useful if ...",
      zh: "如果……，我们的贡献会更有用。",
    },
    {
      en: "I can commit to ..., but I would need ...",
      zh: "我可以承诺……，但需要……",
    },
    {
      en: "How can we tell whether ... is helping?",
      zh: "我们如何判断……是否有帮助？",
    },
  ],
  quickResponses: [
    {
      id: "d28-q1",
      type: "quick",
      prompt: "What kind of volunteer work would you like to do?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: ["skills", "needs"],
      reference: {
        paragraphs: [
          "I would like to help older residents use basic smartphone services, such as video calls and appointment reminders. These skills could make everyday life more convenient and support contact with family. I would first listen to local needs by asking a community centre what residents actually want to learn. Starting with their questions would help me make a practical contribution instead of preparing a lesson that nobody needs.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["make a practical contribution"],
      },
    },
    {
      id: "d28-q2",
      type: "quick",
      prompt: "Can small everyday actions show social responsibility?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: ["example", "consistency"],
      reference: {
        paragraphs: [
          "Yes. Social responsibility often appears in ordinary choices that affect other people. Returning a shared bicycle to the correct place, for example, keeps a walkway clear and makes the next person's journey easier. Such actions may not attract attention, but they show consideration. Larger projects also matter, yet responsible habits help us follow through when there is no certificate or public praise involved.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["follow through"],
      },
    },
  ],
  personalStatement: {
    id: "d28-statement",
    type: "statement",
    prompt:
      "Explain how a university volunteer programme could make a useful contribution to its surrounding community.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: ["needs", "reliability"],
    reference: {
      paragraphs: [
        "A university volunteer programme should begin with a conversation, not a ready-made activity. Students may arrive with good intentions but misunderstand what residents need. Meeting community workers and potential participants would help the university choose tasks that its volunteers can actually perform well.",
        "One practical project could offer weekly support with everyday digital tasks at a neighbourhood centre. Students would explain functions patiently and let residents practise on their own devices. The aim would be greater independence rather than completing every task for them. Training should cover clear communication and ways to respect people's dignity, including asking permission before taking photographs.",
        "Reliability would be essential. The programme needs a timetable, backup volunteers, and a contact person so a missed session does not leave participants waiting. Students should choose a long-term commitment that fits their studies instead of promising more than they can deliver.",
        "Finally, evaluation should include the community's voice. A short conversation about what participants can now do, and what still confuses them, would be more informative than counting social media views. With feedback and consistent support, the programme could make a lasting difference in the neighbourhood's ordinary life.",
      ],
      structure: [
        "提出明确观点",
        "展开理由并举例",
        "回应限制或不同情况",
        "总结个人行动",
      ],
      highlights: ["respect people's dignity", "a long-term commitment"],
    },
  },
  discussion: [
    {
      id: "d28-discussion1",
      type: "discussion",
      prompt: "Choose the first step for a community service project.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["listen", "visit"],
      reference: {
        paragraphs: [
          "A reading room sounds worthwhile, but we do not yet know whether books are the main need. Let us speak with the community centre and a few residents first. They may need help repairing existing facilities or running activities instead. Listening now could save resources and build trust. Could we arrange a short visit before deciding what materials to collect?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["build trust"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Collecting books could work if residents have requested a reading space.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "A reading room may help, but we should first check existing resources.",
          },
          {
            label: "不同意 · Disagree",
            text: "I would not start a collection before understanding the community's priorities.",
          },
          {
            label: "追问 · Follow-up",
            text: "Who could tell us how residents currently use the community centre?",
          },
        ],
      },
      partner:
        "We should collect as many books as possible and immediately build a community reading room.",
      interaction: "认可公益意图，先核实需求，再提出具体下一步。",
    },
    {
      id: "d28-discussion2",
      type: "discussion",
      prompt: "Respond to a suggestion about promoting a volunteer event.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["consent", "purpose"],
      reference: {
        paragraphs: [
          "Sharing our work might attract more volunteers, but participants should not become promotional material without choosing it. We should ask permission clearly and make refusal easy. We could also photograph the activity setup or publish anonymous feedback. That would explain the project while protecting people's dignity. What message do we want the publicity to communicate besides the number of volunteers involved?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["ask permission"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Photos can tell the story if participants understand and welcome their use.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Publicity matters, but anonymous examples could communicate the same impact.",
          },
          {
            label: "不同意 · Disagree",
            text: "Popularity does not justify sharing someone's image without permission.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could we ask participants how they would like the project to be described?",
          },
        ],
      },
      partner:
        "Close-up photos of the people we help will make our event more popular online.",
      interaction: "讨论宣传价值，并提出尊重参与者的替代方案。",
    },
    {
      id: "d28-discussion3",
      type: "discussion",
      prompt: "Decide how to manage a tutoring programme during examinations.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: ["schedule", "reliability"],
      reference: {
        paragraphs: [
          "Exams will make our schedules tighter, but cancelling every session could disappoint children who rely on the programme. We should explain the problem early and see whether volunteers can share shorter sessions. If a break is unavoidable, we can agree on dates with the centre and provide suitable practice materials. Which arrangement would let us follow through without making unrealistic promises?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["follow through"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "A planned break may be reasonable if the centre agrees in advance.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "We may reduce sessions, but we should protect the most important support.",
          },
          {
            label: "不同意 · Disagree",
            text: "Cancelling without notice would undermine the trust we have built.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could backup volunteers cover the two busiest examination weeks?",
          },
        ],
      },
      partner:
        "Our exams are approaching, so we should cancel tutoring until we feel less busy.",
      interaction: "平衡学习与承诺，提出提前沟通和替代安排。",
    },
  ],
  finalQuestion: {
    id: "d28-final",
    type: "final",
    prompt: "How would you decide whether to join a volunteer project?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: ["fit", "commitment"],
    reference: {
      paragraphs: [
        "I would consider whether the project meets a real need and whether I can make a reliable contribution. A meaningful cause is attractive, but enthusiasm alone does not create useful support. I would ask about the tasks, training, timetable, and the people supervising volunteers. Then I would compare that commitment with my studies. If I could attend regularly and learn the required skills, I would join. If my schedule did not fit, I would look for a smaller role rather than make a promise I could not keep.",
      ],
      structure: ["概括个人立场", "用实例解释原因", "提出下一步行动"],
      highlights: ["reliable contribution"],
    },
  },
  upgrades: [
    {
      basic: "We should help people.",
      better:
        "We should ask community workers which tasks students can reliably complete.",
      zh: "把泛泛帮助转为具体需求。",
    },
    {
      basic: "The event was successful.",
      better:
        "The event was useful because participants could apply the skills afterwards.",
      zh: "用效果而非热闹评价活动。",
    },
    {
      basic: "Take photos of them.",
      better: "Ask for permission before sharing any participant's photograph.",
      zh: "加入同意与尊重。",
    },
    {
      basic: "I want to volunteer.",
      better: "I can commit two hours every Friday for the next eight weeks.",
      zh: "将意愿转为明确承诺。",
    },
  ],
};

export default day;
