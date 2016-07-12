import { Component } from '@angular/core';
import { GameConfig } from './game-config';
import { NewGameComponent } from '../new-game';
import { MinesweeperBoardComponent } from '../minesweeper-board';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css'],
  directives: [NewGameComponent, MinesweeperBoardComponent, ROUTER_DIRECTIVES]
})
export class GameComponent {

  gameStarted = false;
  gameConfig : GameConfig;

  onGameCreated(gameConfig: GameConfig){
      this.gameConfig = gameConfig;
      this.gameStarted = true;
  }

  newGame(){
    this.gameStarted = false;
  }
}
