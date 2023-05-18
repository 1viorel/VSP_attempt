import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyChartComponent } from './currencyChart.component';

describe('CurrencyChartComponent', () => {
  let component: CurrencyChartComponent;
  let fixture: ComponentFixture<CurrencyChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyChartComponent]
    });
    fixture = TestBed.createComponent(CurrencyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
