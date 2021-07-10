import { Component, OnInit, Input } from '@angular/core';
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
  ngOnInit(): void {
    console.log(this.framesArr[0].active);
  }

}
