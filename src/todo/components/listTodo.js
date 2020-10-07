import React from 'react';
import { List, Avatar, Row, Col } from 'antd';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

class ListTodo extends React.PureComponent {

  render() {
    return (
      <Row style={{marginTop: '20px', marginBottom: '20px'}}>
        <Col span={24}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item>
              <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
            />
            </List.Item>
          )}
        />
      </Col>
    </Row>
    )
  }
}
export default ListTodo;