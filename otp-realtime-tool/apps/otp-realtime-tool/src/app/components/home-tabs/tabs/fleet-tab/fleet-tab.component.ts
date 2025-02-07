import { Component } from '@angular/core';
import { FleetStandardProgressionComponent } from './fleet-standard-progression/fleet-standard-progression.component';

@Component({
  selector: 'app-fleet-tab',
  standalone: true,
  imports: [FleetStandardProgressionComponent],
  templateUrl: './fleet-tab.component.html',
  styleUrl: './fleet-tab.component.css',
})
export class FleetTabComponent {}
