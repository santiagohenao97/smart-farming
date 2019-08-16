import React from 'react';


import Card from '../Components/ControlCardComponent/ControlComponent';
import DataBase from "../Data/Data"


class Lum extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
            data: DataBase.Lum,
            dataChart:DataBase.LumChart  
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
export default Lum;