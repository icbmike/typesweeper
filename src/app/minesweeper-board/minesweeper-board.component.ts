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
    
  } 
}
