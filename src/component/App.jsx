import React from 'react';
import "../styles/styles.scss";
//import Curso from "./component/Curso"; //importar el componente curso
import Formulario from './Pages/Formulario';
import Course from './Pages/Course';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //Importamos Router
import MainMenu from './Organisms/MainMenu';
import Home from './Pages/Home';
import Users from './Pages/Users';
import Courses from './Pages/Courses';


//Componente
//Esto es JSX
const App = () => (

  // Los componentes tiene que devolver un ELEMENTO
  <Router>

    <MainMenu />

    <Switch>

      <Route path="/" exact component={Home} />
      <Route path="/cursos/:id" component={Course} />
      <Route path="/cursos" component={Courses} />
      <Route path="/formulario" component={() => <Formulario />} />
      <Route path="/usuario" component={Users}/>
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada</span>
        </div>
      )} />
      
    </Switch>

  </Router>
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