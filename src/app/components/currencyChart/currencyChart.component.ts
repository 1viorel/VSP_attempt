import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-currencyChart',
  templateUrl: './currencyChart.component.html',
  styleUrls: ['./currencyChart.component.html']
})
export class CurrencyChartComponent implements OnInit {
  public lineChartData: ChartDataset[] = [];
  public lineChartLabels: string[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const xmlFilePath = 'https://victorysquarepartners.com/curs1.php'; // Update the URL to use HTTPS
    this.http.get(xmlFilePath, {responseType: 'text'}).subscribe((xmlData: string | null) => {
      if (xmlData === null) {
        return;
      }

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

      const rates = Array.from(xmlDoc.getElementsByTagName('Rate'));
      const labels: string[] = [];
      const data: number[] = [];

      rates.forEach((rateElement: Element) => {
        const currency = rateElement.getAttribute('currency');
        if (currency !== null) {
          const rate = parseFloat(rateElement.textContent || '0');
          labels.push(currency);
          data.push(rate);
        }
      });

      this.lineChartData = [{data}];
      this.lineChartLabels = labels;
    });
  }
}
