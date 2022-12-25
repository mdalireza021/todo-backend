import express from 'express';
import todoModel from '../models/todo.model.js';

// get all todos
export const getAllTodo=async(req,res)=>{

    try{
        const data=await todoModel.find();
        res.json(data);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
}

///get todo using id
export const getTodoById=async(req,res)=>
{
    const todo=await todoModel.findById(req.params.id);
    todo.complete=!todo.complete;
    todo.save();
    res.json(todo);
}

//post todo
export const postTodo=async(req,res)=>
{
    const data=new todoModel(
        {
            text: req.body.text,           
        });
    try
    {
        const value=await data.save();
        res.status(200).json(value);
    }

    catch(error)
    {
        res.status(400).json({message:error.message});
    }
}

//update todo
export const updateTodo=async(req,res)=>{
    try
    {
        const id=req.params.id;
        const updateData=req.body;
        const options={new: true};
        const result= await todoModel.findByIdAndUpdate(id,updateData,options);
        res.send(result);
    }
    catch
    {
        res.status(400).json({message:error.message});
    }
}

///delete todo
export const deleteTodo=async(req,res)=>
{
    try
    {
        const id=req.params.id;
        const data=await todoModel.findByIdAndDelete(id);
        res.send('document with '+data.text+'has been deleted.');
    }
    catch(error)
    {
        res.status(400).json({message:error.message});
    }
}

