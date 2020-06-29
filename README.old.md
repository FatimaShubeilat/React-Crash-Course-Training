# React-Crash-Course-Training
## Adding another component 

1- go to src
create components 
inside it: Todos.js
```js
import React, {Component} from 'react';

class Todos extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
      </div>
    )
  }
}

export default Todos;
```

2- now let us import it inside App.js
as a Tag we add <Todos />

3- state
different compnent have their own state
BUT ! sometimes we need multiple components to have the same state

SO! we need to go to a place to feed it down to a spesific component 

so we will add the state inside app.js

state => is a js object 
and todos => is array of objects 

4- to access the state we can just say
this.state.todos
add it for example in a console 

5- try npm run start 

6- check the console in inspect and the react tools
you can add react tools to Chrome
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en

## Thanks to: 
[Traversy Media](https://www.youtube.com/watch?v=sBws8MSXN7A&t=4588s)