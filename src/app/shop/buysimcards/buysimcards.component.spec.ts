/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuysimcardsComponent } from './buysimcards.component';

describe('BuysimcardsComponent', () => {
  let component: BuysimcardsComponent;
  let fixture: ComponentFixture<BuysimcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuysimcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuysimcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
