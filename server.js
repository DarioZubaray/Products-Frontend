const express = require('express');
const hbs = require('hbs');
const Request = require("request");
const app = express();

const port = process.env.PORT || 3000;
const backendUrl = {
  'host': 'http://localhost:8080',
  'heroku': 'https://dariozubaray-products-backend.herokuapp.com',
  'findAll': '/api/product/findAll',
  'create': '/api/product/create'
};

app.use( express.static( __dirname + '/public'));
hbs.registerHelper('getFullYear', () => {
  return new Date().getFullYear();
});
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  Request.get(backendUrl.host + backendUrl.findAll, (error, response, body) => {
    if(error) {
        console.log(error);
        res.render('error', { 'error': error });
    } else {
      let products = JSON.parse(body);
      products.number = products.number + 1;
      console.log(products);
      res.render('home', {
        'hactive': 'active',
        'products': products
      });
    }
  });

});

app.get('/add', (req, res) => {
  res.render('add', {
    'Aactive': 'active'
  });
});

app.listen(port, () =>{
  console.log(`Escuchando peticiones en el puerto ${ port }`);
});