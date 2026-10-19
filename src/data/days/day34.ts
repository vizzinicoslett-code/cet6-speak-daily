import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day34",
  day: 34,
  topic: "Cultural Exchange",
  topicZh: "文化交流",
  category: "Society",
  estimatedMinutes: 18,
  focus: "模拟六：避免刻板印象，以开放提问、澄清与共同参与推进跨文化交流。",
  talkingPoints: [
    {
      en: "Ask about personal experience rather than assume a national habit.",
      zh: "询问个人经历，不预设民族习惯。",
    },
    {
      en: "Treat misunderstandings as opportunities to clarify meaning.",
      zh: "将误解视为澄清含义的机会。",
    },
    {
      en: "Design exchange around shared participation.",
      zh: "围绕共同参与设计交流。",
    },
  ],
  expressions: [
    {
      en: "keep an open mind",
      zh: "保持开放心态",
      example: "I try to keep an open mind when customs are unfamiliar.",
    },
    {
      en: "avoid stereotypes",
      zh: "避免刻板印象",
      example: "Personal stories help us avoid stereotypes.",
    },
    {
      en: "find common ground",
      zh: "寻找共同点",
      example: "Shared hobbies can help participants find common ground.",
    },
    {
      en: "clarify what I mean",
      zh: "澄清我的意思",
      example: "I can give an example to clarify what I mean.",
    },
    {
      en: "a two-way exchange",
      zh: "双向交流",
      example: "A two-way exchange gives everyone time to ask questions.",
    },
    {
      en: "see things from another perspective",
      zh: "从另一角度看问题",
      example:
        "A conversation can help me see things from another perspective.",
    },
  ],
  sentenceFrames: [
    {
      en: "In my experience ..., although others may ...",
      zh: "就我的经历而言……，不过其他人可能……",
    },
    {
      en: "When you say ..., do you mean ...?",
      zh: "你说……时，是指……吗？",
    },
    {
      en: "One similarity I noticed was ...",
      zh: "我注意到的一个相似点是……",
    },
    {
      en: "Could we create an activity where everyone ...?",
      zh: "我们能否设计一个让每个人都……的活动？",
    },
  ],
  quickResponses: [
    {
      id: "d34-q1",
      type: "quick",
      prompt: "What would you like to learn from an international student?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "I would keep an open mind and ask what an ordinary university day is like for them, including how they study, spend time with friends, and manage practical difficulties. Everyday experiences can reveal more than a list of famous foods or festivals. I would also share my own routine so the conversation becomes a two-way exchange, rather than asking them to explain an entire country.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["a two-way exchange"],
      },
    },
    {
      id: "d34-q2",
      type: "quick",
      prompt:
        "What would you do if a cultural difference caused a misunderstanding?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "I would slow down and check what the other person intended before reacting. A phrase that sounds unfriendly to me might have a different meaning in their usual setting. I could explain how I understood it and ask a polite question. If my own words caused confusion, I would clarify what I mean with an example instead of assuming that the other person should already understand.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["clarify what I mean"],
      },
    },
  ],
  personalStatement: {
    id: "d34-statement",
    type: "statement",
    prompt:
      "Design a campus cultural exchange activity that would encourage meaningful communication rather than reinforce stereotypes.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [],
    reference: {
      paragraphs: [
        "I would organise a small story-sharing event around everyday objects. Each participant could bring something connected with a personal memory, such as a recipe card, a photograph, or a ticket from a memorable journey. This would give people a concrete starting point and help us avoid stereotypes without asking anyone to represent a whole country.",
        "The event should be a two-way exchange. Participants would work in mixed groups, take turns telling their stories, and ask questions about what interested them. Facilitators could encourage phrases such as asking what an object means to that individual, rather than assuming that everyone from the same place shares the experience.",
        "Language support would also matter. People could use pictures, write key words, or rephrase an idea without being rushed. A shared task, such as creating a small display of unexpected similarities, would help the group find common ground.",
        "Finally, participants could reflect on one assumption that changed and one question they still have. The aim would not be to master another culture in an afternoon. It would be to practise curiosity, listen carefully, and see people as individuals with varied experiences.",
      ],
      structure: [
        "提出明确观点",
        "展开理由并举例",
        "回应限制或不同情况",
        "总结个人行动",
      ],
      highlights: ["a two-way exchange", "find common ground"],
    },
  },
  discussion: [
    {
      id: "d34-discussion1",
      type: "discussion",
      prompt: "Improve a proposed welcome event for exchange students.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "Food stalls could provide a friendly starting point, but we should not stop at tasting dishes. We could invite participants to share a personal story about a meal and ask questions in small mixed groups. That would help people find common ground beyond national labels. We should also offer choices for different dietary needs. How could we make sure visitors have time to share too?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["find common ground"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Food can start conversations if the programme makes space for personal stories.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Tasting dishes is enjoyable, although it does not automatically create meaningful exchange.",
          },
          {
            label: "不同意 · Disagree",
            text: "I would avoid treating a few dishes as a complete picture of a culture.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could each table include a question that invites everyone's experience?",
          },
        ],
      },
      partner:
        "Let us run food stalls, because tasting national dishes is enough for a cultural exchange.",
      interaction: "无关键词提示下扩展活动深度，并兼顾参与和饮食需求。",
    },
    {
      id: "d34-discussion2",
      type: "discussion",
      prompt:
        "Respond to a teammate preparing a presentation about another country.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "A simple description is useful, but saying that everyone behaves the same way could create a misleading picture. We should distinguish what our sources describe from what individuals may experience. Including different voices, regions, or generations would make the presentation more accurate. We can also state what we do not know. Could we replace that general claim with a specific example?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["different voices"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Broad patterns can be introduced if we explain the limits of the description.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "A simple outline helps, but it should leave room for differences within a society.",
          },
          {
            label: "不同意 · Disagree",
            text: "An absolute statement would make the presentation easier to remember but less accurate.",
          },
          {
            label: "追问 · Follow-up",
            text: "Whose experience does our source actually describe, and whose is missing?",
          },
        ],
      },
      partner:
        "We can make the presentation clearer by saying that people in this country all share the same habits.",
      interaction: "指出概括的局限，协商更具体且准确的表达。",
    },
    {
      id: "d34-discussion3",
      type: "discussion",
      prompt:
        "Discuss how to include a quieter participant in an exchange activity.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "Speaking more loudly might make the invitation clearer, but it may not address why our guest is quiet. We could offer a smaller group, more thinking time, or a question connected with their interests. They should also be free to listen before joining. Inclusion means making participation comfortable rather than demanding it. Would you like to start a conversation about the photograph they brought?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["more thinking time"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "A gentle invitation can help if it leaves the person free to decline.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "We should include them, although a smaller conversation may feel easier.",
          },
          {
            label: "不同意 · Disagree",
            text: "Repeated public requests could make the person more uncomfortable.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could we ask privately which kind of activity they would enjoy?",
          },
        ],
      },
      partner:
        "Our guest is very quiet. We should keep asking them to speak in front of everyone.",
      interaction: "避免推测沉默原因，以低压力方式邀请参与。",
    },
  ],
  finalQuestion: {
    id: "d34-final",
    type: "final",
    prompt: "What is the most important attitude in cultural exchange?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [],
    reference: {
      paragraphs: [
        "I think curiosity combined with humility is the most important attitude. Curiosity encourages us to ask questions, while humility reminds us that one conversation cannot explain an entire society. I would listen to the person's own experience and avoid assuming that it matches every familiar image of their country. I would also be willing to explain my own habits and admit when I do not know something. This creates space for a two-way exchange where I can see things from another perspective and revise my assumptions.",
      ],
      structure: ["概括个人立场", "用实例解释原因", "提出下一步行动"],
      highlights: ["a two-way exchange"],
    },
  },
  upgrades: [
    {
      basic: "Their culture is strange.",
      better:
        "The custom is unfamiliar to me, so I would like to understand its meaning.",
      zh: "用好奇替代评判。",
    },
    {
      basic: "All people there do this.",
      better:
        "Some people I met described this habit, although experiences differ.",
      zh: "限制概括范围。",
    },
    {
      basic: "My English is bad.",
      better: "I may need to rephrase that; let me explain with an example.",
      zh: "用修复策略保持交流。",
    },
    {
      basic: "We should show our culture.",
      better:
        "We should share personal stories and invite visitors to share theirs too.",
      zh: "把单向展示转为双向交流。",
    },
  ],
};

export default day;
