import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedPhotonMapComponent } from './advanced-photon-map.component';

describe('AdvancedPhotonMapComponent', () => {
  let component: AdvancedPhotonMapComponent;
  let fixture: ComponentFixture<AdvancedPhotonMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [AdvancedPhotonMapComponent]
});
    fixture = TestBed.createComponent(AdvancedPhotonMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
