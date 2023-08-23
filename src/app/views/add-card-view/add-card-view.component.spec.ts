import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardViewComponent } from './add-card-view.component';

describe('AddCardViewComponent', () => {
  let component: AddCardViewComponent;
  let fixture: ComponentFixture<AddCardViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCardViewComponent]
    });
    fixture = TestBed.createComponent(AddCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
