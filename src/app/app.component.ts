import { Component } from '@angular/core';
import { MinesweeperBoardComponent } from './minesweeper-board';

@Component({
  moduleId: module.id,
  directives: [MinesweeperBoardComponent],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
