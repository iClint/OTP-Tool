import { Component, Input } from '@angular/core';
import { PresetMessagesComponent } from '../preset-messages/preset-messages.component';
import { OtpPreviewComponent } from '../otp-preview/otp-preview.component';
import { TabContent } from '../../../models/config-app.model';
import { SendMapUpdateComponent } from '../send-map-update/send-map-update.component';
import { CustomJsonComponent } from '../custom-json/custom-json.component';

@Component({
  selector: 'tab-content',
  imports: [
    PresetMessagesComponent,
    CustomJsonComponent,
    OtpPreviewComponent,
    SendMapUpdateComponent,
  ],
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.css',
})
export class TabContentComponent {
  @Input({ required: true }) config!: TabContent;
}
