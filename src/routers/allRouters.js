import { lazy } from 'react';

const routers = [
  // {
  //   path: '/add-student',
  //   component: lazy(() => import('@components/AddStudent.jsx')),
  // },
  {
    path: '/login',
    component: lazy(() => import('@pages/LoginPage.jsx')),
  },
  {
    path: '/register',
    component: lazy(() => import('@pages/RegisterPage.jsx')),
  },
  {
    path: '/add-user',
    component: lazy(() => import('@pages/RegisterPage.jsx')),
  },
  {
    path: '/',
    component: lazy(() => import('@pages/HomePage.jsx')),
  },
  {
    path: '/users',
    component: lazy(() => import('@pages/UserPage.jsx')),
  },
  {
    path: '/customers',
    component: lazy(() => import('@pages/CusomerPage.jsx')),
  },
  {
    path: '/products',
    component: lazy(() => import('@pages/ProductPage.jsx')),
  },
];

export { routers };
