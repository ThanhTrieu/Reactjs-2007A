import React from 'react';
import { Row, Col } from 'antd';
import LayoutComponent from '../components/layout';

const SearchFilmPage = () => {
  return (
    <LayoutComponent>
      <Row style={{marginTop: '20px', marginBottom: '20px'}}>
        <Col span={24}>
          <h1>This is search film page</h1>
        </Col>
      </Row>
    </LayoutComponent>
  )
}
export default React.memo(SearchFilmPage);