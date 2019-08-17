import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
 
   

  constructor(props) {
    super(props);
    this.state = {
      chartData: {
          min:this.props.chartLine['min'],
          max:this.props.chartLine['max'],
          labels:this.props.chartLine['horas'],
          datasets:[
              {
                  label:this.props.chartLine['dataname1'],
                  data:this.props.chartLine['data1'],
                  backgroundColor:this.props.chartLine['background1'],
              }, 
              {
                label:this.props.chartLine['dataname2'],
                data:this.props.chartLine['data2'],
                backgroundColor:this.props.chartLine['background2'],
            }, 
            
          ]
      }
    };
  }
  render() {
    
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          width={100}
          height={70}
          options={{ scales: {
            yAxes: [
              {
                ticks: {
                  min: this.props.chartLine['min'],
                  max: this.props.chartLine['max'],
                },
                
              }
            ]
          } }}
        />
      </div>
    );
  }
}

export default Chart;
