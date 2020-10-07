import React from 'react';
import LayoutPage from './components/layout';
import AddTodo from './components/addTodo';
import ListTodo from './components/listTodo';

class Todo extends React.Component {
  render() {
    return (
      <LayoutPage>
        <AddTodo/>
        <ListTodo/>
      </LayoutPage>
    )
  }
}
export default Todo;