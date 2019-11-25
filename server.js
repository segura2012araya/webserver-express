const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');
const puerto = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    //res.send(salida);
    res.render('home', {
        nombre: 'José Enrique Segura Araya',
    });

});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(puerto, () => {
    console.log('Escuchando puerto :' + puerto);
})