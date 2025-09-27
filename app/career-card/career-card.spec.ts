import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCard } from './career-card';

describe('CareerCard', () => {
  let component: CareerCard;
  let fixture: ComponentFixture<CareerCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
