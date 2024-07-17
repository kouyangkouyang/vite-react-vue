import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Layout, Button } from 'antd';
import './index.scss';

const { Header, Footer, Sider, Content } = Layout;

const LayoutCom = () => {
  const skin = useSelector((state) => state.skin);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.body.className = `theme-${skin}`;
  }, []);
  return (
    <Layout className='react-layout-style'>
      <Header className='header-layout-style'>
        <div className='header-left'>
          <div className={`logo ${collapsed ? 'small-logo' : ''}`}>logo</div>
          <Button></Button>
        </div>
        <div className='header-right'></div>
      </Header>
      <Layout className='middle-layout-style'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          Sider
        </Sider>
        <div className='content-layout-style'>
          <Content>
            <Outlet />
          </Content>
          <Footer>Footer</Footer>
        </div>
      </Layout>
    </Layout>
  );
};

export default LayoutCom;
