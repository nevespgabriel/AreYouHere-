import { Schema, model } from "mongoose";

const subjectSchema = new({
    name:{
        type: Schema.Types.String,
        required: true
    },
    workload:{
        type: Schema.Types.Number,
        required: true
    },
    teacher:{
        type: Schema.ObjectId,
        ref: "users",
        required: true
    }
});

const Subject = model("subjects", subjectSchema);

export default Subject;