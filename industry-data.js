// industry-data.js - auto-generated
window.INDUSTRY_DATA = {
 "generated_at": "2026/10/16 12:56:41",
 "recent_days": 7,
 "industries": [
  {
   "key": "ai",
   "name": "AI / 大模型",
   "accent": "#ff5a1f",
   "total": 16,
   "items": [
    {
     "title": "The World Won't Wait: Evaluating and Teaching Agents Under a Live Clock",
     "link": "https://arxiv.org/abs/2610.20665",
     "pubDate": "Fri, 16 Oct 2026 00:00:00 -0400",
     "summary": "arXiv:2610.20665v1 Announce Type: new Abstract: Large language model (LLM) agents can solve complex interactive tasks, yet reasoning and tool calls take time. In continuously changing environments, an otherwise correct action may arrive too late. We introduce RealtimeBench, with 180 tasks across six",
     "source": "arXiv cs.AI",
     "zh": "世界不会等待：在实时时钟下评估和教学智能体"
    },
    {
     "title": "Evaluating Model Capabilities After Benchmark Saturation",
     "link": "https://arxiv.org/abs/2610.20667",
     "pubDate": "Fri, 16 Oct 2026 00:00:00 -0400",
     "summary": "arXiv:2610.20667v1 Announce Type: new Abstract: Rapid advances in AI capabilities are causing benchmarks to saturate. Once several models approach perfect scores, a benchmark loses its power to differentiate between them, and with it its utility for informing AI safety cases and frontier policies. Y",
     "source": "arXiv cs.AI",
     "zh": "基准饱和后评估模型能力"
    },
    {
     "title": "Value-Informed Schedule Trimming for Accelerated Sequential Monte Carlo Guidance in Discrete Diffusion",
     "link": "https://arxiv.org/abs/2610.20669",
     "pubDate": "Fri, 16 Oct 2026 00:00:00 -0400",
     "summary": "arXiv:2610.20669v1 Announce Type: new Abstract: Reward-guided discrete diffusion enables test-time alignment with downstream objectives, but applying Sequential Monte Carlo (SMC) guidance at every denoising step is computationally expensive. Active guidance steps require additional reward evaluation",
     "source": "arXiv cs.AI",
     "zh": "离散扩散中加速顺序蒙特卡罗指导的价值知情调度修剪"
    },
    {
     "title": "AlphaDiana: A Measurement System for Agents in Verifiable Reasoning Tasks",
     "link": "https://arxiv.org/abs/2610.20675",
     "pubDate": "Fri, 16 Oct 2026 00:00:00 -0400",
     "summary": "arXiv:2610.20675v1 Announce Type: new Abstract: Agents pair reasoning models with harnesses that organize model calls, execute tools, load skill instructions, and retain history in memory. Understanding agent performance requires linking execution conditions to outcomes, behavior, and resource use. ",
     "source": "arXiv cs.AI",
     "zh": "AlphaDiana：可验证推理任务中智能体的测量系统"
    },
    {
     "title": "When Correctness Feedback Erases Evidence: Phase-Separated Completeness Auditing in Verus",
     "link": "https://arxiv.org/abs/2610.20676",
     "pubDate": "Fri, 16 Oct 2026 00:00:00 -0400",
     "summary": "arXiv:2610.20676v1 Announce Type: new Abstract: Correctness feedback suppresses the very evidence that specification-completeness auditing is designed to uncover: programs that satisfy a written contract but violate intended behavior. We demonstrate this objective reversal on 12 Verus/Rust tasks acr",
     "source": "arXiv cs.AI",
     "zh": "当正确性反馈抹掉证据时：Verus 中的分阶段完整性审计"
    },
    {
     "title": "Counterfactual Neighborhood Risk Fields: Evidence-Grounded Selective Safety for Vision-Language Models",
     "link": "https://arxiv.org/abs/2610.20679",
     "pubDate": "Fri, 16 Oct 2026 00:00:00 -0400",
     "summary": "arXiv:2610.20679v1 Announce Type: new Abstract: Representation-based safety defenses for vision-language models (VLMs) often learn to separate harmful from benign inputs, but separation alone does not establish what a risk score means or when it should be trusted. We introduce Counterfactual Neighbo",
     "source": "arXiv cs.AI",
     "zh": "反事实邻里风险领域：视觉语言模型的循证选择性安全"
    },
    {
     "title": "Meta Releases Muse Spark Open: 816B Open-Weight MoE With 1M Context",
     "link": "https://www.marktechpost.com/2026/10/15/meta-muse-spark-open-816b-open-weight-model/",
     "pubDate": "Fri, 16 Oct 2026 02:26:04 +0000",
     "summary": "Meta released Muse Spark Open, an 816B-parameter open-weight MoE model with 42B active parameters and a 1M-token context. It leads open models on MCP-Atlas and runs on 2 M5 Ultra Mac Studios. The post Meta Releases Muse Spark Open: 816B Open-Weight MoE With 1M Context appeared first on MarkTechPost ",
     "source": "MarkTechPost",
     "zh": "Meta 发布 Muse Spark Open：具有 1M 上下文的 816B 开放式重量 MoE"
    },
    {
     "title": "Scaling Indic Pretraining: 2.8 Trillion Tokens and an Open Data Generation Pipeline",
     "link": "https://huggingface.co/blog/nvidia/scaling-indic-pretraining",
     "pubDate": "Fri, 16 Oct 2026 01:44:47 GMT",
     "summary": "",
     "source": "Hugging Face",
     "zh": "扩展 Indic 预训练：2.8 万亿代币和开放数据生成管道"
    },
    {
     "title": "刚刚，美国最强开源模型发布！放中国只能排第七？",
     "link": "https://zhidx.com/p/601572.html",
     "pubDate": "Fri, 16 Oct 2026 08:47:24 +0800",
     "summary": "智东西 编译 | 杨京丽 编辑 | 李水青 智东西10月16日消息，今天凌晨，Meta发布 开放权重模型Muse Spark Open ，总参数量达 8160亿 ，每次推理激活 420亿 参数，支持 100万Token上下文 窗口。该模型原生支持 多模态 ，主攻 编程和Agent任务 ，重点面向需要长时间执行的任务、复杂软件工程和多步推理。 Meta称，这是 迄今能力最强的美国开放权重模型 。借助最新版MLX框架，Muse Spark Open可在两台搭载苹果M5 Ultra芯片的Mac Studio上运行，将大模型编程、视频处理等Agent工作流搬到桌面端。 Meta创始人马克·扎克伯格也在",
     "source": "智东西",
     "zh": "刚刚，美国最强开源模型发布！放中国只能排第七？"
    },
    {
     "title": "When it came to Cal AI’s viral success, a small army of influencers paid off",
     "link": "https://techcrunch.com/2026/10/15/when-it-came-to-cal-ais-viral-success-a-small-army-of-influencers-paid-off/",
     "pubDate": "Thu, 15 Oct 2026 23:44:56 +0000",
     "summary": "The company generated over $30 million in revenue in two years and was acquired by MyFitnessPal for an undisclosed amount of money in March.",
     "source": "TechCrunch AI",
     "zh": "当加州人工智能病毒式成功时，一小群有影响力的人得到了回报"
    },
    {
     "title": "Granite Switch 4.1: Chat, Decisions, and Speech from One Endpoint",
     "link": "https://huggingface.co/blog/ibm-granite/granite-switch-4-1",
     "pubDate": "Thu, 15 Oct 2026 20:34:01 GMT",
     "summary": "",
     "source": "Hugging Face",
     "zh": "Granite Switch 4.1：来自一个端点的聊天、决策和语音"
    },
    {
     "title": "Meta launches an open-weight AI model that runs on Macs",
     "link": "https://techcrunch.com/2026/10/15/meta-launches-an-open-weight-model-that-runs-on-macs/",
     "pubDate": "Thu, 15 Oct 2026 20:04:53 +0000",
     "summary": "Meta and Apple have teamed up for the launch of the social media giant's newest model, Muse Spark Open, which will run locally on Apple silicon.",
     "source": "TechCrunch AI",
     "zh": "Meta 推出可在 Mac 上运行的开放权重 AI 模型"
    },
    {
     "title": "Amazon devices chief Panos Panay sees a future where AI devices replace the need to use apps",
     "link": "https://techcrunch.com/2026/10/15/amazon-devices-chief-panos-panay-sees-a-future-where-ai-devices-replace-the-need-to-use-apps/",
     "pubDate": "Thu, 15 Oct 2026 19:55:25 +0000",
     "summary": "Speaking at TechCrunch Disrupt, Amazon devices chief Panos Panay described a future where ambient AI devices work in the background, anticipating users' needs instead of waiting for commands.",
     "source": "TechCrunch AI",
     "zh": "亚马逊设备主管 Panos Panay 看到了人工智能设备取代使用应用程序的未来"
    },
    {
     "title": "NVIDIA Releases Nemotron 3.5 Super VL, a 120B Open Multimodal Agent Model",
     "link": "https://www.marktechpost.com/2026/10/15/nvidia-nemotron-3-5-super-vl-release/",
     "pubDate": "Thu, 15 Oct 2026 19:53:50 +0000",
     "summary": "NVIDIA released Nemotron 3.5 Super VL, an open 120B-parameter multimodal MoE model with 12B active parameters, 1M-token context and NVFP4 weights that run on 1 DGX Spark, plus 2 Bolt edge models. The post NVIDIA Releases Nemotron 3.5 Super VL, a 120B Open Multimodal Agent Model appeared first on Mar",
     "source": "MarkTechPost",
     "zh": "NVIDIA 发布 Nemotron 3.5 Super VL，一种 120B 开放式多模式代理模型"
    },
    {
     "title": "Anthropic is letting METR researchers look under the hood with employee-level access",
     "link": "https://techcrunch.com/2026/10/15/anthropic-is-letting-metr-researchers-look-under-the-hood-with-employee-level-access/",
     "pubDate": "Thu, 15 Oct 2026 19:14:26 +0000",
     "summary": "METR will publish its own assessments of Anthropic’s risks, incidents, and practices, and the frontier AI model maker has given up the right to block them.",
     "source": "TechCrunch AI",
     "zh": "Anthropic 让 METR 研究人员通过员工级别的访问权限了解幕后情况"
    },
    {
     "title": "Bringing GPT-Rosalind to academic research labs",
     "link": "https://openai.com/index/introducing-the-rosalind-academic-plan",
     "pubDate": "Thu, 15 Oct 2026 19:00:00 GMT",
     "summary": "Introducing the Rosalind Academic Plan, offering eligible academic labs sponsored access to GPT-Rosalind and tools to advance life sciences research.",
     "source": "OpenAI",
     "zh": "将 GPT-Rosalind 引入学术研究实验室"
    },
    {
     "title": "Bluesky expands its AI-powered Attie app to let anyone build websites, games, and more",
     "link": "https://techcrunch.com/2026/10/15/bluesky-expands-its-ai-powered-attie-app-to-let-anyone-build-websites-games-and-more/",
     "pubDate": "Thu, 15 Oct 2026 18:56:46 +0000",
     "summary": "Bluesky is bringing “social vibe coding” to its experimental Attie platform, allowing users to create interactive experiences like games, quizzes, and websites that can tap into the social network's audience.",
     "source": "TechCrunch AI",
     "zh": "Bluesky 扩展了其人工智能驱动的 Attie 应用程序，让任何人都可以构建网站、游戏等"
    },
    {
     "title": "Last chance to save up to $200 on your TechCrunch Founder Summit pass: Early booking ends October 16",
     "link": "https://techcrunch.com/2026/10/15/last-chance-to-save-up-to-200-on-techcrunch-founder-summit-early-booking-ends-oct-16/",
     "pubDate": "Thu, 15 Oct 2026 18:00:00 +0000",
     "summary": "Savings of up to $200 end October 16 for TechCrunch Founder Summit. These savings for Founder and Investor Passes vanish after Friday. Join 1,000 founders and investors on November 4 at Boston’s SoWa Power Station. Bring your toughest questions and make the day count for your business.",
     "source": "TechCrunch AI",
     "zh": "使用 TechCrunch 创始人峰会通行证节省高达 200 美元的最后机会：提前预订将于 10 月 16 日截止"
    },
    {
     "title": "Abacus AI Honest Review: Key Criticisms, Facts & What Users Should Know",
     "link": "https://www.kdnuggets.com/2026/10/abacus/abacus-ai-review-criticisms-facts-what-users-should-know",
     "pubDate": "Thu, 15 Oct 2026 17:00:59 +0000",
     "summary": "This review highlights the main critiques of Abacus AI, its price, user reviews, reliability of workflows, and real-life use cases to assist you in evaluating its advantages and disadvantages.",
     "source": "KDnuggets",
     "zh": "Abacus AI 诚实评论：主要批评、事实以及用户应该知道的内容"
    },
    {
     "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
     "link": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
     "pubDate": "Thu, 15 Oct 2026 16:08:03 +0000",
     "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
     "source": "DeepMind",
     "zh": "利用 Google Antigravity 加速抗菌肽的搜索"
    },
    {
     "title": "Anthropic三季度收入1124亿，还盈利了",
     "link": "https://zhidx.com/p/601148.html",
     "pubDate": "Thu, 15 Oct 2026 23:46:21 +0800",
     "summary": "智东西 编译 | 杨京丽 编辑 | 李水青 智东西10月15日消息，据The Information援引知情人士消息，当地时间10月14日，Anthropic在旧金山举行的潜在IPO（首次公开募股）投资者会议上披露，该公司第三季度营收达到 168亿美元（约合人民币1123.92亿元） ，环比增长约 45% ，超过2025年全年营收的 3.6倍 。 会上，Anthropic披露，其第三季度已实现调整后 盈利 ，经营性现金流为正。今年前三季度累计调整后营业利润率达到 11% ，这一指标剔除了股权激励等重大成本。此次投资者会议是Anthropic筹备IPO过程的一部分。据The Informatio",
     "source": "智东西",
     "zh": "Anthropic三季度收入1124亿，还盈利了"
    },
    {
     "title": "CopilotKit Releases CLiF: A Continual Learning Platform That Turns Agent Traces and User Actions into Skills, Evals, and Fine-Tuning Data",
     "link": "https://www.marktechpost.com/2026/10/15/copilotkit-releases-clif-a-continual-learning-platform-that-turns-agent-traces-and-user-actions-into-skills-evals-and-fine-tuning-data/",
     "pubDate": "Thu, 15 Oct 2026 14:19:27 +0000",
     "summary": "Introduction Teams shipping AI agents at scale keep running into the same pattern. Even agents built on top-tier models like Fable and Astra struggle to carry out complex, end-to-end tasks inside a specific product consistently enough to deploy. So teams grind out evals for the workflows that matter",
     "source": "MarkTechPost",
     "zh": "CopilotKit 发布 CLiF：一个持续学习平台，可将代理跟踪和用户操作转化为技能、评估和微调数据"
    },
    {
     "title": "Building AI Applications with OGX, the Open-Source Agentic API Server",
     "link": "https://www.kdnuggets.com/building-ai-applications-with-open-source-agentic-api-server-ogx",
     "pubDate": "Thu, 15 Oct 2026 14:00:00 +0000",
     "summary": "OGX is an open-source agentic API server for building OpenAI-compatible AI applications, using any model and any infrastructure.",
     "source": "KDnuggets",
     "zh": "使用开源 Agentic API 服务器 OGX 构建 AI 应用程序"
    },
    {
     "title": "OpenRouter周榜全球第二，这个国产模型终于开源了",
     "link": "https://zhidx.com/p/601405.html",
     "pubDate": "Thu, 15 Oct 2026 21:25:15 +0800",
     "summary": "智东西10月15日报道，刚刚， 一款刚登上OpenRouter Token全球使用量周榜第二的大模型，开源了！ 阶跃星辰正式开放 Step 5 Preview 的模型权重，BF16、FP8两个版本同步上线HuggingFace和ModelScope。 Hugging Face：https://huggingface.co/stepfun-ai/Step-5-Preview ModelScope：https://modelscope.cn/models/stepfun-ai/Step-5-Preview Step 5 Preview采用稀疏MoE架构， 总参数量600B、激活参数仅27B ，支持",
     "source": "智东西",
     "zh": "OpenRouter周榜全球第二，这个国产模型终于开源了"
    },
    {
     "title": "openKylin Outlines Its Vision for Reimagining Linux in the AI Era at Open Source Summit Europe 2026",
     "link": "https://www.marktechpost.com/2026/10/15/openkylin-outlines-its-vision-for-reimagining-linux-in-the-ai-era-at-open-source-summit-europe-2026/",
     "pubDate": "Thu, 15 Oct 2026 13:23:45 +0000",
     "summary": "At Open Source Summit Europe 2026, openKylin outlined its vision for transitioning from resource management to intent management in the AI era. The community introduced KART, a unified AI runtime, alongside core desktop features in openKylin 3.0 like the AI Assistant, Global Intelligent Search, and ",
     "source": "MarkTechPost",
     "zh": "openKylin 在 2026 年欧洲开源峰会上概述了在 AI 时代重新构想 Linux 的愿景"
    },
    {
     "title": "Teaching students to think and learn through questions",
     "link": "https://openai.com/index/teaching-students-to-think-and-learn-through-questions",
     "pubDate": "Thu, 15 Oct 2026 13:00:00 GMT",
     "summary": "Celebrate Teachers’ Day with AI for Educators in Brazilian Portuguese and see how Study Mode can help teachers support active, step-by-step learning.",
     "source": "OpenAI",
     "zh": "教学生通过问题思考和学习"
    },
    {
     "title": "万字深度解密：华为麒麟2026韬定律大量技术细节首披露",
     "link": "https://zhidx.com/p/600839.html",
     "pubDate": "Thu, 15 Oct 2026 20:47:41 +0800",
     "summary": "智东西 作者 | 云鹏 编辑 | 李水青 智东西10月15日报道，近日，华为在上海练秋湖畔举办了一场为期两天的深度技术沟通会，从 影像、屏幕、可靠、定位、声音5大方向9大技术 品牌，到 麒麟9050系列背后韬定律、逻辑折叠、混合键合 等海量技术细节，华为首次详细对外解读。 主讲人分别为第一天的 华为终端BG CTO李小龙， 以及第二天的 华为半导体业务无线终端芯片产品管理部部长徐松余。 值得一提的是，这也是 时隔6年，华为再次对外详细解读麒麟芯片， 其重要意义不言而喻。 两天的沟通会信息量极大，可以说干货多到爆： ·内含 300多个零部件 的影像“巨炮” Z10模块相机 如何突破光学硬件的物理",
     "source": "智东西",
     "zh": "万字深度解密：华为麒麟2026韬定律大量技术细节首披露"
    },
    {
     "title": "7 Open-Source AI Tools That Can Replace Paid Subscriptions",
     "link": "https://www.kdnuggets.com/7-open-source-ai-tools-that-can-replace-paid-subscriptions",
     "pubDate": "Thu, 15 Oct 2026 12:00:34 +0000",
     "summary": "Find open-source alternatives to OpenAI API, Midjourney, Claude Code, Notion, Wispr Flow, Grammarly, and NotebookLM that you can run locally or self-host for more privacy, control, and lower cost.",
     "source": "KDnuggets",
     "zh": "7 个可以取代付费订阅的开源人工智能工具"
    },
    {
     "title": "剑指博通，这家国产互连芯片公司藏不住了",
     "link": "https://zhidx.com/p/601291.html",
     "pubDate": "Thu, 15 Oct 2026 19:40:19 +0800",
     "summary": "智东西 作者 | 陈骏达 编辑 | 漠影 AI算力的竞争，不只发生在芯片内部，也发生在芯片与芯片之间。 一颗芯片的峰值算力再高，也不意味着数百颗、数千颗芯片组成的集群就能发挥出相应的性能。数据能否高速传输，计算、存储与网络能否高效协同，都会影响整套系统的实际表现。 随着AI集群规模愈发庞大，互连已不再只是连接硬件的配套环节，而是决定算力能否充分释放的重要一环。面临这一挑战，国产互连厂商究竟应该如何破局？ 今天，在国产互连芯片赛道深耕6年、相对低调的 无锡厂商众星微 ，在品牌及全栈产品发布会上 首次集中展示其全场景高性能互连芯片平台 。该平台围绕通用计算互连与智能计算互连展开布局，覆盖存储、网络",
     "source": "智东西",
     "zh": "剑指博通，这家国产互连芯片公司藏不住了"
    },
    {
     "title": "京东11.11：首日下单用户数同比双位数增长、超百项服务首次全景亮相",
     "link": "https://www.qbitai.com/2026/10/503645.html",
     "pubDate": "Thu, 15 Oct 2026 10:07:08 +0000",
     "summary": "京东11.11已于10月12日晚8点全面开启，首日下单用户数实现同比双位数增长。",
     "source": "量子位",
     "zh": "京东11.11：首日下单用户数同比双位数增长、超百项服务首次全景亮相"
    }
   ]
  },
  {
   "key": "semi",
   "name": "半导体 / 芯片",
   "accent": "#22d3ee",
   "total": 9,
   "items": [
    {
     "title": "DIGITIMES Insights: China's automakers pursue three humanoid robot strategies as EV supply chains offer 60% overlap",
     "link": "https://www.digitimes.com/news/a20261016PD218/china-automakers-humanoid-robot-robotics.html",
     "pubDate": "Fri, 16 Oct 2026 03:58:23 GMT",
     "summary": "Chinese automakers are accelerating their expansion into humanoid robotics, leveraging artificial intelligence (AI) technologies, electric drive systems, and supply chain resources developed through their automotive businesses, according to DIGITIMES Intelligence.",
     "source": "DIGITIMES",
     "zh": "DIGITIMES Insights：电动汽车供应链重叠 60%，中国汽车制造商推行三种人形机器人战略"
    },
    {
     "title": "Analysis: TSMC-GF deal moves mature nodes into AI packaging: What it means for China",
     "link": "https://www.digitimes.com/news/a20261016PD220/capacity-globalfoundries-packaging-tsmc-wafer.html",
     "pubDate": "Fri, 16 Oct 2026 03:53:56 GMT",
     "summary": "As global wafer capacity expands rapidly, TSMC and GlobalFoundries (GF) are highlighting a fast-growing market for mature processes serving advanced applications. In particular, demand for silicon interposers, through-silicon vias (TSVs), and embedded deep trench capacitors (eDTCs) in advanced packa",
     "source": "DIGITIMES",
     "zh": "分析：台积电-格芯交易将成熟节点转移到人工智能封装：这对中国意味着什么"
    },
    {
     "title": "LCD TV panel prices struggle to rise in 4Q26",
     "link": "https://www.digitimes.com/news/a20261016PD223/lcd-tv-panel-panel-price-tv-lcd.html",
     "pubDate": "Fri, 16 Oct 2026 03:48:26 GMT",
     "summary": "LCD TV panel prices face a tug-of-war in the fourth quarter of 2026 as panel makers push for increases while LCD TV brands maintain relatively steady purchasing and contract manufacturers remain cautious. Rising upstream material costs and continued production controls should help prices stabilize, ",
     "source": "DIGITIMES",
     "zh": "26年第四季度液晶电视面板价格艰难上涨"
    },
    {
     "title": "BOE's 24-layer glass substrates reach AI chip packaging trials, with mass production still ahead",
     "link": "https://www.digitimes.com/news/a20261016PD228/boe-packaging-production-display-ai-chip.html",
     "pubDate": "Fri, 16 Oct 2026 03:42:10 GMT",
     "summary": "Chinese display manufacturer BOE has made further progress in advanced semiconductor packaging, extending its panel manufacturing expertise to glass-core packaging substrates. At an investor relations event on October 15, BOE said it had completed the full manufacturing process for glass-core substr",
     "source": "DIGITIMES",
     "zh": "京东方24层玻璃基板进入AI芯片封装试验，量产仍遥遥领先"
    },
    {
     "title": "Taiwan's Chun Yuan Steel sees 4Q26 auto surge, expands into AI robotics",
     "link": "https://www.digitimes.com/news/a20261016PD226/taiwan-robotics-market-growth-sales.html",
     "pubDate": "Fri, 16 Oct 2026 03:36:33 GMT",
     "summary": "Chun Yuan Steel expects Taiwan's auto market to deliver its strongest quarter of 2026 in the final three months, lifting full-year new-vehicle sales to 430,000 units from 411,000 in 2025. The steel processor also anticipates fresh growth opportunities as Kuozui Motors begins exporting finished vehic",
     "source": "DIGITIMES",
     "zh": "台湾春源钢铁预计第四季度汽车业务激增，进军人工智能机器人领域"
    },
    {
     "title": "Charts: YMTC bets on premium eSSDs to take on Samsung",
     "link": "https://www.digitimes.com/news/a20261016PD206/demand-nand-market-ymtc-samsung.html",
     "pubDate": "Fri, 16 Oct 2026 03:26:45 GMT",
     "summary": "AI-driven NAND demand is entering a supercycle, positioning Yangtze Memory Technologies Co. (YMTC) as the fastest-growing memory supplier. According to Counterpoint Technology Market Research, YMTC's revenue in 2026 is projected to grow six times faster than that of the overall industry and its peer",
     "source": "DIGITIMES",
     "zh": "图表：长江存储押注高端 eSSD 与三星较量"
    },
    {
     "title": "Tesla Models Y and 3 Dominate",
     "link": "https://www.electronicsweekly.com/news/business/tesla-models-y-and-3-dominate-2026-10/",
     "pubDate": "Fri, 16 Oct 2026 00:00:24 +0000",
     "summary": "Sales figures from CleanTechnica show that most of Tesla’s revenues are coming from Models 3 and Y, The two newer models are widely regarded as Tesla’s mass market cars […] The post Tesla Models Y and 3 Dominate appeared first on Electronics Weekly .",
     "source": "Electronics Weekly",
     "zh": "特斯拉 Y 型和 3 型占据主导地位"
    },
    {
     "title": "Japan Offers GlobalFoundries $21B for U.S. Fab Expansion",
     "link": "https://www.eetimes.com/japan-offers-globalfoundries-21b-for-u-s-fab-expansion/",
     "pubDate": "Thu, 15 Oct 2026 19:00:00 +0000",
     "summary": "Japan’s $21B offer to GlobalFoundries would add two New York fabs and lift U.S. chip capacity 10%; see why analysts warn on state support. The post Japan Offers GlobalFoundries $21B for U.S. Fab Expansion appeared first on EE Times .",
     "source": "EE Times",
     "zh": "日本向 GlobalFoundries 提供 21B 美元用于美国晶圆厂扩建"
    },
    {
     "title": "Design the Right Chip: Why Prototyping Has to Be Easy",
     "link": "https://semiwiki.com/prototyping/s2c-eda/374637-design-the-right-chip-why-prototyping-has-to-be-easy/",
     "pubDate": "Thu, 15 Oct 2026 17:00:53 +0000",
     "summary": "Design the right chip. Design the chip right. Every verification methodology in mainstream use answers the second half of that sentence and assumes the first. Simulation, emulation, formal, constrained-random testbenches, coverage closure — all of them take a specification as given and ask whether t",
     "source": "SemiWiki",
     "zh": "设计合适的芯片：为什么原型设计必须简单"
    },
    {
     "title": "Why Semiconductor AI Starts with Data, Not Algorithms",
     "link": "https://semiwiki.com/semiconductor-manufacturers/374900-why-semiconductor-ai-starts-with-data-not-algorithms/",
     "pubDate": "Thu, 15 Oct 2026 15:00:29 +0000",
     "summary": "The next gains from AI in semiconductors will come less from models and more from making fab and test data reliable, connected and tied to engineering decisions. By Sriram Nithin Gopal Lanka Every few months there is a new AI model that can do more and semiconductor manufacturers are under pressure ",
     "source": "SemiWiki",
     "zh": "为什么半导体人工智能从数据开始，而不是算法"
    },
    {
     "title": "Can a Radioactive Ore Break China’s Grip on Rare Earths?",
     "link": "https://spectrum.ieee.org/monazite-rare-earth",
     "pubDate": "Thu, 15 Oct 2026 14:53:02 +0000",
     "summary": "The global campaigns to break China’s dominance of vital rare-earth markets are shaping up into one of the signature geostrategic struggles of the early 21st century. Hundreds of mining companies, government agencies, and industrial facilities scattered across North America, Australasia, and Europe ",
     "source": "IEEE Spectrum 半导体",
     "zh": "放射性矿石能否打破中国对稀土的控制？"
    },
    {
     "title": "XMax to acquire 1200V vertical GaN power semiconductor developer Hexa Creation",
     "link": "https://semiconductor-today.com/news_items/2026/oct/xmax-hexacreation-151026.shtml",
     "pubDate": "Thu, 15 Oct 2026 15:37:20 +0100",
     "summary": "XMax Inc of Commerce, CA, USA (formerly Nova LifeStyle Inc) — which designs, sources and distributes contemporary furniture but has diversified to also developing and providing artificial intelligence software and platform-based services — has agreed to acquire Hexa Creation Inc, a US-based company ",
     "source": "Semiconductor Today",
     "zh": "XMax将收购1200V垂直GaN功率半导体开发商Hexa Creation"
    },
    {
     "title": "Data Orchestration: The Foundation for the Next-generation Semiconductor Enterprise",
     "link": "https://www.eetimes.com/data-orchestration-the-foundation-for-the-next-generation-semiconductor-enterprise/",
     "pubDate": "Thu, 15 Oct 2026 14:00:00 +0000",
     "summary": "Data orchestration gives semiconductor engineering teams a practical way to unify disconnected equipment, systems, and data without replacing existing infrastructure. By creating a connected execution layer across engineering, OT, IT, facilities, and production environments, the solution contextuali",
     "source": "EE Times",
     "zh": "数据编排：下一代半导体企业的基础"
    },
    {
     "title": "Fable: The Commonsense CEO",
     "link": "https://www.electronicsweekly.com/blogs/mannerisms/fable/fable-the-commonsense-ceo-2026-10/",
     "pubDate": "Thu, 15 Oct 2026 13:23:11 +0000",
     "summary": "There was once a mega-company which was in trouble – its market cap of $96 billion was down 80% from its value 18 years earlier. It had made an annual […] The post Fable: The Commonsense CEO appeared first on Electronics Weekly .",
     "source": "Electronics Weekly",
     "zh": "寓言：常识性的首席执行官"
    },
    {
     "title": "Why AI Security Starts at the Chip Level",
     "link": "https://semiwiki.com/eda/synopsys/374743-why-ai-security-starts-at-the-chip-level/",
     "pubDate": "Thu, 15 Oct 2026 13:00:07 +0000",
     "summary": "Artificial intelligence is becoming part of the infrastructure that powers healthcare, transportation, finance, manufacturing, and everyday digital services. As these systems grow more capable, they also process more sensitive information and depend on increasingly complex hardware. The Synopsys whi",
     "source": "SemiWiki",
     "zh": "为什么人工智能安全从芯片级开始"
    },
    {
     "title": "HUSB237: The Cost-Effective PD Sink with Just 2 Passives",
     "link": "https://www.eetimes.com/husb237-the-cost-effective-pd-sink-with-just-2-passives/",
     "pubDate": "Thu, 15 Oct 2026 13:00:00 +0000",
     "summary": "Discover Hynetek’s HUSB237, a compact USB-PD sink controller enabling firmware-free USB-C upgrades up to 100W with only two external components. The post HUSB237: The Cost-Effective PD Sink with Just 2 Passives appeared first on EE Times .",
     "source": "EE Times",
     "zh": "HUSB237：只需 2 个无源器件的经济高效 PD 接收器"
    },
    {
     "title": "HEADS UP – Dstl trialling safe usage of head-mounted military technology",
     "link": "https://www.electronicsweekly.com/news/research-news/heads-up-dstl-trialling-safe-usage-of-head-mounted-military-technology-2026-10/",
     "pubDate": "Thu, 15 Oct 2026 11:02:02 +0000",
     "summary": "The UK’s Defence Science and Technology Laboratory (Dstl) has been trialling – in a HEADS UP project – a human-centred design approach to novel technologies that are worn or carried. […] The post HEADS UP – Dstl trialling safe usage of head-mounted military technology appeared first on Electronics W",
     "source": "Electronics Weekly",
     "zh": "注意——Dstl 试验头戴式军事技术的安全使用"
    },
    {
     "title": "Beyond software patching: how CHERI can limit the blast radius in long-life CNI systems",
     "link": "https://www.electronicsweekly.com/news/business/beyond-software-patching-how-cheri-can-limit-the-blast-radius-in-long-life-cni-systems-2026-10/",
     "pubDate": "Thu, 15 Oct 2026 11:00:53 +0000",
     "summary": "Critical National Infrastructure (CNI) products may remain in service for 10 or even 20 years. During that time software changes, attack techniques evolve and regulation becomes more demanding, writes Jim […] The post Beyond software patching: how CHERI can limit the blast radius in long-life CNI sy",
     "source": "Electronics Weekly",
     "zh": "超越软件补丁：CHERI 如何限制长寿命 CNI 系统的爆炸半径"
    },
    {
     "title": "Small Volumes, Big Impact: Europe’s Hidden Role in Advanced Chipmaking",
     "link": "https://www.eetimes.com/small-volumes-big-impact-europes-hidden-role-in-advanced-chipmaking/",
     "pubDate": "Thu, 15 Oct 2026 10:54:08 +0000",
     "summary": "A Fraunhofer–IMS Nanofabrication partnership illustrates how Europe's low-volume semiconductor manufacturing can support the world's most advanced chipmaking. The post Small Volumes, Big Impact: Europe’s Hidden Role in Advanced Chipmaking appeared first on EE Times .",
     "source": "EE Times",
     "zh": "小批量，大影响：欧洲在先进芯片制造中的隐秘角色"
    },
    {
     "title": "TSMC has $47bn revenue Q3",
     "link": "https://www.electronicsweekly.com/news/business/tsmc-has-47bn-revenue-q3-2026-10/",
     "pubDate": "Thu, 15 Oct 2026 10:08:57 +0000",
     "summary": "TSMC reported Q3 revenues up 41.2% YoY and 17.2% QoQ at $46.72 billion Gross margin for the quarter was 66.4%, operating margin was 58.7%, and net profit margin was 51.1%. […] The post TSMC has $47bn revenue Q3 appeared first on Electronics Weekly .",
     "source": "Electronics Weekly",
     "zh": "台积电第三季度营收470亿美元"
    },
    {
     "title": "UK Space Agency backs UK ADR mission for space debris removal",
     "link": "https://www.electronicsweekly.com/news/uk-space-agency-backs-uk-adr-mission-for-space-debris-removal-2026-10/",
     "pubDate": "Thu, 15 Oct 2026 10:01:03 +0000",
     "summary": "The UK Space Agency (UKSA) is backing an Active Debris Removal (ADR) mission to remove two defunct satellites and release them lower into the atmosphere where they will naturally burn […] The post UK Space Agency backs UK ADR mission for space debris removal appeared first on Electronics Weekly .",
     "source": "Electronics Weekly",
     "zh": "英国航天局支持英国 ADR 清除空间碎片任务"
    },
    {
     "title": "onsemi’s EliteSiC hybrid power module technology used in Sungrow’s PowerTitan 3.0 energy storage platform",
     "link": "https://semiconductor-today.com/news_items/2026/oct/onsemi-151026.shtml",
     "pubDate": "Thu, 15 Oct 2026 10:36:20 +0100",
     "summary": "Intelligent power and sensing technology firm onsemi of Scottsdale, AZ, USA says that its latest EliteSiC silicon carbide (SiC) hybrid power module technology has been adopted by renewable energy technology firm Sungrow for its PowerTitan 3.0 energy storage platform. The integration enables improved",
     "source": "Semiconductor Today",
     "zh": "安森美EliteSiC混合功率模块技术应用于阳光电源PowerTitan 3.0储能平台"
    },
    {
     "title": "Microchip adds radiation-tolerant GaN point-of-load converter to space power portfolio",
     "link": "https://semiconductor-today.com/news_items/2026/oct/microchip-151026.shtml",
     "pubDate": "Thu, 15 Oct 2026 09:15:34 +0100",
     "summary": "Microchip Technology Inc of Chandler, AZ, USA has launched the POL-05-20S-T, a radiation-tolerant point-of-load (POL) converter, designed to address the demanding power requirements of space processing applications. The new device uses gallium nitride (GaN) power devices to deliver up to 20A of outp",
     "source": "Semiconductor Today",
     "zh": "Microchip 为航天电源产品组合添加耐辐射 GaN 负载点转换器"
    },
    {
     "title": "Grid Modernization’s Hidden Cost: A Growing Attack Surface Few Are Watching",
     "link": "https://www.eetimes.com/grid-modernization-hidden-cost-a-growing-attack-surface-few-are-watching/",
     "pubDate": "Thu, 15 Oct 2026 08:00:00 +0000",
     "summary": "Grid modernization is expanding the energy sector’s cyberattack surface, while limited visibility across IT and OT networks leaves connected assets exposed. The post Grid Modernization’s Hidden Cost: A Growing Attack Surface Few Are Watching appeared first on EE Times .",
     "source": "EE Times",
     "zh": "电网现代化的隐性成本：很少有人关注的不断增长的攻击面"
    },
    {
     "title": "Beyond The Specification: What Really Determines PCIe Retimer Reach?",
     "link": "https://semiengineering.com/beyond-the-specification-what-really-determines-pcie-retimer-reach/",
     "pubDate": "Thu, 15 Oct 2026 07:07:45 +0000",
     "summary": "Multiple interacting factors span silicon design, controller intelligence, channel quality, and the transmission medium itself. The post Beyond The Specification: What Really Determines PCIe Retimer Reach? appeared first on Semiconductor Engineering .",
     "source": "Semiconductor Engineering",
     "zh": "超越规范：什么真正决定 PCIe 重定时器的范围？"
    },
    {
     "title": "Strengthening Advanced-Node Interconnects Through Automated Via Insertion",
     "link": "https://semiengineering.com/strengthening-advanced-node-interconnects-through-automated-via-insertion/",
     "pubDate": "Thu, 15 Oct 2026 07:06:02 +0000",
     "summary": "Short-resilient via insertion improves reliability and performance. The post Strengthening Advanced-Node Interconnects Through Automated Via Insertion appeared first on Semiconductor Engineering .",
     "source": "Semiconductor Engineering",
     "zh": "通过自动过孔插入加强高级节点互连"
    },
    {
     "title": "Building AI Infrastructure For Greater Choice And Flexibility",
     "link": "https://semiengineering.com/building-ai-infrastructure-for-greater-choice-and-flexibility/",
     "pubDate": "Thu, 15 Oct 2026 07:03:05 +0000",
     "summary": "Open interfaces and interoperability allow designers to choose technologies based on the needs of the system. The post Building AI Infrastructure For Greater Choice And Flexibility appeared first on Semiconductor Engineering .",
     "source": "Semiconductor Engineering",
     "zh": "构建人工智能基础设施以获得更多选择和灵活性"
    },
    {
     "title": "AMBA C2C: Moving Forward With A Converged AMBA Foundation For C2C Connectivity",
     "link": "https://semiengineering.com/amba-c2c-moving-forward-with-a-converged-amba-foundation-for-c2c-connectivity/",
     "pubDate": "Thu, 15 Oct 2026 07:02:37 +0000",
     "summary": "Extending chiplet connectivity across AXI and CHI with scalable protocol subsets, interoperability, and flexible transport support. The post AMBA C2C: Moving Forward With A Converged AMBA Foundation For C2C Connectivity appeared first on Semiconductor Engineering .",
     "source": "Semiconductor Engineering",
     "zh": "AMBA C2C：通过 C2C 连接的融合 AMBA 基础向前迈进"
    },
    {
     "title": "Why Open-Weight AI Matters",
     "link": "https://semiengineering.com/why-open-weight-ai-matters/",
     "pubDate": "Thu, 15 Oct 2026 07:02:13 +0000",
     "summary": "Proprietary models still hold the edge, but open-weight models add more flexibility for deploying AI. The post Why Open-Weight AI Matters appeared first on Semiconductor Engineering .",
     "source": "Semiconductor Engineering",
     "zh": "为什么开放式重量人工智能很重要"
    },
    {
     "title": "Agentic AI Alters The CPU-GPU Balance",
     "link": "https://semiengineering.com/agentic-ai-alters-the-cpu-gpu-balance/",
     "pubDate": "Thu, 15 Oct 2026 07:01:24 +0000",
     "summary": "Agentic workloads increase CPU demand, while reasoning models, MoE architectures, and reservoir computing fuel AI acceleration. The post Agentic AI Alters The CPU-GPU Balance appeared first on Semiconductor Engineering .",
     "source": "Semiconductor Engineering",
     "zh": "代理 AI 改变 CPU-GPU 平衡"
    }
   ]
  },
  {
   "key": "robot",
   "name": "机器人 / 自动化",
   "accent": "#14b8a6",
   "total": 5,
   "items": [
    {
     "title": "Best Application Security Platforms for Smart Manufacturing Software",
     "link": "https://roboticsandautomationnews.com/2026/10/15/best-application-security-platforms-for-smart-manufacturing-software/105985/",
     "pubDate": "Thu, 15 Oct 2026 21:48:11 +0000",
     "summary": "A dashboard shows a temperature spike. That number came from somewhere. An API picked it up. A service moved it along. A query pulled it out of storage. One weak spot anywhere in that chain and the reading can lie. The tools in this article look at the software that builds those chains. Not the […]",
     "source": "Robotics & Automation",
     "zh": "智能制造软件的最佳应用安全平台"
    },
    {
     "title": "Best SAST Tools for Python and Java Automation Backends",
     "link": "https://roboticsandautomationnews.com/2026/10/15/best-sast-tools-for-python-and-java-automation-backends/105982/",
     "pubDate": "Thu, 15 Oct 2026 21:30:06 +0000",
     "summary": "The movement of a robot arm occurs after a signal is sent out by the controller. But there is another world beyond the controller. There are Python services that queue up tasks. There are Java backends responding to API requests. Modules are passing around data. Bugs live there too. A weak validator",
     "source": "Robotics & Automation",
     "zh": "适用于 Python 和 Java 自动化后端的最佳 SAST 工具"
    },
    {
     "title": "Best SCA Tools for Open-Source Risk in Industrial Software",
     "link": "https://roboticsandautomationnews.com/2026/10/15/best-sca-tools-for-open-source-risk-in-industrial-software/105978/",
     "pubDate": "Thu, 15 Oct 2026 20:36:35 +0000",
     "summary": "Industrial software incorporates existing libraries and external dependencies to streamline development. These components power manufacturing applications, industrial control systems, and other solutions. However, you might need to address security weaknesses and licensing violations in industrial s",
     "source": "Robotics & Automation",
     "zh": "针对工业软件开源风险的最佳 SCA 工具"
    },
    {
     "title": "From Brief to Working Platform: Top Companies Providing Energy Data Platform Development Services",
     "link": "https://roboticsandautomationnews.com/2026/10/15/from-brief-to-working-platform-top-companies-providing-energy-data-platform-development-services/105974/",
     "pubDate": "Thu, 15 Oct 2026 19:45:12 +0000",
     "summary": "Renewables made up 85.6% of all new power capacity added worldwide in 2025, according to the International Renewable Energy Agency’s Renewable Capacity Statistics 2026. Each new solar park, wind farm, and battery site adds another stream of operational data. Energy companies turn those streams into ",
     "source": "Robotics & Automation",
     "zh": "从简介到工作平台：提供能源数据平台开发服务的顶级公司"
    },
    {
     "title": "Ideals VDR Review: Features, Pricing, and Use Cases",
     "link": "https://roboticsandautomationnews.com/2026/10/15/ideals-vdr-review-features-pricing-and-use-cases/105969/",
     "pubDate": "Thu, 15 Oct 2026 18:45:25 +0000",
     "summary": "Virtual data rooms are designed for business processes where confidential documents must be shared with multiple internal and external parties under controlled access. M&A due diligence is the best-known example, but VDRs are also used for fundraising, audits, restructuring, real estate transactions",
     "source": "Robotics & Automation",
     "zh": "Ideals VDR 评论：功能、定价和用例"
    },
    {
     "title": "Closing the Loop: How Automated Plants Turn Wastewater into Process Water",
     "link": "https://roboticsandautomationnews.com/2026/10/15/closing-the-loop-how-automated-plants-turn-wastewater-into-process-water/105965/",
     "pubDate": "Thu, 15 Oct 2026 18:30:21 +0000",
     "summary": "Water is the utility most automation projects overlook. A plant that has instrumented every conveyor, robot cell and packaging line still sends its rinse water, cooling tower blowdown and process effluent to drain, then buys fresh water to replace it. Industrial water reuse changes that. Treated eff",
     "source": "Robotics & Automation",
     "zh": "闭环：自动化工厂如何将废水转化为工艺用水"
    },
    {
     "title": "Stryker invests $400M into CMR Surgical",
     "link": "https://www.therobotreport.com/stryker-invests-400m-into-cmr-surgical/",
     "pubDate": "Thu, 15 Oct 2026 16:54:14 +0000",
     "summary": "Stryker plans to serve as the exclusive sales agent in the U.S. for the Versius robotics portfolio from CMR Surgical. The post Stryker invests $400M into CMR Surgical appeared first on The Robot Report .",
     "source": "The Robot Report",
     "zh": "Stryker 向 CMR Surgical 投资 4 亿美元"
    },
    {
     "title": "How ADI is helping robotics startups scale",
     "link": "https://www.therobotreport.com/how-adi-is-helping-robotics-startups-scale-2/",
     "pubDate": "Thu, 15 Oct 2026 16:39:38 +0000",
     "summary": "Robotics businesses need help keeping up with innovations as they scale. Analog Devices Inc. or ADI is offering its Emerging Tech Hub. The post How ADI is helping robotics startups scale appeared first on The Robot Report .",
     "source": "The Robot Report",
     "zh": "ADI 如何帮助机器人初创公司扩大规模"
    },
    {
     "title": "Agility chooses Nyobolt for ultra-fast charging for Digit 5 humanoid",
     "link": "https://www.therobotreport.com/agility-robotics-chooses-nyobolt-ultra-fast-charging-digit-5-humanoid/",
     "pubDate": "Thu, 15 Oct 2026 10:59:24 +0000",
     "summary": "Nyobolt is providing power technology for Digit 5 that enables Agility's humanoid to work up to 20 hours a day. The post Agility chooses Nyobolt for ultra-fast charging for Digit 5 humanoid appeared first on The Robot Report .",
     "source": "The Robot Report",
     "zh": "Agility 选择 Nyobolt 为 Digit 5 人形机器人进行超快速充电"
    },
    {
     "title": "RoboBusiness 2026 panel to discuss reshoring with robots",
     "link": "https://www.therobotreport.com/robobusiness-2026-panel-discusses-reshoring-with-robots/",
     "pubDate": "Wed, 14 Oct 2026 15:08:59 +0000",
     "summary": "While reshoring manufacturing is a high priority for policymakers and technologists, RoboBusiness panelists will examine how to promote it. The post RoboBusiness 2026 panel to discuss reshoring with robots appeared first on The Robot Report .",
     "source": "The Robot Report",
     "zh": "RoboBusiness 2026 小组讨论机器人回流"
    },
    {
     "title": "Timken Precision Drives puts the motion challenge first in humanoid robots",
     "link": "https://www.therobotreport.com/timken-precision-drives-puts-motion-challenge-first-humanoid-robots/",
     "pubDate": "Wed, 14 Oct 2026 12:20:19 +0000",
     "summary": "Timken combines the expertise of Cone Drive, SPINEA, CGI Motion, and Timken Encoders to develop application-specific motion systems. The post Timken Precision Drives puts the motion challenge first in humanoid robots appeared first on The Robot Report .",
     "source": "The Robot Report",
     "zh": "铁姆肯公司精密传动将运动挑战放在人形机器人的首位"
    },
    {
     "title": "Neurosymbolic planning using natural language communication for cooperative autonomous vehicles",
     "link": "https://robohub.org/neurosymbolic-planning-using-natural-language-communication-for-cooperative-autonomous-vehicles/",
     "pubDate": "Wed, 14 Oct 2026 09:14:30 +0000",
     "summary": "Imagine you are driving toward an intersection. A truck parked on the corner blocks your view of a car speeding toward the intersection from the right. You can’t see it, but the car next to you can. What if that neighboring vehicle could simply tell your car, “Vehicle merging from the right, about 1",
     "source": "Robohub",
     "zh": "使用自然语言通信进行协作自动驾驶车辆的神经符号规划"
    },
    {
     "title": "NYSOFA expands partnership with Intuition Robotics to bring ElliQ to more seniors",
     "link": "https://www.therobotreport.com/nysofa-expands-partnership-intuition-robotics-bring-elliq-more-seniors/",
     "pubDate": "Tue, 13 Oct 2026 23:22:05 +0000",
     "summary": "With the expansion, NYSOFA and Intuition Robotics established a new three-year, $2.1 million agreement to keep rolling out ElliQ. The post NYSOFA expands partnership with Intuition Robotics to bring ElliQ to more seniors appeared first on The Robot Report .",
     "source": "The Robot Report",
     "zh": "NYSOFA 扩大与 Intuition Robotics 的合作伙伴关系，将 ElliQ 带给更多老年人"
    },
    {
     "title": "Q&A: Mars Perseverance Rover Sets a Distance Record",
     "link": "https://spectrum.ieee.org/mars-rover-distance-record",
     "pubDate": "Tue, 13 Oct 2026 15:02:04 +0000",
     "summary": "On 11 October , the Perseverance rover completed a drive that brought its total distance traveled on Mars to 28.10 miles (45.22 kilometers). This is a new record for Mars rovers, enabled in large part by Perseverance ’s ability to drive with much more autonomy than its predecessors. Over the past fi",
     "source": "IEEE Spectrum 机器人",
     "zh": "问答：毅力号火星车创下距离记录"
    },
    {
     "title": "Humanoid robots can sprint and box – but the real test is doing the laundry",
     "link": "https://robohub.org/humanoid-robots-can-sprint-and-box-but-the-real-test-is-doing-the-laundry/",
     "pubDate": "Mon, 12 Oct 2026 07:51:21 +0000",
     "summary": "By Wai-keung Fung, Cardiff Metropolitan University At the recent World Humanoid Robot Games 2026 in Beijing, robots sprinted, boxed, played football and tackled tasks inspired by factories, restaurants and emergency situations. The robot Tiangong Ultra even completed the 100 metres in 8.64 seconds, ",
     "source": "Robohub",
     "zh": "人形机器人可以短跑和拳击——但真正的考验是洗衣服"
    },
    {
     "title": "Video Friday: Robot Decommissioning Takes a Fun Turn",
     "link": "https://spectrum.ieee.org/video-friday-reachy-mini-raps",
     "pubDate": "Fri, 09 Oct 2026 15:30:02 +0000",
     "summary": "Video Friday is your weekly selection of awesome robotics videos, collected by your friends at IEEE Spectrum robotics. We also post a weekly calendar of upcoming robotics events for the next few months. Please send us your events for inclusion. CoRL 2026 : 9–12 November 2026, AUSTIN Humanoids 2026 :",
     "source": "IEEE Spectrum 机器人",
     "zh": "周五视频：机器人退役发生了有趣的转变"
    },
    {
     "title": "Robot Talk Episode 165 – Robots behind the research, with Kushant Patel",
     "link": "https://robohub.org/robot-talk-episode-165-robots-behind-the-research-with-kushant-patel/",
     "pubDate": "Fri, 09 Oct 2026 11:52:18 +0000",
     "summary": "Claire chatted to Kushant Patel from Brookhaven National Laboratory about robots that work in scientific facilities, such as particle accelerators. Kushant Patel builds software that helps robots and instruments perceive, map, and move through the physical world. After completing a Master’s in Mecha",
     "source": "Robohub",
     "zh": "机器人谈话第 165 集 – 研究背后的机器人，与 Kushant Patel"
    }
   ]
  },
  {
   "key": "auto",
   "name": "汽车 / 新能源车",
   "accent": "#fb7185",
   "total": 5,
   "items": [
    {
     "title": "BYD picks local assembly partner in Malaysia to advance EV production",
     "link": "https://cnevpost.com/2026/10/16/byd-picks-ckd-assembly-partner-malaysia/",
     "pubDate": "Fri, 16 Oct 2026 04:18:35 +0000",
     "summary": "BYD will use existing manufacturing capacity at Sime Darby's Inokom, with models and production timing yet to be announced. For details, please visit CnEVPost (cnev.co).",
     "source": "CnEVPost",
     "zh": "比亚迪选择马来西亚当地组装合作伙伴来推进电动汽车生产"
    },
    {
     "title": "Are Tesla’s claims for its new ‘flying’ Roadster real, or is it just full of cold gas?",
     "link": "https://electrek.co/2026/10/15/an-updated-technical-look-at-teslas-kick-flipping-0-60-in-1s-next-gen-roadster/",
     "pubDate": "Fri, 16 Oct 2026 03:36:34 +0000",
     "summary": "Tesla has finally re-unveiled its next-generation Roadster , originally unveiled in quite different form back in 2017. So since I did a technical breakdown of how it would work last time, I thought I’d give a quick update with what we know about the new version. more…",
     "source": "Electrek",
     "zh": "特斯拉对其新型“飞行”Roadster 的宣称是真实的，还是只是充满了冰冷的汽油？"
    },
    {
     "title": "Want The Flying Version Of The Tesla Roadster? You'll Need An Invite",
     "link": "https://insideevs.com/news/812156/tesla-roadster-thrusters/",
     "pubDate": "Fri, 16 Oct 2026 02:41:09 +0000",
     "summary": "The base version won't come with any thrusters. And the top-shelf \"Rocket\" version is available by invitation only.",
     "source": "InsideEVs",
     "zh": "想要飞行版特斯拉跑车吗？您需要邀请"
    },
    {
     "title": "JAC shares rebound by daily limit as Maextro V800 brake controversy faces joint probe",
     "link": "https://cnevpost.com/2026/10/16/jac-shares-rebound-as-maextro-v800-brake-probe/",
     "pubDate": "Fri, 16 Oct 2026 02:34:37 +0000",
     "summary": "JAC rose 9.98% at the time of writing, after falling 22.37% from the open on October 8 to the close on October 15. For details, please visit CnEVPost (cnev.co).",
     "source": "CnEVPost",
     "zh": "Maextro V800刹车风波面临联合调查 江淮股价涨停"
    },
    {
     "title": "Will The Flying Tesla Roadster Be Street Legal? Elon Musk Won't Say",
     "link": "https://insideevs.com/news/812154/tesla-roadster-street-legal-elon-musk/",
     "pubDate": "Fri, 16 Oct 2026 02:16:17 +0000",
     "summary": "During the Tesla Roadster reveal on Thursday, Tesla's CEO was cagey about whether it would actually be legal to drive on public roads.",
     "source": "InsideEVs",
     "zh": "飞行的特斯拉跑车可以合法上路吗？埃隆·马斯克不会说"
    },
    {
     "title": "Here Are All Of The Crazy Tricks The Tesla Roadster Just Did",
     "link": "https://insideevs.com/news/812152/tesla-roadster-backflip-suction-2g/",
     "pubDate": "Fri, 16 Oct 2026 02:00:36 +0000",
     "summary": "The Roadster also leapt over Tesla's entire lineup, including the 13.5-foot-tall Semi.",
     "source": "InsideEVs",
     "zh": "这是特斯拉跑车刚刚做过的所有疯狂技巧"
    },
    {
     "title": "Tesla unveils Cyberfied new Roadster that can kickflip",
     "link": "https://electrek.co/2026/10/15/tesla-unveils-cyberfied-new-roadster-kickflip/",
     "pubDate": "Fri, 16 Oct 2026 01:43:32 +0000",
     "summary": "Tesla has unveiled a new version of its next-generation Roadster. As expected, it received Tesla’s latest design “cyberfication” and cold-gas thrusters to allow it to jump and flip through the air. The livestream featured impressive stunts but offered few details. Tesla released more information on ",
     "source": "Electrek",
     "zh": "特斯拉推出 Cyber​​fied 新款 Roadster 可以踢腿"
    },
    {
     "title": "Tesla reveals SpaceX-powered Roadster that flies and falls with style",
     "link": "https://techcrunch.com/2026/10/15/tesla-reveals-spacex-powered-roadster-that-flies-and-falls-with-style/",
     "pubDate": "Fri, 16 Oct 2026 01:17:43 +0000",
     "summary": "The new car used thrusters to leap over a Cybercab, Cybertruck, Tesla Semi, Model Y, and Model 3 at a demo in Texas.",
     "source": "TechCrunch Transport",
     "zh": "特斯拉推出由 SpaceX 驱动的 Roadster，飞行和降落都很有风格"
    },
    {
     "title": "Tesla Just Revealed The Roadster With A Truly Insane Demo. Here's What You Need To Know",
     "link": "https://insideevs.com/news/812151/2027-tesla-roadster-price-specs-release-date/",
     "pubDate": "Fri, 16 Oct 2026 01:17:24 +0000",
     "summary": "The new Roadster can jump over a Semi truck and do 0-60 in 0.81 seconds, Tesla claims. But it's not actually available yet.",
     "source": "InsideEVs",
     "zh": "特斯拉刚刚通过真正疯狂的演示展示了这款跑车。这是您需要知道的"
    },
    {
     "title": "Alef welcomes Tesla to the electric flying car race by flying over the Roadster [Video]",
     "link": "https://electrek.co/2026/10/15/alefs-electric-flying-car-flies-over-tesla-roadster-video/",
     "pubDate": "Fri, 16 Oct 2026 01:00:00 +0000",
     "summary": "Until the Tesla Roadster, “there was only one car in the flying car market,” Alef said. To welcome Tesla to the race, Alef released a video of its flying car flying over the new Roadster. more…",
     "source": "Electrek",
     "zh": "阿勒夫飞过 Roadster，欢迎特斯拉参加电动飞行汽车比赛 [视频]"
    },
    {
     "title": "Chery Is Bringing Its Land Rover Lookalike To The UK",
     "link": "https://insideevs.com/news/812130/chery-land-rover-lookalike-uk/",
     "pubDate": "Fri, 16 Oct 2026 00:53:38 +0000",
     "summary": "Will it be able to convince Brits to ditch their Defender?",
     "source": "InsideEVs",
     "zh": "奇瑞将把类似路虎的汽车带到英国"
    },
    {
     "title": "Europe’s EV sales soar as North America drops 44% – here’s the catch",
     "link": "https://electrek.co/2026/10/15/europes-ev-sales-soar-as-north-america-drops-44-heres-the-catch/",
     "pubDate": "Thu, 15 Oct 2026 23:01:00 +0000",
     "summary": "Europe’s EV sales just posted a record September, as global market growth shifts toward Europe and beyond its largest established markets. more…",
     "source": "Electrek",
     "zh": "欧洲电动汽车销量飙升，而北美销量却下降 44%——问题就在这里"
    },
    {
     "title": "Company that put gas engines in Teslas goes bankrupt owing $37 million",
     "link": "https://electrek.co/2026/10/15/obrist-hyperhybrid-gas-engine-tesla-bankruptcy/",
     "pubDate": "Thu, 15 Oct 2026 21:26:12 +0000",
     "summary": "Obrist, the Austrian engineering firm famous for ripping battery cells out of a Tesla Model 3 and bolting a gas engine into the frunk, is bankrupt. Three companies in the Obrist Group are insolvent with combined debts of about €31.8 million, or roughly $37 million. The company spent over a decade pi",
     "source": "Electrek",
     "zh": "为特斯拉配备燃气发动机的公司破产，欠债 3700 万美元"
    },
    {
     "title": "Rivian limits point-to-point driving to invite-only testers under NDA",
     "link": "https://electrek.co/2026/10/15/rivian-point-to-point-early-access-program-nda/",
     "pubDate": "Thu, 15 Oct 2026 18:42:28 +0000",
     "summary": "Rivian’s point-to-point driving feature will first reach owners through an invitation-only “Autonomy Early Access Program,” and the owners it picks will have to sign a non-disclosure agreement to get in. The program, laid out on a new Rivian support page , covers US R1 Gen 2 and R2 owners who pay fo",
     "source": "Electrek",
     "zh": "根据保密协议，Rivian 仅限受邀测试者进行点对点驾驶"
    },
    {
     "title": "Volvo makes a bigger bet on Nvidia for hands-free automated driving",
     "link": "https://techcrunch.com/2026/10/15/volvo-makes-a-bigger-bet-on-nvidia/",
     "pubDate": "Thu, 15 Oct 2026 17:34:40 +0000",
     "summary": "Volvo is leveling up its automated driving system through an expansion of its nearly decade-long partnership with Nvidia that will extend beyond its battery electric vehicles.",
     "source": "TechCrunch Transport",
     "zh": "沃尔沃在免提自动驾驶领域对英伟达下了更大的赌注"
    },
    {
     "title": "AI agents are coming to Rivian’s cars",
     "link": "https://techcrunch.com/2026/10/15/ai-agents-are-coming-to-rivians-cars/",
     "pubDate": "Thu, 15 Oct 2026 15:02:36 +0000",
     "summary": "We'll likely learn more about how this will work at the company's upcoming \"AI & Autonomy Day\" event in December.",
     "source": "TechCrunch Transport",
     "zh": "人工智能代理即将来到 Rivian 的汽车中"
    },
    {
     "title": "China launches joint probe into Maextro V800 brake pedal bracket failures",
     "link": "https://cnevpost.com/2026/10/15/china-joint-probe-maextro-v800-brake-pedal-bracket-failures/",
     "pubDate": "Thu, 15 Oct 2026 14:11:35 +0000",
     "summary": "The brake pedal bracket on the Maextro V800 luxury MPV broke during a test, sparking widespread controversy. For details, please visit CnEVPost (cnev.co).",
     "source": "CnEVPost",
     "zh": "中国对Maextro V800制动踏板支架故障展开联合调查"
    },
    {
     "title": "Chery to bring iCar brand to UK with V27 launch in early 2027",
     "link": "https://cnevpost.com/2026/10/15/chery-icar-uk-v27-launch-2027/",
     "pubDate": "Thu, 15 Oct 2026 13:35:26 +0000",
     "summary": "iCar will enter the UK under its overseas name iCaur, becoming Chery's fifth brand in the market. For details, please visit CnEVPost (cnev.co).",
     "source": "CnEVPost",
     "zh": "奇瑞将于 2027 年初推出 V27，将 iCar 品牌引入英国"
    },
    {
     "title": "Xpeng opens Mona L05 pre-sales to bolster Q4 sales push",
     "link": "https://cnevpost.com/2026/10/15/xpeng-opens-mona-l05-pre-sales/",
     "pubDate": "Thu, 15 Oct 2026 12:54:28 +0000",
     "summary": "Mona L05 starts at 169,800 yuan ($25,250) in pre-sales, with its official launch in China set for October 29. For details, please visit CnEVPost (cnev.co).",
     "source": "CnEVPost",
     "zh": "小鹏汽车Mona L05开启预售，助力第四季度销量"
    },
    {
     "title": "BMW starts Gen 6 battery production in China as Neue Klasse i3 covers 1,213 km without recharging in test",
     "link": "https://cnevpost.com/2026/10/15/bmw-starts-gen-6-battery-production-china/",
     "pubDate": "Thu, 15 Oct 2026 09:02:14 +0000",
     "summary": "BMW said the Neue Klasse i3 50L traveled 1,213 km in a real-world road test without recharging. For details, please visit CnEVPost (cnev.co).",
     "source": "CnEVPost",
     "zh": "宝马开始在中国生产第六代电池，Neue Klasse i3在测试中无需充电即可行驶1,213公里"
    },
    {
     "title": "New Tesla Roadster Reveal: How To Watch The Livestream",
     "link": "https://insideevs.com/news/812012/new-tesla-roadster-reveal-event-livestream/",
     "pubDate": "Thu, 15 Oct 2026 06:45:58 +0000",
     "summary": "On Thursday, Tesla showed off the new Roadster supercar, completed with cold air thrusters and a fan system that lets it drive upside down.",
     "source": "InsideEVs",
     "zh": "新特斯拉跑车揭晓：如何观看直播"
    },
    {
     "title": "Electric vehicle sales in the US are showing signs of life",
     "link": "https://techcrunch.com/2026/10/14/electric-vehicle-sales-in-the-u-s-are-showing-signs-of-life/",
     "pubDate": "Wed, 14 Oct 2026 20:12:07 +0000",
     "summary": "The electric vehicle market in the U.S. has been growing for the last three consecutive quarters.",
     "source": "TechCrunch Transport",
     "zh": "美国电动汽车销售呈现复苏迹象"
    },
    {
     "title": "Rivian’s startup Mind Robotics hires former Ford EV chief Doug Field",
     "link": "https://techcrunch.com/2026/10/13/rivians-startup-mind-robotics-hires-former-ford-ev-chief-doug-field/",
     "pubDate": "Tue, 13 Oct 2026 18:30:03 +0000",
     "summary": "Field also worked on Apple's secretive car project and oversaw development of the Tesla Model 3.",
     "source": "TechCrunch Transport",
     "zh": "Rivian 的初创公司 Mind Robotics 聘请了前福特电动汽车首席执行官 Doug Field"
    },
    {
     "title": "Laplace Intelligence red-teams robots and self-driving cars before they hit the real world",
     "link": "https://techcrunch.com/2026/10/13/laplace-intelligence-red-teams-robots-and-self-driving-cars-before-they-hit-the-real-world/",
     "pubDate": "Tue, 13 Oct 2026 17:30:00 +0000",
     "summary": "University of Michigan spinout Laplace Intelligence uses AI agents and interactive simulation to stress-test robots and self-driving vehicles before deployment. The profitable startup is competing in Startup Battlefield at TechCrunch Disrupt, October 13-15 in San Francisco.",
     "source": "TechCrunch Transport",
     "zh": "拉普拉斯情报公司在机器人和自动驾驶汽车进入现实世界之前对它们进行红队评估"
    }
   ]
  },
  {
   "key": "energy",
   "name": "能源 / 新能源",
   "accent": "#84cc16",
   "total": 9,
   "items": [
    {
     "title": "Module feast, cell famine",
     "link": "https://www.pv-magazine.com/2026/10/16/module-feast-cell-famine/",
     "pubDate": "Fri, 16 Oct 2026 04:00:00 +0000",
     "summary": "PV module production capacity in India has already grown way beyond projected demand for the next few years, leading InfoLink’s Jonathan Chou to forecast a market shakeout beginning in 2027. Cell capacity, meanwhile, has been slower to materialize. The post Module feast, cell famine appeared first o",
     "source": "pv magazine",
     "zh": "模块盛宴，细胞饥荒"
    },
    {
     "title": "Monthly Wind Generation In ISO-NE Is About 68% Higher Than Last Year",
     "link": "https://cleantechnica.com/2026/10/15/monthly-wind-generation-in-iso-ne-is-about-68-higher-than-last-year/",
     "pubDate": "Fri, 16 Oct 2026 03:50:39 +0000",
     "summary": "Monthly wind generation in the first nine months of 2026 was an average of 68% higher compared with the same period in 2025 in ISO New England (ISO-NE): Monthly generation from wind was highest in September of this year at 668.9 gigawatthours (GWh), more than double generation levels from September ",
     "source": "CleanTechnica",
     "zh": "ISO-NE 每月风力发电量比去年增加约 68%"
    },
    {
     "title": "PJM, ERCOT, and SWPP All Set Peak Load Records This Summer",
     "link": "https://cleantechnica.com/2026/10/15/pjm-ercot-and-swpp-all-set-peak-load-records-this-summer/",
     "pubDate": "Fri, 16 Oct 2026 03:25:03 +0000",
     "summary": "Three regional transmission organizations (RTOs) set records for peak hourly load this past summer, according to data reported on Form EIA-930 and presented in the Hourly Electric Grid Monitor: PJM peaked at 162.6 gigawatts (GW) on July 2, 2026, 1.3% higher than the pre-2026 peak of 160.6 GW on June",
     "source": "CleanTechnica",
     "zh": "PJM、ERCOT 和 SWPP 今年夏天均创下峰值负荷记录"
    },
    {
     "title": "WTI Outpaces Brent as U.S. Crude Draw Ignites Fresh Buying",
     "link": "https://oilprice.com/Energy/Energy-General/WTI-Outpaces-Brent-as-US-Crude-Draw-Ignites-Fresh-Buying.html",
     "pubDate": "Thu, 15 Oct 2026 22:10:00 -0500",
     "summary": "Crude Oil Rallies as U.S. Inventory Draw Outruns Supply Relief November WTI crude oil futures are up sharply for the week through Thursday night. The gain did not come from one headline. The market has spent the week dealing with tanker attacks near the Strait of Hormuz, renewed attacks on Russian r",
     "source": "OilPrice",
     "zh": "由于美国原油供应引发新的买盘，WTI 价格超过布伦特原油"
    },
    {
     "title": "Waymo Opens To Everyone In San Antonio, San Diego, & Tampa",
     "link": "https://cleantechnica.com/2026/10/15/waymo-opens-to-everyone-in-san-antonio-san-diego-tampa/",
     "pubDate": "Fri, 16 Oct 2026 02:46:45 +0000",
     "summary": "It’s hard to keep track of where Waymo robotaxis are going to launch, are testing, are launching, are open to some people but not others, are open to everyone, etc. Three cities where it recently launched robotaxi service are Tampa, San Antonio, and San Diego, and now the robotaxi service ... [conti",
     "source": "CleanTechnica",
     "zh": "Waymo 向圣安东尼奥、圣地亚哥和坦帕的所有人开放"
    },
    {
     "title": "FERC Proposes Blanket Authorization of Certain LNG Projects & Drafts Measures to Weaken Air Quality Reviews of Methane Gas Projects",
     "link": "https://cleantechnica.com/2026/10/15/ferc-proposes-blanket-authorization-of-certain-lng-projects-drafts-measures-to-weaken-air-quality-reviews-of-methane-gas-projects/",
     "pubDate": "Fri, 16 Oct 2026 01:55:07 +0000",
     "summary": "If Implemented, Methane Gas Projects Could be Approved Without Proper Review of Harmful Impacts Washington, DC — Today, at its monthly meeting, the Federal Energy Regulatory Commission (FERC) proposed two new measures to speed up approval of methane gas projects without the proper review or oversigh",
     "source": "CleanTechnica",
     "zh": "FERC 提议对某些液化天然气项目进行全面授权，并起草削弱甲烷气体项目空气质量审查的措施"
    },
    {
     "title": "My Family & Friends Go Electric",
     "link": "https://cleantechnica.com/2026/10/15/my-family-friends-go-electric/",
     "pubDate": "Fri, 16 Oct 2026 00:52:29 +0000",
     "summary": "This is our latest family member EV. It’s my third daughter’s used 2023 Hyundai IONIQ 5 in Charlotte, North Carolina. It’s been a progression: It started with a couple of family pioneers (my brother and me) first dipping a toe in the water in 2014–2015 with early short-range, small-battery EVs. ... ",
     "source": "CleanTechnica",
     "zh": "我的家人和朋友都通电了"
    },
    {
     "title": "Standard Chartered: Trump's Russian Diesel Won't Add New Supply",
     "link": "https://oilprice.com/Energy/Crude-Oil/Standard-Chartered-Trumps-Russian-Diesel-Wont-Add-New-Supply.html",
     "pubDate": "Thu, 15 Oct 2026 19:00:00 -0500",
     "summary": "Oil prices were mixed in Thursday's trading session, with prospects of the United States easing restrictions on Russia's crude helping ease the international benchmark while attacks on vessels in the Middle East provided support. Brent crude for December delivery was down 0.2% to trade at $106 per b",
     "source": "OilPrice",
     "zh": "渣打银行：特朗普的俄罗斯柴油机不会增加新供应"
    },
    {
     "title": "Australia solar investment decisions reach record 3.5GW in 2026",
     "link": "https://www.pv-tech.org/australia-solar-investment-decisions-reach-record-3-5gw-in-2026/",
     "pubDate": "Thu, 15 Oct 2026 23:49:47 +0000",
     "summary": "Australia's solar financial investment decisions (FIDs) have hit a record 3.5GW in 2026, with energy minister Chris Bowen saying renewable energy investment \"has already broken the annual record\".",
     "source": "PV Tech",
     "zh": "2026年澳大利亚太阳能投资决策将达到创纪录的3.5GW"
    },
    {
     "title": "New Zealand PM opens South Island’s largest solar PV plant at Christchurch Airport",
     "link": "https://www.pv-tech.org/new-zealand-pm-opens-south-islands-largest-solar-pv-plant-at-christchurch-airport/",
     "pubDate": "Thu, 15 Oct 2026 23:48:35 +0000",
     "summary": "New Zealand Prime Minister Christopher Luxon has opened a 168MWdc solar PV plant that is now the largest on the country's South Island.",
     "source": "PV Tech",
     "zh": "新西兰总理在基督城机场开设南岛最大的太阳能光伏电站"
    },
    {
     "title": "The Diesel Crunch Will Persist Well into 2027",
     "link": "https://oilprice.com/Energy/Crude-Oil/The-Diesel-Crunch-Will-Persist-Well-into-2027.html",
     "pubDate": "Thu, 15 Oct 2026 18:00:00 -0500",
     "summary": "The recent rise in crude oil flows out of the Strait of Hormuz isn’t solving the world’s most pressing fuel problem—the diesel crunch and record diesel prices that start to feed into the wider economy. While Middle East crude oil flows are nearing pre-war levels, global diesel supply is much lower d",
     "source": "OilPrice",
     "zh": "柴油紧缺将持续到 2027 年"
    },
    {
     "title": "Exxon’s Oil Boom Could Keep Guyana’s Gas at Home",
     "link": "https://oilprice.com/Energy/Natural-Gas/Exxons-Oil-Boom-Could-Keep-Guyanas-Gas-at-Home.html",
     "pubDate": "Thu, 15 Oct 2026 17:00:00 -0500",
     "summary": "Guyana has turned into something of an oil celebrity with billions of barrels discovered by Exxon off the coast of the tiny South American country. With the oil riches came gas, too, and there were plans to add LNG to Guyana’s export goods. Yet now the government is considering keeping the gas for t",
     "source": "OilPrice",
     "zh": "埃克森美孚的石油繁荣可以让圭亚那的天然气留在国内"
    },
    {
     "title": "U.S. Nuclear Fuel Independence Edges Closer as Urenco Expansion Hits 75%",
     "link": "https://oilprice.com/Alternative-Energy/Nuclear-Power/US-Nuclear-Fuel-Independence-Edges-Closer-as-Urenco-Expansion-Hits-75.html",
     "pubDate": "Thu, 15 Oct 2026 16:00:00 -0500",
     "summary": "The only commercial-scale uranium enrichment plant in the United States is now three-quarters of the way through its latest expansion, a milestone for the country's push to build out a domestic nuclear fuel supply chain. Urenco USA said Oct. 8 that the sixth of eight new centrifuge cascades at its N",
     "source": "OilPrice",
     "zh": "Urenco 扩张达到 75%，美国核燃料独立性进一步接近"
    },
    {
     "title": "Tech giants want clean energy in N.C. Is Duke finally ready to help?",
     "link": "https://www.canarymedia.com/articles/data-centers/tech-giants-want-clean-energy-in-n-c-is-duke-finally-ready-to-help",
     "pubDate": "Thu, 15 Oct 2026 16:25:00 -0400",
     "summary": "In North Carolina, tech giants and other large corporations that want their own 24/7 carbon-free electricity have a problem. Across most of the state, only Duke Energy, the state’s vertically integrated utility, can sell them power, and the company’s grid isn’t required to be 100% clean until mid-ce",
     "source": "Canary Media",
     "zh": "科技巨头希望在北卡罗来纳州使用清洁能源。杜克大学终于准备好提供帮助了吗？"
    },
    {
     "title": "6 Countries Pledge Faster Cargo Transfers on Eurasia-Europe Land Bridge",
     "link": "https://oilprice.com/Geopolitics/International/6-Countries-Pledge-Faster-Cargo-Transfers-on-Eurasia-Europe-Land-Bridge.html",
     "pubDate": "Thu, 15 Oct 2026 15:00:00 -0500",
     "summary": "Six states participating in an initiative to improve a Eurasia-to-Europe trade corridor have agreed on measures to reduce transit times at intermodal nodes along the route. Meeting in Tashkent on October 11, railway officials from Azerbaijan, Georgia, Kyrgyzstan, Turkey, Turkmenistan, and Uzbekistan",
     "source": "OilPrice",
     "zh": "六国承诺加快欧亚大陆桥货物转运速度"
    },
    {
     "title": "Ghost Of Thanos Lingers Over Elon Musk’s Howard Stark Moment",
     "link": "https://cleantechnica.com/2026/10/15/elon-musk-tesla-roadster-unveil-flying-cars-evtol-vtol/",
     "pubDate": "Thu, 15 Oct 2026 17:57:29 +0000",
     "summary": "Tesla CEO Elon Musk aims to recover some of his EV magic from the Cybertruck debacle by showcasing the new Tesla Roadster on October 15, a $200,000 reboot of the original 2006 Tesla two-seater that sparked the global EV revolution. The post Ghost Of Thanos Lingers Over Elon Musk’s Howard Stark Momen",
     "source": "CleanTechnica",
     "zh": "灭霸之魂萦绕在埃隆·马斯克的霍华德·斯塔克时刻"
    },
    {
     "title": "Utilities can use AI to solve grid backlogs: AWS energy lead",
     "link": "https://www.utilitydive.com/news/utilities-need-ai-solve-grid-backlogs-aws-energy-lead-head/832816/",
     "pubDate": "Thu, 15 Oct 2026 12:00:00 -0400",
     "summary": "The utilities moving first on AI-powered grid planning are delivering faster approvals, fewer outages and lower costs, writes Amazon Web Services&rsquo; head of energy and utilities&nbsp;Joseph Santamaria.",
     "source": "Utility Dive",
     "zh": "公用事业公司可以使用人工智能来解决电网积压问题：AWS 能源领先者"
    },
    {
     "title": "20.4GWh grid-scale BESS deployed globally in September, up 61%; YTD installs up 43%",
     "link": "https://www.energy-storage.news/20-4gwh-grid-scale-bess-deployed-globally-in-september-up-61-ytd-installs-up-43/",
     "pubDate": "Thu, 15 Oct 2026 14:54:32 +0000",
     "summary": "Around 20.4GWh of grid-scale battery energy storage systems (BESS) came online globally last month, bringing the year-to-date (YTD) total to 208GWh.",
     "source": "Energy Storage News",
     "zh": "9月全球电网规模BESS部署量20.4GWh，同比增长61%；今年迄今安装量增长 43%"
    },
    {
     "title": "China’s first 100 MW/1,000 MWh compressed CO2 storage plant connects to grid",
     "link": "https://www.pv-magazine.com/2026/10/15/chinas-first-100-mw-1000-mwh-compressed-co2-storage-plant-connects-to-grid/",
     "pubDate": "Thu, 15 Oct 2026 14:52:10 +0000",
     "summary": "China Huadian has achieved the first grid connection of its 100 MW/1,000 MWh compressed CO₂ energy storage plant in Xinjiang, marking a major milestone in long-duration energy storage. The facility offers 10 hours of storage and is expected to generate 200 GWh annually, supporting renewable energy i",
     "source": "pv magazine",
     "zh": "中国首个100兆瓦/1,000兆瓦时压缩二氧化碳封存工厂并网"
    },
    {
     "title": "HoloSolis appoints former rail executive Henri Poupart-Lafarge as CEO",
     "link": "https://www.pv-tech.org/holosolis-appoints-former-rail-executive-henri-poupart-lafarge-as-ceo/",
     "pubDate": "Thu, 15 Oct 2026 14:50:02 +0000",
     "summary": "French solar manufacturer HoloSolis has appointed former rail executive Henri Poupart-Lafarge as its new CEO.",
     "source": "PV Tech",
     "zh": "HoloSolis 任命前铁路高管 Henri Poupart-Lafarge 为首席执行官"
    },
    {
     "title": "AEP in deal to buy up to 1.6 GW of Mainspring linear generators",
     "link": "https://www.utilitydive.com/news/aep-mainspring-linear-generators-bloom-fuel-cell-google-wyoming/833104/",
     "pubDate": "Thu, 15 Oct 2026 10:47:22 -0400",
     "summary": "Separately, American Electric Power expects to spend about $4 billion on a 702-MW Bloom Energy fuel cell project in Wyoming that is under contract to Google.",
     "source": "Utility Dive",
     "zh": "AEP 达成协议购买高达 1.6 GW 的 Mainspring 线性发电机"
    },
    {
     "title": "Sungrow patches cloud vulnerability affecting solar inverters",
     "link": "https://www.pv-tech.org/sungrow-patches-cloud-vulnerability-affecting-solar-inverters/",
     "pubDate": "Thu, 15 Oct 2026 14:32:42 +0000",
     "summary": "Sungrow has patched an iSolarCloud vulnerability that reportedly allowed unauthenticated access to platform accounts, according to reports.",
     "source": "PV Tech",
     "zh": "阳光电源修补影响太阳能逆变器的云漏洞"
    },
    {
     "title": "Best Buy pilots battery-powered vehicles at California distribution sites",
     "link": "https://www.utilitydive.com/news/best-buy-pilots-battery-powered-vehicles-at-california-distribution-sites/833125/",
     "pubDate": "Thu, 15 Oct 2026 10:32:12 -0400",
     "summary": "The retailer deployed electric yard switchers as part of its efforts to curb emissions and will gauge future deployment potential across its supply chain, it said.",
     "source": "Utility Dive",
     "zh": "百思买在加州配送站点试点电池驱动汽车"
    },
    {
     "title": "Reliability standards for AI data centers, crypto miners move closer to adoption",
     "link": "https://www.utilitydive.com/news/reliability-standards-ai-data-centers-crypto-miners-pass-final-nerc-ba/833094/",
     "pubDate": "Thu, 15 Oct 2026 09:28:37 -0400",
     "summary": "The proposed rules must still be approved by NERC&rsquo;s board and&nbsp;federal regulators. As written, they would&nbsp;apply to computational loads of&nbsp;50 MW or more, connected at voltage levels of at least 100 kV.",
     "source": "Utility Dive",
     "zh": "人工智能数据中心的可靠性标准，加密矿工更接近采用"
    },
    {
     "title": "BloombergNEF forecasts 584 GW of solar installations in 2026",
     "link": "https://www.pv-magazine.com/2026/10/15/china-solar-down-29-everywhere-else-up-15/",
     "pubDate": "Thu, 15 Oct 2026 13:20:47 +0000",
     "summary": "BloombergNEF has cut its 2026 global solar installation forecast to 584 GW, down 10.8% from 2025, driven by a sharper-than-expected slowdown in China. Solar installations outside China are projected to grow to 313 GW, supported by expanding residential and commercial markets. The post BloombergNEF f",
     "source": "pv magazine",
     "zh": "BloombergNEF 预测 2026 年太阳能装机量将达到 584 吉瓦"
    },
    {
     "title": "New image dataset aims to improve AI-based navigation of PV cleaning robots",
     "link": "https://www.pv-magazine.com/2026/10/15/new-image-dataset-aims-to-improve-ai-based-navigation-of-pv-cleaning-robots/",
     "pubDate": "Thu, 15 Oct 2026 12:45:15 +0000",
     "summary": "Researchers have created a dataset of 6,200 solar panel images designed to support AI-based navigation of cleaning robots. The dataset features annotated panel reference lines under clean, synthetically soiled, and laboratory contamination conditions, with the aim of helping developers assess the ro",
     "source": "pv magazine",
     "zh": "新图像数据集旨在改进基于人工智能的光伏清洁机器人导航"
    },
    {
     "title": "Octopus Energy unveils heat pump add-on for home cooling",
     "link": "https://www.pv-magazine.com/2026/10/15/octopus-energy-unveils-heat-pump-add-on-for-home-cooling/",
     "pubDate": "Thu, 15 Oct 2026 12:44:24 +0000",
     "summary": "K-based Octopus Energy has introduced Cosy Cooler, a hydronic cooling unit designed to work with its existing Cosy heat pumps. The company says the device can be installed using existing radiator pipework and will cost between GBP 500 ($670) and GBP 600 when it becomes available in 2027. The post Oc",
     "source": "pv magazine",
     "zh": "章鱼能源推出用于家庭制冷的热泵附加装置"
    },
    {
     "title": "Dutch startup offers PV mounting solution for fragile roofs",
     "link": "https://www.pv-magazine.com/2026/10/15/dutch-startup-offers-pv-mounting-solution-for-fragile-roofs/",
     "pubDate": "Thu, 15 Oct 2026 12:20:32 +0000",
     "summary": "Dutch startup Rable has developed a self-supporting PV mounting system for fragile roofs with slopes of up to 10 degrees, reducing anchor points by 95% compared with conventional systems. The galvanized-steel structure distributes loads of 6 kg/m² to 15 kg/m² and can reduce installation costs by €0.",
     "source": "pv magazine",
     "zh": "荷兰初创公司为脆弱屋顶提供光伏安装解决方案"
    },
    {
     "title": "Aligned Climate Capital, Nexamp secure finance for community solar projects",
     "link": "https://www.pv-tech.org/aligned-climate-capital-nexamp-secure-finance-community-solar-projects/",
     "pubDate": "Thu, 15 Oct 2026 12:04:09 +0000",
     "summary": "Aligned Climate Capital and Nexamp have secured finance for their respective community solar portfolios in the US.",
     "source": "PV Tech",
     "zh": "Align Climate Capital 和 Nexamp 为社区太阳能项目提供融资"
    },
    {
     "title": "Nightpeak Energy doubles Texas BESS site to 300MW",
     "link": "https://www.energy-storage.news/nightpeak-energy-doubles-texas-bess-site-to-300mw/",
     "pubDate": "Thu, 15 Oct 2026 11:34:30 +0000",
     "summary": "Energy storage owner-operator Nightpeak Energy has reached financial close and commercial operation on its 150MW/300MWh Bocanova 2 battery storage project in Brazoria County, Southeast Texas.",
     "source": "Energy Storage News",
     "zh": "Nightpeak Energy 将德克萨斯州 BESS 站点容量翻倍至 300MW"
    }
   ]
  },
  {
   "key": "bio",
   "name": "生物医药 / 健康",
   "accent": "#ec4899",
   "total": 7,
   "items": [
    {
     "title": "Proteomics Reveals Ovarian Remodeling Decades After Menopause",
     "link": "https://www.genengnews.com/topics/omics/proteomics-reveals-ovarian-remodeling-decades-after-menopause/",
     "pubDate": "Thu, 15 Oct 2026 22:16:35 +0000",
     "summary": "5,812 protein groups were quantified in postmenopausal ovaries, uncovering molecular shifts associated with inflammation, immunity, and extracellular matrix remodeling. The post Proteomics Reveals Ovarian Remodeling Decades After Menopause appeared first on GEN - Genetic Engineering and Biotechnolog",
     "source": "GEN",
     "zh": "蛋白质组学揭示绝经几十年后卵巢重塑"
    },
    {
     "title": "Trump administration advances plan for peptide drugs favored by RFK Jr.",
     "link": "https://www.statnews.com/2026/10/15/trump-administration-advances-plan-peptides-rfk-jr/?utm_campaign=rss",
     "pubDate": "Thu, 15 Oct 2026 20:46:09 +0000",
     "summary": "U.S. health officials are moving ahead with a plan to allow specialty pharmacies to produce certain peptides, a class of largely unregulated injections favored by health secretary Robert F. Kennedy…",
     "source": "STAT News",
     "zh": "特朗普政府推进了小罗伯特·肯尼迪青睐的肽类药物计划。"
    },
    {
     "title": "Merck and Moderna have ‘lot of exploring to do’ after initial cancer vaccine success",
     "link": "https://www.statnews.com/2026/10/15/moderna-merck-keytruda-mrna-cancer-vaccine-strategy/?utm_campaign=rss",
     "pubDate": "Thu, 15 Oct 2026 19:58:35 +0000",
     "summary": "Stephen Hoge and Dean Li, at the STAT Summit, spoke of how Merck and Moderna will pair Keytruda with personalized mRNA vaccines to target tumors.",
     "source": "STAT News",
     "zh": "在癌症疫苗初步成功后，默克和 Moderna 仍有“大量探索要做”"
    },
    {
     "title": "CDC page supporting Covid vaccines for pregnancy went dark",
     "link": "https://endpoints.news/cdc-page-supporting-covid-vaccines-for-pregnancy-went-dark/",
     "pubDate": "Thu, 15 Oct 2026 19:05:35 +0000",
     "summary": "The CDC briefly published a webpage that maintained unequivocal support for Covid-19 vaccines in people preparing to have a baby, but it now redirects elsewhere on the CDC's website, following online backlash from some vaccine ...",
     "source": "Endpoints News",
     "zh": "美国疾病控制与预防中心 (CDC) 支持怀孕期间接种新冠疫苗的页面被关闭"
    },
    {
     "title": "The Trump administration is doubling down on health care fraud investigations",
     "link": "https://www.statnews.com/2026/10/15/healthcare-fraud-new-doj-policy-rewards-self-disclosure/?utm_campaign=rss",
     "pubDate": "Thu, 15 Oct 2026 18:09:18 +0000",
     "summary": "At the STAT Summit, the Department of Justice offered up a warning for health care executives: Don’t be another Theranos.",
     "source": "STAT News",
     "zh": "特朗普政府正在加倍加大医疗保健欺诈调查力度"
    },
    {
     "title": "Newly Identified Microexons Offer Clues to Autism Spectrum Disorder’s Genetic Roots",
     "link": "https://www.genengnews.com/topics/omics/newly-identified-microexons-offer-clues-to-autism-spectrum-disorders-genetic-roots/",
     "pubDate": "Thu, 15 Oct 2026 17:58:56 +0000",
     "summary": "Hundreds of newly identified microexons seem to matter for autism and other neurological conditions, according to a Nature study. A machine learning model of their regulatory code also pinpoints variants predicted to disrupt their splicing in autistic individuals. The post Newly Identified Microexon",
     "source": "GEN",
     "zh": "新发现的微外显子为自闭症谱系障碍的遗传根源提供了线索"
    },
    {
     "title": "Virginia leads in winning investments as drugmakers onshore to the US",
     "link": "https://endpoints.news/virginia-leads-in-winning-investments-as-drugmakers-onshore-to-the-us/",
     "pubDate": "Thu, 15 Oct 2026 17:26:18 +0000",
     "summary": "The state of Virginia is emerging as an early winner as President Donald Trump prods drugmakers to increase their manufacturing investments in the US, securing at least $12.6 billion through commitments from three of the ...",
     "source": "Endpoints News",
     "zh": "弗吉尼亚州在美国本土制药商赢得投资方面处于领先地位"
    },
    {
     "title": "Mass. lawmaker Auchincloss favors boosting U.S. biotech over targeting China",
     "link": "https://www.statnews.com/2026/10/15/auchincloss-us-biotech-vs-china-protectionism/?utm_campaign=rss",
     "pubDate": "Thu, 15 Oct 2026 17:19:50 +0000",
     "summary": "Rep. Jake Auchincloss (D-Mass.) has some advice for fellow lawmakers: unapologetically support the biotech industry.",
     "source": "STAT News",
     "zh": "马萨诸塞州议员奥金克洛斯赞成发展美国生物技术而不是针对中国"
    },
    {
     "title": "How Alzheimer’s Risk Gene APOE4 Disrupts Myelination",
     "link": "https://www.genengnews.com/topics/translational-medicine/how-alzheimers-risk-gene-apoe4-disrupts-myelination/",
     "pubDate": "Thu, 15 Oct 2026 17:07:16 +0000",
     "summary": "Study linked the APOE4 gene with suppression of Wnt signaling in the oligodendrocyte cells that provide neurons with their fatty myelin insulation, and also demonstrated a potential approach to preventing disruption of myelination. The post How Alzheimer’s Risk Gene APOE4 Disrupts Myelination appear",
     "source": "GEN",
     "zh": "阿尔茨海默病风险基因 APOE4 如何破坏髓鞘形成"
    },
    {
     "title": "Belgian startup revives Galapagos CAR-T research",
     "link": "https://www.biopharmadive.com/news/lakefront-armed-cell-therapies-deal-stoffels-galapagos/833082/",
     "pubDate": "Thu, 15 Oct 2026 11:55:00 -0400",
     "summary": "Armed Cell Therapeutics, chaired by former Galapagos CEO Paul Stoffels, has assumed control of cell therapies the company&nbsp;&mdash; now known as Lakefront Biotherapeutics &mdash;&nbsp;divested in a strategic overhaul.",
     "source": "BioPharma Dive",
     "zh": "比利时初创公司复兴加拉帕戈斯 CAR-T 研究"
    },
    {
     "title": "STAT+: Former FDA commissioners Califf, Gottlieb, Sharpless lay into current HHS leadership",
     "link": "https://www.statnews.com/2026/10/15/health-policy-news-fda-califf-gottlieb-sharpless-criticize-hhs-leadership/?utm_campaign=rss",
     "pubDate": "Thu, 15 Oct 2026 15:50:58 +0000",
     "summary": "Former FDA commissioners Rob Califf (Obama and Biden administrations), Scott Gottlieb, and Ned Sharpless (both from the first Trump administration) criticized the officials who ran the agency during a massive…",
     "source": "STAT News",
     "zh": "STAT+：前 FDA 专员卡利夫、戈特利布、夏普莱斯进入现任 HHS 领导层"
    },
    {
     "title": "Illumina Combines Multiomics Informatics Applications in New BioInsight Platform",
     "link": "https://www.genengnews.com/topics/omics/illumina-combines-multiomics-informatics-applications-in-new-bioinsight-platform/",
     "pubDate": "Thu, 15 Oct 2026 15:47:21 +0000",
     "summary": "Illumina is bringing its software, AI, and data offerings together in the new BioInsight platform, designed to help scientists analyze genomic and multiomic datasets. It will be showcased at ASHG in Montreal. The post Illumina Combines Multiomics Informatics Applications in New BioInsight Platform a",
     "source": "GEN",
     "zh": "Illumina 将多组学信息学应用结合到新的 BioInsight 平台中"
    },
    {
     "title": "STAT+: Verastem’s KRAS inhibitor shows promise in pancreatic cancer",
     "link": "https://www.statnews.com/2026/10/15/biotech-news-verastem-kras-inhibitor-shows-promise-in-pancreatic-cancer/?utm_campaign=rss",
     "pubDate": "Thu, 15 Oct 2026 15:43:15 +0000",
     "summary": "Verastem Oncology reports encouraging early results for its KRAS G12D inhibitor, which it’s studying in more than 200 patients with advanced solid tumors like metastatic pancreatic ductal adenocarcinoma and non-small…",
     "source": "STAT News",
     "zh": "STAT+：Verastem 的 KRAS 抑制剂在胰腺癌中显示出前景"
    },
    {
     "title": "AstraZeneca does AI deal with insitro; inVIOs' Phase 1 success in solid tumors",
     "link": "https://endpoints.news/astrazeneca-does-ai-deal-with-insitro-invios-phase-1-success-in-solid-tumors/",
     "pubDate": "Thu, 15 Oct 2026 15:30:42 +0000",
     "summary": "Plus news about ImmunityBio, Modus Therapeutics and Hyperway Pharmaceutical. AstraZeneca strikes AI drug discovery deal with insitro: The pharma giant will pay the California-based company $40 million upfront. In return, insitro's ...",
     "source": "Endpoints News",
     "zh": "阿斯利康 (AstraZeneca) 做 AI 处理 instro； inVIOs 在实体瘤领域的一期临床试验取得成功"
    },
    {
     "title": "FDA ‘reset’ continues with new plan for reviewing rare disease drugs",
     "link": "https://www.biopharmadive.com/news/fda-rare-disease-framework-initiative-drug-development/833080/",
     "pubDate": "Thu, 15 Oct 2026 11:23:00 -0400",
     "summary": "A revamped regulatory framework may give investors less of a &ldquo;guessing game&rdquo; as they weigh chances for drug approvals, one analyst said.",
     "source": "BioPharma Dive",
     "zh": "FDA“重置”继续，审查罕见病药物的新计划"
    },
    {
     "title": "NorthStar's China CRO deal; Lonza details midterm guidance",
     "link": "https://endpoints.news/northstars-china-cro-deal-lonza-details-midterm-guidance/",
     "pubDate": "Thu, 15 Oct 2026 15:21:38 +0000",
     "summary": "Plus more about Triastek, Scinai and HydRegen. NorthStar inks deal with Chinese CRO: Radioisotope maker NorthStar Medical Technologies has secured a partnership with Beijing-based contract research organization Quarkmed. Quarkmed will act ...",
     "source": "Endpoints News",
     "zh": "NorthStar 的中国 CRO 交易；龙沙详细介绍中期指导"
    },
    {
     "title": "Osivax pivots to combo approach after flu jab fails in Phase 2b",
     "link": "https://endpoints.news/osivax-pivots-to-combo-approach-after-flu-jab-fails-in-phase-2b/",
     "pubDate": "Thu, 15 Oct 2026 14:33:55 +0000",
     "summary": "Osivax’s lead flu vaccine has flopped in a mid-stage trial. But the French biotech still holds out hope for the program, and plans to combine it with existing flu shots. The Phase 2b trial aimed ...",
     "source": "Endpoints News",
     "zh": "流感疫苗在 2b 阶段失败后，Osivax 转向组合方法"
    },
    {
     "title": "San Francisco's pulse on health AI",
     "link": "https://endpoints.news/san-franciscos-pulse-on-health-ai/",
     "pubDate": "Thu, 15 Oct 2026 14:21:39 +0000",
     "summary": "I flew to San Francisco yesterday to take part in Rock Health’s annual summit. It’s been about half a year since I last visited, so the event served as a good gut check of where ...",
     "source": "Endpoints News",
     "zh": "旧金山健康人工智能的脉搏"
    },
    {
     "title": "Thirty Million Compartments: Testing Single-Molecule PCR’s Potential",
     "link": "https://www.genengnews.com/sponsored/thirty-million-compartments-testing-single-molecule-pcrs-potential/",
     "pubDate": "Thu, 15 Oct 2026 12:48:55 +0000",
     "summary": "Countable Labs has named Fred Hutchinson its first certified service provider, currently serving researchers across the Seattle region. And the company is continuing to build its list of service providers. The post Thirty Million Compartments: Testing Single-Molecule PCR’s Potential appeared first o",
     "source": "GEN",
     "zh": "三千万个隔室：测试单分子 PCR 的潜力"
    },
    {
     "title": "Iambic, an AI drug discovery specialist, banks $150M in an IPO",
     "link": "https://www.biopharmadive.com/news/iambic-ipo-price-ai-drug-discovery/832771/",
     "pubDate": "Wed, 14 Oct 2026 20:08:00 -0400",
     "summary": "Part of a wave of young biotechs employing AI to accelerate research, the company claimed in regulatory filings that its approach has the potential to &ldquo;disrupt legacy drug discovery paradigms.&rdquo;",
     "source": "BioPharma Dive",
     "zh": "人工智能药物发现专家 Iambic 在 IPO 中筹集 1.5 亿美元"
    },
    {
     "title": "Alzheimer’s Small-Molecule Therapy Shows Promise in Mice and Early Human Trial",
     "link": "https://www.genengnews.com/topics/drug-discovery/alzheimers-small-molecule-therapy-shows-promise-in-mice-and-early-human-trial/",
     "pubDate": "Wed, 14 Oct 2026 18:00:48 +0000",
     "summary": "A small-molecule therapy, VG-3927, targeting microglial TREM2 signaling showed neuroprotective effects in preclinical studies for Alzheimer's disease and was well tolerated in a Phase I trial. The post Alzheimer’s Small-Molecule Therapy Shows Promise in Mice and Early Human Trial appeared first on G",
     "source": "GEN",
     "zh": "阿尔茨海默氏症小分子疗法在小鼠和早期人体试验中显示出前景"
    },
    {
     "title": "Experimental Arrowhead RNAi drug hints at Alzheimer’s benefit",
     "link": "https://www.biopharmadive.com/news/arrowhead-rnai-alzheimers-tau-aro-mapt-study-results/832950/",
     "pubDate": "Wed, 14 Oct 2026 11:54:00 -0400",
     "summary": "In a first, a subcutaneously administered RNA interference medicine crossed into the brain and plummeted levels of a protein implicated in the disease.",
     "source": "BioPharma Dive",
     "zh": "实验性 Arrowhead RNAi 药物暗示对阿尔茨海默病有益"
    },
    {
     "title": "Verastem cancer drug shows early promise in small study",
     "link": "https://www.biopharmadive.com/news/verastem-g12d-pancreatic-cancer-results-genfleet/832952/",
     "pubDate": "Wed, 14 Oct 2026 11:00:00 -0400",
     "summary": "Wall Street analysts believe Verastem&rsquo;s drug to now be &ldquo;competitive&rdquo; in what&rsquo;s quickly become one of the most active and crowded areas of oncology research.",
     "source": "BioPharma Dive",
     "zh": "Verastem 癌症药物在小型研究中显示出早期前景"
    },
    {
     "title": "CVS to pay $315M to settle opioid prescribing allegations",
     "link": "https://www.biopharmadive.com/news/cvs-pay-315-million-settle-opioid-prescribing-allegations/832999/",
     "pubDate": "Wed, 14 Oct 2026 10:45:52 -0400",
     "summary": "Prosecutors say the company filled unnecessary prescriptions that fueled the opioid epidemic. A spokesperson for CVS said the company admitted to no wrongdoing and &ldquo;strongly disagreed&rdquo; with the case&rsquo;s claims.",
     "source": "BioPharma Dive",
     "zh": "CVS 将支付 3.15 亿美元以和解阿片类药物处方指控"
    }
   ]
  },
  {
   "key": "space",
   "name": "航天 / 太空",
   "accent": "#8b5cf6",
   "total": 6,
   "items": [
    {
     "title": "APOD: 2026 October 16 – Chasing the International Space Station",
     "link": "https://science.nasa.gov/image-article/apod-2026-october-16-chasing-the-international-space-station/",
     "pubDate": "Fri, 16 Oct 2026 04:05:00 +0000",
     "summary": "APOD Science APOD APOD: 2026 October 16 –… Today’s APOD Archive Submissions Index Search Calendar RSS Education About Discuss APOD Astronomy Picture of the Day Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation writte",
     "source": "NASA",
     "zh": "APOD：2026年10月16日——追逐国际空间站"
    },
    {
     "title": "Isaias Dims the Gulf Coast",
     "link": "https://science.nasa.gov/earth/earth-observatory/isaias-dims-the-gulf-coast/",
     "pubDate": "Fri, 16 Oct 2026 04:00:00 +0000",
     "summary": "High-definition images of nighttime lights show where the hurricane knocked out power along the Florida Panhandle and how quickly the lights came back.",
     "source": "NASA",
     "zh": "伊萨亚斯使墨西哥湾沿岸变暗"
    },
    {
     "title": "Carbon Fibre Troubles Force Rocket Lab to Delay Neutron Debut to No Earlier Than 2027",
     "link": "https://www.nasaspaceflight.com/2026/10/carbon-fibre-force-rocket-lab-delay-neutron-debut/",
     "pubDate": "Fri, 16 Oct 2026 03:49:06 +0000",
     "summary": "Rocket Lab has delayed its Neutron launch vehicle once again after carbon fibre manufacturing problems… The post Carbon Fibre Troubles Force Rocket Lab to Delay Neutron Debut to No Earlier Than 2027 appeared first on NASASpaceFlight.com .",
     "source": "NASASpaceflight",
     "zh": "碳纤维问题迫使火箭实验室将中子首次亮相推迟到不早于 2027 年"
    },
    {
     "title": "UKSA Taps ClearSpace for Country’s First Debris Removal Mission",
     "link": "https://payloadspace.com/uksa-taps-clearspace-for-countrys-first-debris-removal-mission/",
     "pubDate": "Thu, 15 Oct 2026 21:40:26 +0000",
     "summary": "The UK Space Agency is dressing up as a waste-management company for Halloween. The post UKSA Taps ClearSpace for Country’s First Debris Removal Mission appeared first on Payload .",
     "source": "Payload",
     "zh": "UKSA 利用 ClearSpace 执行该国首次碎片清除任务"
    },
    {
     "title": "Oct. 29: Applying AI to the GEOINT Mission",
     "link": "https://spacenews.com/applying-ai-to-the-geoint-mission-event/",
     "pubDate": "Thu, 15 Oct 2026 20:41:50 +0000",
     "summary": "Join us for a conversation on how machine learning is transforming the GEOINT mission across different markets The post Oct. 29: Applying AI to the GEOINT Mission appeared first on SpaceNews .",
     "source": "SpaceNews",
     "zh": "10 月 29 日：将人工智能应用于 GEOINT 任务"
    },
    {
     "title": "Astronomers discover the 1st ever green star, a cosmic zombie just in time for Halloween",
     "link": "https://www.space.com/astronomy/stars/astronomers-discover-the-1st-ever-green-star-a-cosmic-zombie-just-in-time-for-halloween",
     "pubDate": "Thu, 15 Oct 2026 20:00:00 +0000",
     "summary": "Imagine if the sun could take on a spooky green glow for Halloween. Scientists have discovered that our star may go green if it turns into a cosmic zombie after its death in billions of years.",
     "source": "Space.com",
     "zh": "天文学家发现了第一颗绿色恒星，一颗宇宙僵尸，正好赶上万圣节"
    },
    {
     "title": "NASA to Help Unlock Mysteries of Mars’ Moons in Upcoming Mission",
     "link": "https://science.nasa.gov/directorates/smd/planetary-science-division/nasa-to-help-unlock-mysteries-of-mars-moons-in-upcoming-mission/",
     "pubDate": "Thu, 15 Oct 2026 19:58:08 +0000",
     "summary": "NASA is playing an important role in JAXA’s (Japan Aerospace Exploration Agency) MMX (Martian Moons eXploration) mission, to advance our understanding of Mars’ moons and build on the agency’s long history of exploring the Red Planet. The mission aims to characterize and determine the origin of Mars’",
     "source": "NASA",
     "zh": "美国宇航局将在即将到来的任务中帮助解开火星卫星的奥秘"
    },
    {
     "title": "On this day in space! Oct. 15, 1997: NASA launches Cassini-Hugyens probe on 7-year voyage to Saturn",
     "link": "https://www.space.com/space-exploration/on-this-day-in-space-october-15-2026",
     "pubDate": "Thu, 15 Oct 2026 19:13:26 +0000",
     "summary": "On this day in space! Oct. 15, 1997: NASA launches Cassini-Hugyens probe on 7-year voyage to Saturn",
     "source": "Space.com",
     "zh": "在太空的这一天！ 1997 年 10 月 15 日：美国宇航局 (NASA) 发射卡西尼-休更斯探测器，开始为期 7 年的土星之旅"
    },
    {
     "title": "SpaceX launches a classified payload for U.S. Space Force",
     "link": "https://spaceflightnow.com/2026/10/15/live-coverage-spacex-to-launch-classified-payload-for-u-s-space-force/",
     "pubDate": "Thu, 15 Oct 2026 19:11:45 +0000",
     "summary": "Liftoff from pad 4E at Vandenberg Space Force Base in California happened on Thursday, Oct. 15, at 5:01 p.m. PDT (8:01 p.m. EDT / 0001 UTC).",
     "source": "Spaceflight Now",
     "zh": "SpaceX 为美国太空部队发射机密有效载荷"
    },
    {
     "title": "SpaceX launches classified mission for the US Space Force (video)",
     "link": "https://www.space.com/space-exploration/launches-spacecraft/spacex-space-force-launch-ussf-481-vandenberg",
     "pubDate": "Thu, 15 Oct 2026 18:00:00 +0000",
     "summary": "SpaceX launched a classified mission for the U.S. Space Force from California this evening (Oct. 15), on the 114th Falcon 9 mission of the year.",
     "source": "Space.com",
     "zh": "SpaceX 为美国太空军发射机密任务（视频）"
    },
    {
     "title": "NASA Satellites Observe Historic 2026 El Niño",
     "link": "https://science.nasa.gov/earth/nasa-satellites-observe-historic-2026-el-nino/",
     "pubDate": "Thu, 15 Oct 2026 17:59:22 +0000",
     "summary": "A phenomenon rarer than a solar eclipse and more powerful than any single storm system is unfolding this fall, and NASA is tracking it closely. El Niño is a natural climate pattern that emerges roughly every two to seven years marked by warmer-than-normal water temperatures in parts of the equatoria",
     "source": "NASA",
     "zh": "NASA 卫星观测到 2026 年历史性厄尔尼诺现象"
    },
    {
     "title": "Vaonis unveils Atlas, the world's 1st modular smart telescope system",
     "link": "https://www.space.com/stargazing/skywatching-kit/modularity-is-here-vaonis-uveils-their-new-atlas-smart-telescope-system",
     "pubDate": "Thu, 15 Oct 2026 17:40:00 +0000",
     "summary": "Pre-orders are now open for the Atlas, the new modular smart telescope from Vaonis which allows observation with two optical tubes.",
     "source": "Space.com",
     "zh": "Vaonis 推出世界上第一个模块化智能望远镜系统 Atlas"
    },
    {
     "title": "Power Up: Roll Out Solar Arrays Boost Space Station Power Supply",
     "link": "https://www.nasa.gov/missions/station/iss-research/power-up-roll-out-solar-arrays-boost-space-station-power-supply/",
     "pubDate": "Thu, 15 Oct 2026 17:30:00 +0000",
     "summary": "From the International Space Station’s unique position 250 miles above Earth, the Sun is a vital source of energy. Solar power supports the station’s life support systems, daily activities, and hundreds of research investigations that improve life on Earth and prepare humans for deep space explorati",
     "source": "NASA",
     "zh": "通电：推出太阳能电池阵列增强空间站供电"
    },
    {
     "title": "NASA to Conduct Low-Altitude Flights Over Texas Farmland",
     "link": "https://www.nasa.gov/general/nasa-to-conduct-low-altitude-flights-over-texas-farmland/",
     "pubDate": "Thu, 15 Oct 2026 16:42:10 +0000",
     "summary": "A NASA Dynamic Aviation A200 aircraft will conduct low-flying research flights over farmland near Transit, Texas, from Thursday, Oct. 22, through Monday, Nov. 9. These flights will measure gaseous and particulate emissions from animal feeding operations. Agricultural emissions represent an important",
     "source": "NASA",
     "zh": "美国宇航局将在德克萨斯州农田上空进行低空飞行"
    },
    {
     "title": "NASA's SkyFall helicopters will 'show us parts of Mars we've never seen before', scientists say",
     "link": "https://www.space.com/astronomy/mars/nasas-skyfall-helicopters-will-show-us-parts-of-mars-weve-never-seen-before-scientists-say",
     "pubDate": "Thu, 15 Oct 2026 16:00:00 +0000",
     "summary": "\"Just like here on Earth, Mars helicopters can cover distance quickly and can go places that might be impossible to reach by ground.\"",
     "source": "Space.com",
     "zh": "科学家称，美国宇航局的 SkyFall 直升机将“向我们展示以前从未见过的火星部分”"
    },
    {
     "title": "How NASA is thinking about a moon base",
     "link": "https://spacenews.com/how-nasa-is-thinking-about-a-moon-base/",
     "pubDate": "Thu, 15 Oct 2026 15:14:24 +0000",
     "summary": "In this episode, SpaceNews’ Mike Gruss talks with NASA’s Shatel Bhakta, the principal systems engineer for Moon Base, about what’s needed between now and 2028 and the incremental steps to […] The post How NASA is thinking about a moon base appeared first on SpaceNews .",
     "source": "SpaceNews",
     "zh": "美国宇航局如何考虑月球基地"
    },
    {
     "title": "Windblown yardangs on Mars | Space photo of the day for Oct. 15, 2026",
     "link": "https://www.space.com/astronomy/stars/windblown-yardangs-on-mars-space-photo-of-the-day-for-oct-15-2026",
     "pubDate": "Thu, 15 Oct 2026 14:00:00 +0000",
     "summary": "Martian sands blown by strong winds left rippled ridges on the surface of the Red Planet, as seen in this new image from the Mars Express spacecraft.",
     "source": "Space.com",
     "zh": "火星上被风吹动的雅丹2026 年 10 月 15 日当天的太空照片"
    },
    {
     "title": "BlackSky Renews HEO Deal, Adds Gen-3 Imagery for Space Domain Awareness",
     "link": "https://payloadspace.com/blacksky-renews-heo-deal-adds-gen-3-imagery-for-space-domain-awareness/",
     "pubDate": "Thu, 15 Oct 2026 12:30:00 +0000",
     "summary": "BlackSky Technology inked a seven-figure deal to extend its partnership with Australian non-Earth imaging (NEI) provider HEO for another year. The post BlackSky Renews HEO Deal, Adds Gen-3 Imagery for Space Domain Awareness appeared first on Payload .",
     "source": "Payload",
     "zh": "BlackSky 续签 HEO 协议，添加第三代图像以提高空间域意识"
    },
    {
     "title": "Agile Space Industries Expands to Seattle Area with New Bellevue Office",
     "link": "https://spacenews.com/agile-space-industries-expands-to-seattle-area-with-new-bellevue-office/",
     "pubDate": "Thu, 15 Oct 2026 12:00:00 +0000",
     "summary": "BELLEVUE, Wash., Oct. 15, 2026 — Agile Space Industries, a leading provider of in-space chemical propulsion solutions, has expanded into the Seattle metropolitan area with the opening of a new […] The post Agile Space Industries Expands to Seattle Area with New Bellevue Office appeared first on Spac",
     "source": "SpaceNews",
     "zh": "敏捷空间工业公司扩展到西雅图地区并设立新的贝尔维尤办事处"
    },
    {
     "title": "JAXA Taps ArkEdge for Two Lunar Navigation Demos",
     "link": "https://payloadspace.com/jaxa-taps-arkedge-for-two-lunar-navigation-demos/",
     "pubDate": "Thu, 15 Oct 2026 08:00:00 +0000",
     "summary": "Today’s Moon explorers won’t have the luxury of GPS-like tech for navigation. But JAXA is trying to change that for future lunar visitors. The post JAXA Taps ArkEdge for Two Lunar Navigation Demos appeared first on Payload .",
     "source": "Payload",
     "zh": "JAXA 利用 ArkEdge 进行两个月球导航演示"
    },
    {
     "title": "Artemis III SLS teams prepare short stack for pad tanking test",
     "link": "https://www.nasaspaceflight.com/2026/10/artemis-iii-teams-prepare-short-stack-tanking-test/",
     "pubDate": "Wed, 14 Oct 2026 22:36:14 +0000",
     "summary": "With both solid rocket boosters fully stacked and all four RS-25 engines now installed on… The post Artemis III SLS teams prepare short stack for pad tanking test appeared first on NASASpaceFlight.com .",
     "source": "NASASpaceflight",
     "zh": "Artemis III SLS 团队为垫罐测试准备短堆"
    },
    {
     "title": "How mini-constellations could more quickly bring new tech to Europe, and to orbit",
     "link": "https://spacenews.com/how-mini-constellations-could-more-quickly-bring-new-tech-to-europe-and-to-orbit/",
     "pubDate": "Wed, 14 Oct 2026 13:09:21 +0000",
     "summary": "When the European thermal-imagery company constellr began working with Space Inventor on its next generation of satellites, some of the most important details of the spacecraft had yet to be […] The post How mini-constellations could more quickly bring new tech to Europe, and to orbit appeared first",
     "source": "SpaceNews",
     "zh": "迷你星座如何更快地将新技术引入欧洲并进入轨道"
    },
    {
     "title": "Exclusive: In Orbit Aerospace Pivots From Re-entry Vehicles to Spacecraft Autonomy",
     "link": "https://payloadspace.com/exclusive-in-orbit-aerospace-pivots-from-re-entry-vehicles-to-spacecraft-autonomy/",
     "pubDate": "Wed, 14 Oct 2026 12:17:00 +0000",
     "summary": "In Orbit has won new government contracts for its onboard AI system, which the company says can run a spacecraft’s operations without waiting on ground control. The post Exclusive: In Orbit Aerospace Pivots From Re-entry Vehicles to Spacecraft Autonomy appeared first on Payload .",
     "source": "Payload",
     "zh": "独家：在轨航空航天从再入飞行器转向航天器自主"
    },
    {
     "title": "Reflect Orbital Buys Two Skyroot Aerospace Launches",
     "link": "https://payloadspace.com/reflect-orbital-buys-two-skyroot-aerospace-launches/",
     "pubDate": "Wed, 14 Oct 2026 12:00:00 +0000",
     "summary": "Reflect Orbital announced the purchase of two launches today from Indian launcher Skyroot Aerospace. The post Reflect Orbital Buys Two Skyroot Aerospace Launches appeared first on Payload .",
     "source": "Payload",
     "zh": "Reflect Orbital 购买了两架 Skyroot Aerospace 发射机"
    },
    {
     "title": "How Space Companies Can Prepare for a Potential Launch Gap",
     "link": "https://payloadspace.com/how-space-companies-can-prepare-for-a-potential-launch-gap/",
     "pubDate": "Wed, 14 Oct 2026 11:09:00 +0000",
     "summary": "Based on conversations we’ve had with both space company executives and investors, there is a clear disconnect in prevailing sentiment on the impending launch crunch. The post Space Companies Should Start Preparing for a Potential Launch Gap, Including by Raising Capital appeared first on Payload Pr",
     "source": "Payload",
     "zh": "航天公司如何为潜在的发射差距做好准备"
    },
    {
     "title": "Launch Preview: Falcon 9, ZhuQue-2E to launch during quiet week",
     "link": "https://www.nasaspaceflight.com/2026/10/launch-preview-101326/",
     "pubDate": "Tue, 13 Oct 2026 22:09:39 +0000",
     "summary": "This week features a relatively quiet launch manifest, with SpaceX’s workhorse Falcon 9 comprising much… The post Launch Preview: Falcon 9, ZhuQue-2E to launch during quiet week appeared first on NASASpaceFlight.com .",
     "source": "NASASpaceflight",
     "zh": "发射预览：猎鹰 9 号、朱雀 2E 将于安静的一周发射"
    },
    {
     "title": "SpaceX launches NASA science and cargo to the International Space Station",
     "link": "https://spaceflightnow.com/2026/10/13/spacex-launches-nasa-science-and-cargo-to-the-international-space-station/",
     "pubDate": "Tue, 13 Oct 2026 14:07:50 +0000",
     "summary": "The sunrise launch on Oct. 13 was the 35th SpaceX flight under the Commercial Resupply Services 2 contract with NASA.",
     "source": "Spaceflight Now",
     "zh": "SpaceX 将 NASA 科学和货物运送到国际空间站"
    },
    {
     "title": "Launch preview: NASA, SpaceX to launch new solar arrays, 6,300 pounds of cargo to the space station",
     "link": "https://spaceflightnow.com/2026/10/13/live-coverage-nasa-spacex-to-launch-new-solar-arrays-6300-pounds-of-cargo-to-the-space-station/",
     "pubDate": "Tue, 13 Oct 2026 01:19:30 +0000",
     "summary": "Liftoff of the Falcon 9 rocket from pad 40 at Cape Canaveral Space Force Station is scheduled for 6:33 a.m. EDT (1033 UTC) on Tuesday, Oct. 13. The Cargo Dragon spacecraft will arrive at the space station following a two-day flight.",
     "source": "Spaceflight Now",
     "zh": "发射预览：NASA、SpaceX 将向空间站发射新的太阳能电池板和 6,300 磅的货物"
    },
    {
     "title": "SpaceX Falcon 9 rocket launches 27 Starlink satellites from California",
     "link": "https://spaceflightnow.com/2026/10/12/spacex-falcon-9-rocket-to-launch-27-starlink-satellites-into-orbit-from-california/",
     "pubDate": "Mon, 12 Oct 2026 22:21:40 +0000",
     "summary": "Liftoff off of the Starlink 15-25 mission from Space Launch Complex 4 East came at 5:28 p.m. PDT (8:28 p.m. EDT / 0028 UTC).",
     "source": "Spaceflight Now",
     "zh": "SpaceX 猎鹰 9 号火箭从加州发射 27 颗星链卫星"
    },
    {
     "title": "CRS-35 launches to ISS with final iROSA arrays, experiments, and other items",
     "link": "https://www.nasaspaceflight.com/2026/10/crs-35-launch/",
     "pubDate": "Mon, 12 Oct 2026 21:08:32 +0000",
     "summary": "The International Space Station, fresh off a crew handover and the return of Crew-12 to… The post CRS-35 launches to ISS with final iROSA arrays, experiments, and other items appeared first on NASASpaceFlight.com .",
     "source": "NASASpaceflight",
     "zh": "CRS-35 带着最终的 iROSA 阵列、实验和其他物品发射到国际空间站"
    }
   ]
  },
  {
   "key": "security",
   "name": "网络安全",
   "accent": "#ef4444",
   "total": 5,
   "items": [
    {
     "title": "SecTor 2026 Reveals a Rapidly Shifting Cybersecurity Landscape",
     "link": "https://www.darkreading.com/cybersecurity-operations/sector-2026-reveals-a-rapidly-shifting-cybersecurity-landscape",
     "pubDate": "Thu, 15 Oct 2026 22:10:08 GMT",
     "summary": "The event closed in Toronto last week, with experts sharing critical perspectives on emerging risks, drawing record attendance and marking 22% growth.",
     "source": "Dark Reading",
     "zh": "SecTor 2026 揭示了快速变化的网络安全格局"
    },
    {
     "title": "F-Secure Launches Victim-First Scam Encyclopedia Covering 50+ Types of Consumer Fraud",
     "link": "https://www.darkreading.com/threat-intelligence/f-secure-launches-victim-first-scam-encyclopedia-covering-50-types-of-consumer-fraud",
     "pubDate": "Thu, 15 Oct 2026 21:55:07 GMT",
     "summary": "Built from decades of threat intelligence research, the new resource explains scams from the victims' perspective and tracks emerging forms of cyber crime.",
     "source": "Dark Reading",
     "zh": "F-Secure 推出受害者至上的诈骗百科全书，涵盖 50 多种消费者欺诈类型"
    },
    {
     "title": "AI Slop Isn't Just for Social Media; It's Ruining Cyberattacks, Too",
     "link": "https://www.darkreading.com/threat-intelligence/ai-slop-ruining-cyberattacks",
     "pubDate": "Thu, 15 Oct 2026 20:43:20 GMT",
     "summary": "Don't buy the hype! AI has been dumbing down cyberattacks, and serious threat actors are barely touching it.",
     "source": "Dark Reading",
     "zh": "AI Slop 不仅仅适用于社交媒体；它也破坏了网络攻击"
    },
    {
     "title": "Hackers exploit Collabora RCE flaw to backdoor Nextcloud servers",
     "link": "https://www.bleepingcomputer.com/news/security/hackers-exploit-collabora-rce-flaw-to-backdoor-nextcloud-servers/",
     "pubDate": "Thu, 15 Oct 2026 16:25:04 -0400",
     "summary": "Threat actors are exploiting a critical command execution flaw, now tracked as CVE-2026-110447, in the Collabora Online - Built-in CODE Server app (richdocumentscode) for Nextcloud. [...]",
     "source": "BleepingComputer",
     "zh": "黑客利用 Collabora RCE 漏洞为 Nextcloud 服务器添加后门"
    },
    {
     "title": "Critical PwnEscape Linux Kernel Vulnerability Lets Guest VMs Read Host Memory",
     "link": "https://thehackernews.com/2026/10/critical-pwnescape-linux-kernel.html",
     "pubDate": "Fri, 16 Oct 2026 01:54:36 +0530",
     "summary": "A newly disclosed critical flaw in the Linux kernel allows code inside a virtual machine to read memory on the host computer it runs on. A researcher demonstrated the leak against Vercel's live cloud sandboxes, and Vercel confirmed it. The flaw, now tracked as CVE-2026-99999 and nicknamed PwnEscape,",
     "source": "The Hacker News",
     "zh": "严重的 PwnEscape Linux 内核漏洞可让来宾虚拟机读取主机内存"
    },
    {
     "title": "Android gets AI defenses against messaging scams, fake calls",
     "link": "https://www.bleepingcomputer.com/news/security/android-gets-ai-defenses-against-messaging-scams-fake-calls/",
     "pubDate": "Thu, 15 Oct 2026 15:48:43 -0400",
     "summary": "Google announced new AI-powered defenses against scam messages and call-forwarding abuse on Android, currently rolling out to eligible devices. [...]",
     "source": "BleepingComputer",
     "zh": "Android 获得针对消息诈骗和虚假电话的人工智能防御"
    },
    {
     "title": "ThreatsDay: Adobe RCE, DNS Wallet Theft, NVIDIA Container Escape, Self-Healing Backdoor + 23 More",
     "link": "https://thehackernews.com/2026/10/threatsday-adobe-rce-dns-wallet-theft.html",
     "pubDate": "Fri, 16 Oct 2026 00:19:33 +0530",
     "summary": "Someone built a tool to steal data, then decided it should scare the victim for fun. Yes, that’s an actual feature. And somehow, it fits right in with this week's security stories. The rest gets interesting in different ways. A small permission can lead to a big theft. A trusted login can hide the w",
     "source": "The Hacker News",
     "zh": "ThreatsDay：Adobe RCE、DNS 钱包盗窃、NVIDIA 容器逃逸、自我修复后门 + 23 个其他"
    },
    {
     "title": "Hackers hijack D-Link, Ubiquiti devices to resell your stolen bandwidth",
     "link": "https://www.bleepingcomputer.com/news/security/hackers-hijack-d-link-ubiquiti-devices-to-resell-your-stolen-bandwidth/",
     "pubDate": "Thu, 15 Oct 2026 14:20:59 -0400",
     "summary": "A proxyjacking campaign has impacted devices in 34 countries, monetizing victims' internet connections through a commercial residential proxy network. [...]",
     "source": "BleepingComputer",
     "zh": "黑客劫持 D-Link、Ubiquiti 设备以转售被盗带宽"
    },
    {
     "title": "Context Is King in the Fight Against Modern Cyberattacks",
     "link": "https://www.securityweek.com/context-is-king-in-the-fight-against-modern-cyberattacks/",
     "pubDate": "Thu, 15 Oct 2026 17:42:50 +0000",
     "summary": "Contextual defense helps security teams connect the signals, anticipate what comes next, and stop threats before they escalate. The post Context Is King in the Fight Against Modern Cyberattacks appeared first on SecurityWeek .",
     "source": "SecurityWeek",
     "zh": "在对抗现代网络攻击时，上下文才是王道"
    },
    {
     "title": "Fake Arch Linux packages push malware with root privileges",
     "link": "https://www.bleepingcomputer.com/news/security/fake-arch-linux-packages-push-malware-with-root-privileges/",
     "pubDate": "Thu, 15 Oct 2026 13:12:31 -0400",
     "summary": "A threat actor uploaded malicious packages to the Arch User Repository (AUR) that impersonated two popular helper tools, yay and paru. [...]",
     "source": "BleepingComputer",
     "zh": "假冒 Arch Linux 软件包以 root 权限推送恶意软件"
    },
    {
     "title": "Watch Now: Zero Trust Strategies Summit – All Sessions Available on Demand",
     "link": "https://www.securityweek.com/virtual-event-today-zero-trust-strategies-summit-2/",
     "pubDate": "Thu, 15 Oct 2026 16:51:34 +0000",
     "summary": "This summit is laser-focused on the next generation of Zero Trust and Identity security, moving beyond theory to deliver actionable strategies. The post Watch Now: Zero Trust Strategies Summit – All Sessions Available on Demand appeared first on SecurityWeek .",
     "source": "SecurityWeek",
     "zh": "立即观看：零信任策略峰会 - 所有会议均可点播"
    },
    {
     "title": "Citizen Lab Traces Zero-Click Candiru Spyware Infections at Al Jazeera to Targeted Online Ads",
     "link": "https://thehackernews.com/2026/10/citizen-lab-traces-zero-click-candiru.html",
     "pubDate": "Thu, 15 Oct 2026 21:31:57 +0530",
     "summary": "Candiru, an Israeli maker of spyware sold to governments, infected devices at the news network Al Jazeera through ordinary online ads, in attacks that needed no click or other action from the user, researchers at&nbsp;the Citizen Lab&nbsp;said Thursday. The hidden attack code ran the moment an ad lo",
     "source": "The Hacker News",
     "zh": "公民实验室将半岛电视台的零点击 Candiru 间谍软件感染追溯到有针对性的在线广告"
    },
    {
     "title": "Silent Lynx Exploits WinRAR Flaw to Deploy Reverse Shell in CIS Government Attacks",
     "link": "https://thehackernews.com/2026/10/silent-lynx-exploits-winrar-flaw-to.html",
     "pubDate": "Thu, 15 Oct 2026 21:30:26 +0530",
     "summary": "The threat actor known as Silent Lynx has been attributed to a fresh set of attacks targeting government organizations across the Commonwealth of Independent States (CIS). The activity, observed from June 2025 through August 2026, involves four different infection chains that make use of macro-enabl",
     "source": "The Hacker News",
     "zh": "Silent Lynx 利用 WinRAR 缺陷在独联体政府攻击中部署反向 Shell"
    },
    {
     "title": "Vulnerability Management Isn't About the Score — It's About How It Applies to You",
     "link": "https://www.darkreading.com/cybersecurity-operations/vulnerability-management-isnt-about-the-score-its-about-how-it-applies-to-you",
     "pubDate": "Thu, 15 Oct 2026 15:17:18 GMT",
     "summary": "Organizations need to move away from vendor-assigned, theoretical scores toward real exploit data specific to their environments.",
     "source": "Dark Reading",
     "zh": "漏洞管理不是关于分数，而是关于它如何应用于您"
    },
    {
     "title": "UK Legal Aid Agency Hack Scope Widens After Forensic Review",
     "link": "https://www.securityweek.com/uk-legal-aid-agency-hack-scope-widens-after-forensic-review/",
     "pubDate": "Thu, 15 Oct 2026 14:22:34 +0000",
     "summary": "Most of the data is related to applications, claims, and payments submitted between 2007 and 2025. The post UK Legal Aid Agency Hack Scope Widens After Forensic Review appeared first on SecurityWeek .",
     "source": "SecurityWeek",
     "zh": "英国法律援助机构黑客范围在法医审查后扩大"
    },
    {
     "title": "Help TDS Linked to Hotejka as 20,000+ Cloudflare Pages Domains Host Tech Support Scams",
     "link": "https://thehackernews.com/2026/10/help-tds-linked-to-hotejka-as-20000.html",
     "pubDate": "Thu, 15 Oct 2026 19:41:36 +0530",
     "summary": "A long-running Traffic Distribution System (TDS) known as Help TDS to a Russian-language affiliate program called Hotejka, which appears to be a rebrand of a traffic monetization operation dubbed ROI777. Help TDS is assessed to be active since at least 2017, offering PHP code templates to partners a",
     "source": "The Hacker News",
     "zh": "帮助 TDS 链接到 Hotejka 作为 20,000 多个 Cloudflare 页面域托管技术支持诈骗"
    },
    {
     "title": "Is AI pentesting as good as a human pentester?",
     "link": "https://www.bleepingcomputer.com/news/security/is-ai-pentesting-as-good-as-a-human-pentester/",
     "pubDate": "Thu, 15 Oct 2026 10:01:11 -0400",
     "summary": "AI pentesting can uncover vulnerabilities missed by human testers, but it also has limitations in consistency, risk assessment, and understanding business context. Intruder compares the strengths and weaknesses of both approaches and explains where AI agents can improve security testing. [...]",
     "source": "BleepingComputer",
     "zh": "人工智能渗透测试和人类渗透测试一样好吗？"
    },
    {
     "title": "Microsoft: Windows Server 2022 reached end of mainstream support",
     "link": "https://www.bleepingcomputer.com/news/microsoft/microsoft-windows-server-2022-reached-end-of-mainstream-support/",
     "pubDate": "Thu, 15 Oct 2026 09:18:36 -0400",
     "summary": "Microsoft announced that Windows Server 2022 has reached the end of mainstream support and will remain in extended support until October 2031. [...]",
     "source": "BleepingComputer",
     "zh": "微软：Windows Server 2022已结束主流支持"
    },
    {
     "title": "NGINX Fixes 5 Flaws, Including Possible RCE and a TLS Bug That May Skip Client-Cert Checks",
     "link": "https://thehackernews.com/2026/10/nginx-fixes-5-flaws-including-possible.html",
     "pubDate": "Thu, 15 Oct 2026 18:28:05 +0530",
     "summary": "NGINX released&nbsp;versions 1.30.6 and 1.31.7&nbsp;on October 14 to fix five vulnerabilities, one of them present in every release since May 2005. There are three memory bugs that F5, the company behind NGINX, says could crash a worker process or possibly let an attacker run code, and each requires",
     "source": "The Hacker News",
     "zh": "NGINX 修复了 5 个缺陷，包括可能的 RCE 和可能跳过客户端证书检查的 TLS 错误"
    },
    {
     "title": "Supermarket Refrigeration Attack Widens to Copeland, Dixell Controllers",
     "link": "https://www.securityweek.com/supermarket-refrigeration-attack-widens-to-copeland-dixell-controllers/",
     "pubDate": "Thu, 15 Oct 2026 12:50:42 +0000",
     "summary": "Roughly 700 French supermarkets were hit by the cyberattacks, for which no group has claimed responsibility. The post Supermarket Refrigeration Attack Widens to Copeland, Dixell Controllers appeared first on SecurityWeek .",
     "source": "SecurityWeek",
     "zh": "超市制冷攻击扩大到 Copeland、Dixell 控制器"
    },
    {
     "title": "CikaBika Bot RAT Uses Discord for C&C",
     "link": "https://www.securityweek.com/cikabika-bot-rat-uses-discord-for-cc/",
     "pubDate": "Thu, 15 Oct 2026 11:25:58 +0000",
     "summary": "Delivered via phishing, the malware provides reconnaissance, remote execution, and data exfiltration capabilities. The post CikaBika Bot RAT Uses Discord for C&C appeared first on SecurityWeek .",
     "source": "SecurityWeek",
     "zh": "CikaBika Bot RAT 使用 Discord 进行命令与控制"
    },
    {
     "title": "Novel Android RAT ‘Hirudo’ Replaces Banking Apps With Trojanized Copies",
     "link": "https://www.securityweek.com/novel-android-banking-rat-hirudo-replaces-banking-apps-with-trojanized-copies/",
     "pubDate": "Thu, 15 Oct 2026 10:15:32 +0000",
     "summary": "The Hirudo malware combines elements of a traditional banking trojan and a full-featured RAT. The post Novel Android RAT ‘Hirudo’ Replaces Banking Apps With Trojanized Copies appeared first on SecurityWeek .",
     "source": "SecurityWeek",
     "zh": "新型 Android RAT “Hirudo” 用木马副本取代银行应用程序"
    },
    {
     "title": "EU Grocers Pay a Steep Price for Unpatched Fridge Firmware",
     "link": "https://www.darkreading.com/ics-ot-security/eu-grocers-unpatched-fridge-firmware",
     "pubDate": "Thu, 15 Oct 2026 07:00:00 GMT",
     "summary": "Hundreds of stores lost millions of euros because they hired third parties to manage the outdated OT firmware running their cooling systems.",
     "source": "Dark Reading",
     "zh": "欧盟杂货商为未打补丁的冰箱固件付出高昂代价"
    },
    {
     "title": "Ivanti ICS Zero-Day Attacks Highlight Vendor Patching Hurdles",
     "link": "https://www.darkreading.com/vulnerabilities-threats/ivanti-ics-zero-day-attacks-vendor-patching",
     "pubDate": "Wed, 14 Oct 2026 21:20:13 GMT",
     "summary": "CVE-2026-104935, a high-severity authentication bypass + RCE vulnerability, was only partially discovered and patched in July, leaving an opening for threat actors to capitalize on.",
     "source": "Dark Reading",
     "zh": "Ivanti ICS 零日攻击凸显了供应商修补障碍"
    },
    {
     "title": "U.K. Sanctions Cryptomus for RU Money Laundering",
     "link": "https://krebsonsecurity.com/2026/10/u-k-sanctions-cryptomus-for-ru-money-laundering/",
     "pubDate": "Wed, 14 Oct 2026 14:22:49 +0000",
     "summary": "The United Kingdom has issued economic sanctions against Cryptomus, a chameleonic cryptocurrency platform that experts say serves as a major conduit for payments related to ransomware, narcotics, darknet markets, fraud and cybercrime services that are helping Russia circumvent existing financial res",
     "source": "Krebs on Security",
     "zh": "英国因 RU 洗钱行为制裁 Cryptomus"
    },
    {
     "title": "Microsoft Patches More Than 1,400 Security Flaws",
     "link": "https://krebsonsecurity.com/2026/10/microsoft-patches-more-than-1400-security-flaws/",
     "pubDate": "Tue, 13 Oct 2026 23:24:53 +0000",
     "summary": "Microsoft today issued updates to fix more than 1,400 security vulnerabilities in its Windows operating systems and other software. Today's epic patch batch dwarfs September's record of nearly 1,000 fixes, which was already about ten times the normal monthly patch load from Redmond.",
     "source": "Krebs on Security",
     "zh": "Microsoft 修补了 1,400 多个安全漏洞"
    },
    {
     "title": "FBI Arrests Executive at Ransomware Negotiation Firm",
     "link": "https://krebsonsecurity.com/2026/10/fbi-arrests-founder-of-ransomware-negotiation-firm/",
     "pubDate": "Sat, 10 Oct 2026 00:17:42 +0000",
     "summary": "Agents with the Federal Bureau of Investigation (FBI) on Thursday arrested the co-founder of a Canadian cybersecurity firm in connection with an investigation into the ShinyHunters hacking group that recently relieved the FBI of sensitive data on thousands of agents, multiple sources tell KrebsOnSec",
     "source": "Krebs on Security",
     "zh": "FBI 逮捕勒索软件谈判公司高管"
    }
   ]
  },
  {
   "key": "tech",
   "name": "科技 / 互联网",
   "accent": "#3b82f6",
   "total": 18,
   "items": [
    {
     "title": "专为《微软模拟飞行》打造：Echo XPC 手柄海外开订，179.99 美元、11 月发售",
     "link": "https://www.ithome.com/1/013/865.htm",
     "pubDate": "Fri, 16 Oct 2026 04:56:07 GMT",
     "summary": "IT之家 10 月 16 日消息，据外媒 NotebookCheck 今天（16 日）午间报道，Honeycomb 的飞行模拟手柄 Echo Aviation Controller XPC 现已在美国开放免费预约，售价 179.99 美元 （IT之家注：现汇率约合 1,206 元人民币） ，将于 11 月 20 日正式开售，随后陆续登陆其他市场。 该手柄兼容 XBOX 和 PC，配备隧道磁阻摇杆、霍尔效应方向舵拨片以及 4 个滑块，专为《微软模拟飞行》打造。 用户现可通过 Honeycomb 官网免费预约，暂时不能直接预购。此外，Honeycomb 欧洲商城也已上架 Echo XPC，标价 1",
     "source": "IT之家",
     "zh": "专为《微软模拟飞行》打造：Echo XPC 手柄海外开订，179.99 美元、11 月发售"
    },
    {
     "title": "Taiwan plans US industrial parks costing $2B to $4B each, starting with a Texas complex costing up to $4B, to build a supply chain for Nvidia, TSMC, and Foxconn (Bloomberg)",
     "link": "https://www.techmeme.com/261016/p1#a261016p1",
     "pubDate": "Fri, 16 Oct 2026 00:55:00 -0400",
     "summary": "Bloomberg : Taiwan plans US industrial parks costing $2B to $4B each, starting with a Texas complex costing up to $4B, to build a supply chain for Nvidia, TSMC, and Foxconn &nbsp; &mdash;&nbsp; Taiwan plans to raise billions of dollars to develop industrial parks in the US that would build a base fo",
     "source": "Techmeme",
     "zh": "台湾计划在美国建造每个工业园区，成本为 20 亿至 40 亿美元，从德克萨斯州的工业园区开始，成本高达 40 亿美元，为 Nvidia、台积电和富士康建立供应链（彭博社）"
    },
    {
     "title": "智元宣布与首批 20+ 高校合作，投入超 2 亿元建设具身智能人才生态",
     "link": "https://www.ithome.com/1/013/864.htm",
     "pubDate": "Fri, 16 Oct 2026 04:53:01 GMT",
     "summary": "IT之家 10 月 16 日消息，智元本周发布公告，“ 元苼生态发展计划 ”与国内众多高校开展合作，共建具身智能产教融合创新实践平台。 基于具身智能真实教学与科研需求， 智元将投入千台具身智能设备 ，双方将进行课程共建、课题共研、实训共育，打通产业前沿技术与高校人才培养的衔接壁垒。 首批合作的 20 多所高等院校包括北京大学、清华大学、浙江大学、华南理工大学、上海交通大学、西安交通大学、东南大学、中山大学等。 智元将投入包括精灵、灵犀、远征在内的轮式、半尺寸和全尺寸人形机器人以及酷拓四足机器人，投入机型覆盖了智元全系列本体产品，投入总数超过一千台，解决高校机器短缺的问题。 同时， 智元还将提供",
     "source": "IT之家",
     "zh": "智元宣布与首批 20+ 高校合作，投入超 2 亿元建设具身智能人才生态"
    },
    {
     "title": "上汽荣威家越 07 官宣 10 月 23 日上市，预售小订超 4 万台",
     "link": "https://www.ithome.com/1/013/863.htm",
     "pubDate": "Fri, 16 Oct 2026 04:51:06 GMT",
     "summary": "IT之家 10 月 16 日消息，上汽荣威今日宣布， 家越 07 预售小订破 40000 ，将于 10 月 23 日正式上市。 据IT之家此前报道， 上汽荣威家越 07 于 9 月 21 日开启预售 ，行业首搭豆包座舱助手，共推出三款车型，预售价 13.78 万元起。 220 激光雷达版 13.78 万元 320 激光雷达版 14.58 万元 320 激光雷达智尊版 15.25 万元 荣威家越 07 长宽高为 4900*1910*1745mm，轴距 2908mm；该车行业首搭豆包座舱助手，支持拟人化表情、Face ID 账号识别记忆、豆包 App 联动，还会方言外语，能实现一句话联动全车、多人",
     "source": "IT之家",
     "zh": "上汽荣威家越 07 官宣 10 月 23 日上市，预售小订超 4 万台"
    },
    {
     "title": "小米 REDMI Turbo 6/Max 手机曝光：内部代号 sofia / denver，有望 2027Q1 发布",
     "link": "https://www.ithome.com/1/013/862.htm",
     "pubDate": "Fri, 16 Oct 2026 04:50:06 GMT",
     "summary": "IT之家 10 月 16 日消息，科技媒体 ximitime 昨日（10 月 15 日）发布博文， 通过挖掘 Mi Code 代码，发现了 REDMI Turbo 6 及 REDMI Turbo 6 Max 两款手机的踪迹。 从已曝光的型号看，小米或将继续采用“同一硬件、不同品牌命名”的策略：中国市场的 REDMI Turbo 6 / Turbo 6 Max，预计在海外以 POCO X9 Pro / X9 Pro Max 的名义销售，而印度市场则可能同时出现 REDMI Turbo 与 POCO 两个系列。 在 REDMI Turbo 6 方面，在海外市场名为 POCO X9 Pro，内部代号",
     "source": "IT之家",
     "zh": "小米 REDMI Turbo 6/Max 手机曝光：内部代号 sofia / denver，有望 2027Q1 发布"
    },
    {
     "title": "百万台机器人之后，亚马逊还在解决取货难题",
     "link": "https://www.huxiu.com/article/4897982.html?f=rss",
     "pubDate": "Fri, 16 Oct 2026 12:44:31 +0800",
     "summary": "本文来自微信公众号： 具身志 ，编辑：|越十三，作者：仲庆元 报道提要 从让货架自己“走”，到让机械臂伸手取货，亚马逊用了十多年，把越来越多仓库工作交给机器人。但一件取不出的商品，仍可能让整座货架多跑一趟，以及人工介入。 货架已经会自己“走”了，员工取放最高处的商品时，却还要爬梯子。 亚马逊的仓库里，移动机器人能把整座货架送到取货工作站，但最上方约2.4米高的货格，依然超过人的舒适操作范围。按照亚马逊对Vulcan项目的介绍，让员工少爬这些梯子，正是研发这套机器人的起点。 工程师为此做了几年研究。他们要让机械臂往拥挤的货格里伸，挪开旁边的东西，还要控制力道，别把商品弄坏。可真实部署的记录显示，",
     "source": "虎嗅",
     "zh": "百万台机器人之后，亚马逊还在解决取货难题"
    },
    {
     "title": "长城 27 款坦克 500 开启预订：可选 Hi4-T / Hi4-Z 混动或燃油版",
     "link": "https://www.ithome.com/1/013/851.htm",
     "pubDate": "Fri, 16 Oct 2026 04:43:58 GMT",
     "summary": "IT之家 10 月 16 日消息，长城坦克 SUV 官方今日宣布，“全域科技豪华 SUV”27 款坦克 500 正式开启预订， 3000 元订金抵 9000 元购车尾款 。 新车延续现款主体外观设计，新增丹霞红车身配色；长宽高分别为 5078/1934/1905mm，轴距 2850mm；接近角 29°，离去角 24°，最小离地间隙 210mm。 智能驾驶辅助系统方面，新车搭载了 Coffee Pilot 4.0 智能辅助驾驶系统，配备了一颗 700TOPS 算力的 Thor-U 芯片和包括禾赛 192 线激光雷达在内的 27 个传感器。 内饰方面，新车采用环抱式座舱布局，配备内嵌式全液晶仪表，",
     "source": "IT之家",
     "zh": "长城 27 款坦克 500 开启预订：可选 Hi4-T / Hi4-Z 混动或燃油版"
    },
    {
     "title": "腾讯 WorkBuddy 和 CodeBuddy 宣布 DeepSeek 服务故障用户 7 天内积分全额返还，额外送 500 积分",
     "link": "https://www.ithome.com/1/013/848.htm",
     "pubDate": "Fri, 16 Oct 2026 04:37:32 GMT",
     "summary": "IT之家 10 月 16 日消息，DeepSeek 网页 / API 服务 10 月 15 日早间出现服务问题，经过近 5 个小时的修复恢复正常。对此，DeepSeek 官方开放平台宣布 补偿所有 API 用户 7 天内的消耗金额 。 腾讯 WorkBuddy 和 CodeBuddy 今日跟进发布补偿公告，针对在 WorkBuddy 或 CodeBuddy 国内版端内使用 DeepSeek 模型并受到影响的用户， 其在 10 月 8 日 ~14 日期间使用 DeepSeek 模型所消耗的积分将给予全额返还 ，7 个工作日内到账。 同时，考虑到此次事件对用户造成体验不佳影响， WorkBuddy",
     "source": "IT之家",
     "zh": "腾讯 WorkBuddy 和 CodeBuddy 宣布 DeepSeek 服务故障用户 7 天内积分全额返还，额外送 500 积分"
    },
    {
     "title": "AI融资，离“爆雷”有多远？",
     "link": "https://www.huxiu.com/article/4897979.html?f=rss",
     "pubDate": "Fri, 16 Oct 2026 12:32:45 +0800",
     "summary": "本文来自微信公众号： 财联社 ，作者：潇湘 AI交易如今面临的究竟是整体的信贷问题，还是仅仅是CoreWeave一家公司的问题？这可能是本周经历“惊魂一跳”后，所有AI领域的投资者必须思考的问题…… 随着韩国综合股价指数暴跌、新云概念股遭遇抛售，以及CoreWeave的债券跌入困境区间，德意志银行研究院做了一件显而易见、却一直没人去做的事：他们将美元投资级和高收益指数中每一只债券的收益率与到期期限绘制成图，并将其中的AI相关企业标上了颜色。 德意志银行在图表梳理后得出的结论是：“至少目前而言，与信用市场其他部分相比，AI相关融资成本并不算高得离谱，尽管在收益率曲线的远端，利差正在扩大。” 换言",
     "source": "虎嗅",
     "zh": "AI融资，离“爆雷”有多远？"
    },
    {
     "title": "AI概念股正在下跌，不妨看看这些板块来对冲风险",
     "link": "https://www.tmtpost.com/8170928.html",
     "pubDate": "Fri, 16 Oct 2026 12:30:35 +0800",
     "summary": "由于对人工智能的担忧，投资者正纷纷撤离科技股。不过，市场上的许多其他板块看起来仍是不错的投资选择。",
     "source": "钛媒体",
     "zh": "AI概念股正在下跌，不妨看看这些板块来对冲风险"
    },
    {
     "title": "电力设备的周期走到哪了？",
     "link": "https://www.tmtpost.com/8170781.html",
     "pubDate": "Fri, 16 Oct 2026 12:26:42 +0800",
     "summary": "超级周期里的中国份额机会。",
     "source": "钛媒体",
     "zh": "电力设备的周期走到哪了？"
    },
    {
     "title": "手机厂商的麻烦，AI背不了锅",
     "link": "https://www.tmtpost.com/8170793.html",
     "pubDate": "Fri, 16 Oct 2026 12:26:40 +0800",
     "summary": "等手机重新便宜下来，发布会照样热闹，新品配置仍会一年比一年漂亮。至于消费者会不会因此掏钱，恐怕还得看他手里的旧手机答不答应",
     "source": "钛媒体",
     "zh": "手机厂商的麻烦，AI背不了锅"
    },
    {
     "title": "亚马逊，Agent最严厉的父亲",
     "link": "https://www.tmtpost.com/8170852.html",
     "pubDate": "Fri, 16 Oct 2026 12:26:38 +0800",
     "summary": "别人家的Agent，禁止在我们这买东西。",
     "source": "钛媒体",
     "zh": "亚马逊，Agent最严厉的父亲"
    },
    {
     "title": "官宣虞书欣首日卖出6000万，拉夏贝尔又杀回来了？",
     "link": "https://www.huxiu.com/article/4897973.html?f=rss",
     "pubDate": "Fri, 16 Oct 2026 12:09:45 +0800",
     "summary": "本文来自微信公众号： 剁椒Spicy ，作者：剁椒团队 同日，拉夏贝尔正式官宣虞书欣为全球品牌代言人。官宣首日，全渠道总GMV高达6000万元，其中虞书欣同款单品贡献超2000万元，占总GMV三分之一，同款羽绒服与大衣现货售罄转入预售。 一边是话题度极高、以穿搭出圈的艺人。《云初令》拍摄期间，虞书欣贡献出86套不重复的上班穿搭。从千金风到辣妹装，她被戏称“内娱最会穿搭之人”；另一边是沉寂多年的老牌国产女装拉夏贝尔，曾被誉为中国版ZARA，巅峰期直营门店近9448家，2018年营收超100亿元，是内地首家A股+H股两地上市的服装企业。它想要借艺人的流量，把自己拉回大众视野。 对比虞书欣此前的代言",
     "source": "虎嗅",
     "zh": "官宣虞书欣首日卖出6000万，拉夏贝尔又杀回来了？"
    },
    {
     "title": "当企业微信遇上WorkBuddy，AI 办公真正的王炸组合出现了",
     "link": "https://www.tmtpost.com/8170778.html",
     "pubDate": "Fri, 16 Oct 2026 12:05:39 +0800",
     "summary": "企业微信 × WorkBuddy 实现双向打通，市场争了近两年的 AI 办公入口，腾讯给了一个最温和的答案。",
     "source": "钛媒体",
     "zh": "当企业微信遇上WorkBuddy，AI 办公真正的王炸组合出现了"
    },
    {
     "title": "Meta 发布Muse Spark Open，号称全美最强开源模型，但编程基测输给智谱、Kimi",
     "link": "https://www.huxiu.com/article/4897972.html?f=rss",
     "pubDate": "Fri, 16 Oct 2026 12:04:25 +0800",
     "summary": "本文来自微信公众号： InfoQ ，作者：冬梅，原文标题：《Meta 发布 Muse Spark Open，号称全美最强开源模型，但编程基测输给智谱、Kimi》 Meta将大型智能体模型带到了桌面设备上，但这次的“桌面”，需要两台高配置Mac Studio。 当地时间10月15日，Meta宣布开放Muse Spark Open模型权重，将软件工程、长程任务执行和多步推理作为主要应用方向。与模型权重一同受到关注的，是其本地运行方案：通过MLX框架，开发者可以在两台搭载M5 Ultra的Mac Studio上部署这一模型。 Meta将其定位为迄今能力最强的美国开放权重模型。 Muse Spark ",
     "source": "虎嗅",
     "zh": "Meta 发布Muse Spark Open，号称全美最强开源模型，但编程基测输给智谱、Kimi"
    },
    {
     "title": "半导体正变得越来越复杂，这家分拆出来的公司提供了一条轻松获利的路",
     "link": "https://www.tmtpost.com/8170888.html",
     "pubDate": "Fri, 16 Oct 2026 11:55:36 +0800",
     "summary": "随着投资者对Qnity Electronics的产品及其在供应链中所起作用的理解不断加深，Qnity Electronics的股价可能上涨40%。",
     "source": "钛媒体",
     "zh": "半导体正变得越来越复杂，这家分拆出来的公司提供了一条轻松获利的路"
    },
    {
     "title": "被半个互联网拒绝，豆包手机有解吗？",
     "link": "https://www.huxiu.com/article/4897966.html?f=rss",
     "pubDate": "Fri, 16 Oct 2026 11:51:58 +0800",
     "summary": "本文来自微信公众号： 定焦One ，作者：定焦One团队，编辑：魏佳 谁也不想被AI绕过。 定焦One（dingjiaoone）原创 10月14日，豆包手机助手为期30天的规则公示期结束，一份多达155款App的拒绝名单也随之公布。 微信、淘宝、支付宝、美团等国民级应用都在其中，连DeepSeek、Kimi等AI应用也没有同意。这意味着，用户可以在豆包手机上正常下载、使用这些App，但想让AI替自己逛淘宝、发微信，仍然行不通。 豆包SAEP协议部分拒绝操作应用清单 此前的一代工程样机靠读屏和模拟点击“硬闯”各大App，很快被微信、淘宝的风控拦下。一个月前开售的二代手机NaviX Ultra换了",
     "source": "虎嗅",
     "zh": "被半个互联网拒绝，豆包手机有解吗？"
    },
    {
     "title": "Austin-based RapidCanvas, which uses agents to help businesses build custom AI tools, raised a ∼$29M Series B led by Vertex Ventures and Hitachi Ventures (Chris Metinko/Axios)",
     "link": "https://www.techmeme.com/261015/p61#a261015p61",
     "pubDate": "Thu, 15 Oct 2026 23:40:00 -0400",
     "summary": "Chris Metinko / Axios : Austin-based RapidCanvas, which uses agents to help businesses build custom AI tools, raised a &sim;$29M Series B led by Vertex Ventures and Hitachi Ventures &nbsp; &mdash;&nbsp; RapidCanvas, which uses agents to help businesses build and deploy custom AI applications, has ra",
     "source": "Techmeme",
     "zh": "总部位于奥斯汀的 RapidCanvas 使用代理帮助企业构建定制 AI 工具，筹集了约 2900 万美元的 B 轮融资，由 Vertex Ventures 和 Hitachi Ventures 领投（Chris Metinko/Axios）"
    },
    {
     "title": "A Tesla Flying Car? I Don’t Know, Man",
     "link": "https://www.wired.com/story/tesla-flying-car-faa/",
     "pubDate": "Fri, 16 Oct 2026 03:18:30 +0000",
     "summary": "The Federal Aviation Administration will likely have thoughts about the Tesla Roadster 2’s ability to leave the ground.",
     "source": "WIRED",
     "zh": "特斯拉飞行汽车？我不知道，伙计"
    },
    {
     "title": "Sources detail Nscale&apos;s setbacks ahead of an IPO at up to a $35B valuation, including a six-month delay in Norway and penalties owed to Microsoft and ByteDance (Bloomberg)",
     "link": "https://www.techmeme.com/261015/p60#a261015p60",
     "pubDate": "Thu, 15 Oct 2026 23:15:02 -0400",
     "summary": "Bloomberg : Sources detail Nscale's setbacks ahead of an IPO at up to a $35B valuation, including a six-month delay in Norway and penalties owed to Microsoft and ByteDance &nbsp; &mdash;&nbsp; One flagship AI data center in Norway is six months behind schedule, with workers set to be housed in a flo",
     "source": "Techmeme",
     "zh": "消息人士详细介绍了 Nscale 在估值高达 35B 美元的 IPO 之前遇到的挫折，包括在挪威推迟六个月以及对微软和字节跳动的处罚 (彭博社)"
    },
    {
     "title": "Microsoft unveils MAI-Base-2, a MoE model with 2.8T total and 80B active parameters, claiming 4x-12x more pretraining FLOPs-efficiency than DeepSeek-V4-Pro-Base (Microsoft AI)",
     "link": "https://www.techmeme.com/261015/p59#a261015p59",
     "pubDate": "Thu, 15 Oct 2026 22:20:01 -0400",
     "summary": "Microsoft AI : Microsoft unveils MAI-Base-2, a MoE model with 2.8T total and 80B active parameters, claiming 4x-12x more pretraining FLOPs-efficiency than DeepSeek-V4-Pro-Base &nbsp; &mdash;&nbsp; In June, we announced MAI-Thinking-1, a general-purpose foundation model post-trained on top of MAI-Bas",
     "source": "Techmeme",
     "zh": "微软推出 MAI-Base-2，这是一种总容量为 2.8T、活动参数为 80B 的 MoE 模型，声称预训练 FLOP 效率比 DeepSeek-V4-Pro-Base (Microsoft AI) 高 4 倍到 12 倍"
    },
    {
     "title": "Comparing Chromium Development at Google and Igalia",
     "link": "https://lwn.net/Articles/1094721/",
     "pubDate": "Fri, 16 Oct 2026 01:56:37 +0000",
     "summary": "Article URL: https://lwn.net/Articles/1094721/ Comments URL: https://news.ycombinator.com/item?id=50112887 Points: 16 # Comments: 0",
     "source": "Hacker News",
     "zh": "比较 Google 和 Igalia 的 Chromium 开发"
    },
    {
     "title": "Any window from your Mac, on your iPhone and iPad",
     "link": "https://github.com/Saffsanity/sill",
     "pubDate": "Fri, 16 Oct 2026 01:43:17 +0000",
     "summary": "Article URL: https://github.com/Saffsanity/sill Comments URL: https://news.ycombinator.com/item?id=50112739 Points: 73 # Comments: 9",
     "source": "Hacker News",
     "zh": "Mac、iPhone 和 iPad 上的任何窗口"
    },
    {
     "title": "OpenAI continues to work to grow its ad business in ChatGPT, cutting ad rates, chasing small and midsize businesses, and hiring some new talent from Meta (Alix Coutures/The Information)",
     "link": "https://www.techmeme.com/261015/p58#a261015p58",
     "pubDate": "Thu, 15 Oct 2026 21:30:03 -0400",
     "summary": "Alix Coutures / The Information : OpenAI continues to work to grow its ad business in ChatGPT, cutting ad rates, chasing small and midsize businesses, and hiring some new talent from Meta &nbsp; &mdash;&nbsp; As OpenAI has jockeyed with Anthropic to win over developers with new models and tools this",
     "source": "Techmeme",
     "zh": "OpenAI 继续致力于发展 ChatGPT 中的广告业务，降低广告费率，追逐中小型企业，并从 Meta 聘请一些新人才（Alix Coutures/The Information）"
    },
    {
     "title": "The Tesla Roadster 2 Is Here—and It Flies",
     "link": "https://www.wired.com/story/tesla-roadster-2-launch/",
     "pubDate": "Fri, 16 Oct 2026 01:22:51 +0000",
     "summary": "The automaker unveiled its next luxury sports car at an event in Texas. It has thrusters on it that can send it airborne.",
     "source": "WIRED",
     "zh": "Tesla Roadster 2 来了——而且它正在飞翔"
    },
    {
     "title": "The White House&apos;s AI task force begins its 120-day window to evaluate AI, including producing a risk report, implementing the White House Accord on SI, and more (Ashley Gold/Semafor)",
     "link": "https://www.techmeme.com/261015/p57#a261015p57",
     "pubDate": "Thu, 15 Oct 2026 21:00:14 -0400",
     "summary": "Ashley Gold / Semafor : The White House's AI task force begins its 120-day window to evaluate AI, including producing a risk report, implementing the White House Accord on SI, and more &nbsp; &mdash;&nbsp; The White House's AI task force has formally adopted its charter, kicking off the short 120-da",
     "source": "Techmeme",
     "zh": "白宫人工智能工作组开始为期 120 天的人工智能评估窗口，包括编写风险报告、实施 SI 白宫协议等（Ashley Gold/Semafor）"
    },
    {
     "title": "Thank You, Deno",
     "link": "https://www.vlt.io/blog/competition-keeps-javascript-moving",
     "pubDate": "Fri, 16 Oct 2026 00:52:40 +0000",
     "summary": "Article URL: https://www.vlt.io/blog/competition-keeps-javascript-moving Comments URL: https://news.ycombinator.com/item?id=50112331 Points: 39 # Comments: 3",
     "source": "Hacker News",
     "zh": "谢谢你，德诺"
    },
    {
     "title": "RPKI now protects 70% of internet routes",
     "link": "https://ipinfo.io/blog/rpki-protects-70-internet-routes",
     "pubDate": "Fri, 16 Oct 2026 00:52:35 +0000",
     "summary": "Article URL: https://ipinfo.io/blog/rpki-protects-70-internet-routes Comments URL: https://news.ycombinator.com/item?id=50112330 Points: 83 # Comments: 23",
     "source": "Hacker News",
     "zh": "RPKI 现在保护 70% 的互联网路由"
    },
    {
     "title": "Business accounts will consent to Meta scraping their websites Starting Oct. 30",
     "link": "https://www.niemanlab.org/2026/10/metas-new-commercial-terms-will-allow-the-scraping-of-news-sites-legal-experts-say/",
     "pubDate": "Thu, 15 Oct 2026 23:37:42 +0000",
     "summary": "Article URL: https://www.niemanlab.org/2026/10/metas-new-commercial-terms-will-allow-the-scraping-of-news-sites-legal-experts-say/ Comments URL: https://news.ycombinator.com/item?id=50111852 Points: 112 # Comments: 44",
     "source": "Hacker News",
     "zh": "从 10 月 30 日开始，企业帐户将同意 Meta 抓取其网站"
    }
   ]
  },
  {
   "key": "consumer",
   "name": "消费电子 / 数码",
   "accent": "#a855f7",
   "total": 7,
   "items": [
    {
     "title": "Samsung Galaxy A38's camera details surface",
     "link": "https://www.gsmarena.com/samsung_galaxy_a38_camera_details_surface-news-75063.php",
     "pubDate": "Fri, 16 Oct 2026 05:41:02 +0200",
     "summary": "Yesterday, we learned that the Samsung Galaxy A58, expected to arrive next March or April, will feature the same camera setup as the Galaxy A57, at least in terms of resolution. The same source has now shared details about the Galaxy A38's cameras. The source claims that the Samsung Galaxy A38 will ",
     "source": "GSMArena",
     "zh": "三星Galaxy A38的相机细节浮出水面"
    },
    {
     "title": "RedMagic 12 Pro+ launches with RGB liquid cooling and a 185Hz screen",
     "link": "https://www.gsmarena.com/redmagic_12_pro_launches_with_rgb_liquid_cooling_and_a_185hz_screen-news-75070.php",
     "pubDate": "Fri, 16 Oct 2026 04:31:02 +0200",
     "summary": "Right on schedule, the RedMagic 12 Pro+ was unveiled in China today, and it comes with what the company says is the industry's first 185Hz under-display 'true full-screen' display, not to mention the already teased RGB liquid-cooling system. It is of course powered by the Snapdragon 8 Elite Extreme ",
     "source": "GSMArena",
     "zh": "RedMagic 12 Pro+ 发布，配备 RGB 液冷和 185Hz 屏幕"
    },
    {
     "title": "Relive Tesla's ridiculous(ly fun) Roadster stunt show",
     "link": "https://www.engadget.com/2288448/relive-tesla-ridiculously-fun-roadster-stunt-show/",
     "pubDate": "Fri, 16 Oct 2026 02:24:52 +0000",
     "summary": "Tesla's Roadster event was pretty exciting, to say the least.",
     "source": "Engadget",
     "zh": "重温特斯拉荒谬（非常有趣）的 Roadster 特技表演"
    },
    {
     "title": "让读书笔记不再吃灰：我做了一款跨平台书摘管理工具",
     "link": "https://sspai.com/post/115688",
     "pubDate": "Fri, 16 Oct 2026 10:18:38 +0800",
     "summary": "从微信读书的 3 万条划线出发，我做了一个让阅读笔记重新回到日常的 App。 查看全文",
     "source": "少数派",
     "zh": "让读书笔记不再吃灰：我做了一款跨平台书摘管理工具"
    },
    {
     "title": "Tesla's redesigned Roadster has a cold-gas thruster option, but you'll need $250,000 just to reserve it",
     "link": "https://www.engadget.com/2288437/teslas-redesigned-roadster-cold-gas-thruster-option-reservation/",
     "pubDate": "Fri, 16 Oct 2026 01:48:05 +0000",
     "summary": "Tesla has finally unveiled the next-generation Roadster.",
     "source": "Engadget",
     "zh": "特斯拉重新设计的 Roadster 有冷气推进器选项，但预订它就需要 25 万美元"
    },
    {
     "title": "Here's when Apple will show off its touchscreen MacBooks and the OLED iPad mini",
     "link": "https://www.gsmarena.com/heres_when_apple_will_show_off_its_touchscreen_macbooks_and_the_oled_ipad_mini-news-75065.php",
     "pubDate": "Fri, 16 Oct 2026 03:31:02 +0200",
     "summary": "Last week, Bloomberg's Mark Gurman reported that Apple is planning a second October launch following its smart home event, and now he has more details on what it will look like. According to Gurman, Apple is inviting some media to an all-day product launch experience on October 28 in Los Angeles. Th",
     "source": "GSMArena",
     "zh": "苹果将​​在此时展示其触摸屏 MacBook 和 OLED iPad mini"
    },
    {
     "title": "Yashica’s 1950s throwback micro-camera will cost $119",
     "link": "https://www.dpreview.com/news/yashica-y16-official-announcement-specs/",
     "pubDate": "Fri, 16 Oct 2026 01:14:40 +0000",
     "summary": "The company has fully announced the Y16 with specs, price and a release date",
     "source": "DPReview",
     "zh": "Yashica 的 1950 年代复古微型相机售价 119 美元"
    },
    {
     "title": "Gemini 4 Argon is now rolling out to Google’s Antigravity for AI Pro subscribers",
     "link": "https://9to5google.com/2026/10/15/gemini-4-argon-is-now-rolling-out-to-googles-antigravity-for-ai-pro-subscribers/",
     "pubDate": "Fri, 16 Oct 2026 01:10:00 +0000",
     "summary": "Google is now rolling out support for Gemini 4 Argon to Antigravity, its AI coding tool. more…",
     "source": "9to5Google",
     "zh": "Gemini 4 Argon 现已向 AI Pro 订阅者推出 Google 反重力服务"
    },
    {
     "title": "‘Tenzing’ premieres on Apple TV, starring Genden Phuntsok, Tom Hiddleston and Willem Dafoe",
     "link": "https://9to5mac.com/2026/10/15/tenzing-premieres-on-apple-tv-starring-tom-hiddleston-and-willem-dafoe/",
     "pubDate": "Fri, 16 Oct 2026 01:00:14 +0000",
     "summary": "The newest Apple Original Films feature, “ Tenzing ,” is now available to Apple TV subscribers. Watch the trailer below. more…",
     "source": "9to5Mac",
     "zh": "《丹增》在​​ Apple TV 首播，由根登彭措、汤姆·希德勒斯顿和威廉·达福主演"
    },
    {
     "title": "Apple lists unreleased iPad mini accessory ahead of rumored launch",
     "link": "https://9to5mac.com/2026/10/15/apple-lists-unreleased-ipad-mini-accessory-ahead-of-rumored-launch/",
     "pubDate": "Fri, 16 Oct 2026 00:49:10 +0000",
     "summary": "While Apple is rumored to be gearing up to introduce an OLED iPad mini later this month, an oversight on the company’s French site might have just confirmed the product’s existence. Here are the details. more…",
     "source": "9to5Mac",
     "zh": "苹果在传闻发布前列出了未发布的 iPad mini 配件"
    },
    {
     "title": "Tipster says Galaxy S27 Ultra will have slightly thicker bezels than S26 Ultra",
     "link": "https://www.gsmarena.com/tipster_says_galaxy_s27_ultra_will_have_slightly_thicker_bezels_than_s26_ultra-news-75068.php",
     "pubDate": "Fri, 16 Oct 2026 02:31:02 +0200",
     "summary": "Samsung’s upcoming Galaxy S27 Ultra is rumored to have nearly the same dimensions as its predecessor. However, according to a tipster, the new flagship could feature slightly thicker display bezels than the Galaxy S26 Ultra. Tipster Ice Universe claims that the Galaxy S27 Ultra will feature 1.28mm-t",
     "source": "GSMArena",
     "zh": "Tipster称Galaxy S27 Ultra的边框将比S26 Ultra稍厚"
    },
    {
     "title": "派早报：Apple 智能国行 Beta 版本将于本月晚些时候上线测试版本",
     "link": "https://sspai.com/post/116355",
     "pubDate": "Fri, 16 Oct 2026 08:23:12 +0800",
     "summary": "SpaceXAI 发布 Grok Voice 3.0 语音模型、微软发布 XBOX Nano 口袋手柄等。 查看全文",
     "source": "少数派",
     "zh": "派早报：Apple 智能国行 Beta 版本将于本月晚些时候上线测试版本"
    },
    {
     "title": "Amazon launches Bee Frontier AI wearable and Bee Eclipse phone attachment",
     "link": "https://www.gsmarena.com/amazon_launches_bee_frontier_ai_wearable_and_bee_eclipse_phone_attachment-news-75073.php",
     "pubDate": "Fri, 16 Oct 2026 01:33:02 +0200",
     "summary": "Amazon today introduced two new Bee personal AI devices: the Bee Frontier wearable and the Bee Eclipse phone attachment. Both are meant to listen to your conversations and turn them into summaries, to-dos, reminders, and insights in the Bee app. You can wear the Frontier on a soft silicone wristband",
     "source": "GSMArena",
     "zh": "亚马逊推出 Bee Frontier AI 可穿戴设备和 Bee Eclipse 手机附件"
    },
    {
     "title": "Withings wants new users to pay $100 a year to sync with Apple Health",
     "link": "https://www.engadget.com/2288346/withings-wants-new-users-to-pay-100-a-year-to-sync-with-apple-health/",
     "pubDate": "Thu, 15 Oct 2026 23:02:04 +0000",
     "summary": "The smart health company is gating third-party app syncing to its own subscription plan for new users.",
     "source": "Engadget",
     "zh": "Withings 希望新用户每年支付 100 美元才能与 Apple Health 同步"
    },
    {
     "title": "Boost Mobile teams up with Mike Tyson for its new ad campaign",
     "link": "https://www.gsmarena.com/boost_mobile_teams_up_with_mike_tyson_for_its_new_ad_campaign-news-75071.php",
     "pubDate": "Fri, 16 Oct 2026 00:31:02 +0200",
     "summary": "Boost Mobile today announced a partnership with Mike Tyson, who will front its new US campaign called \"What's Your Plan?\". The name plays on the boxer's famous quote \"Everybody has a plan until they get punched in the mouth\", and in this case the punch is hidden fees, sudden rate hikes, and locked-i",
     "source": "GSMArena",
     "zh": "Boost Mobile 与迈克·泰森 (Mike Tyson) 合作开展新广告活动"
    },
    {
     "title": "Strava announces coach-designed strength workouts with live set and rep tracking",
     "link": "https://9to5mac.com/2026/10/15/strava-announces-coach-designed-strength-workouts-with-live-set-and-rep-tracking/",
     "pubDate": "Thu, 15 Oct 2026 22:09:39 +0000",
     "summary": "Exercise-tracking platform Strava announced today a new expansion of its strength training features, adding coach-designed guided workouts with live set and rep tracking. Here are the details. more…",
     "source": "9to5Mac",
     "zh": "Strava 宣布教练设计的力量训练，包括实时训练和重复次数跟踪"
    },
    {
     "title": "The UK may expand the BBC license fee, charging residents to watch streaming services",
     "link": "https://www.engadget.com/2288294/the-uk-may-expand-the-bbc-license-fee-charging-residents-to-watch-streaming-services/",
     "pubDate": "Thu, 15 Oct 2026 21:35:08 +0000",
     "summary": "If the proposal is enacted, it could cost $240 a year to watch YouTube in the UK.",
     "source": "Engadget",
     "zh": "英国可能提高BBC牌照费，向居民收看流媒体服务收费"
    },
    {
     "title": "9to5Mac Daily: October 15, 2026 – OpenAI vs Apple, iPhone Duo details",
     "link": "https://9to5mac.com/2026/10/15/daily-october-15-2026/",
     "pubDate": "Thu, 15 Oct 2026 21:25:15 +0000",
     "summary": "Listen to a recap of the top stories of the day from 9to5Mac . 9to5Mac Daily is available on iTunes and Apple’s Podcasts app , Stitcher , TuneIn , Google Play , or through our dedicated RSS feed for Overcast and other podcast players. Sponsored by Backblaze : Backup you can rely on. Save 20% with co",
     "source": "9to5Mac",
     "zh": "9to5Mac Daily：2026 年 10 月 15 日 – OpenAI 与 Apple、iPhone Duo 的详细信息"
    },
    {
     "title": "WaPo: Apple revealed as one of the top donors to Trump’s White House ballroom",
     "link": "https://9to5mac.com/2026/10/15/wapo-apple-revealed-as-one-of-the-top-donors-to-trumps-white-house-ballroom/",
     "pubDate": "Thu, 15 Oct 2026 21:22:49 +0000",
     "summary": "A new investigation by The Washington Post reveals that Apple and Nvidia each pledged $25 million toward Trump’s new White House ballroom, making them two of the project’s largest donors. Here are the details. more…",
     "source": "9to5Mac",
     "zh": "WaPo：苹果公司被揭露为特朗普白宫宴会厅的最大捐助者之一"
    },
    {
     "title": "Google reminds Android users of an overlooked scam detection tool",
     "link": "https://www.androidauthority.com/circle-to-search-google-lens-scam-text-detection-3724020/",
     "pubDate": "Thu, 15 Oct 2026 21:16:40 +0000",
     "summary": "Circle to Search and Google Lens can also help you detect scams!",
     "source": "Android Authority",
     "zh": "谷歌提醒 Android 用户注意一个被忽视的诈骗检测工具"
    },
    {
     "title": "Snapseed looks like it’s working on its own Magic Eraser upgrade",
     "link": "https://www.androidauthority.com/snapseed-erase-tool-3724025/",
     "pubDate": "Thu, 15 Oct 2026 21:05:31 +0000",
     "summary": "An in-development Erase tool could be an upgrade from Healing.",
     "source": "Android Authority",
     "zh": "Snapseed 看起来正在开发自己的 Magic Eraser 升级版"
    },
    {
     "title": "Apple Sports update improves Live Activity support, adds soccer leagues from around the world",
     "link": "https://9to5mac.com/2026/10/15/apple-sports-update-improves-live-activity-support-adds-soccer-leagues-from-around-the-world/",
     "pubDate": "Thu, 15 Oct 2026 20:48:00 +0000",
     "summary": "Apple updated its Apple Sports app today with improvements to Live Activities and support for five additional soccer leagues. Here are the details. more…",
     "source": "9to5Mac",
     "zh": "Apple Sports 更新改进了实时活动支持，添加了来自世界各地的足球联赛"
    },
    {
     "title": "ANBERNIC is quietly removing a controversial extra from its Android handhelds",
     "link": "https://www.androidauthority.com/anbernic-removing-bundled-microsd-cards-3724043/",
     "pubDate": "Thu, 15 Oct 2026 20:33:50 +0000",
     "summary": "The company is dropping microSD card bundle options just days after facing accusations of distributing pirated games.",
     "source": "Android Authority",
     "zh": "ANBERNIC 正在悄然从其 Android 手持设备中删除一项有争议的附加功能"
    },
    {
     "title": "NY congressman to introduce bill protecting video game ownership",
     "link": "https://www.engadget.com/2288193/ny-congressman-to-introduce-bill-protecting-video-game-ownership/",
     "pubDate": "Thu, 15 Oct 2026 20:15:05 +0000",
     "summary": "Representative Ritchie Torres wants the FTC to establish regulations ensuring you can play the games you've purchased.",
     "source": "Engadget",
     "zh": "纽约国会议员提出保护视频游戏所有权的法案"
    },
    {
     "title": "Sony just canceled a promised Android 17 update for one of its Xperia phones",
     "link": "https://9to5google.com/2026/10/15/sony-xperia-android-17-canceled-update/",
     "pubDate": "Thu, 15 Oct 2026 20:05:00 +0000",
     "summary": "Sony isn’t exactly known for speedy Android OS updates, but the company has now completely canceled an Android 17 update for one of its Xperia phones. more…",
     "source": "9to5Google",
     "zh": "索尼刚刚取消了其一款 Xperia 手机承诺的 Android 17 更新"
    },
    {
     "title": "Google updates Android earthquake alerts with more info, expands to 200+ regions",
     "link": "https://9to5google.com/2026/10/15/android-earthquake-alerts-update-regions/",
     "pubDate": "Thu, 15 Oct 2026 19:45:00 +0000",
     "summary": "Google is delivering an update to Android’s earthquake alerts system that will show more information while also expanding support to over 200 regions across the globe. more…",
     "source": "9to5Google",
     "zh": "谷歌更新 Android 地震警报，提供更多信息，扩展到 200 多个地区"
    },
    {
     "title": "FTC subpoenas OpenAI and Anthropic following safety failures",
     "link": "https://www.engadget.com/2288104/ftc-subpoenas-open-ai-and-anthropic-following-safety-failures/",
     "pubDate": "Thu, 15 Oct 2026 19:28:53 +0000",
     "summary": "The FTC is investigating possible consumer harms at two major AI companies.",
     "source": "Engadget",
     "zh": "FTC 因安全故障向 OpenAI 和 Anthropic 发出传票"
    },
    {
     "title": "Apple might just be Samsung’s best foldable salesperson yet",
     "link": "https://www.androidauthority.com/apple-iphone-duo-samsung-foldable-interest-3723977/",
     "pubDate": "Thu, 15 Oct 2026 19:03:26 +0000",
     "summary": "Samsung just got a free marketing boost.",
     "source": "Android Authority",
     "zh": "苹果可能是三星迄今为止最好的可折叠手机销售人员"
    },
    {
     "title": "The Godox A2 is a real flash for your phone",
     "link": "https://www.dpreview.com/news/godox-a2-phone-flash-announced/",
     "pubDate": "Thu, 15 Oct 2026 18:45:21 +0000",
     "summary": "The company is bringing its flash expertise to a whole new kind of camera.",
     "source": "DPReview",
     "zh": "Godox A2 是一款真正的手机闪光灯"
    },
    {
     "title": "Fairphone shares when Fairbuds 2 US sales are set to begin",
     "link": "https://www.androidauthority.com/fairbuds-2-us-sales-3723922/",
     "pubDate": "Thu, 15 Oct 2026 18:34:27 +0000",
     "summary": "The Fairbuds 2 have 7 user-replaceable components.",
     "source": "Android Authority",
     "zh": "Fairphone 在 Fairbuds 2 美国销售即将开始时分享"
    }
   ]
  },
  {
   "key": "macro",
   "name": "财经 / 宏观",
   "accent": "#eab308",
   "total": 13,
   "items": [
    {
     "title": "港股AI相关个股遭空头狙击 智谱月内卖空股数暴增近五倍",
     "link": "http://finance.eastmoney.com/news/1354,202610163898224134.html",
     "pubDate": "Fri, 16 Oct 2026 12:47:00 +0800",
     "summary": "进入10月以来，港股市场呈现弱势震荡格局，恒生科技指数在10月15日再度刷新年内新低。 伴随指数持续探底，全市场卖空力量在经历月初脉冲与中旬收敛后边际抬头，沽空主力高度聚焦于AI及科技 权重股 ，空头博弈情绪显著升温。 10月以来港股整体表现疲软，科技板块首当其冲。昨日(10月15日)，恒生科技指数跌势未止，盘中再度跌破前期支撑位，续创年内新低。市场悲观预期与外部扰动交织，压制了多头资金的做多意愿。 10月2日，全市场卖空成交占比一度飙升至27.34%，创2015年以来的历史第五高位，随后降温回落至13%—16%的常态区间。 金额反弹：10月15日，全市场绝对沽空金额再度走高，达321.87亿",
     "source": "东方财富股票",
     "zh": "港股AI相关个股遭空头狙击 智谱月内卖空股数暴增近五倍"
    },
    {
     "title": "一文读懂：AI融资离“爆雷”究竟有多远？",
     "link": "http://finance.eastmoney.com/news/1354,202610163898217522.html",
     "pubDate": "Fri, 16 Oct 2026 12:44:02 +0800",
     "summary": "AI交易如今面临的究竟是整体的信贷问题，还是仅仅是CoreWeave一家公司的问题？这可能是本周经历“惊魂一跳”后，所有AI领域的投资者必须思考的问题…… 随着韩国 综合 股价指数暴跌、新云概念股遭遇抛售，以及CoreWeave的债券跌入困境区间， 德意志银行 研究院做了一件显而易见、却一直没人去做的事：他们将美元投资级和高收益指数中每一只债券的收益率与到期期限绘制成图，并将其中的AI相关企业标上了颜色。 德意志银行 在图表梳理后得出的结论是： “至少目前而言，与信用市场其他部分相比，AI相关融资成本并不算高得离谱，尽管在收益率曲线的远端，利差正在扩大。” 换言之，AI债务目前还不算贵。但“目",
     "source": "东方财富股票",
     "zh": "一文读懂：AI融资离“爆雷”究竟有多远？"
    },
    {
     "title": "10月16日午间涨停复盘：78股涨停 金奥博4天3板",
     "link": "http://stock.eastmoney.com/news/11781,202610163898232315.html",
     "pubDate": "Fri, 16 Oct 2026 12:43:10 +0800",
     "summary": "今日午盘沪指 涨 0.95%，深成指 涨 1.19%，创业板指 涨 0.96%，今日午盘大盘成交额9625.54亿，较上个交易日缩量192.18亿。 涨停个股数量方面，今日午盘共计78股涨停，另有21只个股盘中一度触及涨停，封板率78.79%。 免责声明：本文基于AI生产，仅供参考，不构成任何投资建议，据此操作风险自担。 东方财富 发布此内容旨在传播更多信息，与本平台立场无关。 东方财富 力求但不保证数据的完全准确，如有错漏请以中国证监会指定上市公司信息披露媒体为准， 东方财富 不对因该资料全部或部分内容而引致的盈亏承担任何责任。用户个人对服务的使用承担风险，东方财富对此不作任何类型的担保。",
     "source": "东方财富股票",
     "zh": "10月16日午间涨停复盘：78股涨停 金奥博4天3板"
    },
    {
     "title": "Northrim BanCorp Non-GAAP EPS of $0.60 misses by $0.05, revenue of $59.65M beats by $4.4M",
     "link": "https://seekingalpha.com/news/4653689-northrim-bancorp-non-gaap-eps-of-060-misses-by-005-revenue-of-5965m-beats-by-44m?utm_source=feed_news_all&utm_medium=referral&feed_item_type=news",
     "pubDate": "Fri, 16 Oct 2026 00:40:23 -0400",
     "summary": "",
     "source": "Seeking Alpha",
     "zh": "Northrim BanCorp 非公认会计准则每股收益为 0.60 美元，比预期低 0.05 美元，收入为 5,965 万美元，比预期高 440 万美元"
    },
    {
     "title": "South Korea’s Kospi leads Asian rebound as technology selling eases",
     "link": "https://seekingalpha.com/news/4653682-south-koreas-kospi-leads-asian-rebound-as-technology-selling-eases?utm_source=feed_news_all&utm_medium=referral&feed_item_type=news",
     "pubDate": "Fri, 16 Oct 2026 00:40:01 -0400",
     "summary": "",
     "source": "Seeking Alpha",
     "zh": "随着技术销售放缓，韩国综合股价指数引领亚洲反弹"
    },
    {
     "title": "联想集团已开始交付英伟达Vera Rubin NVL72",
     "link": "http://finance.eastmoney.com/news/1354,202610163898232549.html",
     "pubDate": "Fri, 16 Oct 2026 12:39:12 +0800",
     "summary": "10月16日，《每日经济新闻》记者从 联想集团 处获悉，该公司已开始在全球交付 英伟达 新一代Vera Rubin NVL72机架级AI系统，并将完整的Vera Rubin平台纳入联想AI云超级工厂（AI Cloud Gigafactory）解决方案。 Vera Rubin是 英伟达 面向下一代AI训练、推理及智能体计算推出的全新平台。其中，NVL72系统集成72颗Rubin GPU和36颗Vera CPU，采用NVLink 6高速互连技术。相较上一代平台，该系统每兆瓦吞吐量最高可提升30倍，每百万Token推理成本最高可降至原来的1/45。 据悉， 联想集团 此次推出五大机架级系统，整合为一",
     "source": "东方财富股票",
     "zh": "联想集团已开始交付英伟达Vera Rubin NVL72"
    },
    {
     "title": "国光连锁：瑞金商业综合体项目计划四季度开业",
     "link": "http://finance.eastmoney.com/news/1354,202610163898232456.html",
     "pubDate": "Fri, 16 Oct 2026 12:39:00 +0800",
     "summary": "国光连锁 在2026年半年度暨第三季度业绩说明会上表示，瑞金商业 综合 体项目计划在2026年四季度开业，未来公司继续坚持以 综合 超市 为核心业态的直营连锁，以购物中心为发展方向和盈利补充。 （文章来源：人民财讯）",
     "source": "东方财富股票",
     "zh": "国光连锁：瑞金商业综合体项目计划四季度开业"
    },
    {
     "title": "Babycare宣布设立专项资金 邀请消费者参与纸尿裤送检",
     "link": "http://finance.eastmoney.com/news/1354,202610163898232033.html",
     "pubDate": "Fri, 16 Oct 2026 12:37:50 +0800",
     "summary": "10月16日，@Babycare 宣布设立专项资金，发起“百万检测基金计划”，邀请真实消费者参与Babycare纸尿裤送检，所有费用无需参与者承担，首期开放100个检测名额。根据官方发布的核查结果，Babycare纸尿裤未检出甲酰胺。 （文章来源：界面新闻）",
     "source": "东方财富股票",
     "zh": "Babycare宣布设立专项资金 邀请消费者参与纸尿裤送检"
    },
    {
     "title": "WaFd GAAP EPS of $0.76 misses by $0.08, revenue of $220.43M beats by $16.77M",
     "link": "https://seekingalpha.com/news/4653688-wafd-gaap-eps-of-076-misses-by-008-revenue-of-22043m-beats-by-1677m?utm_source=feed_news_all&utm_medium=referral&feed_item_type=news",
     "pubDate": "Fri, 16 Oct 2026 00:33:28 -0400",
     "summary": "",
     "source": "Seeking Alpha",
     "zh": "WaFd GAAP 每股收益为 0.76 美元，比预期低 0.08 美元，营收为 2.2043 亿美元，比预期高 1,677 万美元"
    },
    {
     "title": "Sysco, Teamsters reach agreement to end LA strike",
     "link": "https://seekingalpha.com/news/4653687-sysco-teamsters-reach-agreement-to-end-la-strike?utm_source=feed_news_all&utm_medium=referral&feed_item_type=news",
     "pubDate": "Fri, 16 Oct 2026 00:33:26 -0400",
     "summary": "",
     "source": "Seeking Alpha",
     "zh": "Sysco与卡车司机达成协议结束洛杉矶罢工"
    },
    {
     "title": "One Singapore ship was sunk, but here&apos;s why others are still transiting the Strait of Hormuz",
     "link": "https://www.cnbc.com/2026/10/16/strait-hormuz-singapore-ships-attacked.html",
     "pubDate": "Fri, 16 Oct 2026 04:29:27 GMT",
     "summary": "Singapore vessels are set to continue navigating the perilous Strait of Hormuz despite attacks on two container ships, said maritime experts.",
     "source": "CNBC",
     "zh": "一艘新加坡船只沉没，但这就是其他船只仍在通过霍尔木兹海峡的原因"
    },
    {
     "title": "Strive prices upsized $630M IPO of SATS preferred stock",
     "link": "https://seekingalpha.com/news/4653684-strive-prices-upsized-630m-ipo-of-sats-preferred-stock?utm_source=feed_news_all&utm_medium=referral&feed_item_type=news",
     "pubDate": "Fri, 16 Oct 2026 00:26:58 -0400",
     "summary": "",
     "source": "Seeking Alpha",
     "zh": "力争扩大 SATS 优先股 6.3 亿美元的 IPO"
    },
    {
     "title": "A股午评：超4800只个股飘红，三大指数集体收涨；商业航天、房地产概念股爆发，贵金属、石化、汽车、半导体、通信设备上涨；PCB概念股走低",
     "link": "http://www.eeo.com.cn/2026/1016/1066467.shtml",
     "pubDate": "Fri, 16 Oct 2026 12:26:15 +0800",
     "summary": "中新经纬10月16日电 16日，A股三大指数集体高开，午盘收涨。截至午间收盘，沪指涨0.95%，深证成指涨1.19%，创业板指涨0.96%。 全市半日成交额9709亿元，超4800只个股上涨。 板块方面，商业航天、房地产概念股爆发，贵金属、石化大涨，医药、农业、发电设备、日化、汽车、半导体、通信...",
     "source": "经济观察网",
     "zh": "A股午评：超4800只个股飘红，三大指数集体收涨；商业航天、房地产概念股爆发，贵金属、石化、汽车、半导体、通信设备上涨；PCB概念股走低"
    },
    {
     "title": "2026国际冬季运动博览会10月15日开幕：万亿元冰雪产业正从“冷资源”迈向“热消费”",
     "link": "http://www.eeo.com.cn/2026/1016/1066466.shtml",
     "pubDate": "Fri, 16 Oct 2026 12:26:12 +0800",
     "summary": "首钢园老厂房改造的展馆内，造雪机轰鸣，滑雪装备琳琅满目，来自装备制造、场地建设运营、冰雪旅游服务等产业链各环节的中外企业代表齐聚一堂。10月15日，2026国际冬季运动博览会（以下简称“冬博会”）在北京市首钢会展中心开幕，中外产业链企业共话冰雪消费新前景。 <img id=\"http://www.zqrb.cn/apipost/2026-10-16/56d5f5d2-67c0-4796-a1c5-c91d86aa38d3.jpg\" src=\"https://jg-app.obs.cn-north-4.myhuaweicloud.com/...",
     "source": "经济观察网",
     "zh": "2026国际冬季运动博览会10月15日开幕：万亿元冰雪产业正从“冷资源”迈向“热消费”"
    },
    {
     "title": "铁路车次编排将调整 更高时速动车组新增X字头",
     "link": "http://www.eeo.com.cn/2026/1016/1066465.shtml",
     "pubDate": "Fri, 16 Oct 2026 12:26:07 +0800",
     "summary": "中新经纬10月16日电 据“中国铁路”微信号10月16日消息，国铁集团启动全国铁路列车车次编排改革。 与2014版列车车次的编排相比，新版列车车次做了全面系统优化调整，其中动车组旅客列车车次的字头字母由原来的4个增加至7个，可编排的列车车次数量增长近40%，货物列车新增了“DH”字头字母，更加符合铁路运输发展和市场需求，为未来客货列车开行规模扩大和新线路、新装备、新产品投用预留了充足空间，能够充分体现铁路客货...",
     "source": "经济观察网",
     "zh": "铁路车次编排将调整 更高时速动车组新增X字头"
    },
    {
     "title": "雅思停考风波背后",
     "link": "http://www.eeo.com.cn/2026/1016/1066464.shtml",
     "pubDate": "Fri, 16 Oct 2026 12:26:07 +0800",
     "summary": "据每日经济新闻报道，10月14日，在经历连续4天的大面积临时停考后，中国内地的雅思考试恢复举行。前一天，主办方英国文化教育协会（British Council，以下简称BC）发布致歉声明。 雅思一次考试收费近2000元人民币，单科重考、成绩复议都要另外交钱。然而，从报告统计的数据看，BC近年持续亏损，自2020—2021年度以来，累计净亏损达1.84亿英镑（约合16.33亿元人民币）。2021年4月至2026年1月，BC共裁减2110名全职员工。</p...",
     "source": "经济观察网",
     "zh": "雅思停考风波背后"
    },
    {
     "title": "那些房价稳定的小城",
     "link": "http://www.eeo.com.cn/2026/1016/1066463.shtml",
     "pubDate": "Fri, 16 Oct 2026 12:26:00 +0800",
     "summary": "这些房价稳定的小城，并非没有价格波动，但放在较长周期看，表现得更稳定。",
     "source": "经济观察网",
     "zh": "那些房价稳定的小城"
    },
    {
     "title": "卖了40年百事，美国肯德基换可口可乐了",
     "link": "https://wallstreetcn.com/articles/3783765",
     "pubDate": "Fri, 16 Oct 2026 12:22:17 +0800",
     "summary": "当地时间10月15日，美国肯德基宣布与可口可乐公司建立新的合作伙伴关系，在美国市场结束与百事约40年的合作。从2027年1月开始，肯德基将把其美国饮料合作伙伴关系转至可口可乐公司，预计到2027年春季，可口可乐产品将在全美所有肯德基餐厅供应。 此举涉及肯德基在美国的3718家门店，交易金额未披露。 肯德基美国总裁凯瑟琳·谭-吉莱斯皮在致加盟商与员工的备忘录中称，这是“肯德基复兴的关键一步”，公司将通过与可口可乐合作推出新的饮料产品，获得一个创新平台，让顾客有更多理由选择肯德基。 这段即将终结的合作，始于 1986 年。那年百事为扩张食品与零食业务收购肯德基，而当时肯德基是可口可乐的第二大现调饮",
     "source": "华尔街见闻",
     "zh": "卖了40年百事，美国肯德基换可口可乐了"
    },
    {
     "title": "Elon Musk drives record $273M Q3 haul for GOP Senate PAC",
     "link": "https://seekingalpha.com/news/4653681-elon-musk-drives-record-273m-q3-haul-for-gop-senate-pac?utm_source=feed_news_all&utm_medium=referral&feed_item_type=news",
     "pubDate": "Fri, 16 Oct 2026 00:15:47 -0400",
     "summary": "",
     "source": "Seeking Alpha",
     "zh": "埃隆·马斯克 (Elon Musk) 在第三季度为共和党参议院 PAC 带来创纪录的 2.73 亿美元收入"
    },
    {
     "title": "沪指半日涨近1%",
     "link": "http://www.eeo.com.cn/2026/1016/1066432.shtml",
     "pubDate": "Fri, 16 Oct 2026 12:13:09 +0800",
     "summary": "【沪指半日涨近1%，商业航天、房地产概念股爆发】10月16日，截至午间收盘，上证指数涨0.95%，深证成指涨1.19%，创业板指涨0.96%。板块方面，商业航天、房地产概念股爆发，贵金属、石化大涨，医药、农业、发电设备、日化、汽车、半导体、通信设备等上涨。(中新经纬APP)",
     "source": "经济观察网",
     "zh": "沪指半日涨近1%"
    },
    {
     "title": "会飞的汽车！特斯拉Roadster跑车亮相 现场视频：空中旋转 像火箭一样降落",
     "link": "http://finance.eastmoney.com/news/1354,202610163898223593.html",
     "pubDate": "Fri, 16 Oct 2026 12:09:34 +0800",
     "summary": "中国官网可预订Performance版，意向金33.2万元，但不能飞 时隔近9年， 特斯拉 第二代Roadster跑车终于再次亮相。这一次， 特斯拉 CEO马斯克此前多次提及的“飞行”能力成为现场展示的重点。 当地时间10月15日， 特斯拉 在美国得克萨斯州举行Roadster发布活动，展示了经过重新设计的第二代Roadster。官方直播画面显示，Roadster借助推进器及大功率风扇等装置，车辆可冲上近乎垂直墙面、吸附在屋顶，能短暂腾空及空中旋转等动作，还能像火箭一样空中降落。 “这将是真正在道路上行驶的 汽车 。”马斯克在发布会上表示，车辆未来将能够根据驾驶者需要完成类似动作。 产品方面，",
     "source": "东方财富资讯",
     "zh": "会飞的汽车！特斯拉Roadster跑车亮相 现场视频：空中旋转 像火箭一样降落"
    },
    {
     "title": "异动拉升！贵金属早盘大涨 板块业绩整体向好",
     "link": "http://finance.eastmoney.com/news/11139,202610163898222456.html",
     "pubDate": "Fri, 16 Oct 2026 12:09:33 +0800",
     "summary": "10月16日早盘， 贵金属 板块高开高走异动拉升，截至早间收盘，板块 大涨3.71% 。个股方面， 招金黄金 涨超6%， 山金国际 、 兴业银锡 、 山东黄金 、 盛达资源 涨超4%， 赤峰黄金 、 湖南白银 、 晓程科技 涨超3%， 四川黄金 、 西部黄金 、 湖南黄金 、 恒邦股份 涨超2%， 中金黄金 涨超1%。 国际金价开始反弹 消息方面， 贵金属 价格近两日开始反弹，COMEX 黄金 主力合约自4095.0美元/盎司的低点 反弹了约100美元 ，截至发稿，COMEX 黄金 报4194.6美元/盎司，COMEX 白银 自55.56美元/盎司反弹至最新的57.845美元/盎司。 国信 期",
     "source": "东方财富资讯",
     "zh": "异动拉升！贵金属早盘大涨 板块业绩整体向好"
    },
    {
     "title": "Fed&apos;s Warsh says AI path will be &apos;very bumpy&apos; but ultimately &apos;very good&apos; for wealth",
     "link": "https://www.cnbc.com/2026/10/16/feds-warsh-says-ai-development-path-will-be-very-bumpy-.html",
     "pubDate": "Fri, 16 Oct 2026 04:08:27 GMT",
     "summary": "Warsh said he's optimistic that AI will make economies that use it well more productive and wealthier, warning the road there will be \"very bumpy.\"",
     "source": "CNBC",
     "zh": "美联储沃什表示人工智能之路将“非常坎坷”，但最终对财富“非常有利”"
    },
    {
     "title": "A股三大指数集体反弹，军工大爆发，存储芯片拉升、长鑫重回市值第一，恒科指涨2%，科网股、半导体普涨",
     "link": "https://wallstreetcn.com/articles/3783750",
     "pubDate": "Fri, 16 Oct 2026 12:06:45 +0800",
     "summary": "经历了此前四个交易日的连续调整，A股周五（10月16日），早盘迎来强势反攻。三大指数集体高开——沪指高开0.44%、深成指高开1.26%、创业板指高开1.75%。此后沪指高开高走，深成指、创业板指则高开回落后再度震荡拉升，盘中一度翻绿。 板块方面，国防军工、商业航天、创新药等爆发，汽车、农业、房地产等板块走高，江淮汽车涨停，此前工信部等三部门成立联合调查组开展核查网络反映的“尊界V800汽车刹车踏板支架断裂问题”。此外，AI硬件反弹，光模块、光通信等概念股上涨，电路板、覆铜板则陷入调整。存储芯片拉升，长鑫科技重回A股市值第一。 港股高开高走，恒指、恒科指早盘纷纷涨超1%，恒科指涨2%，权重科网",
     "source": "华尔街见闻",
     "zh": "A股三大指数集体反弹，军工大爆发，存储芯片拉升、长鑫重回市值第一，恒科指涨2%，科网股、半导体普涨"
    },
    {
     "title": "2027上半年迎周期拐点？猪肉概念集体走强 业绩预测高增股来了",
     "link": "http://finance.eastmoney.com/news/11139,202610163898219281.html",
     "pubDate": "Fri, 16 Oct 2026 12:04:40 +0800",
     "summary": "猪肉概念 10月16日早盘表现强势，板块中 天康生物 、 东瑞股份 、 大禹生物 、 神农集团 、 立华股份 等涨幅靠前。 弱现实撞上强预期 综合 市场观点来看，当前的生猪板块面临着弱现实强预期的现状，即当下生猪市场仍表现不佳，但在能繁母猪去化加速下，市场对未来的预期又持续乐观。 根据各上市猪企披露月报，9月销售单价约10.5元/公斤左右，同比下滑约20%。而中国养猪网数据显示，10月16日生猪（外三元）价格9.88元/公斤，为7月初重返10元以上后再次失守这一整数关口。 此外， 猪肉概念 股 天邦食品 披露的三季报显示，公司前三季实现营业收入53.74亿元，同比下滑20.01%；归母净利润-",
     "source": "东方财富资讯",
     "zh": "2027上半年迎周期拐点？猪肉概念集体走强 业绩预测高增股来了"
    },
    {
     "title": "2027见闻历限时预售火热进行中！连续第9年的财经“神”历，也是你第九年的陪伴",
     "link": "https://wallstreetcn.com/articles/3782813",
     "pubDate": "Fri, 16 Oct 2026 12:04:38 +0800",
     "summary": "本文来自华尔街见闻，欢迎下载APP查看更多",
     "source": "华尔街见闻",
     "zh": "2027见闻历限时预售火热进行中！连续第9年的财经“神”历，也是你第九年的陪伴"
    },
    {
     "title": "内外利好共振！低空经济拉升 未来或突破3.5万亿",
     "link": "http://finance.eastmoney.com/news/11139,202610163898218919.html",
     "pubDate": "Fri, 16 Oct 2026 12:03:01 +0800",
     "summary": "周五 低空经济 概念走强， 捷众科技 30CM涨停， 金盾股份 、 广联航空 等多股20CM涨停， 通易航天 、 英搏尔 等涨超10%。 内外利好共振 消息面上，2026 年 10 月，中国 深度参与 国际标准化组织（ISO）、国际电工委员会（IEC） 低空经济 标准化工作，推动国际标准立项、研制与发布。其中，中国牵头提出的《卡及身份识别安全设备 无人驾驶航空器系统（UAS）执照与 无人机 /UAS 安全模块第 5 部分： 无人机 /UAS 安全模块测试方法》作为首个无人驾驶航空器身份识别领域国际标准提案成功立项，该标准聚焦无人驾驶航空器系统执照与安全模块，规定了 无人机 和 UAS安全模块的",
     "source": "东方财富资讯",
     "zh": "内外利好共振！低空经济拉升 未来或突破3.5万亿"
    },
    {
     "title": "What do the Houthis want?",
     "link": "https://www.ft.com/content/7a260d99-c761-4ab1-8185-d7e0225a8472?syn-25a6b1a6=1",
     "pubDate": "Fri, 16 Oct 2026 04:00:17 GMT",
     "summary": "The Islamist group’s ambitions in their fight against Saudi Arabia range from the financial and military to grand visions of regional power and influence",
     "source": "Financial Times",
     "zh": "胡塞武装想要什么？"
    },
    {
     "title": "US business leaders are waking up to the perils of plutopopulism",
     "link": "https://www.ft.com/content/586218d3-6943-4690-8dd8-63dd329c781d",
     "pubDate": "Fri, 16 Oct 2026 04:00:17 GMT",
     "summary": "Companies wanted a president who would cut taxes and rules, they got one who has blown holes in free trade and global alliances",
     "source": "Financial Times",
     "zh": "美国商界领袖正在意识到财阀民粹主义的危险"
    },
    {
     "title": "The secret fight around financial flows",
     "link": "https://www.ft.com/content/9585ba4d-5036-4f5d-9656-0dc4f6bdee4e?syn-25a6b1a6=1",
     "pubDate": "Fri, 16 Oct 2026 04:00:17 GMT",
     "summary": "Quicker responses to trade challenges mean companies can free up capital",
     "source": "Financial Times",
     "zh": "围绕资金流动的秘密斗争"
    }
   ]
  },
  {
   "key": "science",
   "name": "科学 / 前沿",
   "accent": "#38bdf8",
   "total": 8,
   "items": [
    {
     "title": "State of Supply Chain Sustainability Report finds corporate commitment at record high, but governance lags behind",
     "link": "https://news.mit.edu/2026/state-of-supply-chain-sustainability-report-1015",
     "pubDate": "Thu, 15 Oct 2026 17:00:00 -0400",
     "summary": "MIT's Center for Transportation and Logistics finds sustainability commitments are strong, but governance gaps and external disruptions prevent execution.",
     "source": "MIT News",
     "zh": "供应链可持续发展状况报告发现企业承诺创历史新高，但治理滞后"
    },
    {
     "title": "AI model decodes the language cells use to communicate",
     "link": "https://news.mit.edu/2026/ai-model-decodes-language-cells-use-communicate-1015",
     "pubDate": "Thu, 15 Oct 2026 16:50:00 -0400",
     "summary": "A new computational approach reveals how cells communicate to assemble into tissues. This could accelerate stem cell engineering, improve disease models, and inform therapies.",
     "source": "MIT News",
     "zh": "人工智能模型解码用于交流的语言细胞"
    },
    {
     "title": "2 giant Ramesses II statues, one wearing a double crown, discovered by man in Egypt",
     "link": "https://www.livescience.com/archaeology/ancient-egyptians/2-giant-ramesses-ii-statues-one-wearing-a-double-crown-discovered-by-man-in-egypt",
     "pubDate": "Thu, 15 Oct 2026 20:01:18 +0000",
     "summary": "The remains of two Ramesses II statues — one of which would have originally stood around 28 feet tall — were found by a villager in Egypt.",
     "source": "Live Science",
     "zh": "埃及人发现了两座巨型拉美西斯二世雕像，其中一尊戴着双王冠"
    },
    {
     "title": "Microplastics in water aren’t inert and make damaging chemicals on their own",
     "link": "https://arstechnica.com/science/2026/10/microplastics-in-water-arent-inert-and-make-damaging-chemicals-on-their-own/",
     "pubDate": "Thu, 15 Oct 2026 18:39:17 +0000",
     "summary": "Its effect on people remains an ongoing question.",
     "source": "Ars Technica Science",
     "zh": "水中的微塑料不具有惰性，会自行产生有害化学物质"
    },
    {
     "title": "Satellite data reveal how Antarctica’s ice cliffs behave over time",
     "link": "https://news.mit.edu/2026/satellite-data-reveal-how-antarcticas-ice-cliffs-behave-over-time-1015",
     "pubDate": "Thu, 15 Oct 2026 14:00:00 -0400",
     "summary": "The cliffs don’t always collapse in the runaway process that scientists had expected.",
     "source": "MIT News",
     "zh": "卫星数据揭示了南极洲冰崖随时间的变化"
    },
    {
     "title": "Many American diets may not include enough of this essential nutrient",
     "link": "https://www.sciencenews.org/article/iodine-salt-brain-development-diets",
     "pubDate": "Thu, 15 Oct 2026 17:00:00 +0000",
     "summary": "With the proliferation of fancy salts and changing dietary habits, there are signs people aren’t getting enough of the crucial mineral iodine.",
     "source": "Science News",
     "zh": "许多美国人的饮食可能没有包含足够的这种必需营养素"
    },
    {
     "title": "Neutron's first launch slips again amid trouble with carbon composites",
     "link": "https://arstechnica.com/space/2026/10/rocket-lab-announces-another-delay-for-its-medium-lift-neutron-rocket/",
     "pubDate": "Thu, 15 Oct 2026 16:57:24 +0000",
     "summary": "Rocket Lab announced the Neutron rocket in 2021, aiming for a first flight in 2024.",
     "source": "Ars Technica Science",
     "zh": "由于碳复合材料的问题，Neutron 的首次发射再次陷入困境"
    },
    {
     "title": "'We're not a competitor to fusion. We are fusion': Inside the race to harness unlimited solar power in space",
     "link": "https://www.livescience.com/space/were-not-a-competitor-to-fusion-we-are-fusion-inside-the-race-to-harness-unlimited-solar-power-in-space",
     "pubDate": "Thu, 15 Oct 2026 16:00:00 +0000",
     "summary": "Space-based solar power has the potential to meet Earth's energy needs many times over. Will it see the light of day?",
     "source": "Live Science",
     "zh": "“我们不是核聚变的竞争对手。我们正在融合”：在太空中利用无限太阳能的竞赛"
    },
    {
     "title": "Rewilding could help vulnerable islands keep pace with rising seas",
     "link": "https://arstechnica.com/science/2026/10/seabirds-forests-and-coral-could-help-save-sinking-islands/",
     "pubDate": "Thu, 15 Oct 2026 15:05:40 +0000",
     "summary": "Seabirds, native plants, and healthy reefs can help atolls build as seas rise.",
     "source": "Ars Technica Science",
     "zh": "重新野化可以帮助脆弱的岛屿跟上海平面上升的步伐"
    },
    {
     "title": "Mysterious hole in Neanderthal shoulder blade may have been a 'kill shot' from a wooden spear, according to archaeologists",
     "link": "https://www.livescience.com/archaeology/neanderthals/mysterious-hole-in-neanderthal-shoulder-blade-may-have-been-a-kill-shot-from-a-wooden-spear-according-to-archaeologists",
     "pubDate": "Thu, 15 Oct 2026 15:00:00 +0000",
     "summary": "A rare discovery reveals that 75,000 years ago, a Neanderthal from Shanidar Cave in Iraq died a grisly death, likely from a wooden spear.",
     "source": "Live Science",
     "zh": "考古学家称，尼安德特人肩胛骨上的神秘洞可能是木矛的“致命射击”"
    },
    {
     "title": "A telling hole in a Neandertal bone hints at a bitter end",
     "link": "https://www.sciencenews.org/article/hole-neandertal-bone-fatal-spear",
     "pubDate": "Thu, 15 Oct 2026 15:00:00 +0000",
     "summary": "An excavation at an iconic Neandertal burial site uncovers evidence for one individual's potential fatal wound as well as an injury endured for years.",
     "source": "Science News",
     "zh": "尼安德特人骨头上的一个明显的洞暗示着痛苦的结局"
    },
    {
     "title": "Building trust in governments through digital platforms",
     "link": "https://news.mit.edu/2026/building-trust-governments-through-digital-platforms-1015",
     "pubDate": "Thu, 15 Oct 2026 09:45:00 -0400",
     "summary": "Governments and private companies often work together to provide public services online. A new study asks: How do these partnerships affect people’s trust in government?",
     "source": "MIT News",
     "zh": "通过数字平台建立对政府的信任"
    },
    {
     "title": "How Do Fungi Keep the Planet Healthy?",
     "link": "https://www.quantamagazine.org/how-do-fungi-keep-the-planet-healthy-20261015/",
     "pubDate": "Thu, 15 Oct 2026 13:40:13 +0000",
     "summary": "Evolutionary biologist Toby Kiers explains how fungal networks in soil trade nutrients with plants, help keep carbon underground, and strike bargains without having a brain. The post How Do Fungi Keep the Planet Healthy? first appeared on Quanta Magazine",
     "source": "Quanta Magazine",
     "zh": "真菌如何保持地球健康？"
    },
    {
     "title": "Brain implants are helping people who’ve lost their voice",
     "link": "https://www.sciencenews.org/article/brain-implants-restore-voices-injuries",
     "pubDate": "Thu, 15 Oct 2026 13:00:00 +0000",
     "summary": "The technology could get those with ALS, Parkinson’s disease and brain injuries “talking” again.",
     "source": "Science News",
     "zh": "大脑植入物正在帮助失去声音的人"
    },
    {
     "title": "Mysterious brain activity under anesthesia challenges what we know about consciousness",
     "link": "https://www.sciencedaily.com/releases/2026/10/261015003440.htm",
     "pubDate": "Thu, 15 Oct 2026 08:52:05 EDT",
     "summary": "Even under general anesthesia, the human brain can analyze language, recognize different types of words, and predict what comes next in a story, according to a surprising discovery by Baylor researchers. The findings challenge our understanding of consciousness and suggest that the unconscious brain",
     "source": "ScienceDaily",
     "zh": "麻醉下神秘的大脑活动挑战了我们对意识的了解"
    },
    {
     "title": "Arctic sea ice hits another troubling low in 2026",
     "link": "https://www.sciencedaily.com/releases/2026/10/261015073212.htm",
     "pubDate": "Thu, 15 Oct 2026 08:40:44 EDT",
     "summary": "Arctic sea ice is shrinking in both winter and summer, with satellite records revealing that the region's remaining ice is becoming thinner, younger, and more vulnerable to melting. Despite a recent slowdown in summer losses, scientists warn that the Arctic could experience a nearly ice-free summer ",
     "source": "ScienceDaily",
     "zh": "2026 年北极海冰再创新低，令人不安"
    },
    {
     "title": "Eating late at night linked to up to 30% higher risk of liver disease",
     "link": "https://www.sciencedaily.com/releases/2026/10/261014015503.htm",
     "pubDate": "Thu, 15 Oct 2026 08:26:16 EDT",
     "summary": "Eating late at night could be putting your liver at risk, according to a large study led by Oregon Health & Science University. Researchers analyzed data from nearly 200,000 people and found that those who regularly ate after dinner or around bedtime had a 20% to 30% higher risk of liver disease, in",
     "source": "ScienceDaily",
     "zh": "深夜进食与肝病风险增加 30%"
    },
    {
     "title": "A fungus is threatening the world’s food supply. Scientists just found a new defense",
     "link": "https://www.sciencedaily.com/releases/2026/10/261014015501.htm",
     "pubDate": "Thu, 15 Oct 2026 07:45:43 EDT",
     "summary": "Scientists have discovered a potential new weapon against a devastating fungus that threatens rice, wheat, and barley worldwide. By engineering a special type of plant immune receptor, researchers created defenses capable of recognizing multiple fungal threats at once. The breakthrough could eventua",
     "source": "ScienceDaily",
     "zh": "一种真菌正在威胁世界的粮食供应。科学家刚刚发现了一种新的防御方法"
    },
    {
     "title": "Testosterone for menopause: The treatment is rising in popularity, but does it work?",
     "link": "https://www.livescience.com/health/reproductive-health/testosterone-for-menopause-the-treatment-is-rising-in-popularity-but-does-it-work",
     "pubDate": "Thu, 15 Oct 2026 09:00:00 +0000",
     "summary": "Women are using testosterone in the hope that it will treat their menopause symptoms, but little evidence supports the approach, experts say.",
     "source": "Live Science",
     "zh": "睾酮治疗更年期：这种治疗方法越来越受欢迎，但它有效吗？"
    },
    {
     "title": "Strokes have nearly doubled among younger adults, and scientists aren't sure why",
     "link": "https://www.sciencedaily.com/releases/2026/10/261014015459.htm",
     "pubDate": "Thu, 15 Oct 2026 01:28:14 EDT",
     "summary": "Strokes are becoming alarmingly common among younger adults, with rates nearly doubling among people ages 20 to 54 over nearly three decades. Researchers found that blocked blood vessels in the brain accounted for much of the increase, while high blood pressure, diabetes, and substance use also beca",
     "source": "ScienceDaily",
     "zh": "年轻人中风的发生率几乎翻倍，科学家不确定原因"
    },
    {
     "title": "Ozempic and Wegovy linked to rare risk of sudden vision loss",
     "link": "https://www.sciencedaily.com/releases/2026/10/261014015521.htm",
     "pubDate": "Thu, 15 Oct 2026 00:14:55 EDT",
     "summary": "Popular diabetes and weight loss drugs such as Ozempic and Wegovy have been linked to a slightly increased risk of a rare condition that can cause sudden, potentially permanent vision loss. Although the risk remains very low, Rutgers researchers say the findings warrant attention as millions of peop",
     "source": "ScienceDaily",
     "zh": "Ozempic 和 Wegovy 与罕见的突然视力丧失风险有关"
    },
    {
     "title": "Q&A: The “collision” between AI, your brain, and society",
     "link": "https://news.mit.edu/2026/collision-between-ai-your-brain-and-society-eric-so-book-1015",
     "pubDate": "Thu, 15 Oct 2026 00:00:00 -0400",
     "summary": "In a new book, Professor Eric So explores how the technology affects our thinking skills.",
     "source": "MIT News",
     "zh": "Q&A：AI、你的大脑、社会的“碰撞”"
    },
    {
     "title": "Things are finally looking up for NASA's first missions to Venus in a generation",
     "link": "https://arstechnica.com/space/2026/10/nasas-embattled-venus-missions-are-back-on-track-after-cancellation-threat/",
     "pubDate": "Wed, 14 Oct 2026 20:48:07 +0000",
     "summary": "\"This is great news for us. We're staffing up. We're accelerating.\"",
     "source": "Ars Technica Science",
     "zh": "美国宇航局一代人以来首次金星任务的情况终于有了好转"
    },
    {
     "title": "Chronic back pain may activate an unexpected brain network, study finds",
     "link": "https://www.livescience.com/health/neuroscience/chronic-back-pain-may-activate-an-unexpected-brain-network-study-finds",
     "pubDate": "Wed, 14 Oct 2026 20:35:40 +0000",
     "summary": "Movement-induced flares in chronic back pain activate brain regions involved in self-reflection, suggesting chronic pain may be processed differently than acute pain.",
     "source": "Live Science",
     "zh": "研究发现慢性背痛可能会激活意想不到的大脑网络"
    },
    {
     "title": "DNA from centuries-old skeletons buried in Montreal reveals no genetic mixing between Indigenous people and French colonists",
     "link": "https://www.livescience.com/archaeology/americas/dna-from-centuries-old-skeletons-buried-in-montreal-reveals-no-genetic-mixing-between-indigenous-people-and-french-colonists",
     "pubDate": "Wed, 14 Oct 2026 19:46:12 +0000",
     "summary": "A study of DNA from early colonial-era skeletons in a Montreal cemetery has revealed that none of them had any Indigenous ancestry.",
     "source": "Live Science",
     "zh": "埋藏在蒙特利尔的数百年历史骨骼的 DNA 显示，原住民和法国殖民者之间没有基因混合"
    },
    {
     "title": "Researchers use AI to design proteins that cut up other proteins",
     "link": "https://arstechnica.com/science/2026/10/researchers-use-ai-to-design-proteins-that-cut-up-other-proteins/",
     "pubDate": "Wed, 14 Oct 2026 17:10:15 +0000",
     "summary": "AI design tools make proteins that break bonds that are stable for hundreds of years.",
     "source": "Ars Technica Science",
     "zh": "研究人员利用人工智能设计能够切割其他蛋白质的蛋白质"
    },
    {
     "title": "Can math stay human in the age of AI?",
     "link": "https://www.sciencenews.org/article/math-human-ai-age",
     "pubDate": "Wed, 14 Oct 2026 17:00:00 +0000",
     "summary": "As AI churns out mathematical proofs, a DeepMind study raises a bigger question: What do we lose when we focus only on the answers?",
     "source": "Science News",
     "zh": "人工智能时代，数学还能保持人性吗？"
    },
    {
     "title": "Researchers improve weather forecasts looking two to six weeks out",
     "link": "https://news.mit.edu/2026/researchers-improve-weather-forecasts-looking-two-six-weeks-out-1014",
     "pubDate": "Wed, 14 Oct 2026 11:00:00 -0400",
     "summary": "A new machine-learning approach broke records for weather forecasting for an important time frame in emergency planning.",
     "source": "MIT News",
     "zh": "研究人员预计两到六周后会改进天气预报"
    },
    {
     "title": "Tiny implants can use the body itself to talk to each other",
     "link": "https://www.sciencenews.org/article/implants-body-electric-signal-tissue",
     "pubDate": "Wed, 14 Oct 2026 15:00:00 +0000",
     "summary": "Researchers made a rat’s front-leg movement trigger its back leg. The experiment could point to a new kind of body-based network to connect implants.",
     "source": "Science News",
     "zh": "微型植入物可以利用身体本身来相互交谈"
    },
    {
     "title": "Triplet of ‘Ghostly’ Galaxies Hints at What Dark Matter Is — and Isn’t",
     "link": "https://www.quantamagazine.org/triplet-of-ghostly-galaxies-hints-at-what-dark-matter-is-and-isnt-20261014/",
     "pubDate": "Wed, 14 Oct 2026 14:04:05 +0000",
     "summary": "A collision may have left these galaxies without dark matter. That spells trouble for alternative gravity theories. The post Triplet of ‘Ghostly’ Galaxies Hints at What Dark Matter Is — and Isn’t first appeared on Quanta Magazine",
     "source": "Quanta Magazine",
     "zh": "三重“幽灵”星系暗示暗物质是什么——以及不是什么"
    }
   ]
  }
 ]
};
