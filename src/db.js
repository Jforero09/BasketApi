// db.js se encarga de la conexion con la base de datos

import mongoose from "mongoose";


export const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost/BasketDB');
        console.log('La base de datos esta conectada')
    } catch (error) {
        console.log('error de conexion con base de datos')
    }
};
