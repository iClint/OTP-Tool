import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientService } from 'apps/otp-realtime-tool/src/app/services/http-service/http-client.service';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'custom-json',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './custom-json.component.html',
  styleUrl: './custom-json.component.css',
})
export class CustomJsonComponent implements OnInit {
  @Input({ required: true }) proposition!: string;
  public jsonFixtures!: any;
  public fixture: any;
  constructor(
    private httpClientService: HttpClientService,
    private cdr: ChangeDetectorRef
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

    this.httpClientService
      .getFixture(proposition, fixture)
      .subscribe((newFixture) => {
        this.fixture = newFixture;
        console.log('fixture', this.fixture);
        this.cdr.detectChanges();
      });
  }

  onSendPayload(jsonString: string): void {
    if (!jsonString) {
      alert('No JSON payload provided');
      return;
    }

    try {
      const jsonObject = JSON.parse(jsonString);
      this.httpClientService.postCustomMessage(jsonObject).subscribe({
        next: (response) => console.log('Success:', response),
        error: (error) => console.error('Error:', error),
      });
    } catch (error) {
      alert('Invalid JSON:');
    }
  }

  get inputData(): string {
    return this.fixture ? JSON.stringify(this.fixture, null, 4) : '';
  }
}
