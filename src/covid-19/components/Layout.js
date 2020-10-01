import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import HeaderPage from './Header';
import FooterPage from './Footer';

const LayoutPage = (props) => {
  return (
    <Layout>
      <HeaderPage/>
      {props.children}
      <FooterPage/>
    </Layout>
  )
}
LayoutPage.propTypes = {
  children: PropTypes.element.isRequired
}
export default LayoutPage;