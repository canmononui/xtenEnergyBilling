import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../../../services/link-path/link-path.service';

@Component({
  selector: 'app-energy-setting-group-sensor',
  templateUrl: './energy-setting-group-sensor.component.html',
  styleUrls: ['./energy-setting-group-sensor.component.css']
})
export class EnergySettingGroupSensorComponent implements OnInit {

  groupSensorStatus1:any = true;
  groupSensorStatus2:any = true;

  constructor(
    public path: LinkPathService,) { }

  ngOnInit(): void {
    this.path.setPath('energySettingGroupSensor');
  }

  onClickBtnNoti(number: any){
    if(number == 1) {
      if(this.groupSensorStatus1){
        this.groupSensorStatus1 = false;
      }
      else{
        this.groupSensorStatus1 = true;
      }
    }
    if(number == 2) {
      if(this.groupSensorStatus2){
        this.groupSensorStatus2 = false;
      }
      else{
        this.groupSensorStatus2 = true;
      }
    }
  }

}
