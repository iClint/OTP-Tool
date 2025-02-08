import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientService } from '../../services/http-service/http-client.service';
import { TabContentComponent } from '../Shared/tab-content/tab-content.component';
import { CommonDirective } from '../../common/common.directive';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule, TabContentComponent],
  templateUrl: './app-tabs.component.html',
  styleUrl: './app-tabs.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppTabsComponent extends CommonDirective implements OnInit {
  constructor(httpClientService: HttpClientService) {
    super(httpClientService);
  }
  @Input({ required: true }) configName!: string;

  ngOnInit(): void {
    this.getWebConfig('tabs');
  }

  get configs() {
    return this.config;
  }
}
