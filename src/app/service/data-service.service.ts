import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BarCodeInterface, GridData } from '../model/bar-code.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<GridData<BarCodeInterface>> {
    return this.http.get<GridData<BarCodeInterface>>('assets/data.json');
  }
}
