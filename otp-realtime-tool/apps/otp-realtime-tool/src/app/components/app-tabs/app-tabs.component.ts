import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContentComponent } from '../Shared/tab-content/tab-content.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule, TabContentComponent],
  templateUrl: './app-tabs.component.html',
  styleUrl: './app-tabs.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppTabsComponent {
  @Input({ required: true }) config!: any;
}
