import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    diagonsedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        enum: ["F", "M", "O"],
        required: true
    },
    admittedIn:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
    },
    bloodGroup: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Patient = mongoose.model("Patient", patientSchema)
