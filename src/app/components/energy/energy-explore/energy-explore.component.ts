import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LinkPathService } from '../../../services/link-path.service';
// CHART
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-top-round-bar';

@Component({
  selector: 'app-energy-explore',
  templateUrl: './energy-explore.component.html',
  styleUrls: ['./energy-explore.component.css']
})
export class EnergyExploreComponent implements OnInit {

  public leftSideBarDisplay = true;
  public waittingSearch = true;
  public valueSensorTree: any = [{
          "id": 1,
          "sensor_id": 1,
          "name": "AHU",
          "type": "mdb",
          "location": "mdb floor 1",
          "under_sensor": null,
          "dropdownSelect": "ตัวเลือก",
          "listUnderSensors": [
              {
                  "id": 5,
                  "sensor_id": 5,
                  "name": "Aircon floor1",
                  "type": "meter",
                  "location": "floor 1",
                  "under_sensor": 1,
                  "dropdownSelect": "ตัวเลือก",
              },
              {
                  "id": 9,
                  "sensor_id": 9,
                  "name": "Aircon floor2",
                  "type": "meter",
                  "location": "floor 2",
                  "under_sensor": 1,
                  "dropdownSelect": "ตัวเลือก",
              }
          ]
      },
      {
          "id": 2,
          "sensor_id": 2,
          "name": "Pump",
          "type": "mdb",
          "location": "mdb floor 1",
          "under_sensor": null,
          "dropdownSelect": "ตัวเลือก",
          "listUnderSensors": [
              {
                  "id": 6,
                  "sensor_id": 6,
                  "name": "Pump floor1",
                  "type": "meter",
                  "location": "floor 1",
                  "under_sensor": 2,
                  "dropdownSelect": "ตัวเลือก",
              },
              {
                  "id": 10,
                  "sensor_id": 10,
                  "name": "Pump floor2",
                  "type": "meter",
                  "location": "floor 2",
                  "under_sensor": 2,
                  "dropdownSelect": "ตัวเลือก",
              }
          ]
      },
      {
          "id": 3,
          "sensor_id": 3,
          "name": "Lighting",
          "type": "mdb",
          "location": "mdb floor 2",
          "under_sensor": null,
          "dropdownSelect": "ตัวเลือก",
          "listUnderSensors": [
              {
                  "id": 7,
                  "sensor_id": 7,
                  "name": "Lighting floor1",
                  "type": "meter",
                  "location": "floor 1",
                  "under_sensor": 3,
                  "dropdownSelect": "ตัวเลือก",
              },
              {
                  "id": 11,
                  "sensor_id": 11,
                  "name": "Lighting floor2",
                  "type": "meter",
                  "location": "floor 2",
                  "under_sensor": 3,
                  "dropdownSelect": "ตัวเลือก",
              }
          ]
      },
      {
          "id": 4,
          "sensor_id": 4,
          "name": "Plug",
          "type": "mdb",
          "location": "mdb floor 2",
          "under_sensor": null,
          "dropdownSelect": "ตัวเลือก",
          "listUnderSensors": [
              {
                  "id": 8,
                  "sensor_id": 8,
                  "name": "Plug floor1",
                  "type": "meter",
                  "location": "floor 1",
                  "under_sensor": 4,
                  "dropdownSelect": "ตัวเลือก",
              },
              {
                  "id": 12,
                  "sensor_id": 12,
                  "name": "Plug floor2",
                  "type": "meter",
                  "location": "floor 2",
                  "under_sensor": 4,
                  "dropdownSelect": "ตัวเลือก",
              }
          ]
      }
  ];
  // public valueSensorTree: any = [];
  public valueParameterMdb: any;
  public valueParameterMeter: any;
  public selectParameterMdb:any = [];
  public selectParameterMeter:any = [];
  chartA: any = [];

  constructor(
    private http: HttpClient,
    public path: LinkPathService,) { }

  ngOnInit(): void {
    this.path.setPath('energyExplore');
    // this.getSensorTree();
    this.getParameterMdb();
    this.getParameterMeter();
    this.genChart();
  }

  getSensorTree() {
    // GET VALUE OPTION MDN
    const url = "http://103.13.231.185:8080/api/v1/search_public_sensorTreeDiagram";
    const headers = new HttpHeaders({"Content-Type": "application/json"});
    this.http.get<any>( url, { headers } ).subscribe(data => {
      // console.log(data.meta.response_data);
      this.valueSensorTree = data.meta.response_data;
      this.getParameterMdb();
      this.getParameterMeter();
    },
    error => {
      console.error(error);
    })
  }

  getParameterMdb() {
    // GET VALUE OPTION MDN
    const url = "http://103.13.231.185:8080/api/v1/search_public_parameterMdb";
    const headers = new HttpHeaders({"Content-Type": "application/json"});
    this.http.get<any>( url, { headers } ).subscribe(data => {
      // console.log(data.meta.response_data);
      this.valueParameterMdb = data.meta.response_data;
      this.selectParameterMdb = data.meta.response_data;
      this.valueSensorTree.forEach((data: any) => {
        data = {
          id: data.listUnderSensors,
          sensor_id: data.listUnderSensors,
          name: data.listUnderSensors,
          type: data.listUnderSensors,
          location: data.listUnderSensors,
          under_sensor:  data.listUnderSensors,
          listUnderSensors: data.listUnderSensors,
          dropdownSelect: this.selectParameterMdb[0]
        }
      })
      // console.log(this.valueSensorTree)
    },
    error => {
      console.error(error);
    })
  }

  getParameterMeter() {
    // GET VALUE OPTION MDN
    const url = "http://103.13.231.185:8080/api/v1/search_public_parameterMeter";
    const headers = new HttpHeaders({"Content-Type": "application/json"});
    this.http.get<any>( url, { headers } ).subscribe(data => {
      // console.log(data.meta.response_data);
      this.valueParameterMeter = data.meta.response_data;
      this.selectParameterMeter = data.meta.response_data;
      // this.valueSensorTree.forEach((data: any) => {
      //   data.listUnderSensors.forEach((_data: any) => {
      //     _data = {
      //       id: _data.id,
      //       sensor_id: _data.sensor_id,
      //       name: _data.name,
      //       type: _data.type,
      //       location: _data.location,
      //       under_sensor: _data.under_sensor,
      //       dropdownSelect: this.selectParameterMeter[0]
      //     }
      //   })
      // })
      // console.log(this.valueSensorTree)
    },
    error => {
      console.error(error);
    })
  }

  onParameterMdb(indexI:any, data: any) {
    this.valueSensorTree[indexI].dropdownSelect = data;
  }

  onParameterMeter(indexI:any, indexJ:any, data: any) {
    this.valueSensorTree[indexI].listUnderSensors[indexJ].dropdownSelect = data;
  }

  onClickGraphABtn() {
    this.leftSideBarDisplay = true;
  }
  
  onClickCloseBtn() {
    this.leftSideBarDisplay = false;
    this.waittingSearch = false;
  }

  genChart() {
    // CHART A
    this.chartA = new Chart('chartA', { // object name = id html
      type: 'bar', 
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                 '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                 '21', '22', '23', '24'],
        datasets: [
            {
              label: 'To Day',
              data: [30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000, 30000, 50000, 75000, 25000, 55000, 60000],
              borderWidth: 0,
              backgroundColor: '#147AD6',
            },
            {
              label: 'Yesterday',
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
          xAxes: [{
            labels: ["2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00", "2022-03-16 20:00:00"],
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
          text: "CHART A",
          display: false
        },
      }
    })
    // END CHART A
  }

}
