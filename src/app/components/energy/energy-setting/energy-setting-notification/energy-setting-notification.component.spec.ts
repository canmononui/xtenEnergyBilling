import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergySettingNotificationComponent } from './energy-setting-notification.component';

describe('EnergySettingNotificationComponent', () => {
  let component: EnergySettingNotificationComponent;
  let fixture: ComponentFixture<EnergySettingNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergySettingNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergySettingNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
