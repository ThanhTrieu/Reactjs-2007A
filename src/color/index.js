import React from 'react';
import ViewData from './components/viewData';
import ButtonColor from './components/ButtonColor';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'pink'
    }
  }
  setColor = (e) => {
    //console.log(e.target.name);
    const nameButton = e.target.name;
    this.setState({...this.state, color: nameButton}, () => {
      console.log('vua thay mau sac');
    })
  }

  render() {
    return(
      <>
        <ViewData color={this.state.color} />
        <ButtonColor
          click={this.setColor}
          name="red"
        > Red </ButtonColor>
        <ButtonColor
          click={this.setColor}
          name="yellow"
        > Yellow </ButtonColor>
        <ButtonColor
          click={this.setColor}
          name="green"
        > Green </ButtonColor>
      </>
    )
  }
}
export default Color;