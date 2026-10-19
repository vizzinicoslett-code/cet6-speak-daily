# 六级口语每日练 · CET6 Speak Daily

一个独立的、以本地存储为基础的六级英语口语训练 Web App / PWA。每天约 18 分钟，先自己思考和录音，再学习更自然的表达。

**没有后端、注册、登录、云数据库、AI API、广告或在线题库。** 全部 35 天课程随应用提供；录音、训练进度和复盘保存在当前设备浏览器的 IndexedDB 中。

## 本地运行

需要 Node.js 22.12+ 和 npm。此项目已安装依赖；首次从仓库下载时先运行 `npm ci`。

```powershell
cd 'D:\chatgptwork\口语\cet6-speak-daily'
npm run dev
```

打开终端显示的本地地址（通常为 `http://127.0.0.1:5173/`）。麦克风需要 HTTPS 或 localhost 安全上下文。手机直接访问电脑的普通局域网 HTTP 地址无法保证录音；手机使用 HTTPS 部署版本。

```powershell
npm run typecheck
npm run lint
npm test
npm run build
npm run preview
```

## 使用方式

底部只有四个主入口：**今日训练、训练日历、题库、我的记录**。

每日流程：今日输入 → 两道 Quick Response → Personal Statement → 三轮 Discussion → Final Question → 今日参考表达 → 回听复盘 → 打卡。

- Quick Response：每题 5 秒思考、30 秒回答。
- Personal Statement：60 秒准备、90 秒回答。
- Discussion：内置模拟搭档观点，每轮 5 秒思考、35 秒回应。
- Final Question：5 秒思考、45 秒回答。
- 准备完成后自动开始 MediaRecorder 录音，回答结束自动停止、保存。每题都支持原生音频播放/暂停、重录与删除。
- 重录前明确确认覆盖；只有新录音保存成功后才覆盖已有音频。取消或失败保留原文件。
- 本版本有效录音指有音频数据且实际录制至少 1 秒；不自动判断是否说话、内容质量或流利度。
- 参考回答按本次训练逐题解锁。未完成录音的题目不渲染英文答案；全部录音完成后才能确认阅读整套参考表达。
- 打卡同时要求今日输入、全部七项有效录音和已查看今日参考表达。打开应用不算打卡。
- 题库可按四类任务、七种主题和中英文关键词筛选。自由练习独立存储，不改变正式打卡。
- 课程按已完成的正式课程推进，断签不会跳过课程。完成全部 35 天后，可以继续复习最后一天或在题库重练。
- 页面刷新恢复最后保存的步骤、录音和复盘；正在录制且尚未结束的音频无法在强制关闭后恢复。

## 35 天课程

每一天包含三条可讲角度、六个双语表达及例句、四个句型支架、两道快答、一套陈述、三轮讨论、一道最终问答、七份完整参考回答、中文结构解析、重点表达与四组自然表达升级。讨论还包含赞同、部分赞同、不同意与追问的不同回应方式。

完整参考文本的词数控制为：快答与讨论 55–75 词，个人陈述 165–200 词，最终问答 80–105 词。实际时长取决于语速。

| 阶段 | 天数 | 目标 |
| --- | --- | --- |
| 建立内容 | 1–7 | 快速想观点、给理由、举例；提供较多提示 |
| 延长表达 | 8–14 | 从多个角度展开，练习完整 90 秒陈述 |
| 讨论互动 | 15–21 | 赞同、保留意见、补充、追问、澄清与举例 |
| 综合训练 | 22–28 | 组合全部任务，减少提示 |
| 模拟训练 | 29–35 | 隐藏输入思路卡，任务不提供思路提示 |

