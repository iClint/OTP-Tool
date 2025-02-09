import { Component, input, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'standard-progression',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatExpansionModule, MatIconModule],
  templateUrl: './standard-progression.component.html',
  styleUrl: './standard-progression.component.css',
})
export class StandardProgressionComponent {
  @Input({ required: true }) config!: any;
  @Input({ required: true }) tabLabel!: string;
  public hoveredIndex: number | null = null;

  private hideTimeout: ReturnType<typeof setTimeout> | undefined;

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
