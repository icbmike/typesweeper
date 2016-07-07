import { Component, OnInit, Input } from '@angular/core';
import { GameConfig } from '../+game';

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
    this.tiles = new Array<Array<Tile>>(width);
  }

  isTileMine(x : number, y: number) {
    return this.tiles[x][y].isMine;
  }
}

class Tile {
  isRevealed = false;
  isMine = false;
  numAdjacentMines: number;
}