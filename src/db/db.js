import mongoose from "mongoose";
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL);

const userSchema = mongoose.Schema({
    username:{
        required: true,
        type: String,
    },
    password:{
        require: true,
        type: String,
    },
    firstName: {
        require: true,
        type: String,
    },
    lastName: {
        require: true,
        type: String
    }
})

const todoSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
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

const User = mongoose.model('User', userSchema);
const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo,
    User,
}