import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsViewComponent } from './planets-view.component';

describe('PlanetsViewComponent', () => {
  let component: PlanetsViewComponent;
  let fixture: ComponentFixture<PlanetsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetsViewComponent]
    });
    fixture = TestBed.createComponent(PlanetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
