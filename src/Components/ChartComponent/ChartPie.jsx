import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
 
   

  constructor(props) {
    super(props);
    this.state = {
      chartData: {
          labels:this.props.chartPie['horas'],
          datasets:[
              {
                  label:this.props.chartPie['dataname1'],
                  data:this.props.chartPie['data1'],
                  backgroundColor:this.props.chartPie['background1'],
              }, 
              
          ]
      }
    };
  }
  render() {
    
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          width={100}
          height={45}
          
        />
      </div>
    );
  }
}

export default Chart;
