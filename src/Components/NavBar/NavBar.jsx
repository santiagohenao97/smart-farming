import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment> 
            <nav className="navbar navbar-expand-md navbar-dark navigation mt-2">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to='/'>
              <span className="menu-collapsed">SF</span>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                
                
              
                <li className="nav-item dropdown d-sm-block d-md-none">
                  <a className="nav-link dropdown-toggle" href="#" id="smallerscreenmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu Principal
                  </a>
                  <div className="dropdown-menu" aria-labelledby="smallerscreenmenu">
                      <a className="dropdown-item" href="#">Mi Tablero</a>
                      <a className="dropdown-item" href="#">Mi Cuenta</a>
                      <a className="dropdown-item" href="#">Pendientes</a>
                      
                  </div>
                </li>
                <li className="nav-item dropdown d-sm-block d-md-none">
                  <a className="nav-link dropdown-toggle" href="#" id="smallerscreenmenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Mi cultivo
                  </a>
                  <div className="dropdown-menu" aria-labelledby="smallerscreenmenu2">
                      <a className="dropdown-item" href="#">Calendario</a>
                      <a className="dropdown-item" href="#">Editar</a>
                  </div>
                </li>
                <li className="nav-item dropdown d-sm-block d-md-none">
                  <a className="nav-link dropdown-toggle" href="#" id="smallerscreenmenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Opciones
                  </a>
                  <div className="dropdown-menu" aria-labelledby="smallerscreenmenu3">
                      <a className="dropdown-item" href="#">Ayuda</a>
                      <a className="dropdown-item" href="#">Cerrar sesión</a>
                      
                  </div>
                </li>
                
              </ul>
            </div>
          </nav>
​
​

    </React.Fragment>
         );
    }
}
 
export default NavBar;