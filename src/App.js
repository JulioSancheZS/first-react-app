import React from 'react';
import Curso from "./Curso"; //importar el componente curso
import "./styles/styles.scss"

//Array de objetos
const cursos = [
  {
    "title": "Maestro Yi",
    "image": "https://notagamer.net/wp-content/uploads/2020/02/imm-yi-full.jpg",
    "price": "30 USD",
    "foto": "https://scontent.fmga3-1.fna.fbcdn.net/v/t1.0-1/cp0/c0.3.50.50a/p50x50/32897992_1836063553128240_7262092177667260416_n.jpg?_nc_cat=100&_nc_sid=7206a8&_nc_ohc=gMY3ClimMMwAX_0Mb1z&_nc_ht=scontent.fmga3-1.fna&oh=9f3f83142e4ccdf71694169af249db31&oe=5F6E3025",
    "nombre": "Julio",
    "apellido": "Sánchez"
  },
  {
    "title": "Tristana",
    "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/67/Tristana_OriginalCentered.jpg/revision/latest?cb=20180414203651",
    "price": "30 USD",
    "foto": "https://scontent.fmga3-2.fna.fbcdn.net/v/t1.0-9/58543573_2368799356673687_1821429307348615168_n.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=mTSjimLQQMYAX_TIkGI&_nc_ht=scontent.fmga3-2.fna&oh=2dfc4b68874acf3a81c6c3681f6e4853&oe=5F6E9ED6",
    "nombre": "Helmut",
    "apellido": "Martinez"
  },
  {
    "title": "Sett",
    "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/44/Sett_OriginalCentered.jpg",
    "price": "30 USD",
    "foto": "https://scontent.fmga3-2.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/75429490_826688847762668_395474408157741056_n.jpg?_nc_cat=105&_nc_sid=7206a8&_nc_ohc=dg5j4QckUC0AX8Y-LH-&_nc_ht=scontent.fmga3-2.fna&oh=a826db1590a31967530f06838b87c863&oe=5F6FA6E0",
    "nombre": "Ner",
    "apellido": "Aguilar"
  }
  
]
//Componente
//Esto es JSX
const App = () => (

  // Los componentes tiene que devolver un ELEMENTO
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="https://notagamer.net/wp-content/uploads/2020/02/imm-yi-full.jpg" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Aprendiendo React</p>
            <p> Conocimiento</p>
          
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
     {
       cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} foto={c.foto} nombre={c.nombre} apellido={c.apellido} /> )
     }  
    </div>

    
  </>
  //Retornar elemento

  //map devuelve un nuermo array
)


export default App;


// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver UN sólo elemento padre
// 3: Apoyarse de los fragment cuando necesito devolver DOS elementos
// 4: Fragment =>  <> HIJOS </>
// 5: img siempre se cierra <img src="ruta imagen" />
// 6: class => className
// 7: atributo for => htmlFor