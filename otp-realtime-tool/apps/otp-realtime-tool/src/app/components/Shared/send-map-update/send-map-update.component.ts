import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TrackingEventType } from '../../../models/event-type.model';
import { HttpClientService } from '../../../services/http-service/http-client.service';

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
  public eventTypes: TrackingEventType[] = [
    TrackingEventType.LocationUpdated,
    TrackingEventType.OrderArrived,
    TrackingEventType.TrackingUnavailable,
  ];
  private _lat: number = -33.765278;
  private _lon: number = 151.270278;

  constructor(private httpClientService: HttpClientService) {}

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
      messageType: this.selectedEventType,
    };

    if (!message) {
      alert('No JSON payload provided');
      return;
    }

    try {
      const messageString = JSON.stringify(message);
      const jsonObject = JSON.parse(messageString);
      this.httpClientService.postMapUpdateMessage(jsonObject).subscribe({
        next: (response) => console.log('Success:', response),
        error: (error) => console.error('Error:', error),
      });
    } catch (error) {
      alert('Invalid JSON: ' + error);
    }

    console.log('Sending map update:', message);
  }

  public onGenerateLatLon(): void {}
}
