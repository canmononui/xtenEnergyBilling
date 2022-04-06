import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkPathService {

  public path : string = '';
  public login = false;
  public energyDashboard = false;
  public energyExplore = false;
  public energyPowerQuality = false;
  public energyPowerQualityAllMeter = false;
  public energyReport = false;
  public energySettingGroupSensor = false;
  public energySettingNotification = false;

  public environmentDashboard = false;
  public environmentReport = false;

  constructor() { }

  setPath(_path: string) {
    if(_path == 'login'){
      this.login = true;
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.environmentDashboard = false;
      this.environmentReport = false;
      this.path = 'login';
    }
    else if(_path == 'energyDashboard'){
      this.login = false;
      this.energyDashboard = true;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.environmentDashboard = false;
      this.environmentReport = false;
      this.path = 'energyDashboard';
    }
    else if(_path == 'energyExplore'){
      this.login = false;
      this.energyDashboard = false;
      this.energyExplore = true;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.environmentDashboard = false;
      this.environmentReport = false;
      this.path = 'energyExplore';
    }
    else if(_path == 'energyPowerQuality'){
      this.login = false;
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = true;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.environmentDashboard = false;
      this.environmentReport = false;
      this.path = 'energyPowerQuality';
    }
    else if(_path == 'energyPowerQualityAllMeter'){
      this.login = false;
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = true;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.environmentDashboard = false;
      this.environmentReport = false;
      this.path = 'energyPowerQualityAllMeter';
    }
    else if(_path == 'energyReport'){
      this.login = false;
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = true;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.environmentDashboard = false;
      this.environmentReport = false;
      this.path = 'energyReport';
    }
    else if(_path == 'energySettingGroupSensor'){
      this.login = false;
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = true;
      this.energySettingNotification = false;
      this.environmentDashboard = false;
      this.environmentReport = false;
      this.path = 'energySettingGroupSensor';
    }
    else if(_path == 'energySettingNotification'){
      this.login = false;
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = true;
      this.environmentDashboard = false;
      this.environmentReport = false;
      this.path = 'energySettingNotification';
    }
    else if(_path == 'environmentDashboard'){
      this.login = false;
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.environmentDashboard = true;
      this.environmentReport = false;
      this.path = 'environmentDashboard';
    }
    else if(_path == 'environmentReport'){
      this.login = false;
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.environmentDashboard = false;
      this.environmentReport = true;
      this.path = 'environmentReport';
    }
    else {
      this.energyDashboard = false;
      this.energyExplore = false;
      this.energyPowerQuality = false;
      this.energyPowerQualityAllMeter = false;
      this.energyReport = false;
      this.energySettingGroupSensor = false;
      this.energySettingNotification = false;
      this.environmentDashboard = false;
      this.environmentReport = false;
      this.path = '';
    }
  }
  
  get pathString(){
    return this.path;
  }

}
