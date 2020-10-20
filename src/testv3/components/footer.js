import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => {
  console.log(`render footer`);
  return (
    <>
      <Layout>
        <Footer>
          <p style={{textAlign: 'center'}}>Copyright © 2020</p>
        </Footer>
      </Layout>
    </>
  )
}
export default React.memo(FooterComponent);