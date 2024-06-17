//Crea todas las rutas y endpoints ; Post, Get ...

import { Router } from "express";
import { register_player,show_player,player_by_team } from "../controllers/auth.controller.js";
import {register_team,show_teams,team_by_conf} from "../controllers/team.controller.js";
import {register_conf,show_conf} from "../controllers/conference.controller.js";

const router = Router();

//RUTAS JUGADORES
router.post('/register_player',register_player) // Inscribir jugadores
router.get('/show_player',show_player) // Ver todos jugadores Inscritos
router.get('/player/team/:team',player_by_team) // Ver Jugadores por equipo

//RUTAS EQUIPOS

router.post('/register_team',register_team) // Inscribir Equipos
router.get('/show_teams',show_teams) // Ver todos los equipos Inscritos
router.get('/team/conference/:conference',team_by_conf) // Ver equipos por conferencia

//RUTAS CONFERENCIAS

router.post('/register_conf',register_conf) // Inscribir Conferencias
router.get('/show_conf',show_conf) // Ver todas las conferencias


//RUTAS PARTIDOS



export default router