/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NewGameComponent } from './new-game.component';

describe('Component: NewGame', () => {
  it('should create an instance', () => {
    let component = new NewGameComponent();
    expect(component).toBeTruthy();
  });
});
