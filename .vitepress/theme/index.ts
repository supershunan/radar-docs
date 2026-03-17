import { nextTick, watch } from "vue";
import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./medium-zoom.css";

export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute();

    if (!import.meta.env.SSR) {
      watch(
        () => route.path,
        async () => {
          await nextTick();

          const mediumZoom = (await import("medium-zoom")).default;

          mediumZoom(".vp-doc img", {
            background: "var(--vp-c-bg)",
          });
        },
        { immediate: true }
      );
    }
  },
};
