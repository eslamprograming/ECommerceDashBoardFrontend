/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainProdeuctComponent } from './MainProdeuct.component';

describe('MainProdeuctComponent', () => {
  let component: MainProdeuctComponent;
  let fixture: ComponentFixture<MainProdeuctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProdeuctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProdeuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
