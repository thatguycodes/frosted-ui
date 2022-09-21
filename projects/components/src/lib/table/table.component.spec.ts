import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTable } from './table.component';

describe('ComponentsComponent', () => {
  let component: LibTable;
  let fixture: ComponentFixture<LibTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibTable ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
