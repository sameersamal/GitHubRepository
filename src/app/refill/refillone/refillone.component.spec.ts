/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RefilloneComponent } from './refillone.component';

describe('RefilloneComponent', () => {
  let component: RefilloneComponent;
  let fixture: ComponentFixture<RefilloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefilloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefilloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
