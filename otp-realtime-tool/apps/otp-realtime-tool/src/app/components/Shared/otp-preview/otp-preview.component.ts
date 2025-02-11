import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-otp-preview',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './otp-preview.component.html',
  styleUrl: './otp-preview.component.css',
})
export class OtpPreviewComponent {
  @Input({ required: true }) previewUrl!: any;
  public sanitizedUrl!: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.previewUrl
    );
  }

  public onRefresh(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.previewUrl
    );
  }
}
