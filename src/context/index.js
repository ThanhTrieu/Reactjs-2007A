import React from 'react';
import MyProvider from './global/my-provider';
import HeaderPage from './components/header';
import FooterPage from './components/footer';
import Cars from './components/cars';

class ContextApp extends React.Component {
  render() {
    return(
      <MyProvider>
        <HeaderPage />
        <Cars/>
        <FooterPage/>
      </MyProvider>
    )
  }
}
export default ContextApp;