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
      head: [
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-5X5X69Q27P",
          },
        },
        {
          tag: "script",
          content: `
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5X5X69Q27P');`,
        },
      ],
      sidebar: [
        {
          label: "はじめに",
          items: [
            { label: "クイックスタート", slug: "release/installation" },
            {
              label: "公式との変更点",
              slug: "release/whats-changes",
            },
          ],
        },
        {
          label: "ガイド",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "記事をダウンロードする", slug: "guides/pull" },
            { label: "記事を作成する", slug: "guides/new" },
            { label: "記事を公開する", slug: "guides/publish" },
          ],
        },
        {
          label: "リファレンス",
          items: [{ label: "ディレクトリ構造", slug: "reference/directory" }],
        },
      ],
    }),
    sitemap(),
  ],
});
