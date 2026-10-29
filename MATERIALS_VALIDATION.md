# 素材积累增量开发与验收

日期：2026-10-29（Asia/Shanghai）。项目：`D:\chatgptwork\口语\cet6-speak-daily`。

本次只新增输入、分段背诵、复习与表达积累学习链。原有 35 天、245 项训练数据不变，录音组件、训练完成规则和记录隔离逻辑不重写。没有新增依赖、付费 API、后端、登录、云同步或自动评分。

## 1–4：现有结构与文件

1. 已检查 React/TypeScript、hash 路由、导航、题库与训练组件、记录及日历、MediaRecorder、IndexedDB schema/升级处理、CSS 响应式、Vitest、Playwright 与 Workbox。继续使用原有架构、白卡/按钮/图标及浅色风格。
2. 最终一级导航：今日训练、训练日历、题库、素材积累、我的记录。
3. 修改已有文件：`package.json`（导入命令及 predev/prebuild）、`src/App.tsx`（新入口、路由、双向关联）、`src/storage.ts`（v2 增量升级/API）、`src/styles.css`（五导航弹性宽度）、`tests/app.spec.ts` 与 `tests/visual.spec.ts`（读取当前 DB 版本）、`README.md`。没有修改原 35 天课程或 `Recorder.tsx`。
4. 新文件：用户提供的 `CET6_speaking_materials_batch1.md` 纳入项目；`scripts/import-speaking-materials.mjs`、对应 `.d.mts`；`src/materialTypes.ts`、`materialData.ts`、`data/speakingMaterials.generated.json`、`materialDomain.ts`、`materialLinks.ts`、`Materials.tsx`、`materials.css`；四份单元测试 `materialImporter.test.ts`、`materialDomain.test.ts`、`materialLinks.test.ts`、`materialStorage.test.ts`；`tests/materials.spec.ts`；本报告。

## 5–8：内容导入

5. Node 导入器读取根目录 `CET6_speaking_materials_batch*.md`，解析元数据、中文骨架、完整稿、chunks、可选短答、可迁移表达，以及文件末尾的通用表达库。原 Markdown 保留。
6. 运行时使用生成的 JSON，由 `materialData.ts` 提供类型化导出；不在浏览器重复解析 Markdown。Node JSON 导入使用标准 `with { type: "json" }`，兼容 Playwright 和 Vite。
7. 真实导入 10 篇母题、60 个 chunks、84 条可迁移表达、4 篇短答。素材分类动态产生。1 篇考后回忆、9 篇历年高频；没有来源年月或 sourceLabel，不显示虚构真题年月。
8. 通用表达共 8 类 43 条，包含 8 条双人讨论互动表达；提供收藏。

原文件 SHA256：`4841160FFC84F63B68C800C55C5AB64B05C7FD43E92990EE28CE5AC1653C73CB`。导入测试独立抽取源文本，逐字对比完整稿、短答、问题、每段中文提示/关键词/英文；每个测试后验证源文件未被改写。原文件中的部分 chunk 与完整稿有差异，分别按原文保留。

## 9–13：数据模型与旧库安全

9. `SpeakingMaterial`：`id, title, titleZh, category, tags, questions, fullAnswer, structureZh, chunks, reusableExpressions, keywords?, shortAnswer?, discussionExpressions?, sourceType, sourceLabel?`。Chunk 含 `id, cueZh, textEn, keywords`；表达含 `id, expression, meaningZh?, example?`。静态内容没有学习状态。
10. `MaterialProgress`：`materialId, status, mastery, masteredChunkIds, currentChunkId?, currentStage, lastStudiedAt?, studyCount, updatedAt`。状态为 new/learning/reviewing/mastered；阶段为 1/2/3/4。收藏另用 `FavoriteExpression`：`id, materialId?, expression, meaningZh?, example?, category, sourceTitle, createdAt`。
11. 只新增 `materialProgress`（keyPath materialId）、`favoriteExpressions`（keyPath id）两 store，没有创建复杂会话体系。
12. DB 从版本 1 升级到 2；原 settings 自身的 version 字段不改写。
13. `onupgradeneeded` 仅在不存在时创建新 store。没有删除数据库、清旧数据、删除旧 store 或重建整个数据库。fake-indexeddb 与真实浏览器都从 v1 旧库升级，核对旧训练/复盘、原始音频字节、settings 及未知旧 store 仍完整相同。

