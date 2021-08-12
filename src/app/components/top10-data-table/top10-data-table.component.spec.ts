import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10DataTableComponent } from './top10-data-table.component';

describe('Top10DataTableComponent', () => {
  let component: Top10DataTableComponent;
  let fixture: ComponentFixture<Top10DataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top10DataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
