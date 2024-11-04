import { Schema, model } from "mongoose";

const classSchema = new Schema({
    level:{
        type: Schema.Types.String,
        enum: ["BEGGINER", "ADVANCED"],
        required: true
    },
    timePeriod:{
        type: Schema.Types.String,
        enum: ["MORNING", "AFTERNOON", "NIGHT"],
        required: true    
    },
    students:{
        type: [Schema.ObjectId],
        ref: "students"
    },
    subjects:{
        type: [Schema.ObjectId],
        ref: "subjects"
    }
});

const Class = model("classes", classSchema);

export default Class;