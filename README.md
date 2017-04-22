# Umbraco-React-Router-SSR
Umbraco project w/ React Router + Server Side Rendering

This project takes a different approach than previous .NET solutions, utilising facilities exposed globally in ReactJS.NET.

It basically boils down to wrapping the js code sent to the JS engine for execution with a few statements. 

This wrapper code returns an object that contains both the context object used by react router and the ReactDOMServer render result.

The returned context object is what is used by React Router to signal a custom status code or redirect result.


#### Build instructions:

Build solution w/ VStudio

navigate to Umbraco.Frontend, fire up your favorite shell and run the following commands:

npm install

webpack

### Now launch the website and try navigating to the following urls

/three

/four

/this-will-result-in-404

#### This project uses GMO.ReactRouterNet to extend ReactJS.NET for rendering React Router components server side

https://github.com/gunnim/GMO.ReactRouterNet/blob/master/README.md

