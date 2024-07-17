import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from '@/store';
import './index.css';
import 'dayjs/locale/zh-cn.js';
import '@/assets/scss/theme.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <ConfigProvider locale={locale}>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </ConfigProvider>
  <Provider store={store}>
    <App />
  </Provider>
);
