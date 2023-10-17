import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBreadcrumbComponent } from './parent-breadcrumb.component';

describe('ParentBreadcrumbComponent', () => {
  let component: ParentBreadcrumbComponent;
  let fixture: ComponentFixture<ParentBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentBreadcrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
