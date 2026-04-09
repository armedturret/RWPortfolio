import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assn5Component } from './assn5.component';

describe('Assn5Component', () => {
  let component: Assn5Component;
  let fixture: ComponentFixture<Assn5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [Assn5Component]
});
    fixture = TestBed.createComponent(Assn5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
