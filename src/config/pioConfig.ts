import type { PioConfig } from "../types/config";

// Pio 看板娘配置
export const pioConfig: PioConfig = {
  enable: true, // 启用看板娘
  models: ["/pio/models/NOIR/noir.model3.json"], // 默认模型路径
  position: "left", // 模型位置
  width: 280, // 默认宽度
  height: 250, // 默认高度
  mode: "draggable", // 默认为可拖拽模式
  hiddenOnMobile: true, // 默认在移动设备上隐藏
  hideAboutMenu: false, // 隐藏内置 About 菜单按钮
  dialog: {
    welcome: "欢迎来我的blog小屋", // 欢迎词
    touch: ["你在干嘛？", "别这样摸我", "H！", "别这样欺负我！"], // 触摸提示
    home: "点击这里回到首页！", // 首页提示
    skin: ["想看看我的新衣服吗？", "这件新衣服看起来不错~"], // 换装提示
    close: "QWQ 下次见", // 关闭提示
    link: "https://github.com/hotaru214", // 关于链接
  },
};
