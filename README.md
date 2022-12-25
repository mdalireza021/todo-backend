# todo-backend
This is an example implementation of todo-backend API


* features:
  * Node provides the backend environment for this application
  * Express middleware is used to handle requests, routes
  * Mongoose schemas to model the application data

## Demo

This application is deployed on Vercel. Please check it out: [here](https://todo-backend-tlv5.vercel.app/api/todo/).

Some basic Git commands are:

```
$ git clone https://github.com/rahmanreza646/todo-backend.git
$ cd todo-backend
$ npm install
```

## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

### Live API Routes Documentations

```sh
__________________________________________________________________________________________________________
| METHOD:                   URL:                                             // DESCRIPTION              |
|________________________________________________________________________________________________________|
| GET:      https://todo-backend-tlv5.vercel.app/api/todo/getAll/            // get all todos            |
| GET:      https://todo-backend-tlv5.vercel.app/api/todo/complete/:id       // get a single todo        |
| POST:     https://todo-backend-tlv5.vercel.app/api/todo/new                // create a new todo        |          
| PATCH:    https://todo-backend-tlv5.vercel.app/api/todo/update/:id         // update a todo            |
| DELETE:   https://todo-backend-tlv5.vercel.app/api/todo/delete/:id         // delete a todo            |
|________________________________________________________________________________________________________|
```
