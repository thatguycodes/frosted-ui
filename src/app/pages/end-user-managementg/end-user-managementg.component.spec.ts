import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserManagementgComponent } from './end-user-managementg.component';

describe('EndUserManagementgComponent', () => {
  let component: EndUserManagementgComponent;
  let fixture: ComponentFixture<EndUserManagementgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndUserManagementgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndUserManagementgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
