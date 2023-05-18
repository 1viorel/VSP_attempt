import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyTableComponent } from './currencyTable.component';

describe('ChartComponent', () => {
  let component: CurrencyTableComponent;
  let fixture: ComponentFixture<CurrencyTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyTableComponent]
    });
    fixture = TestBed.createComponent(CurrencyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});