import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <>
      <Layout>
        <Header>
          <h3 style={{color: 'white', textAlign: 'center'}}>List users</h3>
        </Header>
      </Layout>
    </>
  )
}
export default React.memo(HeaderComponent);