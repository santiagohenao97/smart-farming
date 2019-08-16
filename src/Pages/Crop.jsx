import React from 'react';


import Card from '../Components/ControlCardComponent/ControlComponent';
import DataBase from "../Data/Data"


class Crop extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
            data: DataBase.Crop,
            dataChart:DataBase.CropChart  
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
export default Crop;