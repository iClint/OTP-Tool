import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetStandardProgressionComponent } from './fleet-standard-progression.component';

describe('FleetStandardProgressionComponent', () => {
  let component: FleetStandardProgressionComponent;
  let fixture: ComponentFixture<FleetStandardProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetStandardProgressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetStandardProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
