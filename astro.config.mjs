import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import fs from 'fs-extra';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  site: 'https://kimstitute.github.io/tech-blog/',
  base: '/tech-blog/',
  integrations: [
    tailwind(),
    mdx({
      remarkPlugins: [remarkToc],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'append' }]
      ],
      shikiConfig: {
        theme: 'github-dark',
        langs: ['html', 'css', 'js', 'ts', 'jsx', 'tsx', 'json', 'bash', 'md'],
        wrap: true
      }
    }),
    react(),
    sitemap(),
    robotsTxt(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    }),
    // Compression should be last for optimal results
    compress({
      CSS: true,
      HTML: true,
      Image: false, // Using Astro's built-in image optimization
      JavaScript: true,
      SVG: true
    })
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  output: 'static',
  image: {
    // Image service optimization configuration
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        jpeg: { quality: 80 },
        png: { quality: 80 },
        webp: { quality: 80 },
        avif: { quality: 65 } // Reduce AVIF quality to speed up processing
      }
    },
    dev: { format: 'webp' } // Use WebP instead of AVIF in development
  },
  vite: {
    build: {
      assetsInlineLimit: 4096 // Inline images smaller than 4kb as base64
    },
    server: {
      watch: { usePolling: false },
      hmr: { overlay: true }
    }
  },

  // ✅ 이미지 자동 복사 훅 추가
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const srcAssets = new URL('./src/content/blog/assets', import.meta.url);
      const distAssets = new URL('./dist/assets', import.meta.url);
      try {
        await fs.copy(srcAssets, distAssets);
        console.log('✅ Copied blog assets to dist/assets');
      } catch (err) {
        console.error('⚠️ Failed to copy assets:', err);
      }
    }
  }
});
