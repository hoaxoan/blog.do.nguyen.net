'use strict';

module.exports = {
  url: 'https://blog.do.nguyen.net',
  pathPrefix: '/',
  title: 'Tôi là Do Nguyễn',
  subtitle: 'Software Engineer. I blog about web development, mobile development, data engineering and more.',
  copyright: '© do.nguyen.net',
  disqusShortname: '',
  useCommento: true,
  facebookComment: {
    active: true,
    appId: 1394054914200945,
  },
  postsPerPage: 8,
  googleAnalyticsId: 'UA-92451506-3',
  useKatex: false,
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Categories',
      path: '/categories'
    }
  ],
  author: {
    name: 'Tôi là Do Nguyễn',
    photo: '/photo.png',
    bio: 'Software Engineer. I blog about <a href="/tag/web/">Web</a>, <a href="/tag/mobile/">mobile development</a>, <a href="/tag/data-engineer/">Data Engineering</a>, and <a href="/tags/">more topics</a>.',
    contacts: {
      email: '',
      telegram: '',
      twitter: 'hoaxoan14',
      github: 'hoaxoan',
      rss: '/rss.xml',
      vkontakte: ''
    }
  }
};
