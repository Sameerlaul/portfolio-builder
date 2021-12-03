import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStackComponent } from './icon-stack.component';

describe('IconStackComponent', () => {
  let component: IconStackComponent;
  let fixture: ComponentFixture<IconStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
