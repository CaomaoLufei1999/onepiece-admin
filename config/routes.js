export default [
  {
    name: 'login',
    layout: false,
    menuRender: false,
    hideInMenu: true,
    path: '/user/login',
    component: './Login',
  },
  {
    path: '/admin/home',
    name: '首页',
    icon: 'dashboard',
    component: './Home',
  },

  {
    path: '/admin/manage',
    name: '文章管理',
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
    name: '程序题管理',
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
    name: '通知公告',
    icon: 'sound',
    component: './Public',
  },
  {
    path: '/admin/book',
    name: '书籍管理',
    icon: 'read',
    component: './Book',
  },
  {
    path: '/admin/community',
    name: '社区服务',
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
    path: '/admin/users',
    name: '用户管理',
    icon: 'team',
    routes: [
      {
        path: '/admin/users/list',
        name: '用户列表',
        component: './Users',
      },
      {
        path: '/admin/users/logs',
        name: '登录日志',
        component: './Users',
      },
    ],
  },
  {
    path: '/admin/system',
    name: '系统监控',
    icon: 'rise',
    routes: [
      {
        path: '/admin/system/server',
        name: '服务监控',
        component: './Monitor',
      },
      {
        path: '/admin/system/cache',
        name: '缓存监控',
        component: './Monitor/CACHE',
      },
    ],
  },
  {
    path: '/admin/bbs',
    name: '灌水专区管理',
    icon: 'laptop',
    component: './BBS',
  },
  {
    path: '/',
    redirect: '/admin/home',
  },
  {
    component: './404',
  },
];
