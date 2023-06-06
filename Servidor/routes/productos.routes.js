const { Router }= require('express');

const {agregarProducto,mostrarProductos, nuevoProducto, editarProducto, eliminarProducto} = require('../controllers/product.controller')
const routerProducto = Router();


routerProducto.get('/', mostrarProductos)
routerProducto.post('/', nuevoProducto)
routerProducto.put('/', editarProducto)
routerProducto.delete('/', eliminarProducto)



module.exports = routerProducto;






