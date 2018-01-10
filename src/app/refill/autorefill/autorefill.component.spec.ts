/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AutorefillComponent } from './autorefill.component';

describe('AutorefillComponent', () => {
  let component: AutorefillComponent;
  let fixture: ComponentFixture<AutorefillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorefillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
