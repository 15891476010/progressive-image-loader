import { App, Plugin } from "vue";
import { ProgressiveImage } from "./ProgressiveImage.js";

export { ProgressiveImage };

// 创建Vue插件
const ProgressiveImagePlugin: Plugin = {
  install(app: App) {
    app.component("ProgressiveImage", ProgressiveImage);
  },
};

export default ProgressiveImagePlugin;
