import { Component, Output, EventEmitter } from '@angular/core';
import { GameConfig, GameDifficulty } from '../+game';

@Component({
  moduleId: module.id,
  selector: 'new-game',
  templateUrl: 'new-game.component.html',
  styleUrls: ['new-game.component.css'],
})
export class NewGameComponent {

  @Output() onGameCreated = new EventEmitter<GameConfig>();

  model = new GameConfig(25, 25, 25);
  gameDifficulty = GameDifficulty; //make enum accessible in template;

  private difficultyConfigMap = {};

  constructor(){
    this.difficultyConfigMap[GameDifficulty.Beginner] = new GameConfig(10, 10, 10); 
    this.difficultyConfigMap[GameDifficulty.Intermediate] = new GameConfig(16, 16, 40); 
    this.difficultyConfigMap[GameDifficulty.Expert] = new GameConfig(30, 30, 100); 
  }

  buttonClick(difficulty: GameDifficulty){

    let gameConfig : GameConfig = difficulty == GameDifficulty.Custom
      ? this.model 
      : this.difficultyConfigMap[difficulty];
    
    this.onGameCreated.emit(gameConfig);
  }
}
