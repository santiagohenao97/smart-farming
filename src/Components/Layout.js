import React from 'react';

import NavBar from "../Components/NavBar/NavBar";
import SideNav from "../Components/NavBar/SideNav";

const Layout = (props) =>{
    return(
        <React.Fragment>
            <div className="container-fluid div-size">
                <div className="container-fluid board pt-1 mt-3">
            <NavBar />
        
          <div className="row">
            <div className="col-2 d-none d-lg-block ">
              <SideNav />
            </div>
            <div className="col-md-10 col-sm-12 text-center mt-3">
                {props.children}
            </div>
          </div>
        </div>
                      
        </div>
        </React.Fragment>
    )

}

export default Layout;