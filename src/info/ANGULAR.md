========================================================================================================================
Introduction to Angular
========================================================================================================================
- Angular is a lightweight JS framework that allows the development of SPAs allowing the user a responsive and reactive experience (similar to mobiles)
- SPAs - Single Page Application is a single HTML page which never changes, only the content changes. This is done by the Angular code (javascript) altering the DOM of the HTML page.
- The DOM (Document Object Model) is a Javascript class that defines the HTML elements as objects. It supports properties, methods and events.
- When you look at the source code of a rendered Angular application, the source code isnt meaningful because the DOM has been modified dynamically. To inspect the HTML elements and DOM you need to go into the Developer Tools mode in the browser
- Angular supports typescript which is a supertype of javascript. It allows for the definition of Types, Classes and Interfaces. Typescript is compiled into Javascirpt using webpack
- webpack is an open-source JS module bundler. Webpack takes modules with dependencies and generates static assets representing those modules.

========================================================================================================================
Node.js
========================================================================================================================
- Node JS is a Javascript Runtime that has npm inbuilt.
- NPM (some refer as Node Package Manager) is a javascript package that manages dependencies within an Angular application

========================================================================================================================
Project Structure
========================================================================================================================

Folders:
- e2e // for end to end testing
- src // where the project lives
- app // where the application code lives
- assets // where the project assets live
- node_modules // directory containing all the javascript libraries 

Files:
- index.html // the SPA file containing the <app-root> tag which is the main tag that loads the Angular application
- angular-cli.json // configuration file for the project. Uses Webpack to compile all the css and dependencies into the index.html file

========================================================================================================================
How an Angular Application gets Loaded
========================================================================================================================
