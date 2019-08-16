import React from 'react';


import Card from '../Components/ControlCardComponent/ControlComponent';
import DataBase from "../Data/Data"


class Pest extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
            data: DataBase.Pest,
            dataChart:DataBase.PestChart  
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
export default Pest;