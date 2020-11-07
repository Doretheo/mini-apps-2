import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const Chart = require('chart.js');

class App extends Component {
  constructor() {
    super();
    this.state = {
      timeStamps: '',
      values: '',
    };
    // this.fetchCrypto = this.fetchCrypto.bind(this);
    this.chartConfiguration = this.chartConfiguration.bind(this);
  }

  componentDidMount() {
    this.fetchCrypto();
  }

  fetchCrypto() {
    axios.get(`http://localhost:2000/crypto`)
      .then((res) => res.data)
      .then((data) => {
        const timeStamps = [];
        const values = [];
        data.map((entry) => {
          const { date, value } = entry;
          timeStamps.push(date);
          values.push(value);
        })
        this.setState({
          timeStamps,
          values,
        })
      })
      .catch((err) => console.log(err.stack))
  }

  chartConfiguration() {
    const { timeStamps, values} = this.state;
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: timeStamps,
        datasets: [{
          label: 'Bitcoin values',
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  render() {

    // var myChart = new Chart(ctx, {
    //   type: 'line',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: 'Bitcoin Values',
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: 'rgba(255, 0, 0, 1)',
    //       borderColor: 'rgba(255, 0, 0, 1)',
    //       pointRadius: 0,
    //       fill: false,
    //       lineTension: 0,
    //       borderWidth: 2
    //     }]
    //   },
    //   options: {
    //     animation: {
    //       duration: 0
    //     },
    //     scales: {
    //       // xAxes: [{
    //       //   type: 'time',
    //       //   distribution: 'series',
    //       //   offset: true,
    //       //   ticks: {
    //       //     major: {
    //       //       enabled: true,
    //       //     },
    //       //     source: 'data',
    //       //     autoSkip: true,
    //       //     autoSkipPadding: 75,
    //       //     maxRotation: 0,
    //       //     sampleSize: 100
    //       //   },
    //       // }],
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });
    return (
      <h1>{this.chartConfiguration()}</h1>
    )
  };
};

ReactDOM.render(<App />, document.getElementById('app'));