import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-setting-group-sensor',
  templateUrl: './modal-setting-group-sensor.component.html',
  styleUrls: ['./modal-setting-group-sensor.component.css']
})
export class ModalSettingGroupSensorComponent implements OnInit {

  SensorIdInGroup: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickSelectOption(tagName: any){
    // RETURNS TRUE -> HAVE DATA IN ARRAY || RETURNS FALSE -> DONT HAVE DATA IN ARRAY
    if(this.SensorIdInGroup.includes(tagName) == false){
      this.SensorIdInGroup.push(tagName);
    }
  }

  onClickPopOption(index: any, tagName: any) {
    this.SensorIdInGroup.splice(index, 1);
    // this.optionArray.splice(this.optionArray.indexOf(option), 1);
  }

}
