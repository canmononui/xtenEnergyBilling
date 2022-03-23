import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyExploreComponent } from './energy-explore.component';

describe('EnergyExploreComponent', () => {
  let component: EnergyExploreComponent;
  let fixture: ComponentFixture<EnergyExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyExploreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
