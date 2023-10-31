import type { Preset } from "@vite-pwa/assets-generator/config";
import { defineConfig } from "@vite-pwa/assets-generator/config";

const minimalPresetNoPadding: Preset = {
  transparent: {
    sizes: [64, 192, 512],
    favicons: [[64, "favicon.ico"]],
    padding: 0,
  },
  maskable: {
    sizes: [512],
    padding: 0,
  },
  apple: {
    sizes: [180],
    padding: 0,
  },
};

export default defineConfig({
  preset: minimalPresetNoPadding,
  images: ["public/liga-logo-pwa.png"],
});
