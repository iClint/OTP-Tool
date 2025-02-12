import { Component } from '@angular/core';
import { headerComponentConfig } from './header.component.config';
import { HeaderComponentConfig } from '../../models/header-component-config.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public config: HeaderComponentConfig = headerComponentConfig;
}
