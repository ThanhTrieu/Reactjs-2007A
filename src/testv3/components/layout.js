import React from 'react';
import { Layout, Row, Col} from 'antd';
import HeaderPage from './header';
import FooterPage from './footer';

const {  Content } = Layout;

const LayoutComponent = (props) => {
  return (
    <>
      <Layout>
          <HeaderPage/>
          <Content>
            <Row>
              <Col span={12} offset={6}>
                {props.children}
              </Col>
            </Row>
          </Content>
          <FooterPage/>
      </Layout>
    </>
  )
}
export default React.memo(LayoutComponent);