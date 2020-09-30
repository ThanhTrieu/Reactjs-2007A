import React from 'react';
  
class Content extends React.Component {
  constructor(){
    super();
    this.state = {
      color: 'pink'
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    //console.log(nextProps);
    //console.log(nextState);
    return nextProps.color !== nextState.color;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(prevProps);
    console.log(prevState);
    return 10;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log(prevProps);
    //console.log(prevState);
    console.log(snapshot);
    //return {color: prevProps.color};
    document.getElementById('content').style.backgroundColor = 'blue';
  }
  componentDidMount(){
    console.log('componentDidMount da chay xong')
  }

  componentWillUnmount(){
    console.log('component vua bi xoa');
  }

  render() {
    return (
      <div id="content" style={{width:'300px', height:'300px', backgroundColor: this.props.color}}>
        <h1>This is content</h1>
      </div>
    );
  }
}
export default Content;