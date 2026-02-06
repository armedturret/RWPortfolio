import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assn3Component } from './assn3.component';

describe('Assn3Component', () => {
  let component: Assn3Component;
  let fixture: ComponentFixture<Assn3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Assn3Component]
    });
    fixture = TestBed.createComponent(Assn3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
