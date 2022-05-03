import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LinkPathService } from '../../../services/link-path/link-path.service';

@Component({
  selector: 'app-energy-power-quality-all-meter',
  templateUrl: './energy-power-quality-all-meter.component.html',
  styleUrls: ['./energy-power-quality-all-meter.component.css']
})
export class EnergyPowerQualityAllMeterComponent implements OnInit {

  public valueAllMeter: any;

  constructor(
    private http: HttpClient,
    public path: LinkPathService,
  ) { }

  ngOnInit(): void {
    // SET PATH
    this.path.setPath('energyPowerQualityAllMeter');
    // GET VALUE ALL METER
    const url = "http://103.13.231.185:8080/api/v1/all_meter";
    const headers = new HttpHeaders({"Content-Type": "application/json"});
    this.http.get<any>( url, { headers } ).subscribe(data => {
      this.valueAllMeter = data.meta.response_data;
      console.log(this.valueAllMeter)
    },
    error => {
      console.error(error);
    })
  }

}
