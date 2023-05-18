import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Rate {
  currency: string;
  rate: string;
}

@Injectable({
  providedIn: 'root'
})
export class XmlService {
  constructor(private http: HttpClient) {}

  fetchData(xmlFilePath: string): Observable<Rate[]> {
    return this.http.get(xmlFilePath, { responseType: 'text' }).pipe(
      map((response: string) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'text/xml');
        const rateElements = Array.from(xmlDoc.getElementsByTagName('Rate'));

        return rateElements.map(rateElement => ({
          currency: rateElement.getAttribute('currency') || '',
          rate: rateElement.textContent || ''
        }));
      })
    );
  }
}
