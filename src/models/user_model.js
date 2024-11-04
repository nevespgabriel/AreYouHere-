import { Schema, model } from "mongoose";

const user = new Schema({
    nome:{
        type: Schema.Types.String0,
        required: true
    },
    email:{
        type: Schema.Types.String,
        required: true,
        unique: true,
        validate:{
            validator(v){
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            }
        }
    },
    cpf:{
        type: Schema.Types.String,
        required: true,
        unique: true,
        validate:{
            validator(v){
                return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v);
            }
        }
    },
    username:{
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    password:{
        type: Schema.Types.String,
        required: true,
        validate:{
            validator(v){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            }
        }
    },
    role:{
        type: Schema.Types.String,
        enum: ["STUDENT", "TEACHER", "ADMIN"]
    },
    class:{
        type: Schema.ObjectId,
        ref: "classes",
        required: false
    },
    reports:{
        type: [Schema.ObjectId],
        ref: "reports"
    },
    photo: {
        type: Schema.Types.String,
        required: false
    },
    isActive: {
        type: Schema.Types.Boolean,
        default: true,
        required: true
    }
}, {
    timestamps: true
});

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isValidPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

const User = model("users", userSchema);

export default User;