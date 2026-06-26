---
title: Markdown Mermaid 图表
published: 2023-10-01
pinned: false
description: 一个使用 Mermaid 在 Markdown 中创建图表的简单示例。
tags: [Markdown, Blogging, Mermaid]
category: Examples
draft: false
---
# Markdown Mermaid 图表完全指南

本文演示如何在 Markdown 文档中使用 Mermaid 创建各类复杂图表,包括流程图、时序图、甘特图、类图和状态图。

## 流程图示例

流程图非常适合表示流程或算法步骤。




```mermaid
graph TD
    A[开始] --> B{条件判断}
    B -->|是| C[处理步骤1]
    B -->|否| D[处理步骤2]
    C --> E[子流程]
    D --> E
    subgraph E [子流程详情]
        E1[子步骤1] --> E2[子步骤2]
        E2 --> E3[子步骤3]
    end
    E --> F{另一个决策}
    F -->|选项1| G[结果1]
    F -->|选项2| H[结果2]
    F -->|选项3| I[结果3]
    G --> J[结束]
    H --> J
    I --> J
```

## 时序图示例

时序图展示对象之间随时间发生的交互。

```mermaid
sequenceDiagram
    participant 用户
    participant 网页应用
    participant 服务器
    participant 数据库

    用户->>网页应用: 提交登录请求
    网页应用->>服务器: 发送认证请求
    服务器->>数据库: 查询用户凭证
    数据库-->>服务器: 返回用户数据
    服务器-->>网页应用: 返回认证结果
    
    alt 认证成功
        网页应用->>用户: 显示欢迎页面
        网页应用->>服务器: 请求用户数据
        服务器->>数据库: 获取用户偏好
        数据库-->>服务器: 返回偏好设置
        服务器-->>网页应用: 返回用户数据
        网页应用->>用户: 加载个性化界面
    else 认证失败
        网页应用->>用户: 显示错误信息
        网页应用->>用户: 提示重新输入
    end
```

## 甘特图示例

甘特图非常适合展示项目进度和时间线。

```mermaid
gantt
    title 网站开发项目时间线
    dateFormat  YYYY-MM-DD
    axisFormat  %m/%d
    
    section 设计阶段
    需求分析      :a1, 2023-10-01, 7d
    UI 设计       :a2, after a1, 10d
    原型制作      :a3, after a2, 5d
    
    section 开发阶段
    前端开发      :b1, 2023-10-20, 15d
    后端开发      :b2, after a2, 18d
    数据库设计    :b3, after a1, 12d
    
    section 测试阶段
    单元测试      :c1, after b1, 8d
    集成测试      :c2, after b2, 10d
    用户验收测试  :c3, after c2, 7d
    
    section 部署
    生产部署      :d1, after c3, 3d
    上线          :milestone, after d1, 0d
```

## 类图示例

类图展示系统的静态结构,包括类、属性、方法及其关系。

```mermaid
classDiagram
    class 用户 {
        +String 用户名
        +String 密码
        +String 邮箱
        +Boolean 激活状态
        +登录()
        +登出()
        +更新资料()
    }
    
    class 文章 {
        +String 标题
        +String 内容
        +Date 发布日期
        +Boolean 已发布
        +发布()
        +编辑()
        +删除()
    }
    
    class 评论 {
        +String 内容
        +Date 评论日期
        +添加评论()
        +删除评论()
    }
    
    class 分类 {
        +String 名称
        +String 描述
        +添加文章()
        +移除文章()
    }
    
    用户 "1" -- "*" 文章 : 撰写
    用户 "1" -- "*" 评论 : 发表
    文章 "1" -- "*" 评论 : 包含
    文章 "1" -- "*" 分类 : 属于
```

## 状态图示例

状态图展示对象在其生命周期中经历的状态序列。

```mermaid
stateDiagram-v2
    [*] --> 草稿
    
    草稿 --> 审核中 : 提交
    审核中 --> 草稿 : 驳回
    审核中 --> 已批准 : 批准
    已批准 --> 已发布 : 发布
    已发布 --> 已归档 : 归档
    已发布 --> 草稿 : 撤回
    
    state 已发布 {
        [*] --> 活跃
        活跃 --> 隐藏 : 临时隐藏
        隐藏 --> 活跃 : 恢复
        活跃 --> [*]
        隐藏 --> [*]
    }
    
    已归档 --> [*]
```

## 饼图示例

饼图非常适合展示比例和百分比数据。

```mermaid
pie title 网站流量来源分析
    "搜索引擎" : 45.6
    "直接访问" : 30.1
    "社交媒体" : 15.3
    "外链推荐" : 6.4
    "其他来源" : 2.6
```

## 总结

Mermaid 是在 Markdown 文档中创建各类图表的强大工具。本文演示了如何使用流程图、时序图、甘特图、类图、状态图和饼图。这些图表可以帮助你更清晰地表达复杂的概念、流程和数据结构。

使用 Mermaid 时,只需在代码块中指定 mermaid 语言,并用简洁的文本语法描述图表,Mermaid 就会自动将这些描述转换为美观的可视化图表。

不妨在你的下一篇技术博客或项目文档中尝试使用 Mermaid 图表——它们会让你的内容更专业、更易懂!
