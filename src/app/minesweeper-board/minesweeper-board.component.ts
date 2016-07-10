import { Component, OnInit, Input } from '@angular/core';
import { GameConfig } from '../+game';

import { MinesweeperBoard, Tile } from '../shared'
import { BoardTileComponent } from '../board-tile';

@Component({
  moduleId: module.id,
  selector: 'minesweeper-board',
  templateUrl: 'minesweeper-board.component.html',
  styleUrls: ['minesweeper-board.component.css'],
  directives: [BoardTileComponent]
})
export class MinesweeperBoardComponent implements OnInit {

  @Input() gameConfig: GameConfig;

  board: MinesweeperBoard

  ngOnInit() {
    //Build board
    this.board = new MinesweeperBoard(this.gameConfig.mines, this.gameConfig.width, this.gameConfig.height);
  }

  onTileRevealed(tile: Tile, x: number, y: number){
    if(!this.board.isInitialized()){
      this.board.initialize(x, y);
    }

    tile.isRevealed = true;

    if(tile.isMine){
      this.gameOver();
    }else if(tile.numAdjacentMines == 0){
      this.board.revealTile(x, y);
    }
  }

  gameOver(){
    //reveal all tiles
    this.board.revealAllTiles();
  }

  onToggleFlag(tile: Tile, x: number, y:number){
    tile.hasFlag = !tile.hasFlag;
    if(this.board.isGameWon()){
      alert('You win');
    }
  }
}
