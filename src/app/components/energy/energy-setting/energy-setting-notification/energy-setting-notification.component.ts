import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../../../services/link-path.service';

@Component({
  selector: 'app-energy-setting-notification',
  templateUrl: './energy-setting-notification.component.html',
  styleUrls: ['./energy-setting-notification.component.css']
})
export class EnergySettingNotificationComponent implements OnInit {

  notificationStatus1:any = true;
  notificationStatus2:any = true;

  constructor(
    public path: LinkPathService,) { }

  ngOnInit(): void {
    this.path.setPath('energySettingNotification');
  }

  onClickBtnNoti(number: any){
    if(number == 1) {
      if(this.notificationStatus1){
        this.notificationStatus1 = false;
      }
      else{
        this.notificationStatus1 = true;
      }
    }
    if(number == 2) {
      if(this.notificationStatus2){
        this.notificationStatus2 = false;
      }
      else{
        this.notificationStatus2 = true;
      }
    }
  }

}
