import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: ture
    }
}, {timestamps: true})


export const Category = mongoose.model('Category', categorySchema)