import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
  ],
  history: {
    type: 'hash',
  },
  npmClient: 'pnpm',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  // base: '/tintin-lesson-6/dist/',
  publicPath: '/PeopleTang/web/dist/',
  hash: true,
});
