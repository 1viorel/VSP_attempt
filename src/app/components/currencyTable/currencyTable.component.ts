import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { XmlService, Rate } from 'src/app/services/xml.service';

@Component({
  selector: 'app-currencyTable',
  templateUrl: './currencyTable.component.html',
  styleUrls: ['./currencyTable.css']
})
export class CurrencyTableComponent implements OnInit {
  data$: Observable<Rate[]> | undefined;

  constructor(private xmlService: XmlService) {}

  ngOnInit() {
    this.data$ = this.fetchData();
  }

  fetchData(): Observable<Rate[]> {
    const xmlFilePath = 'https://victorysquarepartners.com/curs1.php'; // Update the URL to use HTTPS
    return this.xmlService.fetchData(xmlFilePath);
  }
}
