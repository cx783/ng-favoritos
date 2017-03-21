let express = require('express');
let FavoritoController = require('../controllers/favorito');
let api = express.Router();

api.get('/prueba/:nombre?', FavoritoController.prueba);

module.exports = api;