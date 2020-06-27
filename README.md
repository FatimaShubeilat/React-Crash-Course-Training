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

2- In terminal type npx create-react-app


## Thanks to: 
[Traversy Media](https://www.youtube.com/watch?v=sBws8MSXN7A&t=4588s)