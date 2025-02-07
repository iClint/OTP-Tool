import { Component } from '@angular/core';
import { headerComponentConfig } from './header.component.config';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public config = headerComponentConfig;
}
