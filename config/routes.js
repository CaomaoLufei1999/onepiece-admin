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
    path: '/',
    redirect: '/admin/home',
  },
  {
    component: './404',
  },
];
