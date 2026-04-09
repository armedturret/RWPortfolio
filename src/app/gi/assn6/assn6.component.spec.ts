import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assn6Component } from './assn6.component';

describe('Assn6Component', () => {
  let component: Assn6Component;
  let fixture: ComponentFixture<Assn6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assn6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assn6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
