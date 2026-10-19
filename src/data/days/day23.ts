import type { TrainingDay } from "../../types";

const day = {
  id: "day23",
  day: 23,
  topic: "Educational Equality",
  topicZh: "教育公平",
  category: "Education",
  estimatedMinutes: 18,
  focus: "综合模拟：权衡教育机会差异，提出并检验共同方案；提示最少",
  talkingPoints: [
    {
      en: "Access to resources",
      zh: "资源可及性",
    },
    {
      en: "Different learning needs",
      zh: "不同学习需求",
    },
    {
      en: "Targeted support",
      zh: "有针对性的支持",
    },
  ],
  expressions: [
    {
      en: "accessible materials",
      zh: "无障碍材料",
      example:
        "Accessible materials allow a student with a visual impairment to study independently.",
    },
    {
      en: "suitable support",
      zh: "适当的支持",
      example:
        "Suitable support depends on the particular barrier a learner faces.",
    },
    {
      en: "a stable connection",
      zh: "稳定的网络连接",
      example:
        "A recorded lesson is difficult to use without a stable connection.",
    },
    {
      en: "fair opportunity",
      zh: "公平的机会",
      example:
        "A device lending program can give more students a fair opportunity to participate.",
    },
    {
      en: "accessible design",
      zh: "无障碍设计",
      example:
        "Accessible design helps learners use the same online course in different ways.",
    },
    {
      en: "needs assessment",
      zh: "需求评估",
      example:
        "A needs assessment should come before buying equipment for another school.",
    },
  ],
  sentenceFrames: [
    {
      en: "Equal treatment may not be enough when ...",
      zh: "当……时，同样对待也许还不够。",
    },
    {
      en: "The barrier is not simply ..., but also ...",
      zh: "障碍不只是……，还包括……",
    },
    {
      en: "We should ask who benefits and who is still excluded.",
      zh: "我们应问谁受益，以及谁仍被排除在外。",
    },
    {
      en: "A fair approach would combine ... with ...",
      zh: "公平的方法应把……与……结合起来。",
    },
  ],
  upgrades: [
    {
      basic: "Everyone needs the same thing.",
      better:
        "Students may need different forms of support to have a fair chance of learning.",
      zh: "区分同样资源与公平机会。",
    },
    {
      basic: "Online courses solve the problem.",
      better:
        "Online courses widen access when students also have suitable devices, connectivity, and guidance.",
      zh: "加入使用条件。",
    },
    {
      basic: "Poor students need help.",
      better:
        "Financial aid and clear information can reduce barriers for students with limited resources.",
      zh: "从标签转向具体障碍。",
    },
    {
      basic: "Give more books.",
      better:
        "Ask schools which materials and teaching support would address their most urgent learning needs.",
      zh: "先评估实际需要。",
    },
  ],
  quickResponses: [
    {
      prompt: "What does educational equality mean to you?",
      hints: [],
      reference: {
        paragraphs: [
          "To me, educational equality means that a person’s background should not prevent them from developing their abilities. It does not necessarily mean giving every student exactly the same resource. A student with a visual impairment may need accessible materials, while another may need help paying for transport. A fair system notices these differences and offers suitable support so that both can participate meaningfully in learning.",
        ],
        structure: ["定义机会公平", "用不同需求举例", "归纳支持原则"],
        highlights: ["accessible materials", "suitable support"],
      },
      id: "d23-q1",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
    {
      prompt: "Can online courses reduce educational inequality?",
      hints: [],
      reference: {
        paragraphs: [
          "Online courses can widen access to good explanations and specialized subjects, especially where local options are limited. However, a free video is not equally useful to everyone. Students also need a device, a stable connection, and somewhere to study. Some need guidance when they become confused. I would combine online materials with school or library support rather than assume that making content available removes every barrier.",
        ],
        structure: ["说明扩大机会", "分析使用前提", "提出配套支持"],
        highlights: ["a stable connection", "library support"],
      },
      id: "d23-q2",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
  ],
  personalStatement: {
    prompt:
      "Discuss the main barriers to educational equality and suggest practical ways to reduce them.",
    hints: [],
    reference: {
      paragraphs: [
        "Educational equality is about giving people a fair opportunity to learn, regardless of family income, location, or disability. Important barriers can appear before a student enters a classroom. A long journey, the cost of materials, or unclear information about financial support may prevent participation even when a school place is technically available.",
        "Technology can help, but it should not be treated as a complete solution. Online lessons provide access to subjects that some schools cannot easily offer. Yet a student sharing one phone with several family members may struggle to use them. Good content needs to be supported by suitable devices, reliable connections, accessible design, and people who can answer questions.",
        "I would prioritize support based on local needs. Schools could lend equipment, offer quiet study spaces, and explain assistance in clear language. Universities could work with teachers on sustained tutoring rather than occasional visits. The students receiving support should help evaluate it, since they understand difficulties that outsiders may overlook. Progress should be judged not only by how many resources are distributed, but by whether learners can attend, participate, and continue developing their abilities.",
      ],
      structure: [
        "界定机会与现实障碍",
        "分析技术的条件",
        "提出需求导向支持及评价",
      ],
      highlights: ["fair opportunity", "accessible design", "local needs"],
    },
    id: "d23-statement",
    type: "statement",
    prepareSeconds: 60,
    speakingSeconds: 90,
  },
  discussion: [
    {
      prompt:
        "Respond to your partner’s suggestion for supporting a school with limited resources.",
      hints: [],
      reference: {
        paragraphs: [
          "Donating computers could help, but we should first ask the teachers what prevents students from learning. The school may need reliable internet, equipment repairs, or training more urgently than additional machines. We could begin with a short needs assessment and plan support that the school can maintain. That would avoid giving resources that are difficult to use. Who could speak to the teachers before we decide?",
        ],
        structure: ["评估捐赠建议", "区分物资与可用条件", "提出需求调查"],
        highlights: ["needs assessment", "maintain"],
        alternatives: [
          {
            label: "Agree",
            text: "Computers can expand access when students currently have no suitable device for important learning activities.",
          },
          {
            label: "Partly agree",
            text: "Devices matter, but the school also needs maintenance, connectivity, and plans for using them.",
          },
          {
            label: "Disagree",
            text: "I would not choose the donation before asking the teachers which barrier is most urgent.",
          },
          {
            label: "Follow-up",
            text: "Does the school have the staff and budget to keep additional computers working?",
          },
        ],
      },
      partner:
        "We should buy as many computers as possible for the school we want to support.",
      interaction: "回应、论证并协商支持方案。",
      id: "d23-discussion1",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Discuss whether every student should receive exactly the same amount of support.",
      hints: [],
      reference: {
        paragraphs: [
          "Treating everyone respectfully is essential, but identical support may leave some students unable to participate. For example, a student who cannot hear a lecture may need captions in addition to the same textbook everyone receives. We should provide a common foundation and extra help where a specific barrier exists. The criteria need to be clear so students understand the purpose. Would that approach address your concern about fairness?",
        ],
        structure: ["认可平等尊重", "举相同资源的不足", "提出基础加针对支持"],
        highlights: ["identical support", "a common foundation"],
        alternatives: [
          {
            label: "Agree",
            text: "A common basic level of support can ensure that nobody is overlooked or excluded without explanation.",
          },
          {
            label: "Partly agree",
            text: "Everyone needs a foundation, but extra barriers may require additional or different support.",
          },
          {
            label: "Disagree",
            text: "Identical resources are not fair when some students cannot access or use them without adjustments.",
          },
          {
            label: "Follow-up",
            text: "Would providing captions for a student with hearing difficulties count as unequal treatment or fair access?",
          },
        ],
      },
      partner:
        "The fairest policy is to give every student exactly the same support.",
      interaction: "回应、论证并协商支持方案。",
      id: "d23-discussion2",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Develop a sustainable university tutoring project with your partner.",
      hints: [],
      reference: {
        paragraphs: [
          "A weekend visit could introduce our team, but learning support needs continuity. We could pair small groups of volunteers with the same class for a term and let local teachers choose the focus. Simple teaching notes would help when a volunteer is absent. We should also ask students what they find confusing. This arrangement would make the project more dependable. How many volunteers could commit for the whole term?",
        ],
        structure: ["承接短期活动", "设计持续与交接机制", "追问承诺能力"],
        highlights: ["continuity", "teaching notes"],
        alternatives: [
          {
            label: "Agree",
            text: "An introductory visit could help students ask questions about university and meet the volunteers.",
          },
          {
            label: "Partly agree",
            text: "A visit may inspire interest, but ongoing support is more likely to address learning difficulties.",
          },
          {
            label: "Disagree",
            text: "I would not make a single motivational talk the main project because students may need practical help afterward.",
          },
          {
            label: "Follow-up",
            text: "Could local teachers identify a weekly learning goal that volunteers can support throughout the term?",
          },
        ],
      },
      partner:
        "Let us visit the school once and give students an inspiring talk about university life.",
      interaction: "回应、论证并协商支持方案。",
      id: "d23-discussion3",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
  ],
  finalQuestion: {
    prompt:
      "Should educational equality be measured only by examination results?",
    hints: [],
    reference: {
      paragraphs: [
        "Examination results provide useful information, but they cannot show the whole picture of educational equality. We should also ask who can attend regularly, access materials, participate in class, and continue to the next stage of study. A school may improve access for students with disabilities before that change appears in average marks. Individual progress and students’ own experiences therefore matter as well. Using several measures helps us see which barriers remain and avoids judging a support program only by a single score that may hide important differences between learners.",
      ],
      structure: ["承认考试信息价值", "提出参与及持续指标", "解释多指标意义"],
      highlights: ["Individual progress", "several measures"],
    },
    id: "d23-final",
    type: "final",
    prepareSeconds: 5,
    speakingSeconds: 45,
  },
} satisfies TrainingDay;

export default day;
