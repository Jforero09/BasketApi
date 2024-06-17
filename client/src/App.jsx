//SE USA ROUTER REACT PARA ASIGNAR LAS RUTAS AL SERVIDOR

import { BrowserRouter,Routes,Route } from "react-router-dom"

import Home from "./pages/home/Home"
import Players from "./pages/players/Players"
import Teams from "./pages/teams/Teams"


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/players/all' element={<Players/>}  />
        <Route path='/teams/all' element={<Teams/>}  />
        <Route path='/player/teams/:team' element={<h1>Players by teams page</h1>}  />
        <Route path='/team/conf/:conf' element={<h1>Teams by conference page</h1>}  />
      </Routes>
    </BrowserRouter>
  )
}
export default App