import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class XmlService {
  constructor(private http: HttpClient) {}

  fetchData(xmlFilePath: string): Observable<any[]> {
    return this.http.get(xmlFilePath, { responseType: 'text' }).pipe(
      map(response => {
        let parsedData: any[] | undefined; // Assign an initial value of undefined
        parseString(response, (err, result) => {
          if (err) {
            console.error(err);
          } else {
            const dataSet = result['DataSet'];
            if (dataSet && dataSet['Cube'] && dataSet['Cube']['$'] && dataSet['Cube']['$']['date'] && dataSet['Cube']['Rate']) {
              parsedData = dataSet['Cube']['Rate'];
            }
          }
        });
        return parsedData || []; // Return an empty array if no data is available
      })
    );
  }
}
