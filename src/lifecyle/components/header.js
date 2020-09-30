import React from 'react';
class HeaderPage extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      number: 0 // khong phai la 0 nua
    }
  }
  static getDerivedStateFromProps(props, state) {
    // cap nhat lai sate ban dau thong qua props cua component
    console.log(`getDerivedStateFromProps : ${props} - ${state}`);
    console.log(props);
    console.log(state);
    if(props.count !== state.number){
      return {number: props.count};
    }
    return null;
  }
  render() {
    console.log(`Header component da dc render`);
    return (
      <>
        <header>
          <h1 className="wwqw">This is header - {this.state.number}</h1>
        </header>
      </>
    )
  }
}
export default HeaderPage;