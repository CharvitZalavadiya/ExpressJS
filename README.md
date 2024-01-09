# ExpressJS

- Take a reference of ARC Tutorials

## 01 : Introduction

- What is Express JS?

  - Express is a minimal and flexible Node js web application framework that provide a robust set of features for web and mobile applications.
  - It is an open source framework developed and maintained by the Node.js foundation.
  - Express IS is a web application framework that provides you with a simple middleware APIs to build websites web apps and back ends
  - With Express IS, you need not worry about low level protocols, processes, etc
  - It is flexible as there are numerous modules available on npm, which can be directly plugged into Express.
  - Express IS is maintained by the Node JS foundation and numerous open source contributors

- Why Express?
  - Easy, Robust and quick way to set up backend APIs
  - All batteries included
  - Express JS is unopinionated which means there is no "best way" to do something
  - What suits you best is the best way forward!!!
  - It is very flexible and pluggable.

## 02 : Installation

- Install NodeJS first
- For installing express js hit the command in terminal "npm i express"
- Also install nodemon for automatic restart your server "npm i nodemon"
- For using ES6 method for importing you need to add this property in your package.json file {"type": "module"}

## 03 : Hello World

- Let's breakdown each line by line and understand completely
- The first line imports Express in our file. We have access to it through the variable Express. We use it to create an application and assign it to var app.
- "app.get('/', function(rea, res){})"
- This function tells what to do when a get request at the given route is called.
- The callback function has 2 parameters, request(req) and response(res).
- The request object(req) represents the HTTP request and has properties for the request query string parameters, body, HTTP headers, etc. Similarly, the response object represents the HTTP response that the Express app sends when it receives an HTTP request.

## 05 : POSTMAN App

- POSTMAN is a cool tool to do all API testing
- We can make Requests via different HTTP Methods
- We can view responses, headers etc
- We can set Authentication Headers
- We can create Collections for grouping of the API requests
- We can export collections
- We can create documentation for APIs as well

## 06 : HTTP Methods (POST, GET, PUT, DELETE)

- Create - Create new resource
- Read - Read resource from server
- Update - Update a resource
- Delete - Delete a resource
- POST- 1. The POST method requests that the server accept the data enclosed in the request as a object/entity of the resource identified by the URI.
- GET:
  - The GET method requests a representation of the specified resource.
  - Requests using GET should only retrieve data and should have no other effect.
- PUT:
  - The PUT method requests that the server accept the data enclosed in the request as a modification to existing object identified by the URI. 2. If it does not exist then the PUT method should create one
- Delete:
  - The DELETE method requests that the server delete the specified resource

- POST = Create
- GET = Read - 1 or many
- PUT = Update
- Delete = Delete

## 07 : Routing in Express JS

