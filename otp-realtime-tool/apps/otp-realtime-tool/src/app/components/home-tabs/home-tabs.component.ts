import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { homeTabsComponentConfig } from './home-tabs.component.config';
import { ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './home-tabs.component.html',
  styleUrl: './home-tabs.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomeTabsComponent {
  public config = homeTabsComponentConfig;
}
