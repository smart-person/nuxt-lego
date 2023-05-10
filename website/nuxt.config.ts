export default defineNuxtConfig({
  extends: [".."],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/logo.svg" }],
    },
  },
  modules: ["@unocss/nuxt", "@nuxt/content"],
  css: ["@unocss/reset/tailwind.css", "~/assets/css/main.css"],
  content: {
    highlight: {
      theme: "github-light",
      preload: ["vue", "ts"],
    },
  },
  nitro: {
    rootDir: ".",
    routeRules: {
      "/": { static: true },
      "/components/**": { static: true },
    },
  },
  unocss: {
    configFile: "~/uno.config.ts",
  },
});
