//PAGINA QUE MUESTRA A TODOS LOS JUGADORES

import axios from "axios"
import { useEffect, useState } from "react"
import Typography from '@mui/material/Typography';
import CardPlayer from "../../components/CardPlayers";




const Players = () =>{

    const [players,setPlayers] = useState([])

    useEffect(()=>{

        // fetch("http://localhost:4000/api/show_player")
        // .then(res => res.json())
        // .then(res => setPlayers(res))
        axios.get("http://localhost:4000/api/show_player")
        .then(res => setPlayers(res.data))
        

    },[])
    console.log(players)




    return (
        <>
        <Typography variant="h2" color="primary" align="center">Todos los Jugadores</Typography>
        <div style={{
            width:"100%",
            // border:"2px solid black",
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:"center",
            gap:"20px",
            textAlign:"center",
            padding:"20px"
        }}>
        {
            players.map((player)=> {
                return <CardPlayer player={player} key={player.id}/> 
            })
        }

        </div>
       
        </>
        

    )
}
export default Players