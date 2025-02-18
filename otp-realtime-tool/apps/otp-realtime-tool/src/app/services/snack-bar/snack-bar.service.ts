import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarAlertComponent } from '../../components/Shared/snack-bar-alert/snack-bar-alert.component';
import { AlertType } from '../../models/alert-type.model';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(
    alertType: AlertType,
    message: string,
    response: any = {},
    duration: number = 3000
  ) {
    this.snackBar.openFromComponent(SnackBarAlertComponent, {
      data: { alertType, request: message, response: response },
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  showError(alertType: AlertType, message: string, response: any = {}) {
    this.snackBar.openFromComponent(SnackBarAlertComponent, {
      data: { alertType, request: message, response: response },
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
