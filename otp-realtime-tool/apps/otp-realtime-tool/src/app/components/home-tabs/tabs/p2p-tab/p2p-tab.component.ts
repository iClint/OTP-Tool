import { Component } from '@angular/core';
import { P2PStandardProgressionComponent } from './p2p-standard-progression/p2p-standard-progression.component';

@Component({
  selector: 'app-p2p-tab',
  standalone: true,
  imports: [P2PStandardProgressionComponent],
  templateUrl: './p2p-tab.component.html',
  styleUrl: './p2p-tab.component.css',
})
export class P2pTabComponent {}
