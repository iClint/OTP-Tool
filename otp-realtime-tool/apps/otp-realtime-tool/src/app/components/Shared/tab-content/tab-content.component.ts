import { Component, Input } from '@angular/core';
import { PresetMessagesComponent } from '../preset-messages/preset-messages.component';
import { CustomJsonComponent } from '../custom-json/custom-json/custom-json.component';
import { OtpPreviewComponent } from '../otp-preview/otp-preview.component';
import { TabContent } from '../../../models/config-app.model';

@Component({
  selector: 'tab-content',
  imports: [PresetMessagesComponent, CustomJsonComponent, OtpPreviewComponent],
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.css',
})
export class TabContentComponent {
  @Input({ required: true }) config!: TabContent;
}
