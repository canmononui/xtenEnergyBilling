import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReportPrintComponent } from './modal-report-print.component';

describe('ModalReportPrintComponent', () => {
  let component: ModalReportPrintComponent;
  let fixture: ComponentFixture<ModalReportPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalReportPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReportPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
