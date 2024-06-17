import { Link } from "react-router-dom"

const Home = () =>{
    return(
        <>
        <div>Home</div>
        <Link to="/players/all">Ver todos Jugadores</Link>
        </>
    )
}
export default Home