import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenDocumentsComponent } from './screen-documents.component';

describe('ScreenDocumentsComponent', () => {
  let component: ScreenDocumentsComponent;
  let fixture: ComponentFixture<ScreenDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
