import React, { Component } from 'react';
import DataBase from "../Data/Data"

import ChartBar from '../Components/ChartComponent/ChartBar'
import ChartLine from '../Components/ChartComponent/ChartLine'
import ChartPie from '../Components/ChartComponent/ChartPie'

class Plan extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            
            dataChart:DataBase.PestChart   
        }
    }
    render() { 
        return ( 
            <>
            <div className="container-fluid text-center mb-2">
                <div className="row p-0 text-center">
                    <h1>Mis indicadores</h1>
                </div>
                
                <div className="row p-0">
                    <div className="col-8">
                        <ChartLine chartLine={this.state.dataChart}/>
                    </div>
                    <div className="col-4">
                        <ChartPie chartLine={this.state.dataChart}/>
                        <ChartBar chartLine={this.state.dataChart}/>

                    </div>

                </div>
                <div className="row p-0">
                    <div className="col-5">
                        
                    </div>
                    

                </div>
                
            </div>
                
            </>
         );
    }
}
 
export default Plan;