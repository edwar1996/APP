import React, { useState } from "react";
import "./Formato.css"


const initialForm = {
  nombre: "",
  cantidad: "",
  precio: "",
}

const Formato = () => {
 
  const [form, setForm] = useState(initialForm)

  const handleText = (e) => {
    setForm({
      
      ...form,
      [e.target.name]: e.target.value,
    })
  }

 

  const onHandleSubmit = (e) =>{
    e.preventDefault();
    if (Object.values(form).includes("")) {
      alert("TODOS LOS CAMPOS SON OBLIGATORIOS")
      return;
    }
    const{nombre, cantidad, precio}=form
    fetch("http://localhost:5000", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({nombre,cantidad:Number(cantidad),precio:Number(precio)}), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => {
      alert("PRODUCTO REGISTRADO")
      window.location.reload()
      return res.json()
    }
      
      )
    .catch(error => console.error('Error:', error))
  }

  return (
    <div className="container">
      <h1>NUEVO PRODUCTO</h1>
      <form className="form" onSubmit={onHandleSubmit}>
        <div>
          <label>Nombre</label>
          <input type="text" name="nombre" onChange={handleText} value={form.nombre} />
        </div>

        <div>
          <label>Cantidad</label>
          <input type="text" name="cantidad" onChange={handleText} value={form.cantidad} />
        </div>

        <div>
          <label>Precio</label>
          <input type="text" name="precio" onChange={handleText} value={form.precio} />
        </div>

        <input type="submit" value="Guardar Producto"  />
        
      </form>

    </div>
  );
};

export default Formato;
