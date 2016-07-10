/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BoardTileComponent } from './board-tile.component';

describe('Component: BoardTile', () => {
  it('should create an instance', () => {
    let component = new BoardTileComponent();
    expect(component).toBeTruthy();
  });
});
