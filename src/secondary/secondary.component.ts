import { GlobalElementsService } from './../app/global-elements.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent implements OnInit {

  constructor(public ge: GlobalElementsService) { }
  mainVideoElem;
  currentTime = 0;
  initialInterval;
  endOfFirstLoopSec = 20;
  ngOnInit(): void {
    this.createFirstLoop();
  }

  createFirstLoop = () => {
    this.mainVideoElem = document.getElementById('secondary-loop');
    if(this.mainVideoElem){
      setTimeout(() => {
        this.mainVideoElem.play();
      }, 1000);
      this.ge.initialInterval = setInterval(() => {
        this.currentTime = Math.round(this.mainVideoElem.currentTime);
        if(this.currentTime == this.endOfFirstLoopSec){
          this.mainVideoElem.currentTime = 3;
        }
      }, 1000)
    }
  }

  

}
