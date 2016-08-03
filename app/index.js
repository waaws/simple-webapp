var choo = require('choo');
var app = choo();
var _ = require('lodash');
// models
app.model(require('./containers/home/model'))

app.router((route) => [
  route('/', require('./containers/home/view'))
]);

module.exports = app;
