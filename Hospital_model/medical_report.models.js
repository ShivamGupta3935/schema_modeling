import mongoose from "mongoose";

const medicalReportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

}, {timestamps: true})

export const MedicalReport = mongoose.model("MedicalReport", medicalReportSchema)
