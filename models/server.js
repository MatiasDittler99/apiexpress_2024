const express = require('express');

class Server {
    constructor(){
        this.express = require('express')
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middleware();
        this.rutas();
    }

    middleware(){
        this.app.use(express.static('public'));
    }

    rutas(){
        this.app.use('/api/v1/peliculas', require('../routes/peliculas'));
        // this.app.use('/api/v1/actores', require('../routes/actores'));
        this.app.use('/api/v1/empleados', require('../routes/empleados'));
        this.app.use('*', (req, res)=>{
            res.status(404).json({
                msg: 'Page Not found'
            })
        });

    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`La Api esta escuchando en el puerto ${this.port}`)
        })
    }
}

module.exports = Server;
// module.exports = {Server, item, name};
