import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareProjects } from './software-projects';

describe('SoftwareProjects', () => {
  let component: SoftwareProjects;
  let fixture: ComponentFixture<SoftwareProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
