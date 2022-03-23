import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkPathService {

  public path : string = '';
  public energyDashboard = false;
  public energyExplore = false;
  public energyPowerQuality = false;
  public energyPowerQualityAllMeter = false;
  public energyReport = false;
  public energySettingGroupSensor = false;
  public energySettingNotification = false;

  constructor() { }

  setPath(_path: string) {
    if(_path == 'energyDashboard'){
      this.energyDashboard = true;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.path = 'energyDashboard';
    }
    else if(_path == 'energyExplore'){
      this.energyDashboard = false;
      this.energyExplore = true;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.path = 'energyExplore';
    }
    else if(_path == 'energyPowerQuality'){
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = true;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.path = 'energyPowerQuality';
    }
    else if(_path == 'energyPowerQualityAllMeter'){
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = true;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.path = 'energyPowerQualityAllMeter';
    }
    else if(_path == 'energyReport'){
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = true;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.path = 'energyReport';
    }
    else if(_path == 'energySettingGroupSensor'){
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = true;
      this.energySettingNotification = false;
      this.path = 'energySettingGroupSensor';
    }
    else if(_path == 'energySettingNotification'){
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = true;
      this.path = 'energySettingNotification';
    }
    else {
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.path = '';
    }
  }
  
  get pathString(){
    return this.path;
  }

}
