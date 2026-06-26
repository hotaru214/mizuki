---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '了解更多 Mizuki 的 Markdown 功能'
image: ''
tags: [Demo, Example, Markdown, Mizuki]
category: 'Examples'
draft: false 
---

## GitHub 仓库卡片
你可以添加动态卡片链接到 GitHub 仓库,页面加载时会从 GitHub API 拉取仓库信息。

::github{repo="LyraVoid/Mizuki"}

使用代码 `::github{repo="LyraVoid/Mizuki"}` 创建 GitHub 仓库卡片。

```markdown
::github{repo="LyraVoid/Mizuki"}
```

## 提示框

支持以下类型的提示框:`note` `tip` `important` `warning` `caution`

:::note
突出显示用户应留意的信息,即使只是快速浏览。
:::

:::tip
帮助用户更好地完成操作的可选信息。
:::

:::important
用户成功所必需的关键信息。
:::

:::warning
因潜在风险而需要用户立即关注的关键内容。
:::

:::caution
操作可能带来的负面后果。
:::

### 基本语法

```markdown
:::note
突出显示用户应留意的信息,即使只是快速浏览。
:::

:::tip
帮助用户更好地完成操作的可选信息。
:::
```

### 自定义标题

提示框的标题可以自定义。

:::note[我的自定义标题]
这是一个带有自定义标题的提示。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的提示。
:::
```

### GitHub 语法

> [!TIP]
> 也支持 [GitHub 语法](https://github.com/orgs/community/discussions/16925)。

```
> [!NOTE]
> 也支持 GitHub 语法。

> [!TIP]
> 也支持 GitHub 语法。
```

### 剧透

你可以为文字添加剧透效果。剧透文字也支持 **Markdown** 语法。

内容 :spoiler[被隐藏了 **ayyy**]!

```markdown
内容 :spoiler[被隐藏了 **ayyy**]!
```
