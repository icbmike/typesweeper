import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Tile} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'board-tile',
  templateUrl: 'board-tile.component.html',
  styleUrls: ['board-tile.component.css']
})
export class BoardTileComponent {

  @Input() tile: Tile;
  @Output() onTileRevealed = new EventEmitter<Tile>();

  onMouseDown($event: MouseEvent){
    $event.preventDefault();

    switch($event.which){
      case 1: //left button
      this.revealTile();
      case 3: //right button
      this.plantFlag();
    }
  }

  revealTile(){
    this.tile.isRevealed = true;
    this.onTileRevealed.emit(this.tile);
  }

  plantFlag(){

  }
}
