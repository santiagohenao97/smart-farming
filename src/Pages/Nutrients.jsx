import React from 'react';


import Card from '../Components/ControlCardComponent/ControlComponent';
import DataBase from "../Data/Data"


class Nutri extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
            data: DataBase.Nutri,
            dataChart:DataBase.NutriChart  
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
export default Nutri;