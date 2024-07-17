import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useRoutes, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import routerConfig from './router';

import { Spin, ConfigProvider, theme } from 'antd';
import locale from 'antd/locale/zh_CN.js';
import './App.css';

function App() {
  const skin = useSelector((state) => state.skin);
  const fallback = (
    <div>
      <Spin />
    </div>
  );

  const renderRouter = (routerList) => {
    return routerList.map((route) => {
      if (route.children && route.children.length) {
        return (
          <Route path={route.path} key={route.name} element={route.element}>
            {renderRouter(route.children)}
          </Route>
        );
      } else {
        return <Route path={route.path} key={route.name} element={route.element} />;
      }
    });
  };
  const router = createBrowserRouter(createRoutesFromElements(renderRouter(routerConfig)));

  return (
    <ConfigProvider
      locale={locale}
      theme={{
        algorithm: skin == 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }}
    >
      <div className='App'>
        <Suspense fallback={fallback}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </ConfigProvider>
  );
}

export default App;