| Day | 主题 | Day | 主题 |
| --- | --- | --- | --- |
| 1 | 独立生活 | 19 | 校园活动 |
| 2 | 时间管理 | 20 | 传统文化 |
| 3 | 压力应对 | 21 | 就业 |
| 4 | 友谊 | 22 | 环境保护 |
| 5 | 大学生活 | 23 | 教育公平 |
| 6 | 体育运动 | 24 | 城市生活 |
| 7 | 兼职 | 25 | 理性消费 |
| 8 | 阅读 | 26 | 工作与生活平衡 |
| 9 | 旅行 | 27 | 科技与隐私 |
| 10 | 在线学习 | 28 | 社会责任 |
| 11 | 健康习惯 | 29 | 学习方式 |
| 12 | 团队合作 | 30 | 可持续交通 |
| 13 | 社交媒体 | 31 | 青年成长与韧性 |
| 14 | 手机使用 | 32 | 校园设施 |
| 15 | 志愿服务 | 33 | 职业选择 |
| 16 | 实习 | 34 | 跨文化交流 |
| 17 | 人工智能 | 35 | 终身学习 |
| 18 | 网络购物 | | |

材料为本项目原创训练内容，不是官方真题或官方标准答案。计时与独立讨论回合服务于个人训练，未机械复制正式考试流程。考试结构可参考[教育考试院 CET 考试大纲](https://cet.neea.edu.cn/res/Home/1704/55b02330ac17274664f06d9d3db8249d.pdf)。

## 技术与目录

React 19、TypeScript 严格模式、Vite 6、原生 CSS、Lucide 图标、原生 IndexedDB、MediaRecorder、vite-plugin-pwa / Workbox、Vitest、fake-indexeddb、Playwright。

```text
src/
  App.tsx                 四个主页面与完整训练流程
  Recorder.tsx            录音、计时、播放与设备异常处理
  domain.ts               完成规则、计时阶段、连续打卡、累计统计
  storage.ts              IndexedDB 与音频/进度原子事务
  types.ts                课程、题目、参考答案、录音、进度等类型
  data/
    index.ts              加载并排序内置课程
    days/day01.ts … day35.ts
  domain.test.ts
  storage.test.ts
tests/app.spec.ts         无头浏览器完整流程
public/                   192/512/maskable PNG 图标
.github/workflows/pages.yml
scripts/generate-icons.py
scripts/github-publish.mjs
```

所有题目与 Day ID 均稳定。IndexedDB 名称 `cet6-speak-daily`，版本 1，包含 `progress`、`recordings`、`settings` 三个 object store。课程内容升级时应保留已有 ID；未来结构变化通过数据库版本升级处理。

录音 metadata 包含 `id/sessionId/date/dayId/questionId/taskType/createdAt/duration/mimeType` 与音频 Blob。音频和完成状态在同一事务提交，保存失败不会误标为完成。Blob 不进入 localStorage。

每次成功录音在进度中追加轻量 attempt metadata，覆盖和删除音频不会减少累计练习次数。已完成打卡是历史快照，删除历史音频不取消过去的打卡；未打卡时删除音频会重新锁定该任务。旧记录没有 attempt 历史时按现存音频迁移，已经删除的旧录音无法推算。

计时依据真实时间戳，React 重新渲染不重置倒计时。准备阶段如果因浏览器挂起错过录音启动，会提示重试；录音时页面切后台仍可能受到手机系统限制。训练进行期间阻止应用内跳页，并在刷新/关闭时触发浏览器离开提示。

## PWA 与离线

- manifest 包含名称、语言、主题色、`standalone`、192/512 像素及 maskable 图标。
- Workbox precache 缓存 App Shell、全部课程 JS、样式和图标。
- 首次需联网加载，Service Worker 就绪后可离线刷新并使用全部课程。
- 新 Service Worker 使用等待更新提示；不会在录音过程中强制刷新。
- 数据采用当前设备本地日期，累计/连续天数不依赖服务器。
- Android 支持时会提供安装按钮；iPhone 使用 Safari 分享菜单中的「添加到主屏幕」。是否出现安装提示由浏览器决定。
- 「我的记录」提供持久存储申请。浏览器可以拒绝申请，持久存储也无法防止用户主动清除网站数据。

## GitHub Pages 部署

本项目使用独立 `main` 分支，并提供 GitHub Actions 自动检查与部署。本地验收已完成；本次实际发布与在线验收结果记录在 [VALIDATION.md](./VALIDATION.md)。

网络与账号可用后，在 GitHub 创建独立仓库 `cet6-speak-daily`，推送当前 `main` 分支，并在 **Settings → Pages → Source** 选择 **GitHub Actions**。免费账户通常需要公开仓库；私有仓库的 Pages 可用性取决于 GitHub 方案。

```powershell
git remote add origin https://github.com/YOUR_USERNAME/cet6-speak-daily.git
git push -u origin main
```

工作流依次执行 npm ci、TypeScript、Lint、74 项单元与数据测试（含 38 项课程一致性测试）、带仓库名 base path 的 Production Build、12 项 Playwright 浏览器检查，再上传构建产物并部署。

部署成功后的地址形式为 `https://YOUR_USERNAME.github.io/cet6-speak-daily/`，实际地址以 Pages 设置或 Actions 部署结果为准。页面使用 hash 路由（如 `#/library`），刷新不请求不存在的服务器路径。

Vite 的 `BASE_PATH` 默认 `/`；CI 自动设置为 `/${repository.name}/`。GitHub 子路径在 manifest 的 `start_url/scope`、图标、静态资源与 Service Worker 中保持一致。[Vite 部署文档](https://vite.dev/guide/static-deploy.html)说明了该部署方式。

本地验证与 GitHub 相同的子路径：

```powershell
$env:BASE_PATH='/cet6-speak-daily/'
npm run build
npm run preview
```

`scripts/github-publish.mjs` 是可选的发布助手，只使用 Git Credential Manager 已有凭据，在内存中访问 GitHub；不打印或写入凭据，不覆盖已有内容的仓库。它绑定当前连接的账号，其他用户使用标准 Git 命令即可。

## 自动化验证

```powershell
npm run typecheck
npm run lint
npm test
$env:BASE_PATH='/cet6-speak-daily/'
npm run build
npx playwright install chromium
npm run test:e2e
```

有兼容 Chromium 时可通过 `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` 指向可执行文件。CI 自动安装对应版本。测试使用无头 Chromium 和模拟麦克风设备，调用浏览器原生 MediaRecorder；加速时钟验证阶段切换，同时给编码器真实时间生成音频数据。它不代表实体麦克风或真实手机音质验证。

同一套浏览器测试也支持真实部署地址：设置 `PLAYWRIGHT_BASE_URL` 为完整的 HTTPS 应用地址后运行 `npm run test:e2e`，此时不会启动本地预览服务器。每项测试使用独立浏览器上下文，不使用日常浏览器中的录音或进度。

课程测试逐天校验 35 天字段、稳定/唯一 ID、题数、时长、参考答案词数、表达和高亮确实存在。逻辑与数据库测试覆盖所有任务/参考阅读的完成门槛、失败录音、Blob metadata、原子保存、恢复、复盘、累计次数、删除历史和练习隔离。浏览器测试覆盖刷新恢复、完整训练至打卡、权限拒绝、不支持 API、IndexedDB 失败、手机布局、hash 路由、PWA manifest 与实际离线刷新。

交付验证与人工待验清单见 [VALIDATION.md](./VALIDATION.md)。

## 已知限制

1. 没有云同步、自动备份或跨设备恢复。清除网站数据会丢失录音与记录；隐私模式不适合长期保存。
2. 无语音转写、音量检测或自动质量评分。静音录音也可能通过最小有效性校验，学习效果需要自行回听。
3. 不保证锁屏、系统回收、强制关闭期间继续录音；请尽量保持训练页面在前台。强制关闭前未保存的录音不可恢复。
4. MIME 类型会按浏览器支持自动选择 WebM/Opus、MP4 或 Ogg，跨浏览器播放能力由浏览器决定。参考 [MediaRecorder 文档](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)。
5. 参考表达锁定是学习流程约束。课程在本地源码中，无法防止主动查看开发者工具或源码的用户提前读取。
6. 离线能力在一次成功加载和缓存后生效；网站数据被清理后需要重新联网。
7. 真实 Android/iOS 安装、实体麦克风、锁屏与手机音频中断仍需真机验收。GitHub Pages 的在线自动验收状态见 VALIDATION.md。
