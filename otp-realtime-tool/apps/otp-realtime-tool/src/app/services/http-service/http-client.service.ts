import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpClientServiceConfig } from './http-client.service.config';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private config = httpClientServiceConfig;

  constructor(private http: HttpClient) {}

  public getWebConfig(configName: string) {
    return this.http.get(
      `${this.config.webConfigsEndpoint}/WebConfigs?configName=${configName}`
    );
  }
}
