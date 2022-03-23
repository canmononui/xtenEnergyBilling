import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LinkPathService } from '../../../services/link-path.service';

@Component({
  selector: 'app-energy-power-quality',
  templateUrl: './energy-power-quality.component.html',
  styleUrls: ['./energy-power-quality.component.css']
})
export class EnergyPowerQualityComponent implements OnInit {

  public valuePowerQ: any = [];
  public valueDisplay: any;
  public valueOptionMDB: any = [];
  public selectFloor: any = "";
  public optionFloor: any = ["Floor 1", "Floor 2"];
  public selectOptionMDB: any = "";
  public optionMDB: any = [];

  constructor(
    private http: HttpClient,
    public path: LinkPathService,
  ) { }

  ngOnInit(): void {
    // SET PATH
    this.path.setPath('energyPowerQuality');
    this.getOptiondropdown();
    this.getPowerQ();
    this.selectFloor(0);
  }

  getOptiondropdown() {
    // GET VALUE OPTION MDN
    const url = "http://103.13.231.185:8080/api/v1/search_public_sensorMDB";
    const headers = new HttpHeaders({"Content-Type": "application/json"});
    this.http.get<any>( url, { headers } ).subscribe(data => {
      // console.log(data.meta.response_data);
      data.meta.response_data.forEach((data: any) => {
        this.valueOptionMDB.push({
          sensor_id: data.sensor_id,
          name: data.name
        });
      })
      this.selectOptionMDB = this.valueOptionMDB[0].name;
      this.selectFloor = this.optionFloor[0];
      // this.selectOptionMDB = this.valueOptionMDB[0].name;
      // this.setOptionMDB(0)
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
