# React-Crash-Course-Training
## Adding Todo items

We will add a component for each Todo item instead of showing them in <h3>

1- create TodosItem.js in component folder 

::: Hint ::: download ES7 React/Redux/GraphQL/React-Native snippets
in vs code to help you create a React component more easily 

rce [then click tab]

2- in TodoItem.js just create a component and put <p>Hello</p> in it

3- go to Todo.js and import TodoItem.js 
then in map loop 
<TodoItem />

that will output Hello 3 times as a test

3- to display that current Todo item in Todo.js

<TodoItem todo={recentTodo} />

4- since todo is passed as a porp in TodoItem (prop is like a gate between the components )
so in TodoItem.js
<p> {this.prop.todo.title} </p>

## Thanks to: 
[Traversy Media](https://www.youtube.com/watch?v=sBws8MSXN7A&t=4588s)