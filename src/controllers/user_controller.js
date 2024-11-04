import User from "../models/user_model.js";
import Class from "../models/class_model.js";

const store = async(req, res) => {
    try{
        const content = User.create(req.body);
    } catch(error){
        res.sendStatus(500).json(error.message);
    }
}

const login = async(req, res) => {
    try{
        const user = await User.findOne({
            username: req.body.email,
            isActive: true
        }).exec();
        if(user && await user.isValidPassword(req.body.password)){
            const token = jwtService.generateAccessToken(user);
            res.status(200).json(token);
        } else{
            res.status(404).json({
                error: "Email or password incorrect"
            });
        }
    } catch(error){
        res.sendStatus(500).json(error.message);
    }
}

const show = async(req, res) => {
    try{
        const content = User.findById(req.params.id).exec();
        res.json(content);
    } catch(error){
        res.sendStatus(500).json(error.message);
    }
}

const index = async(req, res) => {
    try{
        const content = User.find(req.params.id).exec();
        res.json(content);
    } catch(error){
        res.sendStatus(500).json(error.message);
    }
}

const update = async(req, res) => {
    try{
        const teacher = User.findById(req.body.teacher);
        if(teacher.role == "TEACHER"){
            const content = User.findByIdAndUpdate(req.params.id, req.body).exec();
            res.sendStatus(200).json(content);
        }
        res.sendStatus(400);
    } catch(error){
        res.sendStatus(500).json(error.message);
    }
}

const destroy = async(req, res) => {
    try{
        User.findByIdAndDelete(req.params.id);
    } catch(error){
        res.sendStatus(500).json(error.message);
    }
}

export default {
    store,
    login,
    index,
    show,
    update,
    destroy
}