import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-setting-notification',
  templateUrl: './modal-setting-notification.component.html',
  styleUrls: ['./modal-setting-notification.component.css']
})
export class ModalSettingNotificationComponent implements OnInit {

  radioCheckText:any = "Sensor";
  dropdownSGOption:any = ["Sensor 1", "Sensor 2", "Sensor 3", "Sensor 4"];
  dropdownSGOptionSelect:any = "Sensor 1";
  day:any = [0, 1, 1, 1, 1, 1, 0];
  dropdownParameterOption:any = ["Active_Energy", "Volt_A_N", "Volt_B_N", "Volt_C_N", "Active_Power", "Reactive_Power", "Power_Factor", "Frequency"];
  dropdownParameterOptionSelect:any = "Parameter";
  dropdownOperatorOption:any = ["=", ">=", "<=", ">", "<"];
  dropdownOperatorOptionSelect:any = "Operator";
  // startHrSelect:any = "-";
  // startHrOption:any = ["=", ">=", "<=", ">", "<"];
  // StartMinSelect:any = "-";

  constructor() { }

  ngOnInit(): void {
  }

  onClickRadioCheck(radioNumber:any) {
    if(radioNumber == 1){
      this.radioCheckText = "Sensor";
      this.dropdownSGOptionSelect = "Sensor 1";
      this.dropdownSGOption = ["Sensor 1", "Sensor 2", "Sensor 3", "Sensor 4"];
    }
    else {
      this.radioCheckText = "Group";
      this.dropdownSGOptionSelect = "Group 1";
      this.dropdownSGOption = ["Group 1", "Group 2"];
    }
  }

  onClickDropdownSGOption(dropdownOption:any){
    this.dropdownSGOptionSelect = dropdownOption;
  }

  onClickDropdownParameterOption(dropdownOption:any){
    this.dropdownParameterOptionSelect = dropdownOption;
  }

  onClickDropdownOperatorOption(dropdownOption:any){
    console.log(dropdownOption)
    this.dropdownOperatorOptionSelect = dropdownOption;
  }

  onClickSelecDay(index:any) {
    if(this.day[index] == 1){
      this.day[index] = 0;
    }
    else {
      this.day[index] = 1;
    }
  }

}
