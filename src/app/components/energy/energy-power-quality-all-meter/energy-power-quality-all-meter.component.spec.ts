import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyPowerQualityAllMeterComponent } from './energy-power-quality-all-meter.component';

describe('EnergyPowerQualityAllMeterComponent', () => {
  let component: EnergyPowerQualityAllMeterComponent;
  let fixture: ComponentFixture<EnergyPowerQualityAllMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyPowerQualityAllMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyPowerQualityAllMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
