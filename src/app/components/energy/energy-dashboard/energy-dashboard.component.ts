import { Component, OnInit } from '@angular/core';
// CHART
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-top-round-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LinkPathService } from '../../../services/link-path/link-path.service';

@Component({
  selector: 'app-energy-dashboard',
  templateUrl: './energy-dashboard.component.html',
  styleUrls: ['./energy-dashboard.component.css']
})
export class EnergyDashboardComponent implements OnInit {
 
  totalEnergyUseChart: any = [];
  onPeakChart: any = [];
  offPeakChart: any = [];
  peakDemand: any = [];
  energyUseSumChartDay: any = [];
  energyUseSumChartWeek: any = [];
  energyUseSumChartMonth: any = [];
  energyUseSumChartYear: any = [];
  energyDisChart: any = [];
  preElecChart: any = [];
  type:any = 'line';
  eusBtn:any = 1;

  constructor(
    private http: HttpClient,
    public path: LinkPathService,
  ) { }

  ngOnInit(): void {

    this.path.setPath('energyDashboard');

    // TOTAL ENERGY USAGE
    this.totalEnergyUseChart = new Chart('totalEnergyUseChart', { // object name = id html
      type: this.type, 
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
          data: [55, 66, 59, 65, 72, 71, 55, 66, 59, 65, 76, 75],
          borderWidth: 0,
          backgroundColor: ['#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666'],
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
            display: false,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            display: false,
          }]
        },
        legend: {
          display: false,
        },
        title: {
          text: "TOTAL ENERGY USAGE",
          display: false
        },
      }
    })
    // END TOTAL ENERGY USAGE

    // ON-PEAK
    this.onPeakChart = new Chart('onPeakChart', { // object name = id html
      type: 'line', 
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
          data: [65, 56, 56, 63, 72, 66, 55, 66, 66, 65, 76, 69],
          borderWidth: 0,
          backgroundColor: ['#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666'],
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
            display: false,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            display: false,
          }]
        },
        legend: {
          display: false,
        },
        title: {
          text: "TOTAL ENERGY USAGE",
          display: false
        },
      }
    })
    // END ON-PEAK

    // OFF-PEAK
    this.offPeakChart = new Chart('offPeakChart', { // object name = id html
      type: 'line', 
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
          data: [55, 66, 56, 73, 72, 76, 55, 66, 76, 65, 64, 69],
          borderWidth: 0,
          backgroundColor: ['#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666', '#EC6666'],
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
            display: false,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            display: false,
          }]
        },
        legend: {
          display: false,
        },
        title: {
          text: "TOTAL ENERGY USAGE",
          display: false
        },
      }
    })
    // END OFF-PEAK

    // PEAK DEMAND
    this.peakDemand = new Chart('peakDemand', { // object name = id html
      type: 'line', 
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
          data: [66, 64, 66, 63, 72, 76, 63, 66, 76, 63, 64, 63],
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
            display: false,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            display: false,
          }]
        },
        legend: {
          display: false,
        },
        title: {
          text: "TOTAL ENERGY USAGE",
          display: false
        },
      }
    })
    // END PEAK DEMAND

    // ENERGY DISTRIBUTION
    this.energyDisChart = new Chart('energyDisChart', { // object name = id html
      type: 'doughnut', 
      data: {
        labels: ['Air', 'Machine', 'Other'],
        datasets: [{
          data: [70, 20, 10],
          borderWidth: 0,
          backgroundColor: ['#147AD6', '#EF706F', '#83D8E3'],
        }] 
      },
      options: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 32
          }
        },
        title: {
          text: "ENERGY DISTRIBUTION",
          display: false
        },
      }
    })
    // END ENERGY DISTRIBUTION

    // PREVIOUS ELECTRICITY
    this.preElecChart = new Chart('preElecChart', { // object name = id html
      type: 'bar', 
      // data: {
      //   labels: ['2022', '2021', '2020'],
      //   datasets: [{
      //     data: [320, 490, 380],
      //     borderWidth: 0,
      //     backgroundColor: ['#147AD6', '#EF706F', '#83D8E3'],
      //   }] 
      // },
      data: {
        labels: ['2022', '2021', '2020'],
        datasets: [{
          label: 'Previous Electricity',
          data: [320, 490, 380],
          backgroundColor: ['#147AD6', '#EF706F', '#83D8E3'],
          borderWidth: 0
        }]
      },
      options: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 32
          }
        },
        title: {
          text: "PREVIOUS ELECTRICITY",
          display: false
        },
      }
    })
    // END PREVIOUS ELECTRICITY

    // ENERGY USAGE SUMMARY DAY
    this.energyUseSumChartDay = new Chart('energyUseSumChartDay', { // object name = id html
      type: 'bar', 
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                 '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                 '21', '22', '23'],
        datasets: [
            {
              label: 'To Day',
              data: [30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000],
              borderWidth: 0,
              backgroundColor: '#147AD6',
            },
            {
              label: 'Yesterday',
              data: [20000, 45000, 25000, 20000, 35000, 25000, 20000, 45000, 25000, 20000, 35000, 25000, 20000, 45000, 25000, 20000, 35000, 25000, 20000, 45000, 25000, 20000, 35000],
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
          xAxes: [{
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                 '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                 '21', '22', '23'],
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
          text: "Energy Usage Summary Day",
          display: false
        },
      }
    })
    // END ENERGY USAGE SUMMARY DAY

    // ENERGY USAGE SUMMARY WEEK
    this.energyUseSumChartWeek = new Chart('energyUseSumChartWeek', { // object name = id html
      type: 'bar', 
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
              label: 'This Week',
              data: [45000, 55000, 45000, 40000, 50000, 20000, 25000],
              borderWidth: 0,
              backgroundColor: '#147AD6',
            },
            {
              label: 'Last Week',
              data: [50000, 45000, 65000, 50000, 45000, 25000, 20000],
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
          xAxes: [{
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
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
          text: "Energy Usage Summary Week",
          display: false
        },
      }
    })
    // END ENERGY USAGE SUMMARY WEEK
    
    // ENERGY USAGE SUMMARY MONTH
    this.energyUseSumChartMonth = new Chart('energyUseSumChartMonth', { // object name = id html
      type: 'bar', 
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                 '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                 '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [
            {
              label: 'This Month',
              data: [30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000],
              borderWidth: 0,
              backgroundColor: '#147AD6',
            },
            {
              label: 'Last Month',
              data: [20000, 45000, 25000, 20000, 35000, 25000, 20000, 45000, 25000, 20000, 35000, 25000, 20000, 45000, 25000, 20000, 35000, 25000, 20000, 45000, 25000, 20000, 35000, 20000, 35000, 25000, 20000, 45000, 25000, 20000, 35000],
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
          xAxes: [{
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                 '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                 '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
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
          text: "Energy Usage Summary Month",
          display: false
        },
      }
    })
    // END ENERGY USAGE SUMMARY MONTH

    // ENERGY USAGE SUMMARY YEAR
    this.energyUseSumChartYear = new Chart('energyUseSumChartYear', { // object name = id html
      type: 'bar', 
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
              label: 'This Year',
              data: [55000, 60000, 30000, 50000, 55000, 25000, 55000, 60000, 30000, 50000, 55000, 25000],
              borderWidth: 0,
              backgroundColor: '#147AD6',
            },
            {
              label: 'Last Year',
              data: [20000, 45000, 25000, 20000, 35000, 25000, 25000, 20000, 45000, 25000, 20000, 35000],
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
          xAxes: [{
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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
          text: "Energy Usage Summary Year",
          display: false
        },
      }
    })
    // END ENERGY USAGE SUMMARY YEAR
  }

  onClickEusBtn(col:any) {
    this.eusBtn = col;
  }

}
