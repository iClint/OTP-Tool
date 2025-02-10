import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpClientServiceConfig } from './http-client.service.config';
import { Proposition } from '../../models/proposition.model';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private config = httpClientServiceConfig;

  constructor(private http: HttpClient) {}

  public getWebConfig() {
    return this.http.get(`${this.config.apiUrl}/WebConfigs`);
  }

  public getFixtureList(proposition: string) {
    return this.http.get(`${this.config.apiUrl}/Fixtures/${proposition}`);
  }

  public getFixture(proposition: string, fixtureName: string) {
    return this.http.get(
      `${this.config.apiUrl}/Fixtures/${proposition}/${fixtureName}`
    );
  }

  public getSendPresetMessage(proposition: string, fixtureName: string) {
    return this.http.get(
      `${this.config.apiUrl}/Messages/${proposition}/${fixtureName}`
    );
  }
}
