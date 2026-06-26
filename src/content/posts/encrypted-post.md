---
title: 加密文章
published: 2024-01-15
description: 这是一篇用于测试页面加密功能的文章
encrypted: true
pinned: true
password: "123456"
passwordHint: "123456"
hideHomeContent: true
alias: "encrypted-example"
tags: ["Test", "Encryption"]
category: "Technology"
---

这个博客模板基于 [Astro](https://astro.build/) 构建。本指南未提及的内容,可在 [Astro 文档](https://docs.astro.build/) 中查找答案。

## 文章 Front-matter

```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
description: 这是我新 Astro 博客的第一篇文章。
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```




| 属性             | 说明                                                                                                                                                                                                        |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`          | 文章标题。                                                                                                                                                                                                  |
| `published`      | 文章发布日期。                                                                                                                                                                                              |
| `pinned`         | 是否置顶显示在文章列表顶部。                                                                                                                                                                                |
| `description`    | 文章简短描述。显示在首页。                                                                                                                                                                                  |
| `image`          | 文章封面图路径。<br/>1. 以 `http://` 或 `https://` 开头:使用网络图片<br/>2. 以 `/` 开头:`public` 目录下的图片<br/>3. 无前缀:相对于 markdown 文件的路径                                                      |
| `tags`           | 文章标签。                                                                                                                                                                                                  |
| `category`       | 文章分类。                                                                                                                                                                                                  |
| `alias`          | 文章别名。文章将通过 `/posts/{alias}/` 访问。例如:`my-special-article`(可通过 `/posts/my-special-article/` 访问)                                                            |
| `licenseName`    | 文章内容的许可协议名称。                                                                                                                                                                                    |
| `author`         | 文章作者。                                                                                                                                                                                                  |
| `sourceLink`     | 文章内容的来源链接或引用。                                                                                                                                                                                  |
| `draft`          | 是否为草稿,草稿不会显示。                                                                                                                                                                                  |
| `encrypted`      | 是否对文章进行密码保护。                                                                                                                                                                                    |
| `password`       | 解锁加密文章的密码。                                                                                                                                                                                        |
| `passwordHint`   | 帮助用户回忆密码的提示。显示在密码输入框下方。                                                                                                                                                              |
| `hideHomeContent`| 是否隐藏公开的文章摘要,包括首页、meta 标签、feed/API 摘要和分享预览。设置 `password` 时默认为 `true`。                                                                                                      |

## 文章文件放在哪里



文章文件应放在 `src/content/posts/` 目录下。你也可以创建子目录来更好地组织文章和资源。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

## 文章别名

你可以通过在 front-matter 中添加 `alias` 字段为文章设置别名:

```yaml
---
title: 我的特别文章
published: 2024-01-15
alias: "my-special-article"
tags: ["Example"]
category: "Technology"
---
```

设置别名后:
- 文章可通过自定义 URL 访问(如 `/posts/my-special-article/`)
- 默认的 `/posts/{slug}/` URL 仍然有效
- RSS/Atom feed 将使用自定义别名
- 所有内部链接将自动使用自定义别名

**注意事项:**
- 别名不应包含 `/posts/` 前缀(会自动添加)
- 避免在别名中使用特殊字符和空格
- 为获得最佳 SEO 效果,使用小写字母和连字符
- 确保所有文章的别名唯一
- 不要包含前导或尾随斜杠


## 工作原理

```mermaid
graph LR
    A[用户密码] --> B[直接 AES 解密]
    B --> C{检查前缀?}
    C -- 找到 "MIZUKI-VERIFY:" --> D[成功:渲染内容]
    C -- 随机/乱码 --> E[失败:密码错误]
```

## 页面加密

你可以通过在 front-matter 中设置 `encrypted: true` 并提供 `password` 来对文章进行密码保护:

```yaml
---
title: 我的私密文章
published: 2024-01-15
encrypted: true
password: "my-secret-password"
passwordHint: "提示:密码是我的狗的名字"
hideHomeContent: true
---
```

### 字段

| 字段              | 必填 | 说明                                              |
|-------------------|------|---------------------------------------------------|
| `encrypted`       | 是   | 设为 `true` 启用密码保护                           |
| `password`        | 是   | 解锁文章的密码                                     |
| `passwordHint`    | 否   | 显示在密码输入框下方的提示,帮助用户输入           |
| `hideHomeContent` | 否   | 将公开摘要隐藏为 `该文章已加密`。设置 `password` 时默认为 `true`。设为 `false` 则显示正常摘要。 |

### 解锁框外观

解锁框显示:
- 主题色的锁图标
- 文章标题"密码保护"
- 要求输入密码的说明
- 提示(如果提供了 `passwordHint`)
- 密码输入框和解锁按钮

输入正确密码后,内容会被解密并显示。密码存储在 session storage 中,因此用户在同一会话的后续页面加载中无需重新输入。
