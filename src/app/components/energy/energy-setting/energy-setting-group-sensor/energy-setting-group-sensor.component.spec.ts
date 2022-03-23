import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergySettingGroupSensorComponent } from './energy-setting-group-sensor.component';

describe('EnergySettingGroupSensorComponent', () => {
  let component: EnergySettingGroupSensorComponent;
  let fixture: ComponentFixture<EnergySettingGroupSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergySettingGroupSensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergySettingGroupSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
