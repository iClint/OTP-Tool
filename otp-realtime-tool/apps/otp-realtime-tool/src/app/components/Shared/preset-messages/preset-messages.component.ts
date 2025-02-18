import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientService } from '../../../services/http-service/http-client.service';
import { PresetMessages } from '../../../models/config-app.model';
import { SnackBarService } from '../../../services/snack-bar/snack-bar.service';
import { AlertType } from '../../../models/alert-type.model';

@Component({
  selector: 'preset-messages',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatExpansionModule, MatIconModule],
  templateUrl: './preset-messages.component.html',
  styleUrl: './preset-messages.component.css',
})
export class PresetMessagesComponent {
  @Input({ required: true }) config!: PresetMessages;
  @Input({ required: true }) public proposition!: string;
  public hoveredIndex: number | null = null;

  private hideTimeout: ReturnType<typeof setTimeout> | undefined;

  constructor(
    private httpCLientService: HttpClientService,
    private snackBarService: SnackBarService
  ) {}

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
    console.log('button clicked - action: ', this.proposition, action);
    this.httpCLientService
      .getSendPresetMessage(this.proposition, action)
      .subscribe({
        next: (response) => {
          this.snackBarService.showMessage(
            AlertType.Success,
            `Message '${action}' sent`,
            `Server Response: ${response.message}`
          );
        },
        error: (error) => {
          this.snackBarService.showError(
            AlertType.Error,
            `Message '${action}' was not sent!`,
            `Server response: ${error.message}`
          );
        },
      });
  }
}
