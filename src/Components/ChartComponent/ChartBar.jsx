import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
 
   

  constructor(props) {
    super(props);
    this.state = {
      chartData: {
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
    console.log(this.props.chartLine, "hola")
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={100}
          height={70}
          options={{ scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max: 50
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
