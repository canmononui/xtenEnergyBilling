import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-module',
  templateUrl: './modal-module.component.html',
  styleUrls: ['./modal-module.component.css']
})
export class ModalModuleComponent implements OnInit {

  pathUrl:any = '';

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public path: LinkPathService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap.get("id"));
    // console.log(this.route.snapshot.paramMap);
    // console.log(this.path.environmentDashboard)
    if(this.path.energyDashboard || this.path.energyExplore || this.path.energyPowerQuality || this.path.energyPowerQualityAllMeter || this.path.energyReport || this.path.energySettingGroupSensor || this.path.energySettingNotification){
      this.pathUrl = 'energy';
    }
    else if (this.path.environmentDashboard || this.path.environmentReport){
      this.pathUrl = 'environment';
    }
    // console.log(this.pathUrl)
  }

}
