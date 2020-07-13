import { GlobalElementsService } from './../app/global-elements.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent implements OnInit {

  constructor(public ge: GlobalElementsService) { }
  secondaryVideoElem;
  currentTime = 0;
  initialInterval;
  endOfFirstLoopSec = 20;
  ngOnInit(): void {
    this.createFirstLoop();
  }

  createFirstLoop = () => {
    this.secondaryVideoElem = document.getElementById('secondary-loop');
    // this.ge.secondaryVideoObj.src = this.ge.secondaryVideoObj.src + "&output=embed";
    // window.location.replace(this.ge.secondaryVideoObj.src)
    if(this.secondaryVideoElem){
      setTimeout(() => {
          this.secondaryVideoElem.play();   
      }, 1000);
      
      this.ge.initialInterval = setInterval(() => {
        this.currentTime = Math.round(this.secondaryVideoElem.currentTime);
        if(this.currentTime == this.endOfFirstLoopSec){
          this.secondaryVideoElem.currentTime = 3;
        }
      }, 1000)
    }
  }

  

}
