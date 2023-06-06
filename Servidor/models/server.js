const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = 5000;
        this.productPath = '/api/producto'
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(require('../routes/productos.routes'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }
}

module.exports = Server;