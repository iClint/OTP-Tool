import { Component, Input, OnInit } from '@angular/core';
import { StandardProgressionComponent } from '../standard-progression/standard-progression.component';

@Component({
  selector: 'tab-content',
  imports: [StandardProgressionComponent],
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.css',
})
export class TabContentComponent implements OnInit {
  @Input({ required: true }) configName!: string;
  @Input({ required: true }) tabLabel!: string;

  ngOnInit(): void {
    console.log('tab-content configName', this.configName);
  }
}
