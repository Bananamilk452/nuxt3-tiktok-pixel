export default defineNuxtConfig({
  modules: ["../src/module"],
  tiktok: {
    pixelId: "CP1RMQJC77UF1T0I85L0",
    track: "ViewContent",
    autoViewContent: true,
    debug: true,
  },
  devtools: { enabled: true },
});
