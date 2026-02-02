/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gh-canvas-default': '#ffffff',
        'gh-canvas-subtle': '#f6f8fa',
        'gh-border-default': '#d0d7de',
        'gh-border-muted': '#d8dee4',
        'gh-fg-default': '#1f2328',
        'gh-fg-muted': '#656d76',
        'gh-accent-fg': '#0969da',
        'gh-accent-emphasis': '#0969da',
        'gh-danger-fg': '#d1242f',
        'gh-success-fg': '#1a7f37',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Noto Sans',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'SF Mono',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
