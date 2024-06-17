import mongoose, { Schema } from "mongoose";

const conferenceSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        trim:true, //limpiar espacios
        unique:true
    },name:{
        type:String,
        required: true,
        trim:true
    },
    conf_img:{
        type: String,
        trim:true
    },
})

export default mongoose.model('Conference',conferenceSchema)