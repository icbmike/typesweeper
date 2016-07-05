import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { MinesweeperBoardComponent } from './minesweeper-board';

@Component({
  moduleId: module.id,
  directives: [MinesweeperBoardComponent, ROUTER_DIRECTIVES],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
