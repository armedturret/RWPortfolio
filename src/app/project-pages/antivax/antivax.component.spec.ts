import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntivaxComponent } from './antivax.component';

describe('AntivaxComponent', () => {
  let component: AntivaxComponent;
  let fixture: ComponentFixture<AntivaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntivaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntivaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
