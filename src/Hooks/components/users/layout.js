import React from 'react';
import {Layout, Row, Col} from 'antd';
import HeaderPage from './header';
import FooterPage from './footer';
import PropTypes from 'prop-types';

const {Content} = Layout;

const LayoutPage = (props) => {
  return(
    <Layout>
      <HeaderPage/>
      <Content>
        <Row>
          <Col span={12} offset={6}>{props.children}</Col>
        </Row>
      </Content>
      <FooterPage/>
    </Layout>
  );
}
LayoutPage.propTypes = {
  children: PropTypes.node
}
export default React.memo(LayoutPage);