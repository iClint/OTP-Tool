import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { HttpResponse } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { AlertType } from '../../../models/alert-type.model';

@Component({
  selector: 'app-snack-bar-alert',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './snack-bar-alert.component.html',
  styleUrl: './snack-bar-alert.component.css',
})
export class SnackBarAlertComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    public data: {
      alertType: AlertType;
      request: string;
      response: HttpResponse<any>;
    },
    private snackBarRef: MatSnackBarRef<SnackBarAlertComponent>
  ) {}

  get iconColor(): string {
    switch (this.data.alertType) {
      case AlertType.Success:
        return 'alert__icon green';
      case AlertType.Error:
        return 'alert__icon red';
      case AlertType.Warning:
        return 'alert__icon yellow';
      case AlertType.Info:
        return 'alert__icon blue';
      default:
        return 'alert__icon white';
    }
  }

  get showDismissButton(): boolean {
    return [AlertType.Warning, AlertType.Error].includes(this.data.alertType);
  }

  dismiss() {
    this.snackBarRef.dismiss();
  }
}
