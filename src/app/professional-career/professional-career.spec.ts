import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCareer } from './professional-career';

describe('ProfessionalCareer', () => {
  let component: ProfessionalCareer;
  let fixture: ComponentFixture<ProfessionalCareer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalCareer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalCareer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
