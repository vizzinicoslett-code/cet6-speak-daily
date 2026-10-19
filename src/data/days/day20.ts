import type { TrainingDay } from "../../types";

const day = {
  id: "day20",
  day: 20,
  topic: "Traditional Culture",
  topicZh: "传统文化",
  category: "Society",
  estimatedMinutes: 18,
  focus: "互动训练：请求澄清、换句话解释，再确认共同理解",
  talkingPoints: [
    {
      en: "Living traditions",
      zh: "活态传统",
    },
    {
      en: "Access and participation",
      zh: "接触与参与",
    },
    {
      en: "Respectful adaptation",
      zh: "尊重传统的创新",
    },
  ],
  expressions: [
    {
      en: "paper cutting",
      zh: "剪纸",
      example:
        "A local artist explained the meaning of a flower used in paper cutting.",
    },
    {
      en: "direct experience",
      zh: "直接体验",
      example:
        "Direct experience helps students appreciate the patience required by the craft.",
    },
    {
      en: "local practitioners",
      zh: "当地的传统实践者",
      example:
        "We invited local practitioners to explain how the celebration has changed.",
    },
    {
      en: "fair payment",
      zh: "公平报酬",
      example:
        "The university should offer fair payment to the craftsperson leading the workshop.",
    },
    {
      en: "carry it forward",
      zh: "将其传承下去",
      example:
        "Understanding why the custom matters helps students carry it forward.",
    },
    {
      en: "traditional culture",
      zh: "传统文化",
      example:
        "A small workshop can connect traditional culture with everyday student life.",
    },
  ],
  sentenceFrames: [
    {
      en: "Could you clarify what you mean by ...?",
      zh: "你能澄清你所说的……吗？",
    },
    {
      en: "Do you mean ..., or are you suggesting ...?",
      zh: "你指的是……，还是建议……？",
    },
    {
      en: "In other words, the aim is to ...",
      zh: "换句话说，目标是……",
    },
    {
      en: "Have I understood you correctly?",
      zh: "我的理解正确吗？",
    },
  ],
  upgrades: [
    {
      basic: "Culture is important.",
      better:
        "Traditional practices connect everyday activities with a community’s memories and values.",
      zh: "解释重要性。",
    },
    {
      basic: "Make it modern.",
      better:
        "We can update the presentation while explaining the original purpose and meaning.",
      zh: "澄清创新范围。",
    },
    {
      basic: "I do not understand.",
      better:
        "Could you clarify whether you mean changing the activity or only the way we introduce it?",
      zh: "明确请求澄清的对象。",
    },
    {
      basic: "Young people should join.",
      better:
        "An affordable beginner workshop could give young people a direct experience of the craft.",
      zh: "提供参与入口。",
    },
  ],
  quickResponses: [
    {
      prompt: "Which traditional activity would you like to learn?",
      hints: ["把技艺和意义联系起来"],
      reference: {
        paragraphs: [
          "I would like to learn paper cutting from someone who understands both the technique and its meanings. I have seen beautiful patterns during festivals, but I rarely know why a particular animal or flower is chosen. A beginner workshop could teach me a simple design and explain its background. That experience would make the tradition more memorable than only taking a photograph of a finished piece.",
        ],
        structure: ["选择传统", "提出学习需求", "对比观看和体验"],
        highlights: ["paper cutting", "explain its background"],
      },
      id: "d20-q1",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
    {
      prompt: "Can traditional culture appeal to young people?",
      hints: ["从观看转向参与"],
      reference: {
        paragraphs: [
          "Yes, especially when young people can participate and ask questions. A short performance may attract attention, but trying an instrument or speaking to an experienced maker can create a deeper interest. The explanation should use clear language without treating the audience as already knowledgeable. I think curiosity grows when a tradition is presented as something people still practice, rather than an object that belongs only in a museum.",
        ],
        structure: ["明确可能性", "说明参与方式", "强调活态呈现"],
        highlights: ["a deeper interest", "still practice"],
      },
      id: "d20-q2",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
  ],
  personalStatement: {
    prompt:
      "Explain how universities can help students understand and pass on traditional culture.",
    hints: ["解释如何保护内涵同时扩大参与"],
    reference: {
      paragraphs: [
        "Universities can help students engage with traditional culture by connecting knowledge with direct experience. Many students recognize the appearance of a festival or craft but know little about the stories, skills, and social values behind it. A university has the space and resources to make those connections clearer.",
        "I would invite local practitioners to lead small workshops rather than rely only on large performances. In a calligraphy session, for example, students could learn how to hold the brush and hear why a particular phrase is chosen for a family celebration. The practitioner should receive fair payment, and students should have time to ask questions about both technique and meaning.",
        "Digital media can support this work if it provides context. Short videos could introduce a craft and direct viewers to a longer interview or workshop. Students might also record family traditions with permission and compare how the same celebration differs between regions. The aim is not to freeze every practice exactly as it was, but to understand what people value and decide carefully how to carry it forward. Participation, respectful explanation, and continuing relationships with practitioners can keep cultural learning alive.",
      ],
      structure: [
        "说明认知与体验的差距",
        "设计有背景解释的工作坊",
        "提出数字传播与尊重传承",
      ],
      highlights: ["local practitioners", "fair payment", "carry it forward"],
    },
    id: "d20-statement",
    type: "statement",
    prepareSeconds: 60,
    speakingSeconds: 90,
  },
  discussion: [
    {
      prompt: "Ask your partner to clarify the meaning of modernization.",
      hints: ["先澄清再评价"],
      reference: {
        paragraphs: [
          "Could you clarify what you mean by making the festival modern? Do you mean using online registration and clearer explanations, or changing the activities themselves? I would support making participation easier, but we should understand the meaning of each custom before replacing it. For example, a shorter introduction may help newcomers without changing the ceremony. Which part do you think currently prevents students from joining?",
        ],
        structure: ["请求定义", "区分两种解释", "确认实际障碍"],
        highlights: ["Could you clarify", "meaning of each custom"],
        alternatives: [
          {
            label: "Agree",
            text: "Modern ways of providing information can make an unfamiliar festival easier to approach.",
          },
          {
            label: "Partly agree",
            text: "The presentation can change, but the community should help decide which elements carry essential meaning.",
          },
          {
            label: "Disagree",
            text: "I would not change everything because some activities are valuable precisely for their connection to earlier generations.",
          },
          {
            label: "Follow-up",
            text: "When you say modern, which specific part of the event would you change?",
          },
        ],
      },
      partner:
        "Our traditional festival will attract students if we make everything more modern.",
      interaction: "练习澄清：询问含义，给出可能解释，再核对理解。",
      id: "d20-discussion1",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Restate your partner’s idea in clearer terms and check your understanding.",
      hints: ["复述后核对目标"],
      reference: {
        paragraphs: [
          "So, if I understand correctly, you want students to practice the craft themselves rather than only watch a demonstration. That would make the workshop more active and help them appreciate the skill involved. We could offer a simple beginner task while the expert explains a more complex piece. Is your main goal to increase participation, or do you also want students to learn the historical background?",
        ],
        structure: ["复述伙伴提案", "解释价值", "核对目标范围"],
        highlights: ["if I understand correctly", "historical background"],
        alternatives: [
          {
            label: "Agree",
            text: "Trying a small task would help visitors understand how much practice the craft requires.",
          },
          {
            label: "Partly agree",
            text: "Participation would help, but some delicate objects still need careful protection.",
          },
          {
            label: "Disagree",
            text: "For a fragile collection, I would use replica materials rather than let visitors handle the originals.",
          },
          {
            label: "Follow-up",
            text: "Do you mean handling the exhibits, or offering a separate activity with practice materials?",
          },
        ],
      },
      partner: "We should turn the exhibition into something more interactive.",
      interaction: "用自己的话重述模糊建议并确认目标。",
      id: "d20-discussion2",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt: "Clarify what successful cultural preservation would look like.",
      hints: ["区分物品与技艺"],
      reference: {
        paragraphs: [
          "When you say preserve the tradition, do you mean keeping the objects safe or ensuring that people can still perform the skill? Both matter, but they call for different actions. A display case protects a finished object, while an apprenticeship supports future makers. We might combine a small exhibition with regular teaching sessions. Would that match your idea of preservation, or are we missing another important part?",
        ],
        structure: ["澄清保护对象", "比较两类行动", "提整合方案并确认"],
        highlights: ["different actions", "future makers"],
        alternatives: [
          {
            label: "Agree",
            text: "Preservation is important because skills may disappear when experienced makers have nobody to teach.",
          },
          {
            label: "Partly agree",
            text: "Keeping examples is valuable, but we also need to understand how the skill fits into people’s lives.",
          },
          {
            label: "Disagree",
            text: "I would avoid preserving only the appearance if the people who practice it receive no support.",
          },
          {
            label: "Follow-up",
            text: "Would you measure preservation by the objects saved or by the number of new people learning the skill?",
          },
        ],
      },
      partner:
        "Our main goal should be to preserve this local weaving tradition.",
      interaction: "通过区分含义帮助双方形成共同定义。",
      id: "d20-discussion3",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
  ],
  finalQuestion: {
    prompt: "Should traditions remain unchanged in order to be authentic?",
    hints: ["用内涵与形式区分支撑观点"],
    reference: {
      paragraphs: [
        "I do not think authenticity requires every detail to remain unchanged. Traditions have often developed as communities moved, tools changed, and people found new needs. What matters is understanding which meanings and relationships people want to preserve. For example, a craft workshop may use a video introduction while still teaching the original hand skills and explaining their background. Changes should involve the people who practice the tradition, rather than being imposed only to attract attention. Thoughtful adaptation can help a tradition remain part of daily life for another generation.",
      ],
      structure: ["反对僵化定义", "举呈现方式变化", "强调实践者参与"],
      highlights: ["Thoughtful adaptation", "people who practice"],
    },
    id: "d20-final",
    type: "final",
    prepareSeconds: 5,
    speakingSeconds: 45,
  },
} satisfies TrainingDay;

export default day;
