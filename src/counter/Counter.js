import React, { Component } from 'react';
import Result from './components/Result';
import ButtonCounter from './components/ButtonCounter';
import './counter.css';

class Counter extends Component {

  constructor(props){
    super(props);// de co the su dung dc tat ca cac props cua class cha truyen xuong
    // tao ra 1 state cho component nao do
    this.state = {
      count: 0
    }
    this.viewIncrement = this.viewIncrement.bind(this);
  }

  // xu ly su kien trong reactjs
  // dinh nghia 1 ham xu ly event (su kien)
  changeIncrementCounter = () => {
    // cap nhat lai state o day
    //this.setState({count: this.state.count + 1});
    this.setState((state) => {
      return {...state, count: state.count + 1}
    });
  }
  changeDecrementCounter = () => {
    this.setState((state) => {
      return {count: state.count - 1}
    });
  }

  viewIncrement() {
    this.changeIncrementCounter();
    this.changeIncrementCounter();
    this.changeIncrementCounter();
  }

  render() {
    return(
      <>
        <div className="container">
          <Result result={this.state.count} />
          <ButtonCounter
            click={this.viewIncrement}
          >+</ButtonCounter>
          <ButtonCounter
            click={this.changeDecrementCounter}
          >-</ButtonCounter>
        </div>
      </>
    )
  }
}
export default Counter;