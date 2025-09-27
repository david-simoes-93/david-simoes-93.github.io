import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCarrer } from './professional-carrer';

describe('ProfessionalCarrer', () => {
  let component: ProfessionalCarrer;
  let fixture: ComponentFixture<ProfessionalCarrer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalCarrer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalCarrer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
