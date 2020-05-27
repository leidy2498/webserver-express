const express = require('express')
const app = express();
const hbs = require('hbs');
// require('./hbs/helpers');

const port = process.env.PORT || 3000;

//MIDDLEAWER: es una instruccion o un callback que se va ejecutar SIEMPRE NO IMPORTA LA URL

app.use(express.static(__dirname + '/public'));

//express HBS 
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Leydi'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});