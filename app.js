// const http = require('http');

// const handler = (request, response) => {
//     console.log('sample message');
//     response.end('Hello World');
// };

// const server = http.createServer(handler);
// const port = 3000;


// z wykorzystaniem frameworka express
const express = require('express');
const path = require('path');
const dataFromFunctionJS = require('./functions')

const app = express();
const port = process.env.PORT || 3000;
const outsideSubtitle = 'podtytul';
const aboutMe = {
    title: 'Hello ~',
    title2: 'Hello'
}


// get - pobiera dane (endpoint - zakonczenie urla np. / - strona glowna, /koszyk itp, + funkcja )
// app.get(`/team/${imie}`, function(req, res) {
//     res.send(`<h2>Strona o ${imie}</h2>`);
// })

// z packiem hbs - handlebars
app.set('view engine', 'hbs');
//podpinanie css/js - dopisac const path
app.use('/assets', express.static(path.join(__dirname, './assets'))) // dwa podkreslniki przy dirname
app.use('/js', express.static(path.join(__dirname, './js')))

app.get('/', function(req, res) {
    res.render('index', {
        pageTitle: 'Zajecia AFM 19.03.2022', 
        subtitle: outsideSubtitle, //trzeba dopisac sb zmienne
        example: dataFromFunctionJS.sayHello2()  //importujac funkcje trzeba w zmiennej dac require
    });
})
app.get('/about', function(req, res) {
    res.render('about', aboutMe);
})


app.listen(port, (err) => {
    if (err) { return console.log(`Wystapil blad ${err.message}`); }
    return console.log(`Apka dziala na porcie ${port}`);
});

