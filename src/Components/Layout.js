import React from 'react';

import NavBar from "../Components/NavBar/NavBar";
import SideNav from "../Components/NavBar/SideNav";

const Layout = (props) =>{
    return(
        <React.Fragment>
            <div className="container-fluid background">
                <div className="container-fluid board ">
            <NavBar />
        
          <div className="row">
            <div className="col-2">
              <SideNav />
            </div>
            <div className="col-md-10 col-sm-12 text-center">
                {props.children}
            </div>
          </div>
        </div>
                      
        </div>
        </React.Fragment>
    )

}

export default Layout;