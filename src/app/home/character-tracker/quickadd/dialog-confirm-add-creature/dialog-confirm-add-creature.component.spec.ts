import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmAddCreatureComponent } from './dialog-confirm-add-creature.component';

describe('DialogConfirmAddCreatureComponent', () => {
  let component: DialogConfirmAddCreatureComponent;
  let fixture: ComponentFixture<DialogConfirmAddCreatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConfirmAddCreatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmAddCreatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
