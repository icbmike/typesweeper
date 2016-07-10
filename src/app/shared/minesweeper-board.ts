import * as _ from 'lodash';

export class MinesweeperBoard {

  tiles: Tile[][];
  private _isInitialized = false;

  constructor(public numMines: number, public width: number, public height: number){
    // generate tiles
    this.tiles = _.map(_.range(width), i => _.map(_.range(height), j => new Tile()));
  }

  isInitialized(): boolean {
    return this._isInitialized
  }

  initialize(x: number, y: number){
    this.populateMines(x, y);

    this.setNumAdjacentMines();

    this._isInitialized = true;
  }

  private setNumAdjacentMines(){
    _.forEach(this.tiles, (tileRow, i) => {
      _.forEach(tileRow, (tile, j) => {
        tile.numAdjacentMines = tile.isMine
          ? 0
          : this.calculateNumAdjacentMines(i, j);
      });
    });
  }

  private calculateNumAdjacentMines(x : number, y : number) : number {
    var adjacentMines = 0;

    for (var i = -1; i <= 1; i++) {
      let x1 = x + i;

      if(x1 < 0 || x1 >= this.width){
        continue;
      }

      for (var j = -1; j <= 1; j++) {
        let y1 = y + j;
        
        if(y1 < 0 || y1 >= this.height){
          continue;
        }

        if(this.tiles[x1][y1].isMine){
          adjacentMines++;
        }
      }
    }

    return adjacentMines;
  }

  private populateMines(startingX: number, startingY: number){
    let numMines = this.numMines;

    while(numMines > 0){
      let x = Math.floor(Math.random() * this.width),
          y = Math.floor(Math.random() * this.height);

      let matchesStartingTile = x == startingX && y == startingY;

      if(!this.tiles[x][y].isMine && !matchesStartingTile){
        this.tiles[x][y].isMine = true;
        numMines--;
      }
    }
  }
}

export class Tile {
  isRevealed = false;
  isMine = false;
  numAdjacentMines: number;
  hasFlag = false;
}