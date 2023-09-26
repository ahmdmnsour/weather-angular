import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarUserComponent } from './toolbar-user.component';

describe('ToolbarUserComponent', () => {
  let component: ToolbarUserComponent;
  let fixture: ComponentFixture<ToolbarUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarUserComponent]
    });
    fixture = TestBed.createComponent(ToolbarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
