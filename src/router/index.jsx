import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import pages from '../pages';

const Layout = lazy(() => import('@/layout'));

const routers = [
  {
    name: '平台路由',
    element: <Layout />,
    children: [
      {
        name: 'test1',
        path: '/test1',
        element: <pages.Test1 />,
        children: [],
      },
      { name: 'test2', path: '/test2', element: <pages.Test2 />, children: [] },
      { name: 'vue-test1', path: '/vue-test1', element: <pages.VueTest1 />, children: [] },
    ],
  },
  {
    name: '跳转默认页',
    path: '/',
    element: <Navigate to='/test1' />,
  },
  {
    name: '无匹配',
    path: '*',
    element: <Navigate to='/test1' />,
  },
];

export default routers;
