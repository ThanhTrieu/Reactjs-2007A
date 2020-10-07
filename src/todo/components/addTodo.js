import React from 'react';
import { Input, Row, Col } from 'antd';

const { Search } = Input;

class AddTodo extends React.PureComponent {
  render() {
    return (
      <Row>
        <Col span={24}>
          <Search
            placeholder="todo name ..."
            enterButton="Add"
            size="large"
            onSearch={value => console.log(value)}
          />
        </Col>
      </Row>
    )
  }
}
export default AddTodo;