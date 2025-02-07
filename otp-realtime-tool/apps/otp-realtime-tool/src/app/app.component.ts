import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeTabsComponent } from './components/home-tabs/home-tabs.component';

@Component({
  imports: [RouterModule, HeaderComponent, HomeTabsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'otp-realtime-tool';
}
