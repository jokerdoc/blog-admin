const path = require('path');

module.exports = {
  base: '/blog/',

  title: '九林个人博客',

  description: '技术分享 | 学习成长',

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.')    // .vuepress root path
      }
    }
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      { text: '关于', link: '/about' },
    ],

    sidebar: [
      // '/',
      {
        title: '环境部署',
        children: [
          '/article/sys/nodejs',
          '/article/sys/mongodb',
          '/article/sys/redis',
          '/article/sys/yapi',
          '/article/sys/pm2',
        ]
      },

      {
        title: '前端笔记',
        children: [
          '/article/fe/gis'
        ]
      },
    ]
  },
}
