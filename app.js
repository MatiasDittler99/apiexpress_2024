require('dotenv').config()
const Server = require('./models/server')
// console.log(process.env.PORT)
// console.log(port)

const servidor = new Server();

servidor.listen();

// app.get('/', (req, res) => {
// //   res.send('Hello World')
// // res.json({name: 'Hello World'})
// res.status(200).json({name: 'Hello World'})
// // process.env.PORT
// })

// app.listen(3000)
// app.listen(port)
