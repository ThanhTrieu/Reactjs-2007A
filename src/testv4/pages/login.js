import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Row, Col, Spin, Typography } from 'antd';
import * as api from '../services/api';

const { Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function isEmpty(obj) {
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

const LoginPage = () => {
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [messageError, setMessageError] = useState('');
  const history = useHistory();

  const onFinish = async values => {
    setLoadingLogin(true);
    const data = await api.loginApi(values.username, values.password);
    if(!isEmpty(data)){
      if(data.code === 200){
        api.saveTokenLocalStorage(data.token_user);
        setMessageError('');
        setLoadingLogin(false);
        history.push('/home');
      } else {
        setLoadingLogin(false);
        setMessageError('account is invalid');
      }
    } else {
      setLoadingLogin(false);
      setMessageError('account is invalid');
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{border: '1px solid #ccc', padding: '10px', marginTop: '20px'}}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              {loadingLogin && <Spin/>}
            </Form.Item>

            {messageError !== '' && <Text type="danger">{messageError}</Text>}
          </Form>
          
        </Col>
      </Row>
    </>
  );
};

export default React.memo(LoginPage);