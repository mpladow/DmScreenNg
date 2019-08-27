import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterInitiativeDialogComponent } from './encounter-initiative-dialog.component';

describe('EncounterInitiativeDialogComponent', () => {
  let component: EncounterInitiativeDialogComponent;
  let fixture: ComponentFixture<EncounterInitiativeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterInitiativeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterInitiativeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
