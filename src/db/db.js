import mongoose from "mongoose";

mongoose.connect("mongodb+srv://manavnotop:%3Cpassword%3E@cluster0.bu6qrds.mongodb.net/todo-api");

const todoSchema = mongoose.Schema({
    title:{
        required: true,
        type: String,
    },
    description:{
        type: String,
    },
    status:{
        type: Boolean,
        required: true,
    }
})

const Todo = mongoose.model(Todo, todoSchema);

module.exports = {
    Todo,
}