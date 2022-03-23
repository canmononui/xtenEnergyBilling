import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LinkPathService } from '../../../services/link-path.service';
// CHART
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-top-round-bar';

@Component({
  selector: 'app-energy-report',
  templateUrl: './energy-report.component.html',
  styleUrls: ['./energy-report.component.css']
})
export class EnergyReportComponent implements OnInit {

  compareEnergyTHBChart: any = [];
  proportionEnergyUseChart: any = [];
  energyUse5MonthChart: any = [];

  constructor(
    private http: HttpClient,
    public path: LinkPathService,
  ) { }

  ngOnInit(): void {
    this.path.setPath('energyReport');

    // ENERGY USAGE SUMMARY
    this.compareEnergyTHBChart = new Chart('compareEnergyTHBChart', { // object name = id html
      type: 'bar', 
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                 '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                 '21', '22', '23', '24'],
        datasets: [
            {
              label: 'การใช้งานปัจจุบัน',
              data: [30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000],
              borderWidth: 0,
              backgroundColor: '#147AD6',
            },
            {
              label: 'การใช้งานเดือนที่แล้ว',
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
          text: "Energy Usage Summary",
          display: false
        },
      }
    })
    // END ENERGY USAGE SUMMARY

    // PROPORTION ENERGY USE
    this.proportionEnergyUseChart = new Chart('proportionEnergyUseChart', { // object name = id html
      type: 'doughnut', 
      data: {
        labels: ['Air', 'Lighting', 'Plug', 'Lift', 'EV Charge', 'Water pump', 'Other'],
        datasets: [{
          data: [62.7, 10.6, 7.2, 5.6, 4.0, 1.9, 7.6],
          borderWidth: 0,
          backgroundColor: ['#147AD6', '#EF706F', '#83D8E3', '#79D2DE', '#5B78FA', '#EC6666', '#FFFFFF'],
        }] 
      },
      options: {
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
          text: "PROPORTION ENERGY USE",
          display: false
        },
      }
    })
    // END PROPORTION ENERGY USE

    // ENERGY USE 5 MONTH
    this.energyUse5MonthChart = new Chart('energyUse5MonthChart', { // object name = id html
      type: 'bar', 
      data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
              label: '2022',
              data: [8, 9, 10, 8, 10, 9],
              borderWidth: 0,
              backgroundColor: '#147AD6',
            },
            {
              label: '2021',
              data: [10, 10, 9, 8, 9, 9],
              borderWidth: 0,
              backgroundColor: '#EF706F'
            },
            {
              label: '2020',
              data: [8, 10, 9, 9, 10, 8],
              borderWidth: 0,
              backgroundColor: '#83D8E3'
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
          text: "Energy Usage Summary",
          display: false
        },
      }
    })
    // END ENERGY USE 5 MONTH

  }

}
