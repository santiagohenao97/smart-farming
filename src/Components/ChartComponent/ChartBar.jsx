import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: this.props.chartBar["horas"],
        datasets: [
          {
            label: this.props.chartBar["dataname1"],
            data: this.props.chartBar["data1"],
            backgroundColor: this.props.chartBar["background1"]
          },
          {
            label: this.props.chartBar["dataname2"],
            data: this.props.chartBar["data2"],
            backgroundColor: this.props.chartBar["background2"]
          },
         
          
        ]
      }
    };
  }
  render() {
    
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={100}
          height={55}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: this.props.chartBar['min'],
                    max: this.props.chartBar['max']
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
