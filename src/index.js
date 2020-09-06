import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App'; 

/*
  El metodo render renderiza la clase, necesita dos cosas, UN ELEMENTO
  y tambien necesita un lugar en el documento html donde se insertara
*/

//Sin JSX
const root = document.getElementById("root"); 
//const elemento = React.createElement(componente, propiedades, hijos);
//  {objeto json}
//const elemento = React.createElement("h1", {className: "saludo"}, "Hola mundo");
//----------------------------------------------------------------------------

//Con JSX
ReactDOM.render(<App/>, root);



