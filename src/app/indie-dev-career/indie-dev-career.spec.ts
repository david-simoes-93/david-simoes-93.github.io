import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndieDevCareer } from './indie-dev-career';

describe('IndieDevCareer', () => {
  let component: IndieDevCareer;
  let fixture: ComponentFixture<IndieDevCareer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndieDevCareer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndieDevCareer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
