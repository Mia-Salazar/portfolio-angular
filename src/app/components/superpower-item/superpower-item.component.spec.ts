import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperpowerItemComponent } from './superpower-item.component';

describe('SuperpowerItemComponent', () => {
  let component: SuperpowerItemComponent;
  let fixture: ComponentFixture<SuperpowerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperpowerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperpowerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
