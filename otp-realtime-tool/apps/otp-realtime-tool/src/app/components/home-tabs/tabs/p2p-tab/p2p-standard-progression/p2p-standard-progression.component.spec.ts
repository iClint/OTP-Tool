import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2PStandardProgressionComponent } from './p2p-standard-progression.component';

describe('P2PStandardProgressionComponent', () => {
  let component: P2PStandardProgressionComponent;
  let fixture: ComponentFixture<P2PStandardProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2PStandardProgressionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(P2PStandardProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
