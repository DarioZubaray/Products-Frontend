const hbs = require('hbs');

hbs.registerHelper('getFullYear', () => {
  return new Date().getFullYear();
});

hbs.registerPartials(__dirname + '/views/partials');