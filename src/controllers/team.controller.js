

import Team from '../models/teams.model.js'

//FUNCION QUE REGISTRA JUGADORES
export const register_team = async (req,res) =>{
    const {id,name,conference,coach_name, team_logo} = req.body
 
    try {
     const newTeam = new Team({
         id,
         name,
         conference,
         coach_name,
         team_logo
        })
     const teamSaved = await newTeam.save()
     console.log(newTeam)
     res.json(teamSaved)
     console.log('equipo registrado con exito')
    } catch (error) {
     console.log("error al registrar equipo")
    }
    
 }
 
 // FUNCION QUE MUESTRA TODOS LOS JUGADORES
 export const show_teams = async (req,res) => {
     try {
         const teams = await Team.find();
         res.json(teams);
     } catch (error) {
         console.log("Error al obtener los equipos");
         res.status(500).json({ message: "Error al obtener los equipos" });
     }
 }
 
 //FUNCION PARA OBTENER JUGADORES POR SU CONFERENCIA
 export const team_by_conf = async (req,res) => {
     const { conference } = req.params;
 
   try {
     const teams = await Team.find({ conference: conference });
     res.json(teams);
   } catch (error) {
     console.log("Error al obtener los equipos", error);
     res.status(500).json({ message: "Error al obtener los equipos" });
   }
 }
