# Markdown 编辑手册

这份手册适用于本地说明站的 Markdown 页面，例如使用条款、使用权说明和激活指南。所有示例都可以复制后修改。

## 1. 文件在哪里

| 内容 | 推荐编辑的源文件 |
| --- | --- |
| 服务说明 | `sites/net-guide-reference/public/info/text.md` |
| 激活 ALL.NET 利用权 | `sites/net-guide-reference/public/activate/text.md` |
| 使用权说明 | `sites/net-guide-reference/public/use-right/text.md` |
| 本手册 | `sites/net-guide-reference/public/markdown-guide/text.md` |
| 页面上下共用菜单 | `sites/net-guide-reference/public/lib/navigation.js` |
| 页脚文字 | `sites/net-guide-reference/src/templates/site-footer.html` |
| 首页使用方法的步骤 | `sites/net-guide-reference/src/templates/home-registration.html` |

上面的路径均相对于 `C:/HDD/System/artemis/`。文档使用 UTF-8 编码保存。

推荐修改源文件后重新构建。直接修改 `deliver/ALLNET-Guide-reference-20261110/` 中的 `text.md`，刷新当前离线页面也能看到效果，但下一次构建会覆盖该目录，因此应同时保存到源项目。

## 2. 标题与字号

`#` 后面要有一个空格。一个页面通常只使用一个一级标题。

```markdown
# 页面标题
## 第一部分
### 小节标题
#### 四级标题
##### 五级标题
###### 六级标题
```

本站标题字号依次为 **28、24、20、18、16、14 px**。标题同时会采用原版页面的标题样式，例如二级标题的黑色背景。

Markdown 没有通用的“字号”语法。少量文字需要不同字号时，可以使用 HTML：

```html
<span style="font-size: 20px;">这段文字为 20px</span>

<p style="font-size: 18px; line-height: 1.8;">这一整段使用较大的文字和行距。</p>
```

若要调整所有页面的标题大小，修改 `public/lib/guide-editor.css` 中的 `.Md h1` 到 `.Md h6`。

## 3. 段落、换行和强调

两段文字之间空一行。需要段内明确换行时可以使用 `<br>`。

```markdown
这是第一段。

这是第二段。<br>这一句另起一行，但仍在同一段里。

**加粗文字**
*斜体文字*
~~删除线文字~~
`文件名或短代码`
```

## 4. 文字颜色

颜色也不是标准 Markdown 语法，本站支持在文档中使用 HTML 的 `style`：

```html
<span style="color: #c3342c;">红色：未完成或需要注意</span>

<span style="color: #9b6500;">黄色：提醒信息</span>

<span style="color: #16744a; font-size: 20px;">绿色、20px 的提示</span>
```

<span style="color: #c3342c;">红色示例</span> · <span style="color: #9b6500;">黄色示例</span> · <span style="color: #16744a;">绿色示例</span>

颜色采用 `#RRGGBB`，也可使用 `red` 等英文颜色名。白色页面上避免使用过浅的黄色。

旧页面的 `{red:红色文字}`、`{alignR:右对齐文字}` 仍然可用，新文案建议使用上面的写法。

## 5. 有序列表和无序列表

数字、英文句号和空格组成有序列表。项目之间空一行也会连续编号。

```markdown
1. 登录账号。

2. 打开 ALL.NET 页面。

3. 按页面提示激活。
```

同一个列表里全部写成 `1.`，网页也会自动显示为 **1、2、3**。同一列表只采用第一项的数字作为起点，后续数字自动递增；若需要从 5 开始，把第一项写成 `5.`。新标题或独立段落结束当前列表后，下一组可以重新从 1 开始。

```markdown
5. 第五项。
6. 第六项。

## 新章节

1. 新章节的第一项。
```

嵌套项目需要缩进；本例子项使用 4 个空格：

```markdown
1. 准备账号。
    1. 打开注册页面。
    2. 按提示完成注册。
2. 登录主站。
```

无序列表使用短横线和空格：

```markdown
- EVIL LEAKER ID
- 需要激活的游戏项目
- Aime 卡片
```

## 6. 添加链接

方括号写显示的文字，圆括号写目标地址。

```markdown
[打开主站](https://new.am-all.com.cn/)

[查看激活指南](/activate/)

[返回首页的使用方法](/#registration)
```

以 `/` 开始的站内地址会自动使用当前预览端口，不必写死 `127.0.0.1:4322`。希望在新标签页打开外部链接时，可以写：

```html
<a href="https://new.am-all.com.cn/" target="_blank" rel="noopener noreferrer">打开主站</a>
```

## 7. 添加图片

先把图片放进源项目的 `public` 文件夹。举例：`public/activate/assets/step1.png` 对应网页地址 `/activate/assets/step1.png`。

```markdown
![激活步骤截图](/activate/assets/step1.png)
```

上面是文件名示例，放入实际图片后才会显示。方括号里的文字是图片说明，在图片无法显示时也能提供提示。

当前已有的首页图片可以直接引用：

```markdown
![ALL.NET 激活步骤](/root/assets/pc/register_step2.png)
```

