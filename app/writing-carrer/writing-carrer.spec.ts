import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingCarrer } from './writing-carrer';

describe('WritingCarrer', () => {
  let component: WritingCarrer;
  let fixture: ComponentFixture<WritingCarrer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritingCarrer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritingCarrer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
