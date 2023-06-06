import React, {  useState } from "react";

const Producto = ({producto, obtenerProductos}) => {
  const [editar, setEditar] = useState(false);

  const [form, setForm] = useState(producto)

  const handleText = (e) => {
    setForm({
      
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const eliminarProducto = (name) => {
    fetch("http://localhost:5000", {
      method: 'DELETE',
      body: JSON.stringify({name}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => obtenerProductos())
      .catch(error => console.error('Error:', error));
  };
  const editarProducto = () => {
    fetch("http://localhost:5000", {
      method: 'PUT',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() =>  {
        obtenerProductos()
        setEditar(false)
      })
      .catch(error => console.error('Error:', error));
  };
  return (
    <tr >
        {editar?<>
        <td><input type="text" name="name" onChange={handleText} value={form.name} /></td>
        <td><input type="text" name="amount" onChange={handleText} value={form.amount} /></td>
        <td><input type="text" name="price" onChange={handleText} value={form.price} /></td>
        <td><button onClick={()=>setEditar(false)}>Cancelar</button>
        <button onClick={()=>editarProducto()}>Editar</button>
        </td>

        </>:<>
        <td>{producto.name}</td>
        <td>{producto.amount}</td>
        <td>{producto.price}</td>
        <td><button onClick={()=>setEditar(true)}>Editar</button>
        <button onClick={()=>eliminarProducto(producto.name)}>Eliminar</button>
        </td>

            </>}
    
  </tr>
)
  
};

export default Producto;