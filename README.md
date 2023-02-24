# react_native_setup


Foreword: I promise I'm not being low effort by linking so many docs, the documentation for react native is just really, really good and explains it better than I ever could.

You can see two react folder in this repo:
1 - React / ReactApp
2 - React_test

1 is the folder that I made from running the react native command in this repo;
2 is a folder of code snippets from the first vscode project I made with react native - it has 2 files and they are both examples of correct code for adding routes / using state.

I tried to make a github repo for the vscode project that these folders were initially contained in but I am dumb and my branches began to diverge so, we get this instead - sorry lmao

----------


Installing TypeScript

Follow the below guide until you have successfully printed 'Hello World' on your console. You can stop following the guide once you get to the section on 'IntelliSense'

 Make sure that you are in your HelloWorld file or you will error as your helloworld.ts file cannot be found.

https://code.visualstudio.com/docs/languages/typescript

------------

Installing React Native

Follow the below guide to help you set up your React Native application - The expo go app is very helpful because when you refresh your code you can see directly on your phone how the app looks!

https://reactnative.dev/docs/environment-setup

------------

REACT NATIVE ROUTERS EQUIVALENT

After installing react native, I tried to emmulate some of the functionality we had in our FE project - the first thing I did was routes - consider the below documentation to help you with this!

For an example of this, consider the stack.jsx file in react_test/stack.jsx

https://reactnative.dev/docs/navigation

-----------

STATE / USE STATE
After navigation, I learn about how state works in react native - again consider the below documentation

For an example of this, consider the App.tsx file in react_test/app.tsx

https://reactnative.dev/docs/state

-----------
GET REQUESTS / USE EFFECT:

No link for this one unforunately but it is very similar to making GET requests in react just with a few additional quirks.

Since we are using TypeScript, we first have to define the structure of the data we are expecting to receive back from our request - this is done with 'interface User'.

After this, we make our function and define our useState like below:

const [data, setData] = useState<User[]>([]);

The end of this '([])' is what we are used to - setting the initial value of 'data' , for now we use an empty array '([])'.

The section '<User[]>' is there to let React know that we are expecting the 'data' state variable to be an array of objects that conform to the 'interface User' variable we defined earlier. Again, I think this is just the point of TypeScript - to perform type checking on everything.

Next we have the useEffect which again should be familiar - again we see the '<User[]>' which lets axios know we are trying to get an array of objects that fit the interface User variable we defined. 

In the '.then' we have AxiosResponse - this is an interface provided by Axios in order to specificy the TYPE (hahaha typescript get it?) of the response data that we're expecting to receive from the API. As we are expecting to receive an array of 'user' objects we specify 'AxiosResponse<User[]>.

After this, we just use View and Text coupled with the traditional map function to display our data on the screen.

----------


TROUBLESHOOTING

Q: "I tried to change my App.js into an App.tsx and now React Native is complaining"
A: Try the following - after changing your app to app.tsx:
    - make sure you have imported in React (import React from 'react') <-- Make sure the first 'React' is uppercase!
    - if you are still seeing red, run the following command :  npm i --save-dev @types/react-native
    - the above command will import a bunch of node modules but we can just gitignore them later :)
    This should fix your problem!
 

Thats about as far as I got - seems super similar to react and yeah that it :)
