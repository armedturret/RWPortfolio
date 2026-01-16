import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assn1Component } from './assn1.component';

describe('Assn1Component', () => {
  let component: Assn1Component;
  let fixture: ComponentFixture<Assn1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Assn1Component]
    });
    fixture = TestBed.createComponent(Assn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
