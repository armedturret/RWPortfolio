import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assn7Component } from './assn7.component';

describe('Assn7Component', () => {
  let component: Assn7Component;
  let fixture: ComponentFixture<Assn7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assn7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assn7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
