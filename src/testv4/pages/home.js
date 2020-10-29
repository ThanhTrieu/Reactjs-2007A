import React from 'react';
import { useHistory } from 'react-router-dom';
import LayoutComponent from '../components/layout';
import * as api from '../services/api';

const HomePage = () => {
  const history = useHistory();
  const token = api.getTokenLocalStorage();
  const decoded = api.decodeTokenFormLocalStorage(token);
  const logout = () => {
    api.removeTokenLocalStorage();
    history.push("/login");
  }
  return (
    <>
      <LayoutComponent>
        <h1>This is home page</h1>
        <h2>welcome - { decoded !== undefined ? decoded.username : null }</h2>
        <button onClick={() => logout()}>Logout</button>
      </LayoutComponent>
    </>
  )
}
export default React.memo(HomePage);