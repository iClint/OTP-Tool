import { Directive, Input } from '@angular/core';
import { HttpClientService } from '../services/http-service/http-client.service';

@Directive({})
export abstract class CommonDirective {
  @Input() abstract configName: string;
  public config: any;

  constructor(public httpClientService: HttpClientService) {}

  getWebConfig(configName: string) {
    this.httpClientService.getWebConfig(configName).subscribe((config) => {
      this.config = config;
    });
  }
}
