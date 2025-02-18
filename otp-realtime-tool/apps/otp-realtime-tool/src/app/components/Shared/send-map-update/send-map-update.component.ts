import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TrackingEventType } from '../../../models/event-type.model';
import { HttpClientService } from '../../../services/http-service/http-client.service';
import { SnackBarService } from '../../../services/snack-bar/snack-bar.service';
import { AlertType } from '../../../models/alert-type.model';

@Component({
  selector: 'send-map-update',
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './send-map-update.component.html',
  styleUrl: './send-map-update.component.css',
})
export class SendMapUpdateComponent {
  public selectedEventType: TrackingEventType =
    TrackingEventType.LocationUpdated;
  private _lat: number = -33.765278;
  private _lon: number = 151.270278;

  constructor(
    private httpClientService: HttpClientService,
    private snackBarService: SnackBarService
  ) {}

  get lat(): string {
    return this._lat.toFixed(4);
  }

  set lat(value: string) {
    this._lat = parseFloat(value);
  }

  get lon(): string {
    return this._lon.toFixed(4);
  }

  set lon(value: string) {
    this._lon = parseFloat(value);
  }

  public onSendMapUpdate(): void {
    const message = {
      coordinate: {
        latitude: this._lat,
        longitude: this._lon,
      },
      messageType: TrackingEventType.LocationUpdated,
    };

    if (!message) {
      alert('No JSON payload provided');
      return;
    }

    try {
      const messageString = JSON.stringify(message);
      const jsonObject = JSON.parse(messageString);
      this.httpClientService.postLocationUpdateMessage(jsonObject).subscribe({
        next: (response) => {
          this.snackBarService.showMessage(
            AlertType.Success,
            `Location update sent Lat: ${this._lat} Lon: ${this._lon}`,
            `Server Response: ${response.message}`
          );
        },
        error: (error) => {
          this.snackBarService.showError(
            AlertType.Error,
            `Location update was not sent!`,
            `Server response: ${error.message}`
          );
        },
      });
    } catch (error) {
      alert('Invalid JSON: ' + error);
    }

    console.log('Sending map update:', message);
  }
}
