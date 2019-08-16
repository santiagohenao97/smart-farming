import React from 'react';


import Card from './ControlComponent';

import NavBar from "../NavBar/NavBar";
import SideNav from "../NavBar/SideNav";
import DataBase from "../../Data/Data"


class Temperatura extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
            data: DataBase.Temp,
            dataChart:DataBase.TempChart  
        }
    }
    render() {
        
        return (
            <div className="container">
                <div className="container-fluid  ">
            <NavBar />
        
          <div className="row">
            <div className="col-2">
              <SideNav />
            </div>
            <div className="col-md-10 col-sm-12 text-center">
                <Card card={this.state.data} chart={this.state.dataChart} />
            </div>
          </div>
        </div>
                      
            </div>
            
        );
    }
}
export default Temperatura;