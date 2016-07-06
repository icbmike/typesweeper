import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/common';
import { NewGame, GameDifficulty } from './new-game';

@Component({
  moduleId: module.id,
  selector: 'new-game',
  templateUrl: 'new-game.component.html',
  styleUrls: ['new-game.component.css'],
})
export class NewGameComponent {

  @Output() onGameCreated = new EventEmitter<NewGame>();

  model = new NewGame(25, 25, 25);
  gameDifficulty = GameDifficulty; //make enum accessible in template;

  private difficultyConfigMap = {};

  constructor(){
    this.difficultyConfigMap[GameDifficulty.Beginner] = new NewGame(10, 10, 10); 
    this.difficultyConfigMap[GameDifficulty.Intermediate] = new NewGame(16, 16, 40); 
    this.difficultyConfigMap[GameDifficulty.Expert] = new NewGame(30, 30, 100); 
  }

  buttonClick(difficulty: GameDifficulty){

    let gameConfig : NewGame = difficulty == GameDifficulty.Custom
      ? this.model 
      : this.difficultyConfigMap[difficulty];
    
    this.onGameCreated.emit(gameConfig);    
  }
}
