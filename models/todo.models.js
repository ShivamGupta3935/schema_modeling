import mongoose from "mongoose";
import { User } from "./user.models";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: ture
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subTodos"
        }
    ]
},{timeStamps: true}
)

export const Todo = mongoose.model("Todo", todoSchema)