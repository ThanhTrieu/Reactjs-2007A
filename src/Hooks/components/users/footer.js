import React from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;
const FooterPage = () => {
  return (
    <Footer>
      <p style={{textAlign: 'center'}}>Copyright © 2020 ReactJS2007A</p>
    </Footer>
  )
}
export default React.memo(FooterPage);