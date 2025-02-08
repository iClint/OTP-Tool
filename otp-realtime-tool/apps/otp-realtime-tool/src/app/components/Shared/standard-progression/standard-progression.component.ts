import { Component, input, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientService } from 'apps/otp-realtime-tool/src/app/services/http-service/http-client.service';
import { CommonDirective } from '../../../common/common.directive';

@Component({
  selector: 'standard-progression',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatExpansionModule],
  templateUrl: './standard-progression.component.html',
  styleUrl: './standard-progression.component.css',
})
export class StandardProgressionComponent
  extends CommonDirective
  implements OnInit
{
  @Input({ required: true }) override configName!: string;
  public hoveredIndex: number | null = null;

  private hideTimeout: any;

  constructor(httpClientService: HttpClientService) {
    super(httpClientService);
  }

  ngOnInit(): void {
    this.getWebConfig(this.configName);
  }

  onMouseEnter(index: number) {
    clearTimeout(this.hideTimeout);
    this.hoveredIndex = index;
  }
  onMouseLeave() {
    this.hideTimeout = setTimeout(() => {
      this.hoveredIndex = null;
    }, 300);
  }

  onButtonClick(arg0: string) {
    throw new Error('Method not implemented.');
  }
}
