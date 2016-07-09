import { Component, OnInit, Input } from '@angular/core';
import { GameConfig } from '../+game';

import { MinesweeperBoard } from '../shared'

import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'minesweeper-board',
  templateUrl: 'minesweeper-board.component.html',
  styleUrls: ['minesweeper-board.component.css']
})
export class MinesweeperBoardComponent implements OnInit {

  @Input() gameConfig: GameConfig;

  board: MinesweeperBoard

  ngOnInit() {
    //Build board
    this.board = new MinesweeperBoard(this.gameConfig.mines, this.gameConfig.width, this.gameConfig.height);
  }
}
