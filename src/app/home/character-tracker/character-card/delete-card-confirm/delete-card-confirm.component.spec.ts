import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCardConfirmComponent } from './delete-card-confirm.component';

describe('DeleteCardConfirmComponent', () => {
  let component: DeleteCardConfirmComponent;
  let fixture: ComponentFixture<DeleteCardConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCardConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCardConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
