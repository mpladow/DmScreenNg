import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenManualComponent } from './screen-manual.component';

describe('ManualComponent', () => {
  let component: ScreenManualComponent;
  let fixture: ComponentFixture<ScreenManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
