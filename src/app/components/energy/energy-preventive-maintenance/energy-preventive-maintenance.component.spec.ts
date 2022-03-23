import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyPreventiveMaintenanceComponent } from './energy-preventive-maintenance.component';

describe('EnergyPreventiveMaintenanceComponent', () => {
  let component: EnergyPreventiveMaintenanceComponent;
  let fixture: ComponentFixture<EnergyPreventiveMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyPreventiveMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyPreventiveMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
