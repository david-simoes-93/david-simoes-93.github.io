import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingCareer } from './writing-career';

describe('WritingCareer', () => {
  let component: WritingCareer;
  let fixture: ComponentFixture<WritingCareer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritingCareer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritingCareer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
