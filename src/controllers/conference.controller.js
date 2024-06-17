import Conference from '../models/conferences.model.js'


//FUNCION QUE REGISTRA JUGADORES
export const register_conf = async (req,res) =>{
   const {id,name,conf_img} = req.body

   try {
    const newConference = new Conference({
        id,
        name,
        conf_img
       })
    const conferenceSaved = await newConference.save()
    console.log(newConference)
    res.json(conferenceSaved)
    console.log('Conferencia registrado con exito')
   } catch (error) {
    console.log("error al registrar Conferencia")
   }
   
}

// FUNCION QUE MUESTRA TODAS LAS CONFERENCIAS
export const show_conf = async (req,res) => {
    try {
        const conference = await Conference.find();
        res.json(conference);
    } catch (error) {
        console.log("Error al obtener conferencia");
        res.status(500).json({ message: "Error al obtener conferencia" });
    }
}
