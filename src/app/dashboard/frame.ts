
export class Frame {
    public rolls: number[];
    public score: number;
    public bonus: string;
    public totalPoints: number;
    public active: boolean;

  constructor(rolls: number[], score: number, bonus: string,totalPoints: number,active: boolean) {
    this.rolls= rolls,
    this.score= score,
    this.bonus= bonus,
    this.totalPoints = totalPoints;
    this.active = active
  }

}


export class User {
    public fullName: string;
    constructor(fullName: string) {
    this.fullName = fullName;
     }
}