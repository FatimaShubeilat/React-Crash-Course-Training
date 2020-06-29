# React-Crash-Course-Training
## Props
1- based on phase3

inside the App component we have the Todos component that does not have any state or props!


So! what we will do is to take the state in the App component and pass it to the Todo component as a prop (just like HTML attributes)
```js
    <div className="App">
      
       <Todos todos={this.state.todos} /> 
   
    </div>
```
2- save it and run start, go check the Todos it will hsow that it has a prop in REACT tools

3- go to Todos.js and try to console it in the render

REMEMBER it comes from the state comes from App.js 
and then you access it in Todos.js using props so =>
this.props.todos


## Thanks to: 
[Traversy Media](https://www.youtube.com/watch?v=sBws8MSXN7A&t=4588s)