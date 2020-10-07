// dinh nghia higher-order component
// no la 1 ham : nhan vao tham so la 1 component va tra ve 1 component moi
import React from 'react';

const HocsComponent = (MyComponent, data) => {
  //MyComponent : 1 component truyen vao nhu la 1 tham so cua ham
  // ham nay bat buoc return ve 1 component moi(MyComponent)
  return class extends React.Component {
    constructor(){
      super();
      this.state = {
        data: data
      }
    }
    render() {
      return (
        <MyComponent {...this.props} dataHocs={this.state.data} />
      )
    }
  }
}
export default HocsComponent;