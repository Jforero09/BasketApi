import mongoose, { Schema } from "mongoose";

const matchSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        trim:true, //limpiar espacios
        unique:true
    },
    finalScore:{
        type:String,
        required: true,
        trim:true
    },
    winner:{
        type:String,
        required: true,
        trim:true
    },
    loser:{
        type:String,
        required: true,
        trim:true
    }
})

export default mongoose.model('Match',matchSchema)