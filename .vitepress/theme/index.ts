import { nextTick, watch } from "vue";
import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import mediumZoom from "medium-zoom";
// 引入样式文件
import "./medium-zoom.css";

export default {
  ...DefaultTheme,
  setup() {
    // 为img元素添加点击放大功能
    const route = useRoute();
    watch(
      () => route.path,
      () =>
        nextTick(() =>
          mediumZoom(".main img", { background: "var(--vp-c-bg)" })
        ),
      { immediate: true }
    );
  },
};
