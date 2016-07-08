import { Component, OnInit, Input } from '@angular/core';
import { GameConfig } from '../+game';

import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'minesweeper-board',
  templateUrl: 'minesweeper-board.component.html',
  styleUrls: ['minesweeper-board.component.css']
})
export class MinesweeperBoardComponent implements OnInit {

  @Input() gameConfig: GameConfig;

  ngOnInit() {
    //Build board
  }
}

class MinesweeperBoard {

  private tiles: Tile[][];

  constructor(public numMines: number, public width: number, public height: number){
    this.tiles = _.map(_.range(width), i => _.map(_.range(height), j => new Tile()));

    //populate mines
    while(numMines > 0){
      let x = Math.floor(Math.random() * width),
          y = Math.floor(Math.random() * height);

      if(!this.tiles[x][y].isMine){
        this.tiles[x][y].isMine = true;
        numMines--;
      }
    }
  }
}

class Tile {
  isRevealed = false;
  isMine = false;
  numAdjacentMines: number;
}