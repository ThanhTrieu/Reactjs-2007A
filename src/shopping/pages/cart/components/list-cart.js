import React from 'react';
import { Row, Col, Image, InputNumber, Button } from 'antd';

const ListCarts = () => {
  return (
    <>
      <Row style={{margin: '10px 0px'}}>
        <Col span={24}>
          <h1 style={{ textAlign: 'center'}}> Carts </h1>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={20} style={{padding: '8px'}}>
          <h3>Samsung Galaxy Note 20+</h3>
          <p>Price : 1000</p>
          <p>Money: 3000</p>
          <InputNumber min={1} max={10} defaultValue={3} onChange="" />
          <Button type="dashed">Remove</Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h2 style={{ textAlign:'right' }}>Tong tien: 2112321</h2>
        </Col>
      </Row>
    </>
  )
}
export default React.memo(ListCarts);