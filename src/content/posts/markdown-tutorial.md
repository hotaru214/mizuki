---
title: Markdown 教程
published: 2025-01-20
pinned: true
description: 一个简单的 Markdown 博客文章示例。
tags: [Markdown, Blogging]
category: Examples
licenseName: "Unlicensed"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
draft: false
---

# Markdown 教程

这是一个展示如何编写 markdown 文件的示例。本文档整合了核心语法和扩展(GMF)。

- [块级元素](#块级元素)
  - [段落和换行](#段落和换行)
  - [标题](#标题)
  - [引用](#引用)
  - [列表](#列表)
  - [代码块](#代码块)
  - [水平分割线](#水平分割线)
  - [表格](#表格)
- [行内元素](#行内元素)
  - [链接](#链接)
  - [强调](#强调)
  - [代码](#代码)
  - [图片](#图片)
  - [删除线](#删除线)
- [其他](#其他)
  - [自动链接](#自动链接)
  - [反斜杠转义](#反斜杠转义)
- [行内 HTML](#行内-html)

## 块级元素

### 段落和换行

#### 段落

HTML 标签:`<p>`

一个或多个空行。(空行是指只包含**空格**或**制表符**的行。)

代码:

    这是
    同一段落。

    这是第二段。

预览:

---

这是
同一段落。

这是第二段。

---

#### 换行

HTML 标签:`<br />`

在行尾添加**两个或更多空格**。

代码:

    这不会
    在同一行。

预览:

---

这不会  
在同一行。

---

### 标题

Markdown 支持两种风格的标题:Setext 和 atx。

#### Setext

HTML 标签:`<h1>`、`<h2>`

使用**等号(=)**作为 `<h1>`、**连字符(-)**作为 `<h2>`"下划线",数量不限。

代码:

    这是 H1
    =============
    这是 H2
    -------------

预览:

---

# 这是 H1

## 这是 H2

---

#### atx

HTML 标签:`<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`

在行首使用 1-6 个**井号(#)**,对应 `<h1>` - `<h6>`。

代码:

    # 这是 H1
    ## 这是 H2
    ###### 这是 H6

预览:

---

# 这是 H1

## 这是 H2

###### 这是 H6

---

你也可以"闭合"atx 风格的标题。闭合的井号**不需要匹配**开头的井号数量。

代码:

    # 这是 H1 #
    ## 这是 H2 ##
    ### 这是 H3 ######

预览:

---

# 这是 H1

## 这是 H2

### 这是 H3

---

### 引用

HTML 标签:`<blockquote>`

Markdown 使用邮件风格的 **>** 字符进行引用。最好在每行硬换行并加上 >。

代码:

    > 这是一个包含两段的引用。Lorem ipsum dolor sit amet,
    > consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    > Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
    >
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    > id sem consectetuer libero luctus adipiscing.

预览:

---

> 这是一个包含两段的引用。Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

Markdown 也允许偷懒,只在硬换行段落的第一行前加 >。

代码:

    > 这是一个包含两段的引用。Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    id sem consectetuer libero luctus adipiscing.

预览:

---

> 这是一个包含两段的引用。Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

引用可以嵌套(即引用中的引用),通过添加更多层级的 > 实现。

代码:

    > 这是第一层引用。
    >
    > > 这是嵌套引用。
    >
    > 回到第一层。

预览:

---

> 这是第一层引用。
>
> > 这是嵌套引用。
>
> 回到第一层。

---

引用可以包含其他 Markdown 元素,包括标题、列表和代码块。

代码:

    > ## 这是一个标题。
    >
    > 1.   这是第一个列表项。
    > 2.   这是第二个列表项。
    >
    > 这里是一些示例代码:
    >
    >     return shell_exec("echo $input | $markdown_script");

预览:

---

> ## 这是一个标题。
>
> 1.  这是第一个列表项。
> 2.  这是第二个列表项。
>
> 这里是一些示例代码:
>
>     return shell_exec("echo $input | $markdown_script");

---

### 列表

Markdown 支持有序(编号)和无序(项目符号)列表。

#### 无序列表

HTML 标签:`<ul>`

无序列表使用**星号(\*)**、**加号(+)**和**连字符(-)**。

代码:

    *   红色
    *   绿色
    *   蓝色

预览:

---

- 红色
- 绿色
- 蓝色

---

等同于:

代码:

    +   红色
    +   绿色
    +   蓝色

以及:

代码:

    -   红色
    -   绿色
    -   蓝色

#### 有序列表

HTML 标签:`<ol>`

有序列表使用数字加句点:

代码:

    1.  鸟
    2.  麦克海尔
    3.  帕里什

预览:

---

1.  鸟
2.  麦克海尔
3.  帕里什

---

有时可能会意外触发有序列表,比如这样写:

代码:

    1986. 多么美好的赛季。

预览:

---

1986. 多么美好的赛季。

---

你可以用**反斜杠转义(\\)**句点:

代码:

    1986\. 多么美好的赛季。

预览:

---

1986\. 多么美好的赛季。

---

#### 缩进

##### 引用

要在列表项中放置引用,引用的 > 分隔符需要缩进:

代码:

    *   一个带引用的列表项:

        > 这是引用
        > 在列表项内。

预览:

---

- 一个带引用的列表项:

  > 这是引用
  > 在列表项内。

---

##### 代码块

要在列表项中放置代码块,代码块需要缩进两次——**8 个空格**或**两个制表符**:

代码:

    *   一个带代码块的列表项:

            <代码写在这里>

预览:

---

- 一个带代码块的列表项:

      <代码写在这里>

---

##### 嵌套列表

代码:

    * A
      * A1
      * A2
    * B
    * C

预览:

---

- A
  - A1
  - A2
- B
- C

---

### 代码块

HTML 标签:`<pre>`

将代码块的每一行缩进至少**4 个空格**或**1 个制表符**。

代码:

    这是一个普通段落:

        这是一个代码块。

预览:

---

这是一个普通段落:

    这是一个代码块。

---

代码块会一直延续,直到遇到没有缩进的行(或文章结尾)。

在代码块内,**_与号(&)_**和**尖括号(< 和 >)**会自动转换为 HTML 实体。

代码:

        <div class="footer">
            &copy; 2004 Foo Corporation
        </div>

预览:

---

    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>

---

以下围栏代码块和语法高亮部分是扩展功能,你可以用另一种方式写代码块。

#### 围栏代码块

只需用 ` ``` ` 包裹代码(如下所示),无需缩进四个空格。

代码:

    示例:

    ```
    function test() {
      console.log("注意这个函数前的空行?");
    }
    ```

预览:

---

示例:

```
function test() {
  console.log("注意这个函数前的空行?");
}
```

---

#### 语法高亮

在围栏代码块中,添加可选的语言标识符,就会进行语法高亮([支持的语言](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml))。

代码:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

预览:

---

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

---

### 水平分割线

HTML 标签:`<hr />`

在一行中放置**三个或更多连字符(-)、星号(\*)或下划线(\_)**。连字符或星号之间可以有空格。

代码:

    * * *
    ***
    *****
    - - -
    ---------------------------------------
    ___

预览:

---

---

---

---

---

---

---

---

---

### 表格

HTML 标签:`<table>`

这是一个扩展功能。

用**竖线(|)**分隔列,用**连字符(-)**分隔表头,用**冒号(:)**控制对齐。

外侧的**竖线(|)**和对齐方式是可选的。表头每个单元格至少需要**3 个分隔符**。

代码:

```
| 左对齐 | 居中 | 右对齐 |
|:-----|:------:|------:|
|aaa   |bbb     |ccc    |
|ddd   |eee     |fff    |

 A | B
---|---
123|456


A |B
--|--
12|45
```

预览:

---

| 左对齐 | 居中 | 右对齐 |
| :--- | :----: | ----: |
| aaa  |  bbb   |   ccc |
| ddd  |  eee   |   fff |

| A   | B   |
| --- | --- |
| 123 | 456 |

| A   | B   |
| --- | --- |
| 12  | 45  |

---

## 行内元素

### 链接

HTML 标签:`<a>`

Markdown 支持两种链接风格:行内式和引用式。

#### 行内式

行内链接格式如下:`[链接文字](URL "标题")`

标题是可选的。

代码:

    这是一个 [示例](http://example.com/ "标题") 行内链接。

    [这个链接](http://example.net/) 没有标题属性。

预览:

---

这是一个 [示例](http://example.com/ "标题") 行内链接。

[这个链接](http://example.net/) 没有标题属性。

---

如果你引用同一服务器上的本地资源,可以使用相对路径:

代码:

    详情见我的 [关于](/about/) 页面。

预览:

---

详情见我的 [关于](/about/) 页面。

---

#### 引用式

你可以预定义链接引用。格式如下:`[id]: URL "标题"`

标题也是可选的。引用链接时,格式为:`[链接文字][id]`

代码:

    [id]: http://example.com/  "可选标题"
    这是一个 [示例][id] 引用式链接。

预览:

---

[id]: http://example.com/ "可选标题"

这是一个 [示例][id] 引用式链接。

---

即:

- 包含链接标识符的方括号(**不区分大小写**,可用最多三个空格从左边距缩进);
- 后跟一个冒号;
- 后跟一个或多个空格(或制表符);
- 后跟链接的 URL;
- 链接 URL 可选择用尖括号包围。
- 可选择后跟链接的标题属性,用双引号、单引号或括号包围。

以下三个链接定义是等价的:

代码:

    [foo]: http://example.com/  "可选标题"
    [foo]: http://example.com/  '可选标题'
    [foo]: http://example.com/  (可选标题)
    [foo]: <http://example.com/>  "可选标题"

使用空的方括号时,链接文字本身作为名称。

代码:

    [Google]: http://google.com/
    [Google][]

预览:

---

[Google]: http://google.com/

[Google][]

---

### 强调

HTML 标签:`<em>`、`<strong>`

Markdown 将**星号(\*)**和**下划线(\_)**作为强调标记。**单个分隔符**为 `<em>`;**双分隔符**为 `<strong>`。

代码:

    *单个星号*

    _单个下划线_

    **双星号**

    __双下划线__

预览:

---

_单个星号_

_单个下划线_

**双星号**

**双下划线**

---

但如果用空格包围 \* 或 \_,它会被当作字面的星号或下划线。

你可以用反斜杠转义:

代码:

    \*这段文字被字面星号包围\*

预览:

---

\*这段文字被字面星号包围\*

---

### 代码

HTML 标签:`<code>`

用**反引号(`)**包裹。

代码:

    使用 `printf()` 函数。

预览:

---

使用 `printf()` 函数。

---

要在代码段中包含字面反引号,可以使用**多个反引号**作为开头和结尾分隔符:

代码:

    ``这里有一个字面反引号 (`)。``

预览:

---

``这里有一个字面反引号 (`)。``

---

代码段的反引号分隔符可以包含空格——开头后一个,结尾前一个。这允许你在代码段开头或结尾放置字面反引号:

代码:

    代码段中的单个反引号: `` ` ``

    代码段中用反引号分隔的字符串: `` `foo` ``

预览:

---

代码段中的单个反引号: `` ` ``

代码段中用反引号分隔的字符串: `` `foo` ``

---

### 图片

HTML 标签:`<img />`

Markdown 使用与链接类似的图片语法,支持两种风格:行内式和引用式。

#### 行内式

行内图片语法如下:`![替代文字](URL "标题")`

标题是可选的。

代码:

    ![替代文字](/path/to/img.jpg)

    ![替代文字](/path/to/img.jpg "可选标题")

预览:

---

![替代文字](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp)

![替代文字](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "可选标题")

---

即:

- 一个感叹号:!;
- 后跟一组方括号,包含图片的 alt 属性文字;
- 后跟一组圆括号,包含图片的 URL 或路径,以及可选的用双引号或单引号包围的标题属性。

#### 引用式

引用式图片语法如下:`![替代文字][id]`

代码:

    [img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp  "可选标题属性"
    ![替代文字][img id]

预览:

---

[img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "可选标题属性"

![替代文字][img id]

---

### 删除线

HTML 标签:`<del>`

这是一个扩展功能。

GFM 添加了删除线语法。

代码:

```
~~错误的文字。~~
```

预览:

---

~~错误的文字。~~

---

## 其他

### 自动链接

Markdown 支持为 URL 和邮箱地址创建"自动"链接的快捷方式:只需用尖括号包围 URL 或邮箱地址。

代码:

    <http://example.com/>

    <address@example.com>

预览:

---

<http://example.com/>

<address@example.com>

---

GFM 会自动链接标准 URL。

代码:

```
https://github.com/emn178/markdown
```

预览:

---

https://github.com/emn178/markdown

---

### 反斜杠转义

Markdown 允许使用反斜杠转义来生成字面字符,这些字符在 Markdown 格式语法中原本有特殊含义。

代码:

    \*字面星号\*

预览:

---

\*字面星号\*

---

Markdown 为以下字符提供反斜杠转义:

代码:

    \   反斜杠
    `   反引号
    *   星号
    _   下划线
    {}  花括号
    []  方括号
    ()  圆括号
    #   井号
    +   加号
    -   减号(连字符)
    .   点
    !   感叹号

## 行内 HTML

对于 Markdown 语法未覆盖的标记,直接使用 HTML 即可。无需前缀或分隔符来表示从 Markdown 切换到 HTML;直接使用标签。

代码:

    这是一个普通段落。

    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>

    这是另一个普通段落。

预览:

---

这是一个普通段落。

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

这是另一个普通段落。

---

注意,Markdown 格式语法**不会在块级 HTML 标签内处理**。

与块级 HTML 标签不同,Markdown 语法**会在行内标签内处理**。

代码:

    <span>**有效**</span>

    <div>
        **无效**
    </div>

预览:

---

<span>**有效**</span>

<div>
  **无效**
</div>
***
