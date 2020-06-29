# React-Crash-Course-Training
## Looping using map of the Todos Array

Map: that return an array from an array, we will use it to loopthrough and out put using JSX
1-  in Todos.js

```js

import React, { Component } from 'react';

class Todos extends Component {

  render() {

    return this.props.todos.map((recentTodo) => 
      // we want the title from each one inside the todo that is located in state 
      <h3>{ recentTodo.title }</h3>
    ));
  }
}

```

## Thanks to: 
[Traversy Media](https://www.youtube.com/watch?v=sBws8MSXN7A&t=4588s)