const html = require('choo/html')

module.exports = (state, prev, send) => html`
  <div>
    ${console.log('state',state)}
  	${state.app.todo.map(i=>{
  		return html`<li>${i}</li>`
  	})}
  </div>
`
