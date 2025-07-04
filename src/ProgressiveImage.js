import { h, defineComponent, ref } from "vue";

/**
 * 渐进式图片加载组件
 */
export const ProgressiveImage = defineComponent({
  name: "ProgressiveImage",

  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
    lazy: {
      type: Boolean,
      default: true,
    },
    threshold: {
      type: Number,
      default: 0.1,
    },
  },

  setup(props) {
    // 图片加载状态
    const imageLoaded = ref(false);
    const loadError = ref(false);

    // 图片加载完成的处理函数
    function onImageLoad() {
      // 使用setTimeout增加一点延迟，让骨架屏过渡更平滑
      setTimeout(() => {
        imageLoaded.value = true;
      }, 100);
    }

    // 图片加载失败的处理函数
    function onImageError() {
      loadError.value = true;
    }

    return () => {
      return h("div", { class: "progressive-image-container" }, [
        // 骨架屏
        h("div", {
          class: "image-placeholder",
          style: { opacity: imageLoaded.value ? 0 : 1 },
        }),

        // 实际图片
        h("img", {
          class: "progressive-image",
          src: props.src,
          alt: props.alt,
          style: { opacity: imageLoaded.value ? 1 : 0 },
          onLoad: onImageLoad,
          onError: onImageError,
        }),

        // 错误提示
        loadError.value
          ? h("div", { class: "image-error" }, [h("span", { class: "error-text" }, "图片加载失败")])
          : null,
      ]);
    };
  },
});

// 添加样式
const style = document.createElement("style");
style.textContent = `
.progressive-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
  background-size: 200% 100%;
  transition: opacity 0.3s ease;
  animation: shimmer 1.5s infinite;
}

.progressive-image {
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease;
  object-fit: cover;
}

.image-error {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}

.error-text {
  font-size: 14px;
  color: #999;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`;

// 添加样式到文档头部
if (typeof document !== "undefined") {
  document.head.appendChild(style);
}

export default ProgressiveImage;
