import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModalDialogComponent } from './first-modal-dialog.component';

describe('FirstModalDialogComponent', () => {
  let component: FirstModalDialogComponent;
  let fixture: ComponentFixture<FirstModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstModalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