图片默认保持比例，并缩小到不超过内容区域。需要限制宽度时：

```html
<img src="/root/assets/pc/register_step2.png"
     alt="ALL.NET 激活步骤"
     style="width: 640px; max-width: 100%; height: auto;">
```

为 PC 和手机分别提供图片时，使用 `picture`：

```html
<picture>
  <source media="(max-width: 600px)"
          srcset="/root/assets/sp/register_step2.png">
  <img src="/root/assets/pc/register_step2.png"
       alt="ALL.NET 激活步骤">
</picture>
```

为保证离线预览，优先使用本地图片。当前页面的安全策略不加载外部网站图片；不要直接写 Windows 盘符路径，也不要把 `public` 写进网页图片地址。

## 8. 引用、分隔线和表格

```markdown
> 这是一段需要单独提示的说明。

---

| 项目 | 说明 |
| --- | --- |
| 第一步 | 登录账号 |
| 第二步 | 激活利用权 |
```

表格前后各空一行。第二行的短横线必须保留。

<a id="markdown-alerts"></a>

### 8.1 彩色提示框（Alert）

本站支持下面五种写法，与 [GitHub Alert 的基础语法](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts)一致。类型名称使用英文，网页标题默认显示中文：

| 类型 | 默认标题 | 颜色 |
| --- | --- | --- |
| `[!NOTE]` | 提示 | 蓝色 |
| `[!TIP]` | 建议 | 绿色 |
| `[!IMPORTANT]` | 重要 | 紫色 |
| `[!WARNING]` | 警告 | 橙黄色 |
| `[!CAUTION]` | 注意 | 红色 |

复制下面的代码到页面的 `text.md` 中即可：

```markdown
> [!NOTE]
> 此处填写补充说明。

> [!TIP]
> 建议先阅读 [激活指南](/activate/)。

> [!IMPORTANT]
> 更新前请保存好自己的配置文件。

> [!WARNING]
> 安装或更新插件前，请先退出游戏。

> [!CAUTION]
> 请勿把个人配置文件分享给其他人。
```

实际效果：

> [!NOTE]
> 此处填写补充说明。

> [!TIP]
> 建议先阅读 [激活指南](/activate/)。

> [!IMPORTANT]
> 更新前请保存好自己的配置文件。

> [!WARNING]
> 安装或更新插件前，请先退出游戏。

> [!CAUTION]
> 请勿把个人配置文件分享给其他人。

也可以在类型后空一格，写自己的标题。自定义标题使用普通文字，正文支持 **加粗**、链接、图片、列表、表格和代码块：

```markdown
> [!WARNING] 更新前的准备
> 请先 **退出游戏**，再进行以下操作：
>
> 1. 找到游戏的 `package` 目录。
> 2. 备份原插件和个人配置。
>
> 完成后可继续阅读 [激活指南](/activate/)。
```

> [!WARNING] 更新前的准备
> 请先 **退出游戏**，再进行以下操作：
>
> 1. 找到游戏的 `package` 目录。
> 2. 备份原插件和个人配置。
>
> 完成后可继续阅读 [激活指南](/activate/)。

注意每一行都以 `>` 开头，框内的空行写成单独一个 `>`。提示框之间留一个完全空白的行。类型标记放在引用块第一行，正文从下一行开始；单独写 `[!NOTE]` 或 `**[!CAUTION]文字**` 不会产生提示框。代码块里的示例也不会被渲染成提示框。

自定义标题是本站提供的扩展，不保证其他 Markdown 编辑器同样支持。未知类型（例如 `[!INFO]`）仍按普通引用显示。提示框所需样式和图标都随本地站点保存，不需要联网加载。

## 9. 展示代码或 Markdown 写法

使用三枚反引号包住代码，第一行可以写 `markdown`、`html` 或其他语言名。代码块中的内容会按原样展示，不会变成标题、图片或彩色文字。

````markdown
```html
<span style="color: red;">这里展示的是代码</span>
```
````

HTML 不是所有 Markdown 编辑器都支持的功能；本说明站支持上述示例，不需要添加脚本。

## 10. 更新和离线预览

修改源文件后，在 PowerShell 执行：

```powershell
Set-Location C:/HDD/System/artemis/sites/net-guide-reference
npm run build
```

构建会更新 `C:/HDD/System/artemis/deliver/ALLNET-Guide-reference-20261110/`。刷新现有的 4322 页面即可。

若预览服务没有运行，另开一个 PowerShell 窗口执行：

```powershell
python -m http.server --bind 127.0.0.1 --directory "C:/HDD/System/artemis/deliver/ALLNET-Guide-reference-20261110" 4322
```

然后打开 [本地首页](/)、[激活指南](/activate/) 或[服务说明](/info/)。若旧样式仍被缓存，可按 `Ctrl+F5` 强制刷新。

需要边编辑边预览时，在源项目目录运行 `npm run dev -- --host 127.0.0.1 --port 4323`，使用 4323 页面；它直接读取源文件，不替代 4322 的构建结果。
