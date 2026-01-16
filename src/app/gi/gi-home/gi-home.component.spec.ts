import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiHomeComponent } from './gi-home.component';

describe('GiHomeComponent', () => {
  let component: GiHomeComponent;
  let fixture: ComponentFixture<GiHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiHomeComponent]
    });
    fixture = TestBed.createComponent(GiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
