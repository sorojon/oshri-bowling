import { Component, OnInit } from '@angular/core';
import { Frame } from './frame';

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
  constructor() {}

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.frames.push(new Frame([0, 0], 0, '', 0, false));
    }
  }

  onUserSelectPoint(userNumberSelected: number) {
    this.frames[this.currentFrame].active = true;
    this.frames[this.currentFrame].rolls[this.currentRoll] = userNumberSelected;
    this.checkBonus();
    this.checkPointsToShow();
    this.totalPointsCalculator();
    this.numeratorFunction();
  }

  numeratorFunction() {
    if (this.currentRoll < 1) {
      this.currentRoll++;
    }
    else {
      this.currentRoll = 0;
      this.currentFrame++;
    }
    if (this.frames[this.currentFrame].bonus == 'strike') {
      if (this.currentFrame < 9) {
        this.currentRoll = 0;
        this.currentFrame++;
      }
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
    if (this.currentRoll == 1 || this.frames[this.currentFrame].bonus == 'strike') {
      this.frames[this.currentFrame].totalPoints = this.totalPoints + this.frames[this.currentFrame].rolls[0] + this.frames[this.currentFrame].rolls[1];
      this.totalPoints = this.frames[this.currentFrame].totalPoints;
    }
  }
}

