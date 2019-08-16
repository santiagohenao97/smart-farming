import React from 'react';


import Card from '../Components/ControlCardComponent/ControlComponent';
import DataBase from "../Data/Data"


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
            <>
                <Card card={this.state.data} chart={this.state.dataChart} />
            </>
           
        );
    }
}
export default Temperatura;