import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSuperAdminComponent } from './toolbar-super-admin.component';

describe('ToolbarSuperAdminComponent', () => {
  let component: ToolbarSuperAdminComponent;
  let fixture: ComponentFixture<ToolbarSuperAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarSuperAdminComponent]
    });
    fixture = TestBed.createComponent(ToolbarSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
