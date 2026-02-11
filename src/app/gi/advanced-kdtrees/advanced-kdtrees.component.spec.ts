import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedKdtreesComponent } from './advanced-kdtrees.component';

describe('AdvancedKdtreesComponent', () => {
  let component: AdvancedKdtreesComponent;
  let fixture: ComponentFixture<AdvancedKdtreesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancedKdtreesComponent]
    });
    fixture = TestBed.createComponent(AdvancedKdtreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
