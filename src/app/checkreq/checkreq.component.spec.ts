import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckreqComponent } from './checkreq.component';

describe('CheckreqComponent', () => {
  let component: CheckreqComponent;
  let fixture: ComponentFixture<CheckreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
