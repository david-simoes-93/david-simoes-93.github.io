import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndieDevCarrer } from './indie-dev-carrer';

describe('IndieDevCarrer', () => {
  let component: IndieDevCarrer;
  let fixture: ComponentFixture<IndieDevCarrer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndieDevCarrer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndieDevCarrer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
