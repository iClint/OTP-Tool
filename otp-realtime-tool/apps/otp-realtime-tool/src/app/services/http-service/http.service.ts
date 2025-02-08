import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getFleetButtonsConfig() {
    return this.http.get('http://localhost:5059/WebConfigs');
  }
}
