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
            <Link className="navbar-brand" to='/Home'>
              <span className="menu-collapsed">SF</span>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                
                
              
                <li className="nav-item dropdown d-sm-block d-md-none">
                  <a className="nav-link dropdown-toggle text-secondary " href="#" id="smallerscreenmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu Principal
                  </a>
                  <div className="dropdown-menu" aria-labelledby="smallerscreenmenu">
                      <Link to='/Plan' className="dropdown-item " href="#">Mi Plan</Link>
                      <Link to='/Profile' className="dropdown-item " href="#">Mi Perfil</Link>
                      
                      
                  </div>
                </li>
                <li className="nav-item dropdown d-sm-block d-md-none">
                  <a className="nav-link dropdown-toggle text-secondary" href="#" id="smallerscreenmenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Mi cultivo
                  </a>
                  <div className="dropdown-menu text-primary" aria-labelledby="smallerscreenmenu2">
                      <Link to={'/Task'} className="dropdown-item  " >Pendientes</Link>
                      <Link to='/' className="dropdown-item  " href="#">Agregar/Editar</Link>
                  </div>
                </li>
                <li className="nav-item dropdown d-sm-block d-md-none">
                  <a className="nav-link dropdown-toggle text-secondary" href="#" id="smallerscreenmenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Opciones
                  </a>
                  <div className="dropdown-menu" aria-labelledby="smallerscreenmenu3">
                      <a className="dropdown-item" href="#">Ayuda</a>
                      <Link to='/' className="dropdown-item" href="#">Cerrar sesión</Link>
                      
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