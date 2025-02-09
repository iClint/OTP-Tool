import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/app-header/header.component';
import { AppTabsComponent } from './components/app-tabs/app-tabs.component';
import { HttpClientService } from './services/http-service/http-client.service';

@Component({
  imports: [RouterModule, HeaderComponent, AppTabsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public config: any;
  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService.getWebConfig().subscribe((config) => {
      this.config = config;
    });
  }
}
