import { Component, OnInit, Input } from '@angular/core';
import { GameConfig } from '../+game';

import { MinesweeperBoard, Tile } from '../shared'
import { BoardTileComponent } from '../board-tile';
import { Observable, Subscription } from 'rxjs/Rx';
import { TimerFormatPipe} from './timer-formatter.pipe'

@Component({
  moduleId: module.id,
  selector: 'minesweeper-board',
  templateUrl: 'minesweeper-board.component.html',
  styleUrls: ['minesweeper-board.component.css'],
  directives: [BoardTileComponent],
  pipes: [TimerFormatPipe]
})
export class MinesweeperBoardComponent implements OnInit {

  @Input() gameConfig: GameConfig;

  board: MinesweeperBoard
  newGameImageSrc: string

  ngOnInit() {
    this.onNewGame();
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

  onNewGame(){
    this.newGameImageSrc = '/assets/smiley.png';
    this.startTimer();
    this.board = new MinesweeperBoard(this.gameConfig.mines, this.gameConfig.width, this.gameConfig.height);
  }

  private timerObservable : Subscription = null;

  timer: number = 0;

  startTimer(){
    if(this.timerObservable != null){
      this.timerObservable.unsubscribe();
    }

    this.timerObservable = Observable.interval(1000)
                              .subscribe(val => {
                                this.timer = val;
                              });
  }

  gameWon(){
    alert('You win');
    this.newGameImageSrc = '/assets/sunglasses.png';
    this.timerObservable.unsubscribe();
  }

  gameOver(){
    this.board.revealAllTiles();
    this.newGameImageSrc = '/assets/dead.png';
    this.timerObservable.unsubscribe();
  }

  onToggleFlag(tile: Tile, x: number, y:number){
    tile.hasFlag = !tile.hasFlag;
    if(this.board.isGameWon()){
      this.gameWon();  
    }
  }
}
