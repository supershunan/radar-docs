import { nextTick, watch, ref } from "vue";
import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./medium-zoom.css";

export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute();
    let homeIcon = "";

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

      watch(
        () => route.path,
        async () => {
          const params = new URLSearchParams(window.location.search);
          const icon = params.get("icon");

          if (icon || homeIcon) {
            homeIcon = icon ? icon : homeIcon;
            await nextTick();
            document
              .querySelector("link[rel='icon']")
              ?.setAttribute(
                "href",
                window.location.origin + "/api/logo/" + homeIcon
              );
          }
        },
        { immediate: true }
      );
    }
  },
};
