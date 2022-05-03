import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../../services/link-path/link-path.service';
// CHART
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-top-round-bar';

@Component({
  selector: 'app-environment-report',
  templateUrl: './environment-report.component.html',
  styleUrls: ['./environment-report.component.css']
})
export class EnvironmentReportComponent implements OnInit {

  tempHumiChart: any = [];
  pm25Co2Chart: any = [];

  constructor(
    public path: LinkPathService) { }

  ngOnInit(): void {
    this.path.setPath('environmentReport');

    // ENVIRONMENT TEMPERATURE / HUMIDITY
    this.tempHumiChart = new Chart('tempHumiChart', { // object name = id html
      type: 'bar', 
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                 '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                 '21', '22', '23', '24'],
        datasets: [
            {
              label: 'Temperature',
              data: [30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000],
              borderWidth: 0,
              backgroundColor: '#147AD6',
            },
            {
              label: 'Humidity',
              data: [20000, 45000, 25000, 20000, 35000, 25000, 20000, 45000, 25000, 20000, 35000, 25000, 20000, 45000, 25000, 20000, 35000, 25000, 20000, 45000, 25000, 20000, 35000, 25000],
              borderWidth: 0,
              backgroundColor: '#EC6666'
            }]
        },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          // xAxes: [{
          //   barPercentage: 0.5,
          //   categoryPercentage: 1
          // }]
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: '#FFF',
            usePointStyle: true,
            padding: 32
          }
        },
        title: {
          text: "ENVIRONMENT TEMPERATURE / HUMIDITY",
          display: false
        },
      }
    })
    // END ENVIRONMENT TEMPERATURE / HUMIDITY

    // PM 25 
    this.pm25Co2Chart = new Chart('pm25Co2Chart', { // object name = id html
      type: 'bar', 
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                 '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                 '21', '22', '23', '24'],
        datasets: [
            {
              label: 'PM 2.5',
              data: [30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000],
              borderWidth: 0,
              backgroundColor: '#147AD6',
            },
            {
              label: 'CO2',
              data: [20000, 45000, 25000, 20000, 35000, 25000, 20000, 45000, 25000, 20000, 35000, 25000, 20000, 45000, 25000, 20000, 35000, 25000, 20000, 45000, 25000, 20000, 35000, 25000],
              borderWidth: 0,
              backgroundColor: '#EC6666'
            }]
        },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          // xAxes: [{
          //   barPercentage: 0.5,
          //   categoryPercentage: 1
          // }]
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: '#FFF',
            usePointStyle: true,
            padding: 32
          }
        },
        title: {
          text: "PM 25",
          display: false
        },
      }
    })
    // END PM 25
  }

}
