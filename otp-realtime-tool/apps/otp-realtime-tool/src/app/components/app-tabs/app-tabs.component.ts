import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContentComponent } from '../Shared/tab-content/tab-content.component';
import { Tab } from '../../models/config-app.model';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule, TabContentComponent],
  templateUrl: './app-tabs.component.html',
  styleUrl: './app-tabs.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppTabsComponent implements OnInit {
  @Input({ required: true }) config!: Tab[];

  ngOnInit(): void {
    console.log('Tabs component initialized');
    console.log('Tabs Config:', this.config);
  }
}
