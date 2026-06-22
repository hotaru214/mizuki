import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
  name: "hotaru",
  bio: "平凡的天才展示才能，真正的天才让人忘记才能",
  typewriter: {
    enable: true, // 启用个人简介打字机效果
    speed: 80, // 打字速度（毫秒）
  },
  links: [
    {
      name: "Bilibili",
      icon: "fa7-brands:bilibili",
      url: "https://space.bilibili.com/533078968",
    },
    {
      name: "Gitee",
      icon: "mdi:git",
      url: "https://gitee.com/matsuzakayuki",
    },
    {
      name: "GitHub",
      icon: "fa7-brands:github",
      url: "https://github.com/hotaru214",
    },
    {
      name: "Telegram",
      icon: "simple-icons:telegram",
      url: "https://t.me/hotaru214",
    },
    {
      name: "X",
      icon: "fa7-brands:twitter",
      url: "https://x.com/O93260046Yuki",
    },
  ],
};
