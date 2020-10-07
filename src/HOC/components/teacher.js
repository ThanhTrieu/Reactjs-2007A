import React from 'react';
import TableData from './table';

class Teacher extends React.PureComponent {
  render() {
    return(
      <TableData data={this.props.dataHocs} />
    )
  }
}
export default Teacher;