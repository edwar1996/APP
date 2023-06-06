import React from "react";
import Formato from "./Componentes/formato";
import Productos from "./Componentes/Productos";
import {BrowserRouter, Routes, Route, Link, useNavigate, Navigate, useParams} from "react-router-dom";
import {Provider} from 'react-redux';
import { store } from "./store";

let Error404 = () =>{
  return(
    <>
      <Link to="/">Regresar al home</Link>
      <h1>Esta pagina no existe - 404</h1>
    </>
  )
}

let NotImplemented = () =>{
  return (
    <div>
      <h1>Esta pagina no esta lista</h1>
      <Link to="/">Ir al inicio</Link>
    </div>
    )
}

let Principal = () =>{
  return <h1></h1>
}

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/"/>
          <Route path="producto">
            <Route path="visualizar" element={<Productos/>} />
            <Route path="nuevo" element={ <Formato/> }/>
          </Route>
          
          <Route path="*" element={<Error404/>} />

          </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;



























































































































































































