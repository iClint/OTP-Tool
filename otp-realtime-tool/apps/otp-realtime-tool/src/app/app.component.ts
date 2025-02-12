import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/app-header/header.component';
import { AppTabsComponent } from './components/app-tabs/app-tabs.component';
import { HttpClientService } from './services/http-service/http-client.service';
import { AppErrorComponent } from './components/app-error/app-error.component';
import { AppConfig } from './models/config-app.model';

@Component({
  imports: [RouterModule, HeaderComponent, AppTabsComponent, AppErrorComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public config: AppConfig | null = null;

  constructor(
    private httpClientService: HttpClientService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log('App component initialized');

    this.httpClientService.getWebConfig().subscribe((fetchedConfig) => {
      console.log('Fetched Config:', fetchedConfig);
      this.config = fetchedConfig as AppConfig;
    });

    this.cdr.detectChanges();
  }
}
