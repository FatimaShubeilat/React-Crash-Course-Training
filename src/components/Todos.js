import React, {Component} from 'react';

class Todos extends Component {

  render() {

    return this.props.todos.map((recentTodo) => (
      // we want the title from each one inside the todo that is located in state 
      <h3>{ recentTodo.title }</h3>
    ));
  }
}

export default Todos;