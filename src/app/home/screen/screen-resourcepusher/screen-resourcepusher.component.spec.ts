import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenResourcepusherComponent } from './screen-resourcepusher.component';

describe('ScreenResourcepusherComponent', () => {
  let component: ScreenResourcepusherComponent;
  let fixture: ComponentFixture<ScreenResourcepusherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenResourcepusherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenResourcepusherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
