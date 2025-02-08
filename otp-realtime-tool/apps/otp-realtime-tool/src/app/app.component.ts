import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/app-header/header.component';
import { AppTabsComponent } from './components/app-tabs/app-tabs.component';

@Component({
  imports: [RouterModule, HeaderComponent, AppTabsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'otp-realtime-tool';
}