## 14–24：完整学习链

14. 素材首页：真实概况、今日背诵、继续学习、动态主题分类、全部素材、我的表达及通用表达；支持英文/中文标题、tags、问题、分类及全文搜索，以及状态和分类筛选。
15. 详情：标题与来源/学习状态、可以应对的题目、中文逻辑骨架、分段完整稿、可独立标记的 chunks、按存在性显示短答、可收藏表达。英文正文手机 16px，段落和行距充分。
16. 四阶段：中英对照显示提示/关键词/英文；关键词阶段默认不挂载英文；中文提示阶段默认不挂载英文或关键词；整篇阶段仅逻辑骨架，点击后才挂载原始全文。可前后切换，不计时、不考试判分。
17. 分段掌握与当前位置保存到 materialProgress；先等待 IndexedDB 提交成功再更新界面，失败显示提示。初次读取任一素材 store 失败时暂停所有学习写入，提供重新读取入口，防止用空状态覆盖已存进度；有独立浏览器故障注入测试。刷新恢复阶段和分段；退出后继续优先提示未掌握段，整篇阶段显示「继续整篇回忆」。
18. 掌握度＝已掌握分段比例 × 80，四舍五入。整篇明确选择已掌握后为 100；还不熟/基本会了回到 learning/reviewing 并保留分段历史。看原文与返回阶段不清零；主动复习已掌握素材不自动降级。
19. 推荐最多 3 篇：learning → reviewing → 最近学习未掌握 → new；同级最近学习优先，已掌握不强制推荐。全部掌握后无强制任务。
20. 我的表达读取 favoriteExpressions；材料表达保存来源素材，通用表达保存所属分类，支持持久化收藏与取消。
21. 通用表达按源文件类别分组，包含双人讨论，所有表达原样展示，不编造未提供的中文解释。
22. 双向关系使用稳定 ID 显式表；关联真实题目，不依赖标题 includes，不新增课程题。没有明确对应的母题不强行关联。转入题目是自由练习，不影响正式打卡。
23. 增加同格式 batch2/batch3 后运行 `npm run import:materials`，或者启动 dev/build 自动导入，无需改页面代码。已有 ID 应保持稳定；支持 Markdown 中显式 id。
24. 当前源文件没有冲突或格式异常。导入器对重复 id/标准化标题报错；同类通用表达完全重复则去重，内容冲突报错，不把不同版本文章自动合并，不在解析失败时覆盖旧输出。

## 25–30：验证与使用边界

25. Vitest：114 / 114 通过，保留原 74 项，新增 40 项（导入 20、学习规则 14、迁移/持久化 4、显式关联 2）。TypeScript 严格检查和 ESLint 均通过。
26. Playwright：24 项（原 12＋新增 12），覆盖全部材料原文、四阶段、三个掌握选择、进度/收藏恢复、推荐与真实统计、双向题目、真实 v1 升级、初次读取失败不覆盖历史进度和离线。全程无头，未抢占前台。
27. `npm run build` 通过，使用 `/cet6-speak-daily/` 子路径。课程 chunk 仍为 `curriculum-2nxN_LG9.js`，与初版一致。
28. Workbox 正常生成 13 项预缓存，包含素材所在应用 JS；manifest/icons/standalone/注册/子路径及离线素材重开均验收。实体 Android/iOS 安装没有通过无头测试伪称完成。
29. 新手学习链集中走查：进入素材→AI 母题→中文逻辑及完整英文→Stage 1/2/3/4→退出续学→收藏→我的表达→已有题目→返回素材。此链在一个浏览器会话中验收，并审阅手机和桌面截图判断层级、可读性及操作连贯性。没有发现阻断从理解到主动回忆、整篇复述和表达迁移的问题。验收形式为无头浏览器操作与截图审阅，没有模拟成实体触屏或有窗口 GUI 人工测试。
30. 没有已知阻断功能。数据仍仅存在本设备浏览器，无云同步；本模块不自动判断是否真的背会；部分表达没有中文解释是原文件未提供；未匹配母题保持不关联。实体设备安装、真实录音音质和系统后台行为仍属于设备检查范围。

## 发布记录

沿用现有 [GitHub 仓库](https://github.com/vizzinicoslett-code/cet6-speak-daily) 与 [Pages 地址](https://vizzinicoslett-code.github.io/cet6-speak-daily/)，不另建项目或仓库。实际发布结果在最终交付中记录。
