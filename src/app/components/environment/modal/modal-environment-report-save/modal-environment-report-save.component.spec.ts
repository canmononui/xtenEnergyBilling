import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnvironmentReportSaveComponent } from './modal-environment-report-save.component';

describe('ModalEnvironmentReportSaveComponent', () => {
  let component: ModalEnvironmentReportSaveComponent;
  let fixture: ComponentFixture<ModalEnvironmentReportSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEnvironmentReportSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEnvironmentReportSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
