import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Task from '../TaskComponent/todo';

class SideNav extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <div className="row" id="body-row">
 
    <div id="sidebar-container" className="sidebar-expanded d-none d-md-block mt-3">
  
     <ul className="list-group ml-3">
     
         <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
             <small>MENU PRINCIPAL</small>
         </li>
   
         <a href="#submenu1" data-toggle="collapse" aria-expanded="false" className="navigation list-group-item list-group-item-action flex-column align-items-start">
             <div className="d-flex w-100 justify-content-start align-items-center">
                 <span className="fa fa-dashboard fa-fw mr-3"></span> 
                 <span className="menu-collapsed">Mi Tablero</span>
                 <span className="submenu-icon ml-auto"></span>
             </div>
         </a>
       
         <a href="#submenu2" data-toggle="collapse" aria-expanded="false" className="navigation list-group-item list-group-item-action flex-column align-items-start">
             <div className="d-flex w-100 justify-content-start align-items-center">
                 <span className="fa fa-user fa-fw mr-3"></span>
                 <span className="menu-collapsed">Mi cuenta</span>
                 <span className="submenu-icon ml-auto"></span>
             </div>
         </a>
     
         <div id='submenu2' className="collapse sidebar-submenu">
             <a href="#" className="list-group-item list-group-item-action navigation text-white">
                 <span className="menu-collapsed text-dark">Ver perfil</span>
             </a>
             <Link to='/Password' className="list-group-item list-group-item-action navigation text-white">
                 <span className="menu-collapsed text-dark">Cambiar contraseña</span>
             </Link>
         </div>            
         
      
         <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
             <small>MI CULTIVO</small>
         </li>

         <Link to={'/Task'} className="navigation list-group-item list-group-item-action">
             <div className="d-flex w-100 justify-content-start align-items-center">
                 <span className="fa fa-tasks fa-fw mr-3"></span>
                 <span className="menu-collapsed">Pendientes</span>  
             </div>
         </Link>
       
         <a href="#" className="navigation list-group-item list-group-item-action">
             <div className="d-flex w-100 justify-content-start align-items-center">
                 <span className="fa fa-edit fa-fw mr-3"></span>
                 <span className="menu-collapsed">Agregar/Editar </span>
             </div>
         </a>
   
         <li className="list-group-item sidebar-separator menu-collapsed">
         <small>OPCIONES</small>    
        </li>            

         <a href="#" className="navigation list-group-item list-group-item-action">
             <div className="d-flex w-100 justify-content-start align-items-center">
                 <span className="fa fa-question fa-fw mr-3"></span>
                 <span className="menu-collapsed">Ayuda</span>
             </div>
         </a>
         <Link to={'/'} className="navigation list-group-item list-group-item-action d-flex align-items-center">
             <div className="d-flex w-100 justify-content-start align-items-center">
                <span className="fa fa-user fa-fw mr-3"></span>
                 <span className="menu-collapsed">Cerrar sesión</span>
                 <span className="submenu-icon ml-auto"></span>
             </div>
         </Link>
       
           
     </ul>
 </div>
​
 </div>
        </React.Fragment> 
        );
    }
}
 
export default SideNav;