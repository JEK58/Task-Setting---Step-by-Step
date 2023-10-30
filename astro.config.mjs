import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/static";
import AstroPWA from "@vite-pwa/astro";
import { SITE_TITLE, SITE_DESCRIPTION } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: "https://tasksetting.vercel.app/",
  integrations: [
    mdx(),
    AstroPWA({
      registerType: "autoUpdate",
      // base: "/",
      // scope: "/",
      manifest: {
        name: SITE_TITLE,
        short_name: "Task Setting",
        description: SITE_DESCRIPTION,
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
