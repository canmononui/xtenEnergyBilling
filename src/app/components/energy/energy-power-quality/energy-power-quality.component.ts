import { Component, OnInit } from '@angular/core';
// CHART
import { Chart } from 'chart.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LinkPathService } from '../../../services/link-path/link-path.service';

@Component({
  selector: 'app-energy-power-quality',
  templateUrl: './energy-power-quality.component.html',
  styleUrls: ['./energy-power-quality.component.css']
})
export class EnergyPowerQualityComponent implements OnInit {

  public valuePowerQ: any = [];
  public valueDisplay: any;
  public valueOptionLocation: any = [];
  public valueOptionMDB: any = [];
  public selectFloor: any = "";
  public optionFloor: any = ["Floor 1", "Floor 2"];
  public selectOptionLocation: any = "";
  public selectOptionMDB: any = "";
  public optionMDB: any = [];
  public voltageLine2LineChart: any = [];
  public unbalanceVoltageChart: any = [];
  public frequencyChart: any = [];
  public currentChart: any = [];
  public powerQualityChart: any = [];
  public PowerFacQChart: any = [];
  public totalHarDisVoltChart: any = [];
  public totalHarDisCurChart: any = [];
  public totalHarDisChart: any = [];

  constructor(
    private http: HttpClient,
    public path: LinkPathService,
  ) { }

  ngOnInit(): void {
    // SET PATH
    this.path.setPath('energyPowerQuality');

    // VOLTAGE LINE TO LINE
    this.voltageLine2LineChart = new Chart('voltageLine2LineChart', { // object name = id html
      type: 'line', 
      data: {
        labels: [386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,],
        datasets: [{
          data: [386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,],
          label: 'Voltage line to line',
          borderWidth: 0,
          backgroundColor: ['#79D2DE'],
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
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 32
          }
        },
        title: {
          text: "VOLTAGE LINE TO LINE",
          display: false
        },
      }
    })
    // END VOLTAGE LINE TO LINE

    // UNBALANCE VOLTAGE
    this.unbalanceVoltageChart = new Chart('unbalanceVoltageChart', { // object name = id html
      type: 'line', 
      data: {
        labels: [386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,],
        datasets: [{
          data: [386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,],
          label: 'Unbalance Voltage',
          borderWidth: 0,
          backgroundColor: ['#79D2DE'],
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
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 32
          }
        },
        title: {
          text: "UNBALANCE VOLTAGE",
          display: false
        },
      }
    })
    // END UNBALANCE VOLTAGE

    // FREQUENCY
    this.frequencyChart = new Chart('frequencyChart', { // object name = id html
      type: 'line', 
      data: {
        labels: [50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,],
        datasets: [{
          data: [50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,],
          label: 'Frequency',
          borderWidth: 0,
          backgroundColor: ['#79D2DE'],
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
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 32
          }
        },
        title: {
          text: "FREQUENCY",
          display: false
        },
      }
    })
    // END FREQUENCY

    // CURRENT
    this.currentChart = new Chart('currentChart', { // object name = id html
      type: 'line', 
      data: {
        labels: [386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,],
        datasets: [{
          data: [386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,
                386, 404, 400, 386, 404, 386, 404, 386, 386, 400, 386, 404,],
          label: 'Current',
          borderWidth: 0,
          backgroundColor: ['#79D2DE'],
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
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 32
          }
        },
        title: {
          text: "CURRENT",
          display: false
        },
      }
    })
    // END CURRENT

    // POWER QUALITY
    this.powerQualityChart = new Chart('powerQualityChart', { // object name = id html
      type: 'line', 
      data: {
        labels: [50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,],
        datasets: [{
          data: [50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,],
          label: 'Power Quality',
          borderWidth: 0,
          backgroundColor: ['#79D2DE'],
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
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 32
          }
        },
        title: {
          text: "POWER QUALITY",
          display: false
        },
      }
    })
    // END POWER QUALITY

    // POWER FACTOR QUALITY
    this.PowerFacQChart = new Chart('PowerFacQChart', { // object name = id html
      type: 'line', 
      data: {
        labels: [50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,],
        datasets: [{
          data: [50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,
                50, 49, 46, 48, 47, 49, 50, 50, 47, 50, 47, 49,],
          label: 'Power Factor Quality',
          borderWidth: 0,
          backgroundColor: ['#79D2DE'],
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
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 32
          }
        },
        title: {
          text: "POWER FACTOR QUALITY",
          display: false
        },
      }
    })
    // END POWER FACTOR QUALITY

    // TOTAL HAR DIS VOLT
    this.totalHarDisVoltChart = new Chart('totalHarDisVoltChart', { // object name = id html
      type: 'line', 
      data: {
        labels: [7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,],
        datasets: [{
          data: [7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,],
          label: 'Total Harmonic Distortion Voltage',
          borderWidth: 0,
          backgroundColor: ['#79D2DE'],
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
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 32
          }
        },
        title: {
          text: "TOTAL HAR DIS VOLT",
          display: false
        },
      }
    })
    // END TOTAL HAR DIS VOLT

    // TOTAL HAR DIS CUR
    this.totalHarDisCurChart = new Chart('totalHarDisCurChart', { // object name = id html
      type: 'line', 
      data: {
        labels: [7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,],
        datasets: [{
          data: [7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,],
          label: 'Total Harmonic Distortion Current',
          borderWidth: 0,
          backgroundColor: ['#79D2DE'],
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
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 32
          }
        },
        title: {
          text: "TOTAL HAR DIS CUR",
          display: false
        },
      }
    })
    // END TOTAL HAR DIS CUR

    // TOTAL HAR DIS
    this.totalHarDisChart = new Chart('totalHarDisChart', { // object name = id html
      type: 'line', 
      data: {
        labels: [7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,],
        datasets: [{
          data: [7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,
                7, 6, 6, 5, 6, 7, 7, 6, 5, 6, 7, 6,],
          label: 'Total Harmonic Distortion',
          borderWidth: 0,
          backgroundColor: ['#79D2DE'],
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
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 32
          }
        },
        title: {
          text: "TOTAL HAR DIS",
          display: false
        },
      }
    })
    // END TOTAL HAR DIS

    this.getOptiondropdown();
    this.getPowerQ();
    this.selectFloor(0);
  }

