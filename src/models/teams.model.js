// esquema de la base de datos para los jugadores

import mongoose, { Schema } from "mongoose";

const teamSchema = new mongoose.Schema({
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
    conference:{
        type:String,
        required: true,
        trim:true
    },
    coach_name:{
        type:String,
        trim:true
    },
    team_logo:{
        type: String,
        trim:true
    },
})

export default mongoose.model('Team',teamSchema)