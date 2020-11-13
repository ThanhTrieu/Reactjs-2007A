import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const HeaderComponent = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Cart</Menu.Item>
      </Menu>
    </Header>
  )
}
export default React.memo(HeaderComponent);