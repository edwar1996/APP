import React, { useEffect, useState } from "react";
import Producto from "./Producto";
import "./Productos.css"; // Archivo de estilos CSS personalizados

const Productos = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = () => {
    fetch("http://localhost:5000", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setProductos(data.product))
      .catch(error => console.error('Error:', error));
  };
  
  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div className="productos-container"> {/* Contenedor principal con clase CSS */}
      <table className="productos-table"> {/* Tabla con clase CSS */}
        <thead>
          <tr>
            <th>PRODUCTO</th>
            <th>CANTIDAD</th>
            <th>PRECIO</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {productos?.map(producto => (
            <Producto key={producto.id} producto={producto} obtenerProductos={obtenerProductos}/> 
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;
