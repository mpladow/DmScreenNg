import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualEditorComponent } from './manual-editor.component';

describe('ManualEditorComponent', () => {
  let component: ManualEditorComponent;
  let fixture: ComponentFixture<ManualEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
