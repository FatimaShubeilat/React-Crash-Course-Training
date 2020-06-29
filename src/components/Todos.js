import React, {Component} from 'react';
import TodoItem from './TodoItem.js';
class Todos extends Component {

  render() {

    return this.props.todosFirstProp.map((recentTodo) => (
      // we want the title from each one inside the todo that is located in state 
      <TodoItem todo={recentTodo} />
    ));
  }
}

export default Todos;
