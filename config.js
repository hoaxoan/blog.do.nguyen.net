'use strict';

module.exports = {
  url: 'https://blog.duyet.net',
  pathPrefix: '/',
  title: 'Tôi là Duyệt',
  subtitle: 'Data Engineer @ Fossil. I blog about web development, machine learning, data engineering and more.',
  copyright: '© duyet.net',
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
    },
    {
      label: '#til',
      path: 'https://til.duyet.net'
    }
  ],
  author: {
    name: 'Tôi là Duyệt',
    photo: '/photo.png',
    bio: 'Data Engineer @ Fossil. I blog about <a href="/tag/web/">web development</a>, <a href="/tag/machine-learning/">Machine Learning</a>, <a href="/tag/data-engineer/">Data Engineering</a>, and <a href="/tags/">more topics</a>.',
    contacts: {
      email: '',
      telegram: '',
      twitter: 'duyetdev',
      github: 'duyetdev',
      rss: '/rss.xml',
      vkontakte: ''
    }
  }
};
