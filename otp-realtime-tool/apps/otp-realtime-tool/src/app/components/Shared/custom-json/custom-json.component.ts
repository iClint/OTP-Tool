import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientService } from 'apps/otp-realtime-tool/src/app/services/http-service/http-client.service';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnackBarService } from '../../../services/snack-bar/snack-bar.service';
import { AlertType } from '../../../models/alert-type.model';

@Component({
  selector: 'custom-json',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './custom-json.component.html',
  styleUrl: './custom-json.component.css',
})
export class CustomJsonComponent implements OnInit {
  @Input({ required: true }) proposition!: string;
  public jsonFixtures!: any;
  public fixture: any;
  public inputData: string = '';

  constructor(
    private httpClientService: HttpClientService,
    private cdr: ChangeDetectorRef,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.httpClientService
      .getFixtureList(this.proposition)
      .subscribe((fixtures) => {
        this.jsonFixtures = fixtures;
      });
  }

  onFixtureChange(proposition: string, fixture: string): void {
    this.fixture = null;
    this.inputData = '';
    this.cdr.detectChanges();

    this.httpClientService.getFixture(proposition, fixture).subscribe({
      next: (newFixture) => {
        this.fixture = newFixture;
        this.inputData = JSON.stringify(newFixture, null, 4);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching fixture:', error);
      },
    });
  }

  onSendPayload(): void {
    if (!this.inputData) {
      this.snackBarService.showError(
        AlertType.Warning,
        'No JSON payload provided',
        'A valid JSON payload is required'
      );
      return;
    }

    try {
      const jsonObject = JSON.parse(this.inputData);
      this.httpClientService.postCustomMessage(jsonObject).subscribe({
        next: (response) =>
          this.snackBarService.showMessage(
            AlertType.Success,
            'Message sent',
            `Server response: ${response.message}`
          ),
        error: (error) =>
          this.snackBarService.showError(
            AlertType.Error,
            'Message was not sent!',
            `Server response: ${error.message}`
          ),
      });
    } catch (error) {
      this.snackBarService.showError(AlertType.Error, 'Invalid JSON', error);
    }
  }
}
