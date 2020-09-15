import React, { Component } from 'react';
import Result from './components/Result';
import ButtonCounter from './components/ButtonCounter';
import './counter.css';

class Counter extends Component {

  // xu ly su kien trong reactjs
  // dinh nghia 1 ham xu ly event (su kien)
  changeCounter = () => {
    alert('ban vua click vao toi');
  }

  render() {
    return(
      <>
        <div className="container">
          <Result result={0} />
          <ButtonCounter
            click={this.changeCounter}
          >+</ButtonCounter>
          <ButtonCounter>-</ButtonCounter>
        </div>
      </>
    )
  }
}
export default Counter;