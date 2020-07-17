
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
  myEvent = new Event('click', {bubbles: true});

  ngOnInit(): void {
    
    this.createFirstLoop();
  }

  createFirstLoop = () => {
    let btn = document.getElementById('test');
    let box = btn.getBoundingClientRect(),
          coordX = box.left + (box.right - box.left) / 2,
          coordY = box.top + (box.bottom - box.top) / 2;
    this.secondaryVideoElem = document.getElementById('secondary-loop');
    // btn.addEventListener('click', e =>{
    //   console.log(e)
      
    // })

    
    if(this.secondaryVideoElem){
      setTimeout(() => {
        this.simulateMouseEvent (btn, "mousedown", coordX, coordY);
        this.simulateMouseEvent (btn, "mouseup", coordX, coordY);
        this.simulateMouseEvent (btn, "click", coordX, coordY);
        // btn.dispatchEvent(this.myEvent)
        // document.getElementById('test').click()
            
      }, 1200);
      
      this.ge.initialInterval = setInterval(() => {
        this.currentTime = Math.round(this.secondaryVideoElem.currentTime);
        if(this.currentTime == this.endOfFirstLoopSec){
          this.secondaryVideoElem.currentTime = 3;
        }
      }, 1000)
    }
  }

  videoClicked = (event) => {
    console.log(event)
    this.secondaryVideoElem.play();
  }


  simulateMouseEvent = (element, eventName, coordX, coordY) => {
    element.dispatchEvent(new MouseEvent(eventName, {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: coordX,
      clientY: coordY,
      button: 0
    }));
  };
  
  
  

}
