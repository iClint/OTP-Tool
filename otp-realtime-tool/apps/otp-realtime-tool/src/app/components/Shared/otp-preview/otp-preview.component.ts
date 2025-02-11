import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
  @Input({ required: true }) previewUrl!: any;
  @Input({ required: true }) previewUrls!: { label: string; url: string }[];
  public sanitizedUrl!: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    console.log('previewUrls', this.previewUrls);
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.previewUrl
    );
  }

  public onPreviewUrlChange(url: string): void {
    this.previewUrl = url;
    this.onRefresh();
  }

  public onRefresh(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.previewUrl
    );
  }
}
