import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReportSaveComponent } from './modal-report-save.component';

describe('ModalReportSaveComponent', () => {
  let component: ModalReportSaveComponent;
  let fixture: ComponentFixture<ModalReportSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalReportSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReportSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
