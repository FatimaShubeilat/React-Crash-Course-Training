import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import Todos from  './components/Todos';
// The way we embed a component is simply into our main App compnent with a tag
import './App.css'; // global CSS

class App extends Component {
  render(){ 
  return (
    // eslint-disable-next-line no-unused-expressions
    <div className="App">
      
       <Todos />
   
    </div>
  );
}
}

export default App;

