import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { XmlService } from 'src/app/services/xml.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  data$: Observable<any[]> | undefined;

  constructor(private xmlService: XmlService) {}

  ngOnInit() {
    this.data$ = this.fetchData();
  }

  fetchData(): Observable<any[]> {
    const xmlFilePath = 'https://www.bnr.ro/nbrfxrates.xml'; // Update the URL to use HTTPS
    return this.xmlService.fetchData(xmlFilePath);
  }
}
