import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsDataTableComponent } from './years-data-table.component';

describe('YearsDataTableComponent', () => {
  let component: YearsDataTableComponent;
  let fixture: ComponentFixture<YearsDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearsDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
