var choo = require('choo');

const app = choo();

// models
app.model(require('./containers/home/model'))

app.router((route) => [
  route('/', require('./containers/home/view'))
])

const tree = app.start();

document.getElementById('app').appendChild(tree)