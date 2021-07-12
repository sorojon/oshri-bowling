import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Frame } from '../frame';
@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  
  constructor() {
    
   }
   @Input() framesArr : Frame[]=[];
   @Input() currentFrame: number=0;
   @Input() totalScore: number=0;
   @Input() gameOver: boolean=false;
   @Output() restGame = new EventEmitter<string>();
  ngOnInit(): void {
    console.log(this.framesArr[0].active);
  }
onResetGame() {
  this.restGame.emit();
}
}
