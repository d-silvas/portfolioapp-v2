import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableToCsvButtonComponent } from './table-to-csv-button.component';

describe('TableToCsvButtonComponent', () => {
  let component: TableToCsvButtonComponent;
  let fixture: ComponentFixture<TableToCsvButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableToCsvButtonComponent]
    });
    fixture = TestBed.createComponent(TableToCsvButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
