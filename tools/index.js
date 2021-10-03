const express = require('express')
const app = express()
var hbs = require('express-hbs');
const path = require('path');

const iconsRouter = require('./icons/router')

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

/** Archivos estaticos */
app.use('/', express.static(path.join(__dirname, './static')));
app.use('/icons', express.static(path.join(__dirname, './icons/icons')));

app.get('/', (req, res) => res.redirect('/icons'));
app.get('/icons', (req, res) => res.render('icons'))

// api
app.use('/api/icons', iconsRouter)

app.listen(3001, ()=> console.log('server tools start on port 3001'))