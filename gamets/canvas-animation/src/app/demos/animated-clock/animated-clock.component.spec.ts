import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedClockComponent } from './animated-clock.component';

describe('AnimatedClockComponent', () => {
  let component: AnimatedClockComponent;
  let fixture: ComponentFixture<AnimatedClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
