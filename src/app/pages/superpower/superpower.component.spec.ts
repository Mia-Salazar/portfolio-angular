import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SuperpowerComponent } from './superpower.component';

describe('SuperpowerComponent', () => {
  let component: SuperpowerComponent;
  let fixture: ComponentFixture<SuperpowerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperpowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperpowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
