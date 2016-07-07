export class GameConfig {
    constructor(
        public width: number, 
        public height: number, 
        public mines: number) 
        {}
}

export enum GameDifficulty{
  Beginner,
  Intermediate,
  Expert,
  Custom
}