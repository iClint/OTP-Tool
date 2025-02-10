import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import { StandardProgressionComponent } from '../standard-progression/standard-progression.component';
import { CustomJsonComponent } from '../custom-json/custom-json/custom-json.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'tab-content',
  imports: [StandardProgressionComponent, CustomJsonComponent],
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.css',
})
export class TabContentComponent implements OnInit {
  @Input({ required: true }) config: any;
  // @Input({ required: true }) proposition!: string;
  public sanitizedUrl!: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.config.previewUrl
    );
  }
}
