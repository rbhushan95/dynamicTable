import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentallocationComponent } from './rentallocation.component';

describe('RentallocationComponent', () => {
  let component: RentallocationComponent;
  let fixture: ComponentFixture<RentallocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentallocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
