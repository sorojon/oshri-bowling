import { Component, OnInit } from '@angular/core';
import { Frame } from './frame';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  frames: Frame[] = [];
  currentFrame = 0;
  currentRoll = 0;
  totalPoints = 0;
  gameOver = false;

  userName = '';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['player'];
    for (let index = 0; index < 10; index++) {
      this.frames.push(new Frame([0, 0, 0], 0, '', 0, false));
    }
    console.log(this.frames)
  }

  onUserSelectPoint(userNumberSelected: number) {
    this.frames[this.currentFrame].active = true;
    this.frames[this.currentFrame].rolls[this.currentRoll] = userNumberSelected;
    this.checkBonus();
    this.checkPointsToShow();
    this.totalPointsCalculator();
    this.goForward();
  }

  goForward() {
    //for the last frame and last roll(bonus roll)
    if(this.currentRoll==2){
      this.gameOver = true;
    }
    
    if (this.currentRoll < 1) {
      this.currentRoll++;
    }
    else {
      if(this.currentFrame==9 && this.frames[this.currentFrame-1].bonus ==''){
        this.gameOver = true;
        return;
      }else if(this.currentFrame==9 && this.frames[this.currentFrame].bonus ==''){
        this.gameOver = true;
        return;
      }
      else if(this.currentFrame!=9){
        this.currentRoll = 0;
      }
      
      if (this.currentFrame < 9) {
        this.currentFrame++;
      }
    }
    if (this.frames[this.currentFrame].bonus == 'strike') {
      if (this.currentFrame < 9) {
        this.currentRoll = 0;
        this.currentFrame++;
      }
      else if(this.currentFrame==9){
        this.currentRoll=2;
      }
    }
    if (this.currentFrame==9 && this.frames[this.currentFrame].bonus == 'spare') {
      this.currentRoll=2;
    }
  }

  checkBonus() {
    if ((this.currentRoll == 1) && (this.frames[this.currentFrame].rolls[0] + this.frames[this.currentFrame].rolls[1]) == 10) {
      this.frames[this.currentFrame].bonus = 'spare';
    } else if (this.frames[this.currentFrame].rolls[0] == 10) {
      this.frames[this.currentFrame].bonus = 'strike';
    }
  }

 

  checkPointsToShow() {
    this.points = [];
    for (let index = 0; index < 10; index++) {
      if ((this.frames[this.currentFrame].rolls[this.currentRoll] + index) < 11) {
        this.points.push(index);
      }
    }
    if (this.currentRoll > 0 || this.frames[this.currentFrame].bonus == 'strike') {
      this.points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
  }

  totalPointsCalculator() {
    //previous bonus Calculation
    if ((this.currentFrame - 1) >= 0) {
      if (this.frames[this.currentFrame - 1].bonus != '') {
        if ((this.currentRoll == 0) && this.frames[this.currentFrame - 1].bonus == 'spare') {
          this.frames[this.currentFrame - 1].totalPoints = this.frames[this.currentFrame - 1].totalPoints + this.frames[this.currentFrame].rolls[0];
          this.totalPoints = this.frames[this.currentFrame - 1].totalPoints;
        }
        if (((this.currentRoll == 1) && this.frames[this.currentFrame - 1].bonus == 'strike') || ((this.currentRoll == 0) && (this.frames[this.currentFrame].bonus == 'strike') && (this.frames[this.currentFrame - 1].bonus == 'strike'))) {
          this.frames[this.currentFrame - 1].totalPoints = this.frames[this.currentFrame - 1].totalPoints + this.frames[this.currentFrame].rolls[0] + this.frames[this.currentFrame].rolls[1];
          this.totalPoints = this.frames[this.currentFrame - 1].totalPoints;
        }
      }
    }
    if (this.currentRoll == 1 || this.frames[this.currentFrame].bonus == 'strike') {
      this.frames[this.currentFrame].totalPoints = this.totalPoints + this.frames[this.currentFrame].rolls[0] + this.frames[this.currentFrame].rolls[1];
      this.totalPoints = this.frames[this.currentFrame].totalPoints;
    }
    else if (this.currentRoll == 2 || this.frames[this.currentFrame].bonus == 'spare') {
      this.frames[this.currentFrame].totalPoints = this.totalPoints + this.frames[this.currentFrame].rolls[2];
      this.totalPoints = this.frames[this.currentFrame].totalPoints;
    }
  }
  newGame(){
    this.frames = [];
    this.currentFrame = 0;
    this.currentRoll = 0;
    this.totalPoints = 0;
    this.gameOver = false;
    for (let index = 0; index < 10; index++) {
      this.frames.push(new Frame([0, 0, 0], 0, '', 0, false));
    }
  }

}

