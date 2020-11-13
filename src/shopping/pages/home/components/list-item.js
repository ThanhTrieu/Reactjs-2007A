import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Skeleton } from 'antd';

const { Meta } = Card;
const ListItems = (props) => {
  return (
    <>
      {props.data && !props.loading ? (
        <Row style={{margin: '5px 0px'}}>

          {props.data.map((item, index) => (
            <Col span={6} key={index}>
              <Card
                hoverable
                bordered={false}
                style={{ width: 240 }}
                cover={<img width={220} alt={item.name} src={item.image} />}
              >
                <Meta title={item.name} />
                <p>Price: {item.price}</p>
                <Button type="primary"> Add Cart </Button>
              </Card>
            </Col>
          ))}

        </Row>
      ) : (<Skeleton active />) }
    </>
  )
}
export default React.memo(ListItems);