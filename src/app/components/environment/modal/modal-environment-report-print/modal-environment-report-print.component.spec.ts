import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnvironmentReportPrintComponent } from './modal-environment-report-print.component';

describe('ModalEnvironmentReportPrintComponent', () => {
  let component: ModalEnvironmentReportPrintComponent;
  let fixture: ComponentFixture<ModalEnvironmentReportPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEnvironmentReportPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEnvironmentReportPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
