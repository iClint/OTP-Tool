import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpService } from 'apps/otp-realtime-tool/src/app/services/http-service/http.service';

@Component({
  selector: 'app-fleet-standard-progression',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatExpansionModule],
  templateUrl: './fleet-standard-progression.component.html',
  styleUrl: './fleet-standard-progression.component.css',
})
export class FleetStandardProgressionComponent implements OnInit {
  public config: any;
  public hoveredIndex: number | null = null;

  private hideTimeout: any;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    alert('FleetStandardProgressionComponent');
    this.httpService.getFleetButtonsConfig().subscribe((config) => {
      this.config = config;
    });
  }

  onMouseEnter(index: number) {
    clearTimeout(this.hideTimeout);
    this.hoveredIndex = index;
  }
  onMouseLeave() {
    this.hideTimeout = setTimeout(() => {
      this.hoveredIndex = null;
    }, 300);
  }

  onButtonClick(arg0: string) {
    throw new Error('Method not implemented.');
  }
}
