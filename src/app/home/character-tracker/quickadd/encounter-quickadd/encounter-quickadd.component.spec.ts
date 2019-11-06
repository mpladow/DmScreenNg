import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterQuickaddComponent } from './encounter-quickadd.component';

describe('EncounterQuickaddComponent', () => {
  let component: EncounterQuickaddComponent;
  let fixture: ComponentFixture<EncounterQuickaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterQuickaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterQuickaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
