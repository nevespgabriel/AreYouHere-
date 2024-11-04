import Subject from "../models/subject_model.js";
import User from "../models/user_model.js";

const store = async(req, res) => {
    try{
        const teacher = User.findById(req.body.teacher);
        if(teacher.role == "TEACHER"){
            const content = Subject.create(req.body);
            res.sendStatus(200).json(content);
        }
        res.sendStatus(400);
    } catch(error){
        res.sendStatus(500).json(error.message);
    }
}

const show = async(req, res) => {
    try{
        const content = Subject.findById(req.params.id).exec();
        res.json(content);
    } catch(error){
        res.sendStatus(500).json(error.message);
    }
}

const index = async(req, res) => {
    try{
        const content = Subject.find(req.params.id).exec();
        res.json(content);
    } catch(error){
        res.sendStatus(500).json(error.message);
    }
}

const update = async(req, res) => {
    try{
        const teacher = User.findById(req.body.teacher);
        if(teacher.role == "TEACHER"){
            const content = Subject.findByIdAndUpdate(req.params.id, req.body).exec();
            res.sendStatus(200).json(content);
        }
        res.sendStatus(400);
    } catch(error){
        res.sendStatus(500).json(error.message);
    }
}

const destroy = async(req, res) => {
    try{
        Subject.findByIdAndDelete(req.params.id);
    } catch(error){
        res.sendStatus(500).json(error.message);
    }
}

export default {
    store,
    index,
    show,
    update,
    destroy
}