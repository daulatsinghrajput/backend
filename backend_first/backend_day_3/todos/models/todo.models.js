import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdby: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    Subtodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]
}, {timestamps: true})

export const Todo = mongoose.model('Todo', todoSchema)