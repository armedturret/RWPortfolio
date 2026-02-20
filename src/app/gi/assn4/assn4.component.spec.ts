import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assn4Component } from './assn4.component';

describe('Assn4Component', () => {
  let component: Assn4Component;
  let fixture: ComponentFixture<Assn4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Assn4Component]
    });
    fixture = TestBed.createComponent(Assn4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
