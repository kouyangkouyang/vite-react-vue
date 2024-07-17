import pages from '../pages';
import { Navigate } from 'react-router-dom';

const routers = [
  {
    path: '/test1',
    element: <pages.Test1 />,
    children: [],
  },
  {
    path: '/test2',
    element: <pages.Test2 />,
    children: [],
  },
  {
    path: '/vue-test1',
    element: <pages.VueTest1 />,
    children: [],
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
