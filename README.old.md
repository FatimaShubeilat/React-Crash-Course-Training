# React-Crash-Course-Training

![1](https://user-images.githubusercontent.com/17273449/85920893-6c44e300-b880-11ea-819f-720cc08186d4.JPG) 














#### Tip
> A library is just a collection of class definitions. The reason behind is simply code reuse, i.e. get the code that has already been written by other developers. The classes and methods normally define specific operations in a domain specific area. For example, there are some libraries of mathematics which can let developer just call the function without redo the implementation of how an algorithm works.

![framework-vs-library](https://user-images.githubusercontent.com/17273449/85921090-1d984880-b882-11ea-8007-5937c08ec3e2.png)

> In framework, all the control flow is already there, and there's a bunch of predefined white spots that you should fill out with your code. A framework is normally more complex. It defines a skeleton where the application defines its own features to fill out the skeleton. In this way, your code will be called by the framework when appropriately. The benefit is that developers do not need to worry about if a design is good or not, but just about implementing domain specific functions.

[Source](https://www.programcreek.com/2011/09/what-is-the-difference-between-a-java-library-and-a-framework/).


![why](https://user-images.githubusercontent.com/17273449/85921168-d8284b00-b882-11ea-81ba-d970e2949b99.JPG)


## What to learn before

https://www.youtube.com/watch?v=PkZNo7MFNFg

![what](https://user-images.githubusercontent.com/17273449/85921209-54bb2980-b883-11ea-9146-79d9d3f26077.JPG)


## Thinking in Components 
![Capture](https://user-images.githubusercontent.com/17273449/85921366-91d3eb80-b884-11ea-9971-629c9fc881ee.JPG)

## State
![state](https://user-images.githubusercontent.com/17273449/85921384-b16b1400-b884-11ea-81af-a52f88005c83.JPG)

## Create React App
![re](https://user-images.githubusercontent.com/17273449/85921436-060e8f00-b885-11ea-85bb-83d2d1cfa42d.JPG)

## Anatomy 
![anatomy](https://user-images.githubusercontent.com/17273449/85921495-669dcc00-b885-11ea-9913-8ebafbfaa70b.JPG)


## Phase One Code

### We are going to end up with something like this:

![app](https://user-images.githubusercontent.com/17273449/85921599-f6dc1100-b885-11ea-957f-391113c0fe06.JPG)

Each one is the To Do item, which each (to do item) is coming from from a fake REST API that access a backend server that feeds its data, (for now only we will hard code the To Dos).

Then we have To Dos component that wraps these To Dos items.
Then the Add To Do ( component ), which is the form 
And we have the Header (Todo List), the about page which is also a component.

So What you can do with this app is:
Add a to do, delete it mark them as complete which will add a line through, ( so we will use CSS) 

1- You need to install:
- Nodejs (as we need node package manager)
- React Developer Tool on Chrome (as you can see your entire component contractor), as porps and states
- [Github page for Create React App](https://github.com/facebook/create-react-app), to show how to install it, you can use (npm) to install it globally, but here we will use npx as recommended here.
Which helps to use create react app to generate an application, but does not actually install it on our system 

2- In terminal type npx create-react-app .
// don't forget the dot so confirm that this is the repo that you want to create the app in

3- in package.json
- dependencies:
react: library itself
react-dom  : loads components in the browser, react-native is fro mobile app as it does not need react-dom because there is no DOM 
but when u build web app you need both => react + react-dom
react-scripts: it has to do with the dev server, being able to compile our application, run tests and so on.

- scripts:
start: to start our server 
build: to compile all of our code into something that the browser can read without needing a dev server, so before deploying you need to do "npm run build" then deploy your code
eject: to costumize

4- index.html
Basiclly react is a SPA (single page application) frame work, meaning that everything runs on one physical single page which is index.htthml


and your <div id="root"></div> ====? it is your all the output of React when you build everything in the source folder
(change the title if you want).

5- What actually make things put in the id="root", 
source => index.js (which is basiclly is the entry point for React)
where we import react and the react-dom component
Also we have the main parent App component that wrap everything
import App from './App'

Then rendering using react-dom the <App /> component into that element with the id of root
so Actually document.getElementById is grabbing it from index.html
and then it inserts the App components

we get rid of 
serviceWorker.unregister();
because it works for offline content just to simplify 

6- App.js
the class App extends from Component which is from 'react' library 

```js
import React, {Component} from 'react';
/*
or you might see, which is the same thing
import React from 'react';
class App extends React.Component{

}
*/
import logo from './logo.svg';
import './App.css'; // global CSS

class App extends Component {
  render(){  // lifecycle method required to render the component to the browser which will return a JSX, (write js in output)
    // in JSX we don't use class we use className
  return (
    // eslint-disable-next-line no-unused-expressions
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;

```
7- npm start

8- its a hot reload try to change in <p> tag in App.js

9- Clean up process:
index.css
remove it from index.js
remove the logo from App.js
edit App.css
## Thanks to: 
[Traversy Media](https://www.youtube.com/watch?v=sBws8MSXN7A&t=4588s)