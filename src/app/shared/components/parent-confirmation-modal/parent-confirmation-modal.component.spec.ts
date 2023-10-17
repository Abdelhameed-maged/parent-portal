import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentConfirmationModalComponent } from './parent-confirmation-modal.component';

describe('ParentConfirmationModalComponent', () => {
  let component: ParentConfirmationModalComponent;
  let fixture: ComponentFixture<ParentConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentConfirmationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
