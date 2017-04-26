let app = require('./app');
let mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

// Clase 16

mongoose.connect('mongodb://localhost:27017/cursofavoritos', (err, res) => {
	if (err) {
		throw err;
	}

	app.listen(PORT, () => {
		console.log(`Node app running in port ${PORT}`);
	});
});
