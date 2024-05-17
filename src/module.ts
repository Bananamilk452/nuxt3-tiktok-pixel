import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  pixelId?: string | null;
  track?: string;
  autoViewContent?: boolean;
  manualMode?: boolean;
  disabled?: boolean;
  debug?: boolean;
  dev?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt3-tiktok-pixel",
    configKey: "tiktok",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    pixelId: null,
    track: "ViewContent",
    autoViewContent: false,
    manualMode: false,
    disabled: false,
    debug: false,
    dev: false,
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);
    (_nuxt.options.runtimeConfig.public as any).tiktok = _options;
    _options.dev = _nuxt.options.dev;
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
