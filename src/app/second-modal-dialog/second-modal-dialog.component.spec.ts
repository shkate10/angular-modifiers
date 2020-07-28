import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondModalDialogComponent } from './second-modal-dialog.component';

describe('SecondModalDialogComponent', () => {
  let component: SecondModalDialogComponent;
  let fixture: ComponentFixture<SecondModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondModalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
