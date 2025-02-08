import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardProgressionComponent } from './standard-progression.component';

describe('FleetStandardProgressionComponent', () => {
  let component: StandardProgressionComponent;
  let fixture: ComponentFixture<StandardProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardProgressionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StandardProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
