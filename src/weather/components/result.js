import React from 'react';
import { Row, Col, Skeleton } from 'antd';
import { useSelector } from 'react-redux';

const ResultWeather = () => {
  const isLoading = useSelector(state => state.currentWeather.loading);
  const dataWeather = useSelector(state => state.currentWeather.weather);

  if(isLoading){
    return (
      <Row>
        <Col span={24}>
          <Skeleton active />
        </Col>
      </Row>
    )
  }

  return (
    <>
      <Row>
        <Col span={24}>
          <h5>Hien thien ket qua</h5>
        </Col>
      </Row>
    </>
  )
}
export default React.memo(ResultWeather);