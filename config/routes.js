export default [
  {
    name: 'login',
    layout: false,
    path: '/user/login',
    component: './Login',
  },
  {
    path: '/admin/home',
    name: 'home',
    icon: 'dashboard',
    component: './Home',
  },

  {
    path: '/admin/manage',
    name: 'manage',
    icon: 'form',
    routes: [
      {
        path: '/admin/manage/article',
        name: '文章管理',
        component: './ArticleManage/Article',
      },
      {
        path: '/admin/manage/category',
        name: '分类管理',
        component: './ArticleManage/Category',
      },
      {
        path: '/admin/manage/tag',
        name: '标签管理',
        component: './ArticleManage/Tag',
      },
    ],
  },
  {
    path: '/admin/program',
    name: 'program',
    icon: 'code',
    routes: [
      {
        path: '/admin/program/algo',
        name: '算法题管理',
        component: './ProgramManage/Algo',
      },
      {
        path: '/admin/program/sql',
        name: 'SQL题管理',
        component: './ProgramManage/SQL',
      },
    ],
  },
  {
    path: '/admin/public',
    name: 'public',
    icon: 'sound',
    component: './Public',

  },
  {
    path: '/admin/community',
    name: 'community',
    icon: 'cluster',
    routes: [
      {
        path: '/admin/community/message2all',
        name: '消息群发',
        component: './BatchMessage/Message2All',
      },
      {
        path: '/admin/community/email2all',
        name: '邮件群发',
        component: './BatchMessage/Email2All',
      },
      {
        path: '/admin/community/shortmessage2all',
        name: '短信群发',
        component: './BatchMessage/ShortMessage2All',
      },
    ],
  },
  {
    path: '/',
    redirect: '/admin/home',
  },
  {
    component: './404',
  },
];
