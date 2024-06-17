// esquema de la base de datos para los jugadores

import mongoose, { Schema } from "mongoose";

const playerSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        trim:true, //limpiar espacios
        unique:true
    },
    name:{
        type:String,
        required: true,
        trim:true
    },
    lastName:{
        type:String,
        required: true,
        trim:true
    },
    role:{
        type:String,
        trim:true
    },
    team:{
        type:String,
        required: true,
        trim:true
    },
    jersey_num:{
        type:String,
        trim:true
    },
    player_img:{
        type: String,
        trim:true
    },
})

export default mongoose.model('Player',playerSchema)