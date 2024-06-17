
import Player from '../models/players.model.js'


//FUNCION QUE REGISTRA JUGADORES
export const register_player = async (req,res) =>{
   const {id,name,lastName,role,team,jersey_num, player_img} = req.body

   try {
    const newPlayer = new Player({
        id,
        name,
        lastName,
        role,
        team,
        jersey_num,
        player_img
       })
    const playerSaved = await newPlayer.save()
    console.log(newPlayer)
    res.json(playerSaved)
    console.log('Jugador registrado con exito')
   } catch (error) {
    console.log("error al registrar jugador")
   }
   
}

// FUNCION QUE MUESTRA TODOS LOS JUGADORES
export const show_player = async (req,res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        console.log("Error al obtener jugadores");
        res.status(500).json({ message: "Error al obtener jugadores" });
    }
}

//FUNCION PARA OBTENER JUGADORES POR SU EQUIPO
export const player_by_team = async (req,res) => {
    const { team } = req.params;

  try {
    const players = await Player.find({ team: team });
    res.json(players);
  } catch (error) {
    console.log("Error al obtener jugadores", error);
    res.status(500).json({ message: "Error al obtener jugadores" });
  }
}