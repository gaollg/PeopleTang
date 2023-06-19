import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/demo', component: 'demo' },
  ],
  history: {
    type: 'hash',
  },
  npmClient: 'pnpm',
  tailwindcss: {},
  plugins: ['./plugin.html.ts', '@umijs/plugins/dist/tailwindcss'],
  // base: '/tintin-lesson-6/dist/',
  // publicPath: '/PeopleTang/web/dist/',
  hash: true,
});
