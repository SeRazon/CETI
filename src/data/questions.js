export const questions = [
  // ===== CS: Constructor vs Strategist =====
  {
    id: 1,
    dimension: 'CS',
    text: '接到一个新项目需求，你的第一反应是？',
    difficulty: 1,
    options: {
      A: { text: '打开 IDE，新建项目，边写边想', value: 'C' },
      B: { text: '打开画图工具，先画流程图/架构图', value: 'S' }
    }
  },
  {
    id: 2,
    dimension: 'CS',
    text: '学习一门新编程语言时，你倾向于？',
    difficulty: 1,
    options: {
      A: { text: '直接找一个小项目练手，边做边学', value: 'C' },
      B: { text: '先通读官方文档，了解设计哲学和语法全貌', value: 'S' }
    }
  },
  {
    id: 3,
    dimension: 'CS',
    text: '你更认同哪句话？',
    difficulty: 2,
    options: {
      A: { text: '"Talk is cheap, show me the code." — Linus Torvalds', value: 'C' },
      B: { text: '"Weeks of coding can save you hours of planning." — 经典程序员谚语', value: 'S' }
    }
  },
  {
    id: 4,
    dimension: 'CS',
    text: '团队要做一个电商系统，第一天你最可能在做什么？',
    difficulty: 2,
    options: {
      A: { text: '搭建项目脚手架，配置好数据库和基本的 CRUD', value: 'C' },
      B: { text: '和团队讨论领域模型，画 ER 图和服务拆分方案', value: 'S' }
    }
  },
  {
    id: 5,
    dimension: 'CS',
    text: '你的 GitHub 仓库里更多的是？',
    difficulty: 1,
    options: {
      A: { text: '各种实际项目和工具，README 可能比较简略', value: 'C' },
      B: { text: '设计文档、架构说明、技术方案比代码还详细', value: 'S' }
    }
  },
  {
    id: 6,
    dimension: 'CS',
    text: '以下哪个让你更有成就感？',
    difficulty: 1,
    options: {
      A: { text: '一个功能终于跑通了，所有测试用例都过了', value: 'C' },
      B: { text: '画出一张优雅的系统架构图，团队都说"这个设计漂亮"', value: 'S' }
    }
  },
  {
    id: 7,
    dimension: 'CS',
    text: '如果让你设计一个消息队列系统，你会先？',
    difficulty: 3,
    options: {
      A: { text: '用最简单的方式实现一个内存队列原型，验证核心逻辑', value: 'C' },
      B: { text: '先调研 Kafka、RabbitMQ、RocketMQ 的架构差异，选择最合适的设计模式', value: 'S' }
    }
  },
  {
    id: 8,
    dimension: 'CS',
    text: '你更喜欢哪种学习资源？',
    difficulty: 1,
    options: {
      A: { text: '带代码示例的教程、Playground', value: 'C' },
      B: { text: '技术白皮书、架构解析类文章', value: 'S' }
    }
  },
  {
    id: 9,
    dimension: 'CS',
    text: '代码和文档，谁先谁后？',
    difficulty: 2,
    options: {
      A: { text: '代码即文档，好的代码自己会说话，文档可以后补', value: 'C' },
      B: { text: '文档驱动开发，先写 API 文档/设计文档，再写代码', value: 'S' }
    }
  },
  {
    id: 10,
    dimension: 'CS',
    text: '如果给你一周空闲时间，你更想做什么？',
    difficulty: 1,
    options: {
      A: { text: '用一个新框架从零做一个 Side Project', value: 'C' },
      B: { text: '研究微服务架构/DDD/系统设计，输出一篇技术博客', value: 'S' }
    }
  },

  // ===== TU: Theoretical vs Utilitarian =====
  {
    id: 11,
    dimension: 'TU',
    text: '实现一个排序功能，你的做法是？',
    difficulty: 2,
    options: {
      A: { text: '手写一个快排或归并排序，注意边界条件和复杂度', value: 'T' },
      B: { text: '直接调用 Array.sort() 或 Collections.sort()，够用就行', value: 'U' }
    }
  },
  {
    id: 12,
    dimension: 'TU',
    text: '你对"设计模式"的态度是？',
    difficulty: 2,
    options: {
      A: { text: '应该深入理解每种模式的适用场景和原理，代码要体现设计之美', value: 'T' },
      B: { text: '知道几个常用的就够了，过度设计是万恶之源', value: 'U' }
    }
  },
  {
    id: 13,
    dimension: 'TU',
    text: '项目中需要一个 LRU 缓存，你会？',
    difficulty: 3,
    options: {
      A: { text: '用 LinkedHashMap 或 OrderedDict 手撸一个，顺便分析时间复杂度', value: 'T' },
      B: { text: '直接用 Redis/Guava Cache/lru-cache npm包，成熟方案更靠谱', value: 'U' }
    }
  },
  {
    id: 14,
    dimension: 'TU',
    text: '你更喜欢哪门课？',
    difficulty: 1,
    options: {
      A: { text: '算法与数据结构 / 编译原理 / 计算理论', value: 'T' },
      B: { text: '软件工程 / Web 开发 / 移动应用开发', value: 'U' }
    }
  },
  {
    id: 15,
    dimension: 'TU',
    text: '代码审查时你更关注什么？',
    difficulty: 2,
    options: {
      A: { text: '算法效率、数据结构选择、边界条件处理', value: 'T' },
      B: { text: '代码是否解决了业务需求、是否容易维护', value: 'U' }
    }
  },
  {
    id: 16,
    dimension: 'TU',
    text: '以下哪种行为更像你？',
    difficulty: 2,
    options: {
      A: { text: '为了把一个 O(n²) 优化到 O(n log n)，愿意花一整天', value: 'T' },
      B: { text: 'O(n²) 在当前数据量下完全够用，不值得优化', value: 'U' }
    }
  },
  {
    id: 17,
    dimension: 'TU',
    text: '如果项目中遇到了一个 Bug，你的做法是？',
    difficulty: 2,
    options: {
      A: { text: '从源码层面追溯根因，搞清楚底层原理后再修复', value: 'T' },
      B: { text: 'Stack Overflow 搜一下，能修就修，赶紧交付', value: 'U' }
    }
  },
  {
    id: 18,
    dimension: 'TU',
    text: '你的书架/收藏夹里更多的是？',
    difficulty: 1,
    options: {
      A: { text: '《CLRS》《SICP》《CSAPP》等经典教材', value: 'T' },
      B: { text: '《XXX 实战》《21 天学会 YYY》《ZZZ Cookbook》等实战书', value: 'U' }
    }
  },
  {
    id: 19,
    dimension: 'TU',
    text: '有人问你："为什么 HashMap 的默认容量是 16？"',
    difficulty: 3,
    options: {
      A: { text: '兴致勃勃地讲起哈希冲突、负载因子、2 的幂次取模优化', value: 'T' },
      B: { text: '"嗯...反正它能用就行，我从来没想过这个问题"', value: 'U' }
    }
  },
  {
    id: 20,
    dimension: 'TU',
    text: '选择技术栈时你更看重什么？',
    difficulty: 2,
    options: {
      A: { text: '技术本身的设计理念是否优雅，性能天花板高不高', value: 'T' },
      B: { text: '社区生态是否成熟，文档是否完善，招人是否容易', value: 'U' }
    }
  },

  // ===== IE: Independent vs Ensemble =====
  {
    id: 21,
    dimension: 'IE',
    text: '写代码时你更喜欢？',
    difficulty: 1,
    options: {
      A: { text: '戴上耳机，独自沉浸式编码，别来打扰我', value: 'I' },
      B: { text: '和队友一起讨论，结对编程效率更高', value: 'E' }
    }
  },
  {
    id: 22,
    dimension: 'IE',
    text: '遇到一个技术难题，你的第一反应？',
    difficulty: 1,
    options: {
      A: { text: '自己先查资料、读源码，实在不行再问人', value: 'I' },
      B: { text: '先在群里/频道里问一嘴，集思广益更快', value: 'E' }
    }
  },
  {
    id: 23,
    dimension: 'IE',
    text: '做课程设计/毕设时你更倾向于？',
    difficulty: 1,
    options: {
      A: { text: '一个人全部搞定，自由度高，不用迁就别人', value: 'I' },
      B: { text: '组队分工合作，各自发挥专长，一起做更有动力', value: 'E' }
    }
  },
  {
    id: 24,
    dimension: 'IE',
    text: '以下哪种开发模式更吸引你？',
    difficulty: 2,
    options: {
      A: { text: '独立开发者：自己定义产品、自己写代码、自己上线', value: 'I' },
      B: { text: '开源社区：大家一起贡献，Code Review 互相学习', value: 'E' }
    }
  },
  {
    id: 25,
    dimension: 'IE',
    text: '你理想中的工作环境？',
    difficulty: 1,
    options: {
      A: { text: '远程办公，深度工作不被打断，异步沟通为主', value: 'I' },
      B: { text: '开放式办公室，每天站会，随时面对面讨论', value: 'E' }
    }
  },
  {
    id: 26,
    dimension: 'IE',
    text: 'Git 工作流中你更喜欢？',
    difficulty: 2,
    options: {
      A: { text: '自己开个分支默默开发，完事了提 PR', value: 'I' },
      B: { text: 'trunk-based，频繁合并，保持和团队同步', value: 'E' }
    }
  },
  {
    id: 27,
    dimension: 'IE',
    text: '技术分享/写博客这件事？',
    difficulty: 1,
    options: {
      A: { text: '我更喜欢自己写笔记记录，不太爱公开分享', value: 'I' },
      B: { text: '分享才是最好的学习方式，我爱做技术分享', value: 'E' }
    }
  },
  {
    id: 28,
    dimension: 'IE',
    text: '如果你是一个微服务，你是？',
    difficulty: 3,
    options: {
      A: { text: '一个无状态的、自包含的纯函数服务，输入输出明确，不依赖外部', value: 'I' },
      B: { text: '一个事件驱动的服务，积极监听消息总线，与其他服务频繁交互', value: 'E' }
    }
  },
  {
    id: 29,
    dimension: 'IE',
    text: '学新技术时你更倾向于？',
    difficulty: 1,
    options: {
      A: { text: '自己看文档/视频，按自己的节奏学', value: 'I' },
      B: { text: '参加学习小组/训练营，有同伴一起更有动力', value: 'E' }
    }
  },
  {
    id: 30,
    dimension: 'IE',
    text: '代码出了问题，你第一时间会？',
    difficulty: 1,
    options: {
      A: { text: '打断点、看日志、加 print，自己排查到底', value: 'I' },
      B: { text: '拉个小会，共享屏幕，一起看问题出在哪', value: 'E' }
    }
  },

  // ===== RF: Rigorous vs Flexible =====
  {
    id: 31,
    dimension: 'RF',
    text: '你对代码测试的态度是？',
    difficulty: 2,
    options: {
      A: { text: '没有测试的代码不算写完，测试覆盖率要高', value: 'R' },
      B: { text: '核心路径测一测就好，100% 覆盖率不现实', value: 'F' }
    }
  },
  {
    id: 32,
    dimension: 'RF',
    text: '提交代码前你通常会？',
    difficulty: 1,
    options: {
      A: { text: '仔细检查 diff，跑一遍 lint 和测试，确认无误再提交', value: 'R' },
      B: { text: '大概看一下没啥问题就提交了，有问题再修', value: 'F' }
    }
  },
  {
    id: 33,
    dimension: 'RF',
    text: '你对 CI/CD 的态度是？',
    difficulty: 2,
    options: {
      A: { text: '必须配置完善的流水线：lint → 测试 → 构建 → 部署，缺一不可', value: 'R' },
      B: { text: '有个自动部署就行，其他的等项目成熟了再加', value: 'F' }
    }
  },
  {
    id: 34,
    dimension: 'RF',
    text: '项目中发现一个不影响核心功能的小 Bug，你会？',
    difficulty: 2,
    options: {
      A: { text: '立刻修复并补充测试用例，防止类似问题再次出现', value: 'R' },
      B: { text: '记个 TODO，等有空了再处理，先做更重要的事', value: 'F' }
    }
  },
  {
    id: 35,
    dimension: 'RF',
    text: '关于代码风格和规范？',
    difficulty: 2,
    options: {
      A: { text: '必须配置 ESLint/Prettier/EditorConfig，PR 不符合规范一律打回', value: 'R' },
      B: { text: '代码能读就行，过于严格的规范会拖慢开发速度', value: 'F' }
    }
  },
  {
    id: 36,
    dimension: 'RF',
    text: '你更认同哪种发布策略？',
    difficulty: 3,
    options: {
      A: { text: '灰度发布 + 蓝绿部署 + 回滚方案，稳妥第一', value: 'R' },
      B: { text: '直接部署到生产，有问题快速 hotfix', value: 'F' }
    }
  },
  {
    id: 37,
    dimension: 'RF',
    text: '写一个 API 接口时你会？',
    difficulty: 2,
    options: {
      A: { text: '做完善的参数校验、错误处理、日志记录、限流保护', value: 'R' },
      B: { text: '先把核心逻辑跑通，防御性代码后面再加', value: 'F' }
    }
  },
  {
    id: 38,
    dimension: 'RF',
    text: '你的 Git commit message 通常是什么风格？',
    difficulty: 1,
    options: {
      A: { text: '严格遵循 Conventional Commits：feat(auth): add JWT token refresh', value: 'R' },
      B: { text: 'fix bug / update / wip / asdfghjkl', value: 'F' }
    }
  },
  {
    id: 39,
    dimension: 'RF',
    text: '关于技术债务？',
    difficulty: 2,
    options: {
      A: { text: '必须定期清理，技术债积累到一定程度就是灾难', value: 'R' },
      B: { text: '业务优先，技术债可以容忍，等重构窗口期再处理', value: 'F' }
    }
  },
  {
    id: 40,
    dimension: 'RF',
    text: '如果你的代码是一栋建筑，它更像？',
    difficulty: 3,
    options: {
      A: { text: '德国工程：每个螺丝都经过精密计算，50 年不出问题', value: 'R' },
      B: { text: '硅谷车库：先搭起来能住人，后面再一层层翻新', value: 'F' }
    }
  }
]
