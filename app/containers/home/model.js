module.exports = {
  namespace: 'app',
  state:{
  	title:'test',
  	todo:[1,2,3,4]
  },
  subscriptions: [
    (send, done) => {
      setInterval(() => {
      	// send('app:add', { payload: 'dog?' }), 1000)
    			console.log(1)
    			send('app:add',{})
    	},1000)
    }
  ],
  reducers:{
  	add: (data, state) => {
  		console.log(state)
  		return { todo: state.todo.concat(Math.random().toString()) }
  	}
  }
  // effects: {
  //   print: (data, state) => console.log(data.payload)
  // }
}