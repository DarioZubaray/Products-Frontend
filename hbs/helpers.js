const hbs = require('hbs');

hbs.registerHelper('getFullYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('json',function(obj) {
   return new hbs.SafeString(JSON.stringify(obj))
});
