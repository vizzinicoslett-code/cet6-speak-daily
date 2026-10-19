import type { TrainingDay } from "../../types";

const day: TrainingDay = {
  id: "day32",
  day: 32,
  topic: "Campus Facilities",
  topicZh: "校园设施",
  category: "Campus",
  estimatedMinutes: 18,
  focus: "模拟四：根据需求与证据分配有限资源，协商设施改进与使用规则。",
  talkingPoints: [
    {
      en: "Identify which users face the greatest barrier.",
      zh: "识别哪些使用者遇到最大障碍。",
    },
    {
      en: "Compare maintenance with new construction.",
      zh: "比较维护与新建设施。",
    },
    {
      en: "Balance quiet, collaboration, and fair access.",
      zh: "兼顾安静、合作与公平使用。",
    },
  ],
  expressions: [
    {
      en: "make better use of",
      zh: "更好地利用",
      example: "We can make better use of empty classrooms in the evening.",
    },
    {
      en: "meet different needs",
      zh: "满足不同需求",
      example:
        "A library should meet different needs without creating conflict.",
    },
    {
      en: "a limited budget",
      zh: "有限预算",
      example: "A limited budget makes careful prioritisation essential.",
    },
    {
      en: "regular maintenance",
      zh: "定期维护",
      example: "Regular maintenance keeps sports equipment usable.",
    },
    {
      en: "barrier-free access",
      zh: "无障碍通行",
      example: "Barrier-free access should be part of the renovation plan.",
    },
    {
      en: "fair access",
      zh: "公平使用机会",
      example: "Short booking limits could improve fair access to study rooms.",
    },
  ],
  sentenceFrames: [
    {
      en: "The main problem is ..., rather than simply ...",
      zh: "主要问题是……，而不只是……",
    },
    {
      en: "Before building ..., we should check ...",
      zh: "建设……之前，我们应该核查……",
    },
    {
      en: "This would benefit ..., especially ...",
      zh: "这将有益于……，尤其是……",
    },
    {
      en: "How should we prioritise ... within the available budget?",
      zh: "我们应如何在现有预算内安排……的优先顺序？",
    },
  ],
  quickResponses: [
    {
      id: "d32-q1",
      type: "quick",
      prompt: "Which campus facility do you use most often, and why?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "I use the library most often because it gives me a reliable place to concentrate between classes. The quiet area helps with reading, while the small group rooms are useful for presentations. What matters most is knowing which space suits each task. Clear signs and fair booking rules make the library easier to use, even when the building is quite busy.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["fair booking rules"],
      },
    },
    {
      id: "d32-q2",
      type: "quick",
      prompt: "Would you improve an old facility or build a new one?",
      prepareSeconds: 5,
      speakingSeconds: 30,
      hints: [],
      reference: {
        paragraphs: [
          "I would first examine the old facility and ask why it is not meeting students' needs. If regular maintenance and a better timetable could solve the problem, renovation would save resources. However, a building with serious access barriers or insufficient capacity may need a larger change. The best decision depends on the cause of the difficulty, the cost, and who would benefit.",
        ],
        structure: ["直接回应问题", "补充原因与具体例子", "用一句话收束"],
        highlights: ["regular maintenance"],
      },
    },
  ],
  personalStatement: {
    id: "d32-statement",
    type: "statement",
    prompt:
      "Your university has a limited budget for campus improvements. Explain which facility should receive priority and how the decision should be made.",
    prepareSeconds: 60,
    speakingSeconds: 90,
    hints: [],
    reference: {
      paragraphs: [
        "I would give priority to improving study spaces, but I would first check whether the main problem is a shortage of seats, inconvenient opening hours, or unsuitable conditions. These problems require different solutions, and a limited budget should address the actual barrier.",
        "The university could begin with short surveys and observations during busy periods. Students who commute, work late, or need barrier-free access should be included because their difficulties may not be obvious to the majority. We could make better use of existing classrooms in the evening before proposing a new building.",
        "My preferred first step would be to create several reliable study zones. To meet different needs, some would remain quiet, while others would allow discussion. Good lighting, working power sockets, and regular maintenance would matter more than impressive decoration. Clear booking rules could prevent a few groups from occupying shared rooms all day.",
        "After a trial period, the university should publish feedback and basic usage information. If the changes reduce crowding, funds could support similar improvements elsewhere. If demand still exceeds capacity, a stronger case for expansion would exist. This process would connect spending with students' daily experience.",
      ],
      structure: [
        "提出明确观点",
        "展开理由并举例",
        "回应限制或不同情况",
        "总结个人行动",
      ],
      highlights: [
        "a limited budget",
        "barrier-free access",
        "regular maintenance",
      ],
    },
  },
  discussion: [
    {
      id: "d32-discussion1",
      type: "discussion",
      prompt:
        "Choose between decorating and repairing a student activity room.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "New decoration would make the room more welcoming, but broken chairs and unreliable lighting affect whether students can use it comfortably. I suggest repairing those essentials first and setting aside a smaller amount for decoration chosen by students. We could also check whether the layout supports different activities. Which faults currently prevent the greatest number of people from using the room?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["repairing those essentials"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Decoration can improve the atmosphere once basic repairs are complete.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "A fresh appearance matters, but functionality should receive most of the budget.",
          },
          {
            label: "不同意 · Disagree",
            text: "I would not prioritise the walls while the furniture remains damaged.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could we inspect the room together and rank the problems by urgency?",
          },
        ],
      },
      partner:
        "We should spend the room improvement budget on a stylish wall and new posters.",
      interaction: "在无关键词提示下排序需求，并邀请搭档依据影响作选择。",
    },
    {
      id: "d32-discussion2",
      type: "discussion",
      prompt: "Discuss fair rules for booking group study rooms.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "Unlimited bookings would suit some project teams, but they could leave other students with no access. We could set a reasonable daily limit and allow extensions when rooms remain empty. A check-in rule would also release bookings that nobody uses. That offers flexibility while protecting fair access. Should the limit change during examination weeks, when demand is especially high?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["fair access"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "Long bookings may be justified for occasional workshops arranged in advance.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Groups need time, although a whole day should not be the default.",
          },
          {
            label: "不同意 · Disagree",
            text: "Unlimited booking would allow a small number of users to dominate the rooms.",
          },
          {
            label: "追问 · Follow-up",
            text: "Could unused bookings be released after a short check-in period?",
          },
        ],
      },
      partner:
        "Any group should be able to reserve a study room for the whole day whenever it wants.",
      interaction: "比较便利与公平，协商规则和例外情况。",
    },
    {
      id: "d32-discussion3",
      type: "discussion",
      prompt: "Respond to a proposal for a new campus sports building.",
      prepareSeconds: 5,
      speakingSeconds: 35,
      hints: [],
      reference: {
        paragraphs: [
          "A new sports building would be attractive, but we should compare its benefits with improving the facilities we already have. Extending opening hours and repairing unused courts might serve more students sooner. We also need to ask which activities lack space and whether changing rooms are accessible. Could we gather usage information before deciding that new construction is the best investment?",
        ],
        structure: ["回应搭档观点", "补充理由与可行方案", "追问以推动讨论"],
        highlights: ["usage information"],
        alternatives: [
          {
            label: "同意 · Agree",
            text: "A new building could help if existing spaces cannot meet clear demand.",
          },
          {
            label: "部分同意 · Partly agree",
            text: "Extra space is useful, but access and opening hours still affect participation.",
          },
          {
            label: "不同意 · Disagree",
            text: "Construction alone would not address damaged equipment or inconvenient schedules.",
          },
          {
            label: "追问 · Follow-up",
            text: "Which student groups are currently unable to find suitable exercise space?",
          },
        ],
      },
      partner:
        "A large new sports building would automatically solve students' exercise problems.",
      interaction: "检验假设，提出维护、开放时间与可达性的比较。",
    },
  ],
  finalQuestion: {
    id: "d32-final",
    type: "final",
    prompt:
      "How can students take responsibility for shared campus facilities?",
    prepareSeconds: 5,
    speakingSeconds: 45,
    hints: [],
    reference: {
      paragraphs: [
        "Students can take responsibility by using shared facilities considerately and reporting problems early. For example, cancelling a room booking when plans change gives someone else a chance to use it. Returning equipment and leaving a clear desk also reduce the work passed to others. However, responsibility should include a voice in decisions. Students could give specific feedback about broken sockets, confusing signs, or access barriers. When the university responds visibly, students are more likely to feel that shared spaces are worth caring for.",
      ],
      structure: ["概括个人立场", "用实例解释原因", "提出下一步行动"],
      highlights: ["reporting problems early"],
    },
  },
  upgrades: [
    {
      basic: "The library is bad.",
      better:
        "The library has too few quiet seats during the evening study period.",
      zh: "定位设施问题的时段和表现。",
    },
    {
      basic: "Build more rooms.",
      better:
        "We should check whether unused classrooms could meet the demand first.",
      zh: "提出建设前的资源盘点。",
    },
    {
      basic: "The gym needs money.",
      better:
        "Repairing damaged equipment would restore capacity at a lower cost.",
      zh: "比较改进方案与成本。",
    },
    {
      basic: "Everyone should use it.",
      better:
        "Step-free entrances and clear signs would make the building easier to use.",
      zh: "将普遍可用变成具体设计。",
    },
  ],
};

export default day;
