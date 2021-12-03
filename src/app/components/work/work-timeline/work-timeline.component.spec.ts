import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTimelineComponent } from './work-timeline.component';

describe('WorkTimelineComponent', () => {
  let component: WorkTimelineComponent;
  let fixture: ComponentFixture<WorkTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
