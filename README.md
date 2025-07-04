# Vue Progressive Image Loader

一个简单易用的Vue3渐进式图片加载组件，提供平滑的加载体验和骨架屏功能。

## 特性

- 🚀 渐进式图片加载
- 💫 平滑的过渡动画
- 🦴 加载时显示骨架屏
- ⚠️ 错误处理
- 🔍 简单易用的API

## 安装

```bash
# npm
npm install vue-progressive-image-loader

# yarn
yarn add vue-progressive-image-loader

# pnpm
pnpm add vue-progressive-image-loader
```

## 使用方法

### 全局注册

```js
import { createApp } from "vue";
import App from "./App.vue";
import ProgressiveImagePlugin from "vue-progressive-image-loader";

const app = createApp(App);
app.use(ProgressiveImagePlugin);
app.mount("#app");
```

### 局部引入

```vue
<template>
  <div class="container">
    <ProgressiveImage src="/path/to/image.jpg" alt="描述文本" />
  </div>
</template>

<script>
import { ProgressiveImage } from "vue-progressive-image-loader";

export default {
  components: {
    ProgressiveImage,
  },
};
</script>

<!-- 或使用组合式API -->
<script setup>
import { ProgressiveImage } from "vue-progressive-image-loader";
</script>
```

## 属性

| 属性名    | 类型    | 默认值 | 描述           |
| --------- | ------- | ------ | -------------- |
| src       | String  | 必填   | 图片的URL      |
| alt       | String  | ""     | 图片的alt文本  |
| lazy      | Boolean | true   | 是否启用懒加载 |
| threshold | Number  | 0.1    | 懒加载的阈值   |

## 样式自定义

组件提供了基础样式，您可以通过CSS覆盖这些样式：

```css
.progressive-image-container {
  /* 容器样式 */
}

.image-placeholder {
  /* 骨架屏样式 */
}

.progressive-image {
  /* 图片样式 */
}

.image-error {
  /* 错误提示样式 */
}
```

## 许可证

MIT
