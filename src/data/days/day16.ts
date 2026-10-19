import type { TrainingDay } from "../../types";

const day = {
  id: "day16",
  day: 16,
  topic: "Internships",
  topicZh: "实习经历",
  category: "Career",
  estimatedMinutes: 18,
  focus: "互动训练：部分同意，指出条件，并协商更合理的方案",
  talkingPoints: [
    {
      en: "Experience and learning",
      zh: "经验与学习",
    },
    {
      en: "Fair access",
      zh: "公平机会",
    },
    {
      en: "Workplace supervision",
      zh: "职场指导",
    },
  ],
  expressions: [
    {
      en: "useful questions",
      zh: "有价值的问题",
      example:
        "Interns can ask useful questions about how their work supports the project.",
    },
    {
      en: "meaningful responsibilities",
      zh: "有意义的职责",
      example:
        "Meaningful responsibilities helped me understand what the team actually does.",
    },
    {
      en: "academic commitments",
      zh: "学业安排",
      example: "The placement needs to fit around my academic commitments.",
    },
    {
      en: "structured learning",
      zh: "有组织的学习",
      example:
        "A weekly feedback meeting turns routine work into structured learning.",
    },
    {
      en: "actual responsibilities",
      zh: "实际职责",
      example:
        "I compared the actual responsibilities before choosing between two placements.",
    },
    {
      en: "fair payment",
      zh: "公平报酬",
      example:
        "Fair payment allows students with limited savings to accept the internship.",
    },
  ],
  sentenceFrames: [
    {
      en: "I agree to some extent, but ...",
      zh: "我在一定程度上同意，不过……",
    },
    {
      en: "That may be true when ..., whereas ...",
      zh: "当……时也许如此，而……",
    },
    {
      en: "Could we keep ... while changing ...?",
      zh: "我们能否保留……同时调整……？",
    },
    {
      en: "The value depends less on ... than on ...",
      zh: "价值与其说取决于……，不如说取决于……",
    },
  ],
  upgrades: [
    {
      basic: "Internships are useful.",
      better:
        "A supervised internship can turn classroom concepts into practical decisions.",
      zh: "加入指导条件及学习机制。",
    },
    {
      basic: "Big companies are better.",
      better:
        "A large company may offer structured training, while a smaller team may give interns broader responsibilities.",
      zh: "比较具体机会。",
    },
    {
      basic: "I partly agree.",
      better:
        "I agree about gaining experience, but unpaid placements can exclude students who need an income.",
      zh: "指出同意部分与限制。",
    },
    {
      basic: "Students need advice.",
      better:
        "A named supervisor and weekly feedback would help interns learn from their tasks.",
      zh: "具体化指导。",
    },
  ],
  quickResponses: [
    {
      prompt: "What would you look for in an internship?",
      hints: ["优先说明学习内容"],
      reference: {
        paragraphs: [
          "I would look for a clear learning opportunity and a supervisor who has time to give feedback. A famous company name would be attractive, but I would rather understand what I could actually do there. For example, helping analyze customer interviews would teach me more than only arranging meeting rooms. I would also check the working hours so the placement would not damage my studies.",
        ],
        structure: ["说明选择标准", "对比任务价值", "补充时间约束"],
        highlights: ["learning opportunity", "working hours"],
      },
      id: "d16-q1",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
    {
      prompt: "Can an internship help students choose a career?",
      hints: ["避免从一次经历过度概括"],
      reference: {
        paragraphs: [
          "Yes, an internship can show students what a job feels like beyond its public image. Someone interested in journalism may discover that careful fact checking takes much more time than writing headlines. That experience could confirm their interest or lead them toward another role. Still, one placement represents only one team, so students should avoid judging an entire profession from a single difficult experience.",
        ],
        structure: ["肯定体验价值", "举职业实例", "限定结论范围"],
        highlights: ["public image", "one team"],
      },
      id: "d16-q2",
      type: "quick",
      prepareSeconds: 5,
      speakingSeconds: 30,
    },
  ],
  personalStatement: {
    prompt:
      "Discuss the benefits and possible problems of internships for university students.",
    hints: ["评估实习质量而非只看名称"],
    reference: {
      paragraphs: [
        "Internships can help students connect academic learning with the realities of work. A classroom project usually has a clear deadline and a known set of requirements, whereas a workplace task may involve changing requests and several people’s priorities. Learning to ask useful questions and communicate progress can therefore be as valuable as gaining technical experience.",
        "However, the quality of internships varies considerably. Some students receive thoughtful supervision and meaningful responsibilities, while others spend weeks doing routine tasks with little explanation. Unpaid placements can also create unequal opportunities because students who need an income may be unable to participate. A prestigious name does not automatically solve either problem.",
        "I think universities should help students evaluate placements before accepting them. Employers should state the expected tasks, working hours, compensation, and available supervision. Students can then choose an opportunity that fits their goals and academic commitments. During the placement, a short weekly reflection would help them identify what they have learned and what support they need. An internship is most valuable when it offers structured learning, respectful treatment, and a realistic view of a possible career.",
      ],
      structure: [
        "说明课堂到职场的学习",
        "比较质量及公平问题",
        "提出选择与反馈机制",
      ],
      highlights: [
        "quality of internships",
        "academic commitments",
        "structured learning",
      ],
    },
    id: "d16-statement",
    type: "statement",
    prepareSeconds: 60,
    speakingSeconds: 90,
  },
  discussion: [
    {
      prompt: "Respond with partial agreement to your partner’s claim.",
      hints: ["同意一部分，再限定"],
      reference: {
        paragraphs: [
          "I agree that a well known company can offer useful training and a strong professional network. However, its name alone does not tell us what an intern will learn. A smaller organization might let a student follow a project from beginning to end. I would compare the actual responsibilities and supervision before deciding. Could we add those two factors to our list of selection criteria?",
        ],
        structure: ["承认品牌优势", "指出非充分条件", "协商比较标准"],
        highlights: ["actual responsibilities", "selection criteria"],
        alternatives: [
          {
            label: "Agree",
            text: "A famous company may offer established training and contacts that are hard to find elsewhere.",
          },
          {
            label: "Partly agree",
            text: "Its reputation helps, but the actual tasks and available guidance determine how much an intern learns.",
          },
          {
            label: "Disagree",
            text: "I would choose the placement with better supervision even if the organization is less well known.",
          },
          {
            label: "Follow-up",
            text: "What would you do if the famous company offered only repetitive administrative work?",
          },
        ],
      },
      partner:
        "Students should always choose the most famous company available.",
      interaction: "练习部分同意：承认合理处，指出限制，提出调整。",
      id: "d16-discussion1",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt:
        "Discuss your partner’s proposal without accepting or rejecting it completely.",
      hints: ["区分目标与统一形式"],
      reference: {
        paragraphs: [
          "I agree that every student should have a chance to explore a workplace. Still, requiring a full summer internship might be difficult for students with paid jobs or family responsibilities. We could offer several routes, including a shorter placement, a supervised industry project, or work shadowing. These options would preserve the learning goal while making participation more realistic. Which alternative could our university organize most easily?",
        ],
        structure: ["认可学习目标", "说明参与障碍", "提出多种路径"],
        highlights: ["several routes", "preserve the learning goal"],
        alternatives: [
          {
            label: "Agree",
            text: "A requirement could encourage students who would otherwise postpone exploring the workplace.",
          },
          {
            label: "Partly agree",
            text: "Workplace learning is useful, but students need several ways to complete it fairly.",
          },
          {
            label: "Disagree",
            text: "I would keep it optional because a poorly matched compulsory placement can waste both students’ and employers’ time.",
          },
          {
            label: "Follow-up",
            text: "Could an industry project count for students who cannot leave campus for the summer?",
          },
        ],
      },
      partner: "A summer internship should be compulsory for everyone.",
      interaction: "部分同意后保留目标、调整做法。",
      id: "d16-discussion2",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
    {
      prompt: "Reach a shared position on unpaid internships.",
      hints: ["把分歧转成具体条件"],
      reference: {
        paragraphs: [
          "I agree that a short placement can provide experience, especially when supervision is excellent. But students still face transport and living costs, and many cannot afford to work for free. Perhaps employers should at least cover necessary expenses and publish clear learning goals. For longer placements, fair payment should be expected. That distinction would recognize both the educational value and the student’s financial situation. What duration seems reasonable?",
        ],
        structure: ["承认学习价值", "提出经济限制", "协商时长与费用"],
        highlights: ["necessary expenses", "fair payment"],
        alternatives: [
          {
            label: "Agree",
            text: "A brief observation placement can be worthwhile when it offers close guidance and limited responsibilities.",
          },
          {
            label: "Partly agree",
            text: "Experience matters, but even a short placement should not leave students paying large costs to participate.",
          },
          {
            label: "Disagree",
            text: "If interns produce useful work, I think the employer should pay them regardless of the brand name.",
          },
          {
            label: "Follow-up",
            text: "Would covering travel and meals make the opportunity accessible to students on a tight budget?",
          },
        ],
      },
      partner:
        "An unpaid internship is acceptable if it offers valuable experience.",
      interaction: "通过费用和时长条件协商共同立场。",
      id: "d16-discussion3",
      type: "discussion",
      prepareSeconds: 5,
      speakingSeconds: 35,
    },
  ],
  finalQuestion: {
    prompt:
      "What makes an internship educational rather than simply a period of work?",
    hints: ["解释工作如何转化为学习"],
    reference: {
      paragraphs: [
        "An educational internship gives students a clear learning goal, appropriate responsibilities, and regular feedback. Doing a task is not enough if nobody explains why it matters or how it could be improved. For example, an intern who summarizes survey results should discuss the findings with a supervisor and see how they influence a decision. Students also need time to reflect and ask questions. These features turn daily activity into knowledge they can use elsewhere. The strongest placement leaves someone better able to explain both the work and their own career interests.",
      ],
      structure: ["给出三个标准", "用任务反馈说明", "概括学习结果"],
      highlights: ["regular feedback", "reflect and ask questions"],
    },
    id: "d16-final",
    type: "final",
    prepareSeconds: 5,
    speakingSeconds: 45,
  },
} satisfies TrainingDay;

export default day;
