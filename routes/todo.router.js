import express from 'express';
import { deleteTodo, getAllTodo, getTodoById, postTodo, updateTodo } from '../controllers/todo.controller.js';

const routers=express.Router();

routers.get('/getAll',getAllTodo);
routers.get('/complete/:id',getTodoById);
routers.post('/new',postTodo);
routers.patch('/update/:id',updateTodo);
routers.delete('/delete/:id',deleteTodo);

export default routers;
