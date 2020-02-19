import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekersComponent } from './jobseekers.component';

describe('JobseekersComponent', () => {
  let component: JobseekersComponent;
  let fixture: ComponentFixture<JobseekersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
