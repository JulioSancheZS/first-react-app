import React from 'react';
import PropTypes from 'prop-types' //importamos la libreria

//const persona = {"nombre": "Julio", "apellido": "Sánchez", "edad": 24} //Objeto

/*const cursos = {
  "title": "React Desde cero",
  "price": "50 usd",
  "image":"https://notagamer.net/wp-content/uploads/2020/02/imm-yi-full.jpg"
}*/

//const mayorEdad = edad => edad >= 18; //Funcion
//Expresiones en JSX son => { javascript } 

// src={} => propiedades

// props => es un objeto en donde se encuantran las propiedades

//Componente Curso
//el componente puede recibir propiedades
//Esto de abajo es JSX, no es html 
const Curso = ({title,image,nombre,apellido,foto}) =>(  
      
    <article className="card">
      
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          
            <img src={image} alt={title}/>
         
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">
            {title}
        </h3>
          <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
              <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                  <img src={foto} alt="imagen" />
                </div>
              </div>
              <span className="small">{nombre} {apellido}</span>
            </div>
          </div>

        </div>
      </article>

)
// En react existen dos tipos de componentes, presentacionales o componente de función,
// se limita a presentarse en pantalla y no tiene mucha lógica, reutilizando una estructura declarada

//Propiedades
Curso.propTypes={
  title: PropTypes.string,
  image: PropTypes.string,
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  foto: PropTypes.string
}
//Propiedades por defecto para el componente en caso de que no le pase datos al componente
Curso.defaultProps = {
  title: "no se concontro titulo",
  image: "https://increasify.com.au/wp-content/uploads/2016/08/default-image.png",
  nombre: "Fulanito",
  apellido: "Sultanito",
  foto: "https://www.researchgate.net/profile/Maria_Monreal2/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png"
}

export default Curso