- A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), a URL path/pattern, and a function that is called to handle that pattern
- Using app.method we can easily configure routes in our application
- We can configure 1 or more routes in the app
- We can configure routes with any HTTP methods
- Let's configure routes for a module with CRUD operations
- Examples of Routes are:
  - app.post('/create')
  - app.get(/users')
  - app.put(/user/update')
  - app.delete(/user/delete')

## 08 : Router

- Over the period of time routes grow in size and is extremely difficult to manage
- One of the beauty of ExpressJS Framework is how easy it is to manage the code
- Using modular approach using Router we can easily develop, maintain and extend routes
- We will need to get the Router object and then create routes for the modules

## 09 : Dynamic Routes

- ExpressJS allows to build URL's dynamically as well
- Often we need to work with content/id's which are dynamic in nature and NOT static values
- Using dynamic routes allows us to pass parameters and process based on them
- E.g
   app.get('/:id', function(req, res){\
   res.send('Dynamic Value is' + req.params.id);\
   });

- Go through code

## 10 : URL Building using Regex
- Passing multiple dynamic values
- app.get('/users/:name/:id', function(req, res) {\
res.send('id:'+ req.params.id + 'and name:' + req.params.name);\
};

- Pattern Matched Routes
- We can also use use regex to restrict URL parameter matching
- app.get('/users/:id [0-91(5)]', function(req, res){\
res.send('id: ' + req.params.id);\
});

- "/searchFor/:key([0-9]{3})" here [0-9] for digits only and {3} for allowing only 3 digits

## 11 : Wild Card Routes
- We can setup wild card routes just in case where we don't match any routes
- app.get('/*', function(req, res){\
res.send(Wild card matching");\
});

- Visit through code

## 12 : Middleware
- What's middleware? Why we need them?
- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request response cycle.
- These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc
- Remember the order of the methods is extremely important

- The example of the use of middleware
  - Check is user is authenticated.
  - Check- if data is correct
  - check if all data is present:
  - check if is active

## 13 : Express Generator
- What's Express Generator?
- Use the application generator tool, express-generator, to quickly create an application skeleton.
- Easily get standard application shell for quick and rapid prototyping
- How to use Express Generator?
- npx express-generator _or_
- npm i express-generator

- bin -> www -> server root directory
  - compiled code
- public folders
  - assets
  - stylesheets
  - scripts
- routes
  - modules
  - we manually created all modules and routes etc
  - class ( variables, methods, classes etc etc )
  - Data
- views
  - template files -› HTML code
  - template engines in the next episode
  - views -> UI code
  - jade
  - pug
  - ejs
  - You will the extension used .jade
  - can we change this once we have created?
    - YES - of course
  - The view template is a static HTML code where we will replace the values/data dynamically
- App.js -> the heart of the application
  - import your modules
  - add the reqired modules and packages etc
- Package. json
  - all dependencies
  - scripts for starting, testing, etc etc
- Do a npm install

- We should see a node_modules folder

## 14 : Templating and Template Engines
- Use cases for Express/Node Backend
- Implement only as an API layer
- Expose only APIs or endpoints
- Implement as a full fledge application including both Backend and Ul
- Endpoints along with Ul Templates

- What is a Template Engine?
  - A template engine enables you to use static template files in your application.
  - At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.
  - This approach makes it easier to design an HTML page.

- Types of Template Engines
  - EJS: An Embedded JavaScript templating Language
  - Pug
  - Jade
  - Moustache
  - To create a new app with a specific template run the below command express view=pug myapp

- 3 Steps to get templates working in ExpressJS
  - Step 1 - app.set(view engine', 'pug'")
  - Step 2 - Create the pug/jade/ejs
    - html
    - head
    - title= title
    - body
    - h1= message
  - Step ## 3 - app.get('/', function (req, res) {\
res.render('index', { title: 'Hey', message: 'Hello there!' })\
})

- What's difference between Pug and EJS?
  - EJS: An Embedded JavaScript templating Language.
  - It is a simple templating language that lets you generate HTML markup with plain JavaScript.
  - This project was formerly known as "Jade."
  - Pug is a high performance template engine heavily influenced by Html and implemented with JavaScript for Node

## 15 : Introduction to MongoDB

- Visit to the mongodb repo

## 16 : Introduction to Mongoose JS
- What is Mongoose?
- Elegant mongodb object modeling for node.js
- Mongoose provides a straight-forward, schema-based solution to model your application data.
- It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
- In short if you are working with MongoDB and MEAN/MERN stack - you must use Mongoose to make your life easy!!!

- To Install Mongoose in our Express Application
  - npm i mongoose --save

## 17 : Connect to MongoDB using Mongoose
- To connect to MongoDB - Follow the below steps
  - Step 1 - var mongoose = require('mongoose');
  - Step 2 - Create a Properties File
  - Step 3 - Import the properties file in index.js file
  - Step 4 - mongoose.connect(dbURL);
  - Step 5 - mongoose.connection.on('connected', function()\
console.log/"Mongoose default connection is open to ", dbURL);\
);

## 18 : Live Project Architecture
- Live Project Architecture and Blue Print
- We will build the backend layer of API endpoints for a SimpleCRM application
- How do we model our app?
- Standard and best practice is to use Express Generator as a basic structure
- Separate out logical building blocks like
  - Config
  - Routes
  - Controllers
  - Middleware
  - Services
  - Tests

- See my folder structures

## 19 : MongoDB CRUD Operations
- Step 1 - Create Express Generator app
- Step 2 - Install Mongoose Library
- Step 3 - Import Mongoose Library in our app.js
- Step 4 - Create a Models folder
- Step 5 - Create a Schema for your collection

- collection = students
- Step 6 - Create a Mongoose Model of the same schema collection
- Step 7 - Import the newly created Model into app.js

## 20 : MongoDB CRUD Create/Post
- Step 8 - Create the mongoDB connection
- Step 9 - Create new Object of Model
- Step 10 - Call "Save" methos -› Create/POST method for our collection

## 21 : MongoDB CRUD Dynamic Data Create/Post
- Step 11 - Refactor our code

- made the method - POST
- made the data dynamic in nature
- coming from request object

- Step 12 - Using POSTman

## 22 : MongoDB CRUD Read/GET
- Step 13 - Reading data from collections find
- Read all data from collection
- Read some data based on conditions

- Query
- Read a particular data
  - findById

## 23 : MongoDB CRUD Update/PUT
- Update has 3 methods
- findOneAndUpdate
  - Student.findOneAndUpdate({name: "ARC"}, {age: 40}, function(err, response) {\
console.log(response);\
});
- update
  - Student.update({age: 25}, {nationality: "American"}, function(err, response){\
console.log(response);\
});
- findByldAndUpdate
  - Student.findByldAndUpdate("507f1f77bcf86cd799439011", {name: "James"},\
function(err, response){\
console.log(response);\
});

## 24 : MongoDB CRUD Delete
- Delete Documents
- Remove
- findByldAndRemove
- deleteOne
- findByldAndDelete
- findOneAndRemove
- Update has 3 methods
- findOneAndUpdate
  - Student.findOneAndUpdate({name: "ARC"}, {age: 40}, function(err, response) {\
console.log(response);\
});

- update
  - Student.update({age: 25}, {nationality: "American"}, function(err, response){\
console.log(response);\
});
- findByldAndUpdate
  - Student.findByldAndUpdate("507f1f77bcf86cd799439011", {name: "James"}, function(err, response){\
console.log(response);\
});
