import { Component } from '@angular/core';
import { NewGameComponent, NewGame } from '../new-game';
import { MinesweeperBoardComponent } from '../minesweeper-board'

@Component({
  moduleId: module.id,
  selector: 'game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css'],
  directives: [NewGameComponent, MinesweeperBoardComponent]
})
export class GameComponent {

  gameStarted = false;
  gameConfig : NewGame;

  onGameCreated(gameConfig: NewGame){
      this.gameConfig = gameConfig;
      this.gameStarted = true;
  }
}
