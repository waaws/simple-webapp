module.exports = {
  namespace: 'app',
  // state:{
  // 	title:'test',
  // 	todo:[1,2,3,4]
  // },
  subscriptions: [
    (send, done) => {
      setInterval(() => {
    			send('app:add',{},()=>{})
    	},1000)
    }
  ],
  reducers:{
  	add: (data, state) => {
      let todo = state.todo || [];
  		return { todo: todo.concat(Math.random().toString()) }
  	}
  }
  // effects: {
  //   print: (data, state) => console.log(data.payload)
  // }
}
