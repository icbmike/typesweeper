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
  @Output() tileRevealed = new EventEmitter<Tile>();
  @Output() toggleFlag = new EventEmitter<Tile>();

  onMouseDown($event: MouseEvent){
    $event.preventDefault();

    if(!this.tile.isRevealed){
      switch($event.which){
        case 1: // left button
        if(!this.tile.hasFlag){
          this.revealTile();
        }
        break;
        case 3: // right button
        this.plantFlag();
        break;
      }
    }
  }

  revealTile(){
    this.tileRevealed.emit(this.tile);    
  }

  plantFlag(){
   this.toggleFlag.emit(this.tile);
  }
}
