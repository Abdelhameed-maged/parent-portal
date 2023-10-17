import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentHeaderNavMenuComponent } from './parent-header-nav-menu.component';

describe('ParentMenuComponent', () => {
  let component: ParentHeaderNavMenuComponent;
  let fixture: ComponentFixture<ParentHeaderNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentHeaderNavMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentHeaderNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
