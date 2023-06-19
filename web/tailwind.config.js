module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx', './src/layouts/**/*.tsx'],
  theme: {
    extends: {
      animation: {
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
    },
  },
  corePlugins: {
    preflight: false, // 解决 button `background-color: transparent;` 问题 https://www.jianshu.com/p/2162daf865d9。
  },
};
