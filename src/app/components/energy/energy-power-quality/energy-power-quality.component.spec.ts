import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyPowerQualityComponent } from './energy-power-quality.component';

describe('EnergyPowerQualityComponent', () => {
  let component: EnergyPowerQualityComponent;
  let fixture: ComponentFixture<EnergyPowerQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyPowerQualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyPowerQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
