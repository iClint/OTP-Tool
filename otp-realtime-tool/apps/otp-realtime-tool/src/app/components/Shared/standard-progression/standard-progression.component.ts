import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientService } from '../../../services/http-service/http-client.service';

@Component({
  selector: 'standard-progression',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatExpansionModule, MatIconModule],
  templateUrl: './standard-progression.component.html',
  styleUrl: './standard-progression.component.css',
})
export class StandardProgressionComponent {
  @Input({ required: true }) config!: any;
  public hoveredIndex: number | null = null;

  private hideTimeout: ReturnType<typeof setTimeout> | undefined;

  constructor(private httpCLientService: HttpClientService) {}

  onMouseEnter(index: number) {
    clearTimeout(this.hideTimeout);
    this.hoveredIndex = index;
  }
  onMouseLeave() {
    this.hideTimeout = setTimeout(() => {
      this.hoveredIndex = null;
    }, 300);
  }

  onButtonClick(action: string) {
    console.log('button clicked - action: ', this.config.proposition, action);
    this.httpCLientService
      .getSendPresetMessage(this.config.proposition, action)
      .subscribe({ next: (response) => {}, error: (errror) => {} });
    // todo: handle response and error passing values to a dialog component
  }
}
