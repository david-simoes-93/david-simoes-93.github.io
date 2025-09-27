import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchingCarrer } from './researching-carrer';

describe('ResearchingCarrer', () => {
  let component: ResearchingCarrer;
  let fixture: ComponentFixture<ResearchingCarrer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchingCarrer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchingCarrer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
