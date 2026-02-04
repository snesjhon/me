/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // GitHub Light (default)
        'gh-canvas-default': 'var(--gh-canvas-default)',
        'gh-canvas-subtle': 'var(--gh-canvas-subtle)',
        'gh-border-default': 'var(--gh-border-default)',
        'gh-border-muted': 'var(--gh-border-muted)',
        'gh-fg-default': 'var(--gh-fg-default)',
        'gh-fg-muted': 'var(--gh-fg-muted)',
        'gh-accent-fg': 'var(--gh-accent-fg)',
        'gh-accent-emphasis': 'var(--gh-accent-emphasis)',
        'gh-danger-fg': 'var(--gh-danger-fg)',
        'gh-success-fg': 'var(--gh-success-fg)',
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
