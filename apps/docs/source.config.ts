import { rehypeCodeDefaultOptions, rehypeToc } from "fumadocs-core/mdx-plugins";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";

import { rehypeComponent } from "./lib/rehype-component";

// define `docs` and `meta` collections
export const { docs, meta } = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
      transformers: [...(rehypeCodeDefaultOptions.transformers ?? [])],
    },
    rehypePlugins: () => [rehypeComponent, rehypeToc],
  },
});
