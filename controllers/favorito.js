let Favorito = require('../models/favorito');

function prueba(req, res) {
	res.send('Inicio');
}

function getFavorito(req, res) {
	var favoritoId = req.params.id; 

	Favorito.findById(favoritoId, (err, favorito) => {
		if (err) {
			res.status(500).send({message: 'Error al devolver el marcador'});
		}

		if (!favorito) {
			res.status(400).send({message: 'No hay marcador'});
		}

		res.status(200).send({favorito});
	});
}

function getFavoritos(req, res) {
	Favorito.find({}).sort('-_id').exec((err, favoritos) => {
		if (err) {
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}

		if (!favoritos) {
			res.status(204);
		}

		res.status(200).send({favoritos});
	});
}

function saveFavorito(req, res) {
	var favorito = new Favorito();
	var params = req.body;
	
	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url;

	favorito.save((err, favoritoStore) => {
		if (err) {
			res.status(500).send({message: 'Error al guardar el marcador'});
		}

		res.status(200).send({favorito: favoritoStore});
	});
}

function updateFavorito(req, res) {
	var favoritoId = req.params.id;
	var updateParams = req.body;

	Favorito.findByIdAndUpdate(favoritoId, updateParams, (err, favoritoUpdate) => {
		if (err) {
			res.status(500).send({message: 'Error al tratar de actualizar el registro'});
		}

		res.status(200).send({favorito: favoritoUpdate});
	});
}

function deleteFavorito(req, res) {
	var favoritoId = req.params.id;

	Favorito.findByIdAndRemove(favoritoId, (err, favorito) => {
		if (err) {
			res.status(500).send({message: 'Error al eliminar el marcador'});
		}

		res.status(200).send({message: 'Marcador eliminado correctamente'});		
	});
}

module.exports = {
	prueba,
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito
};