import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSettingGroupSensorComponent } from './modal-setting-group-sensor.component';

describe('ModalSettingGroupSensorComponent', () => {
  let component: ModalSettingGroupSensorComponent;
  let fixture: ComponentFixture<ModalSettingGroupSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSettingGroupSensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSettingGroupSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
