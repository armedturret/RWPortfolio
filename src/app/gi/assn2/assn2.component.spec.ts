import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assn2Component } from './assn2.component';

describe('Assn2Component', () => {
  let component: Assn2Component;
  let fixture: ComponentFixture<Assn2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Assn2Component]
    });
    fixture = TestBed.createComponent(Assn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
