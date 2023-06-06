const { response, request }= require('express');
const { PrismaClient }= require('@prisma/client');

const prisma = new PrismaClient();

const nuevoProducto = async(req=request, res=response) =>{
    console.log (req.body)
    const {nombre, cantidad, precio} = req.body;
    const result = await prisma.productos.create({
        data:{
            name:nombre,
            amount:cantidad,
            price:precio
        }
    }).catch((e)=>{
       
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })

    res.json({
        result
    })
}

const mostrarProductos = async(req=request, res=response) =>{
    const product = await prisma.productos.findMany()
    .catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })
    res.json({
        product
    })
}

const editarProducto = async(req=request, res=response) =>{
    const {id, name, amount, price} = req.body;
    const updateProduct = await prisma.productos.update({
        where:{
            id,
        },
        data:{
            id,
            name,
            amount:Number(amount),
            price:Number(price)

        },
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })
    res.json({
        updateProduct
    })
}

const eliminarProducto = async(req=request, res=response) =>{
    const { name } = req.body;
    const deleteProduct = await prisma.productos.delete({
        where:{
            name,
        },
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })
    res.json({
        deleteProduct
    })
}


module.exports = {
    
   nuevoProducto,
   mostrarProductos,
   editarProducto,
   eliminarProducto

}