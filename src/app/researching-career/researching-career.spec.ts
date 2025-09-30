import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchingCareer } from './researching-career';

describe('ResearchingCareer', () => {
  let component: ResearchingCareer;
  let fixture: ComponentFixture<ResearchingCareer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchingCareer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchingCareer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
