const html = require('choo/html')
const repostList = require('../reposList/view');

module.exports = (state, prev, send) => html`
  <main>
    <h1>Title: ${state.app.title}</h1>
    ${repostList(state,prev,send)}
  </main>
`