import React, { useState } from 'react';
import { Row, Col, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { getCurrentWeather } from '../actions/index';

const { Search } = Input;

const SearchWeather = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');

  const changeCityName = (e) => {
    const city = e.target.value;
    setCityName(city);
  }

  const searchDataWeather = (name) => {
    dispatch(getCurrentWeather(name));
  }

  return (
    <Row style={{marginTop: '20px', marginBottom: '20px'}}>
      <Col span={12} offset={6}>
        <Search
          placeholder="Enter city name, please"
          onSearch={ val => searchDataWeather(val) }
          enterButton
          onChange={changeCityName}
          value={cityName}
        />
      </Col>
    </Row>
  )
}
export default React.memo(SearchWeather);