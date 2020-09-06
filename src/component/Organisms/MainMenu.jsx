import React,{createRef} from 'react';
import { Link, NavLink } from 'react-router-dom';

const menu = createRef();
//esto es como un => document.getElementById("toggle");
const toggleMenu = () => menu.current.classList.toggle('show'); 

const MainMenu = () => (

    <header className="main-header" >
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <Link to="/">
                    <img className="main-logo" src="https://vignette.wikia.nocookie.net/leagueoflegendsoficial/images/8/8c/LOL_Logo.png/revision/latest/scale-to-width-down/340?cb=20180119195439&path-prefix=es" alt="logo lol"/>
                </Link>         
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <nav className="main-menu" id="main-menu" ref={menu}>
                    <ul >
                        <li> <NavLink exact to="/" activeClassName="activo">Home</NavLink></li>
                        <li> <NavLink to="/cursos" activeClassName="activo">Cursos</NavLink></li>
                        <li><NavLink to="/formulario" activeClassName="activo">Formulario</NavLink></li>
                        <li><NavLink to="/usuario" activeClassName="activo">Usuario</NavLink></li>
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l" id="main-menu-toggle" onClick={() => toggleMenu()}></div>
            </div>
        </div>
    </header>
)

export default MainMenu