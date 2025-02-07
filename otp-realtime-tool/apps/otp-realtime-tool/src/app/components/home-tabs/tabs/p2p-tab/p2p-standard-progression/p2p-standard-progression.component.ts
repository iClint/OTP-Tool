import { Component } from '@angular/core';
import { P2PStandardProgressionComponentConfig } from './p2p-standard-progression.component.config';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-p2p-standard-progression',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatExpansionModule],
  templateUrl: './P2P-standard-progression.component.html',
  styleUrl: './P2P-standard-progression.component.css',
})
export class P2PStandardProgressionComponent {
  public config = P2PStandardProgressionComponentConfig;
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
