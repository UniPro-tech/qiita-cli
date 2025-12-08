// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://qiita-cli.uniproject.jp",
  integrations: [
    starlight({
      title: "Qiita CLI (UniPro Edition) Docs",
      logo: { src: "./src/assets/qiita-icon.png" },
      favicon: "/favicon.ico",
      description:
        "Qiitaを便利に執筆できるQiita CLIをデジタル創作サークルUniProjectが改良したQiita CLI (UniPro Edition)のドキュメントサイトです。",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/UniPro-tech/qiita-cli",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/UniPro-tech/qiita-cli/edit/docs/",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    sitemap(),
  ],
});
