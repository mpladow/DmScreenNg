import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterQuickaddComponent } from './character-quickadd.component';

describe('CharacterQuickaddComponent', () => {
  let component: CharacterQuickaddComponent;
  let fixture: ComponentFixture<CharacterQuickaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterQuickaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterQuickaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
