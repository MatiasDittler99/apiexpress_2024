const express = require('express');

class Server {
    constructor(){
        this.express = require('express')
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.rutas();
    }

    rutas(){
        this.app.use('/api/v1/peliculas', require('../routes/peliculas'));
        // this.app.use('/api/v1/actores', require('../routes/actores'));

    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`La Api esta escuchando en el puerto ${this.port}`)
        })
    }
}

module.exports = Server;
// module.exports = {Server, item, name};
