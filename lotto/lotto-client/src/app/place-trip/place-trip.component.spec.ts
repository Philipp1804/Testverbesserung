import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceTripComponent } from './place-trip.component';

describe('PlaceTripComponent', () => {
  let component: PlaceTripComponent;
  let fixture: ComponentFixture<PlaceTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
