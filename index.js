let express = require('express');
let app 	= express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Inicio');
});

app.listen(PORT, () => {
	console.log(`Node app running in port ${PORT}`);
});