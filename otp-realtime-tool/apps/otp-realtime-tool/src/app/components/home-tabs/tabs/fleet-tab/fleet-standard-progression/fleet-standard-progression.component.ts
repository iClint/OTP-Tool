import { Component } from '@angular/core';
import { fleetStandardProgressionComponentConfig } from './fleet-standard-progression.component.config';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-fleet-standard-progression',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatExpansionModule],
  templateUrl: './fleet-standard-progression.component.html',
  styleUrl: './fleet-standard-progression.component.css',
})
export class FleetStandardProgressionComponent {
  public config = fleetStandardProgressionComponentConfig;
  public hoveredIndex: number | null = null;

  private hideTimeout: any;

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
