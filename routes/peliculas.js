const { Router } = require('express')
const { getPeliculas, getEstrenos, getPopulares }= require ('../controllers/peliculas')
const rutas = Router();


rutas.get('/', getPeliculas);
rutas.get('/estrenos', getEstrenos);
rutas.get('/populares', getPopulares);
rutas.get('/populares/:id', getPopulares);


module.exports = rutas;