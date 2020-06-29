import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import Todos from  './components/Todos.js';
// The way we embed a component is simply into our main App compnent with a tag
import './App.css'; // global CSS

class App extends Component {

  state = {
    todos: [

      {
        id: 1,
        title: 'Take out the Trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with family',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting',
        completed: false
      }
    
  ]
  }
  render(){ 
    // console.log(this.state.todos)
  return (
    // eslint-disable-next-line no-unused-expressions
    <div className="App">
      
       <Todos todos={this.state.todos} /> 
   
    </div>
  );
}
}

export default App;