  getOptiondropdown() {
    // GET VALUE OPTION MDN
    const url = "http://103.13.231.185:8080/api/v1/search_public_sensorMDB";
    const headers = new HttpHeaders({"Content-Type": "application/json"});
    this.http.get<any>( url, { headers } ).subscribe(data => {
      console.log(data.meta.response_data);

      data.meta.response_data.forEach((data: any) => {
        this.valueOptionLocation.push({
          location: data.location
        });
        this.valueOptionMDB.push({
          sensor_id: data.sensor_id,
          name: data.name
        });
      })
      this.selectOptionLocation = this.valueOptionLocation[0].location;
      this.selectOptionMDB = this.valueOptionMDB[0].name;
      this.selectFloor = this.optionFloor[0];
      // this.selectOptionMDB = this.valueOptionMDB[0].name;
      // this.setOptionMDB(0)
      // console.log(this.valueOptionMDB)
    },
    error => {
      console.error(error);
    })
  }

  getPowerQ() {
    // GET VALUE POWER QUALITY
    const url = "http://103.13.231.185:8080/api/v1/power_quality";
    const headers = new HttpHeaders({"Content-Type": "application/json"});
    this.http.get<any>( url, { headers } ).subscribe(data => {
      // console.log(data.meta.response_data);
      this.valuePowerQ = data.meta.response_data;
      // SET DATA AT FIRST ADDRESS
      this.valueDisplay = data.meta.response_data[0];
    },
    error => {
      console.error(error);
    })
  }

  onSelectFloor(index: any, name: any){
    // SET SELECT FLOOR
    this.selectFloor = name;

    // SET SELECT MDB
    // if(index == 0){
    //   valueOptionMDB
    // }
    // else {

    // }
    // SET OPTION MDB

    // this.valuePowerQ.forEach((data: any) => {
    //   if(sensor_id == data.sensor_id){
    //     this.valueDisplay = data;
    //   }
    // })
  }

  setOptionMDB(index: any) {

  }

  onSelectMDB(sensor_id: any, name:any){
    this.selectOptionMDB = name;
    this.valuePowerQ.forEach((data: any) => {
      if(sensor_id == data.sensor_id){
        this.valueDisplay = data;
      }
    })
  }

}
