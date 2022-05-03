import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../../services/link-path/link-path.service';
// CHART
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-top-round-bar';

@Component({
  selector: 'app-environment-dashboard',
  templateUrl: './environment-dashboard.component.html',
  styleUrls: ['./environment-dashboard.component.css']
})
export class EnvironmentDashboardComponent implements OnInit {

  pathUrl:any = '';
  heatChart: any = [];
  pmChart: any = [];
  coChart: any = [];
  tvocChart: any = [];

  constructor(
    public path: LinkPathService) { }

    ngOnInit(): void {
      this.path.setPath('environmentDashboard');
    
      // TOTAL HEAT
      this.heatChart = new Chart('heatChart', { // object name = id html
        type: 'line', 
        data: {
          // labels: ['Temp 1', 'Temp 2', 'Temp 3', 'Temp 4', 'Temp 5', 'Temp 6', 'Temp 7', 'Temp 8', 'Temp 9', 'Temp 10', 'Temp 11', 'Temp 12'],
          // datasets: [{
          //   data: [21, 23, 22, 21, 23, 22, 23, 23, 21, 22, 23, 21],
          //   borderWidth: 0,
          //   backgroundColor: ['#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1'],
          // },
          // {
          //   data: [69, 68, 66, 67, 68, 69, 67, 66, 69, 68, 67, 66],
          //   borderWidth: 0,
          //   backgroundColor: ['#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE'],
          // }] 
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          datasets: [
              {
                label: 'Temperature',
                data: [21, 23, 22, 21, 23, 22, 23, 23, 21, 22, 23, 21],
                borderWidth: 0,
                backgroundColor: 'rgba(91, 120, 250, 0.5)',
              },
              {
                label: 'Humidity',
                data: [69, 68, 66, 67, 68, 69, 67, 66, 69, 68, 67, 66],
                borderWidth: 0,
                backgroundColor: 'rgba(85, 228, 187, 0.5)'
              }]
        },
        options: {
          elements: {
            point:{
              radius: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }]
          },
          legend: {
            display: false,
          },
          title: {
            text: "HEAR",
            display: false
          },
        }
      })
      // END HEAT

      // PM
      this.pmChart = new Chart('pmChart', { // object name = id html
        type: 'line', 
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          datasets: [{
            data: [21, 22, 23, 21, 23, 22, 21, 22, 22, 23, 21, 23],
            borderWidth: 0,
            backgroundColor: ['#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE'],
          }] 
        },
        options: {
          elements: {
            point:{
              radius: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }]
          },
          legend: {
            display: false,
          },
          title: {
            text: "PM",
            display: false
          },
        }
      })
      // END PM

      // CO
      this.coChart = new Chart('coChart', { // object name = id html
        type: 'line', 
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          datasets: [{
            data: [300, 302, 299, 310, 298, 301, 300, 298, 303, 300, 301, 302],
            borderWidth: 0,
            backgroundColor: ['#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE', '#79D2DE'],
          }] 
        },
        options: {
          elements: {
            point:{
              radius: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }]
          },
          legend: {
            display: false,
          },
          title: {
            text: "CO",
            display: false
          },
        }
      })
      // END CO

      // TVOC
      this.tvocChart = new Chart('tvocChart', { // object name = id html
        type: 'line', 
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          datasets: [{
            data: [0.35, 0.36, 0.39, 0.35, 0.32, 0.31, 0.35, 0.36, 0.35, 0.34, 0.35, 0.35],
            borderWidth: 0,
            backgroundColor: ['#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1', '#3F54D1'],
          }] 
        },
        options: {
          elements: {
            point:{
              radius: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }]
          },
          legend: {
            display: false,
          },
          title: {
            text: "TVOC",
            display: false
          },
        }
      })
      // END TVOC


    }

  
  

}
