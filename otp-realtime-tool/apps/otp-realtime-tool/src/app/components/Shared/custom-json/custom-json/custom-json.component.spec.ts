import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomJsonComponent } from './custom-json.component';

describe('CustomJsonComponent', () => {
  let component: CustomJsonComponent;
  let fixture: ComponentFixture<CustomJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
