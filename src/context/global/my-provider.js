import React from 'react';
import MyContext from './my-context';

// tao provider de chia se du lieu
class MyProvider extends React.Component {
  // co  du lieu gi can chia se thi thao tac o day
  constructor(){
    super();
    this.state = {
      cars: [
        {name: 'BMW', price: 1000, color: 'white'},
        {name: 'Toyota', price: 500, color: 'black'},
        {name: 'Vinfast', price: 800, color: 'red'}
      ],
      title: 'Vinfast'
    }
  }

  render(){
    return(
      <MyContext.Provider
        value={this.state}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
export default MyProvider;