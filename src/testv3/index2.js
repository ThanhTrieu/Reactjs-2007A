import React from 'react';
import TestApp from './components/Testv2';

class Test extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }

  changeCount = () => {
    this.setState({...this.state, count: this.state.count + 1});
  }

  render() {
    return(
      <>
        <TestApp/>
        <button onClick={this.changeCount}>+</button>
      </>
    );
  }
}

export default Test;