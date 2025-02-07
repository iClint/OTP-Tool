import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetTabComponent } from './fleet-tab.component';

describe('FleetTabComponent', () => {
  let component: FleetTabComponent;
  let fixture: ComponentFixture<FleetTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
