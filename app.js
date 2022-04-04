import express from 'express';
import {
	engine
} from 'express-handlebars';
import bodyParser from "body-parser";
import fs from 'fs';

const app = express()
const port = process.env.PORT || 4500
const hostname = '127.0.0.1';

// Gebruik template engine handlebars voor DYNAMISCHE content
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Hierdoor kan ik CSS en JS bestanden aan de client side uitlezen
app.use(express.static('public'));

// Gebruik body-parser om te lezen wat er in POST requests van de form staat
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Route. Luistert naar alle GET requests op /
app.get('/', (req, res) => {


	res.render('home', {

	})

});


let userInput;

app.post('/', (req, res) => {
	console.log(req.body)

	userInput = JSON.stringify(req.body)
	console.log(userInput)
	fs.writeFile('enqueteAntwoorden.json', userInput, 'utf8', cb => {
		console.log('werk dan');
	});
	res.redirect('resultaat')
})

app.get('/resultaat', (req, res) => {
	fs.readFile('enqueteAntwoorden.json', 'utf8', function (err, data) {
		if (err) throw err;
		let info = JSON.parse(data);
		console.log(info)
		res.render('resultaat', {
			data: info
		})

	});

});


app.listen(port, () => {
	console.log(`ai we live http://${hostname}:${port}/`)
})