import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { OtpPreview } from '../../../models/config-app.model';

@Component({
  selector: 'app-otp-preview',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './otp-preview.component.html',
  styleUrl: './otp-preview.component.css',
})
export class OtpPreviewComponent {
  @Input({ required: true }) config!: OtpPreview;
  public sanitizedUrl!: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.config.previewUrl
    );
  }

  public onPreviewUrlChange(url: string): void {
    this.config.previewUrl = url;
    this.onRefresh();
  }

  public onRefresh(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.config.previewUrl
    );
  }

  public onOpenInNewTab(): void {
    window.open(this.config.previewUrl, '_blank');
  }
}
