/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AirtimecardsComponent } from './airtimecards.component';

describe('AirtimecardsComponent', () => {
  let component: AirtimecardsComponent;
  let fixture: ComponentFixture<AirtimecardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirtimecardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtimecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
