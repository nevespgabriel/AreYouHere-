import { Schema, model } from "mongoose";

const reportSchema = new Schema({
    student:{
        type: Schema.ObjectId,
        ref: "students",
        required: true
    },
    subject:{
        type: Schema.ObjectId,
        ref: "subjects",
        required: true
    },
    mood:{
        type: Schema.Types.String,
        enum:["VERY EXCITED", "EXCITED", "NORMAL", "UNMOTIVATED", "VERY UNMOTIVATED"],
        required: true
    },
    period:{
        type: Schema.Types.String,
        enum: ["BEGINNING", "END"],
        required: true
    },
}, {
    timestamps: true
})

const Report = model("reports", reportSchema);

export default Report;