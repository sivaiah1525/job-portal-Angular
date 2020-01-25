import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalcardComponent } from './technicalcard.component';

describe('TechnicalcardComponent', () => {
  let component: TechnicalcardComponent;
  let fixture: ComponentFixture<TechnicalcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
