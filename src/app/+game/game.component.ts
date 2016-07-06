import { Component, OnInit } from '@angular/core';
import { NewGameComponent } from '../new-game';

@Component({
  moduleId: module.id,
  selector: 'game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css'],
  directives: [NewGameComponent]
})
export class GameComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  
  onGameCreated($event){
      console.log($event);
  }
}
