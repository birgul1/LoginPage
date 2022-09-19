import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedofferpageComponent } from './selectedofferpage.component';

describe('SelectedofferpageComponent', () => {
  let component: SelectedofferpageComponent;
  let fixture: ComponentFixture<SelectedofferpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedofferpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedofferpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
