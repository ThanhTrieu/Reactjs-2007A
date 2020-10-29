import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

const { Header } = Layout;
const HeaderComponent = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Header>
      <NavLink to="/">
        <div className="logo" />
      </NavLink>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
        <Menu.Item key="/home">
          <NavLink to="/home">Trang chu</NavLink>
        </Menu.Item>
        <Menu.Item key="/login">
          <NavLink to="/login">Login</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  )
}
export default React.memo(HeaderComponent);