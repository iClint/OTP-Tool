import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pTabComponent } from './p2p-tab.component';

describe('P2pTabComponent', () => {
  let component: P2pTabComponent;
  let fixture: ComponentFixture<P2pTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2pTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2pTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
