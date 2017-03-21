let app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Node app running in port ${PORT}`);
});