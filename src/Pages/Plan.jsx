import React, { Component } from 'react';
import DataBase from "../Data/Data"
import { Link } from "react-router-dom";

import ChartBar from '../Components/ChartComponent/ChartBar'
import ChartLine from '../Components/ChartComponent/ChartLine'
import ChartPie from '../Components/ChartComponent/ChartPie'

class Plan extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            
            dataChartBar:DataBase.PlanChart,
            dataChartPie:DataBase.PlanChartPie,
            dataChartLine:DataBase.PlanChartLine,

        }
    }
    render() { 
        return ( 
            <>
            <div className="container-fluid text-center mb-2">
                
                <div className="row p-0">
                    
                    <div className="col-lg-8 col-sm-12">
                        <h3>Mi Tablero</h3>
                        <h5>Consumo de recursos</h5><br/>
                        <ChartBar chartBar={this.state.dataChartBar}/>
                        
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h5>Distribución del cultivo</h5>
                        <ChartPie chartPie={this.state.dataChartPie}/><br/>
                        <h5>Rendimiento</h5>
                        <ChartLine chartLine={this.state.dataChartLine}/>

                    </div>

                </div>
                <div className="row p-0">
                    <div className="col-lg-8 col-sm-12">
                    <Link to={"/Home"}>
                <button className="btn btn-outline-success">Volver a Home</button>
              </Link>
                    </div>
                    

                </div>
                
            </div>
                
            </>
         );
    }
}
 
export default Plan;