import React from 'react';
import HeaderPage from './components/header';
import ProductList from './pages/product-list';
import MyProvider from './context/MyProvider';

class App extends React.Component {
  render() {
    return(
      <>
        <MyProvider>
          <HeaderPage/>
          <ProductList/>
        </MyProvider>
      </>
    )
  }
}
export default App;