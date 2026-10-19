# Xintong Guo — Personal website

A responsive, buildless personal research homepage for **GUOXINTONG**. All research, biography, news, and experience content is explicitly illustrative. The GitHub profile link is the supplied account.

## 本地预览

在此目录运行 `python3 -m http.server 8000`，打开 http://localhost:8000 。不需要安装依赖或构建。

## 修改内容

- `content.js`：介绍、研究兴趣、论文、动态、工作和教育经历。
- `index.html`：显示姓名、联系方式、导航、页脚。姓名暂按 GitHub 用户名拆分为 Xintong Guo，中文姓名尚未填写。
- `style.css`：颜色、字体、响应式排版。
- 将 `.portrait-art` 替换为真实照片即可；当前是原创 CSS 风景占位图，不是本人肖像。
- 论文 `paper` / `code` 设置为真实网址后，详情弹窗会显示链接。未配置时不生成假链接。
- 配置邮箱、Scholar、CV 时，将相应的 coming soon 占位元素换成真实链接；不要给访客留下空链接。
- 真正上线前，替换所有 SAMPLE、方括号和 20XX 内容，以及详情弹窗的占位说明。
- 字体从 Google Fonts 加载；网络不可用时自动使用 Georgia 和 Helvetica Neue 等本地字体。其他资源均为本地文件。

## GitHub Pages 部署

目标地址：`https://guoxintong.github.io/`。

1. 登录 GitHub，以 **GUOXINTONG** 创建公开仓库 **GUOXINTONG.github.io**。如果已有该仓库，先备份并检查现有内容，不要直接覆盖。
2. 上传 `index.html`、`style.css`、`content.js`、`script.js`、`favicon.svg` 和 `.nojekyll` 到仓库根目录的 `main` 分支。
3. 仓库 Settings → Pages → Source 选择 **Deploy from a branch**，选择 **main / (root)**，保存。
4. 等待 GitHub Pages 发布完成后，访问目标地址。

这是纯静态网站，不需要服务器、API key 或在网页中保存 GitHub token。也可部署到普通项目仓库的子路径；资源路径均为相对路径。

官方说明：https://docs.github.com/en/pages/quickstart
