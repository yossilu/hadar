import { GlobalElementsService } from './../app/global-elements.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(public ge: GlobalElementsService) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
   
  }



  playVid = () => {
    console.log("playing vid")
    this.ge.enterGif = './assets/enter_checked.gif'
    setTimeout(() => {
      
      this.ge.secondaryVideoObj.isActive = false;
      clearInterval(this.ge.initialInterval);
      this.ge.secondaryVideoElem = document.getElementById('secondary-loop');
      this.ge.secondaryVideoElem.currentTime = 20;
      this.ge.mainVideoElem.currentTime = this.ge.mainVideoObj.currentTime;
      setTimeout(() => {
          console.log(this.ge.mainVideoElem)
          this.ge.mainVideoElem.play();
          // this.ge.mainVideoElem.style.zIndex = 6;
          
          this.ge.mainVideoObj.isActive = true;
      }, 1600);
    }, 400);

    
   
  }

  fomClicked = (gifName) => {
    this.ge.fomGifObj.fomCounter++;
    if(gifName == 'father'){
      this.ge.fomGifObj.father = './assets/father_checked.gif'
    } else {
      this.ge.fomGifObj.mother = './assets/mother_checked.gif'
    }

    setTimeout(() => {
      this.ge.backgroundGifObj.isActive = false;
      this.ge.fomGifObj.isActive = false;
      this.ge.mainVideoObj.isActive = true;
      this.ge.fomGifObj.mother = './assets/mother_unchecked.gif'
      this.ge.fomGifObj.father = './assets/father_unchecked.gif'

      if(Math.round(this.ge.mainVideoElem.currentTime) > 180){
        
      } else {
        if(this.ge.fomGifObj.fomCounter == 3){
          this.ge.mainVideoElem.currentTime = 107;
          this.ge.fomGifObj.mother = './assets/mother_unchecked.gif'
          this.ge.fomGifObj.father = './assets/father_unchecked.gif'
            
          } 
          if(this.ge.fomGifObj.fomCounter == 2 && !this.ge.homGifObj.homework.includes('unchecked')){
            this.ge.mainVideoElem.currentTime = 84;
          } 
          // if(this.ge.fomGifObj.fomCounter == 2 && this.ge.homGifObj.homework.includes('unchecked')) {
          //   this.ge.mainVideoElem.currentTime = 115;
          // }
          if(this.ge.fomGifObj.fomCounter == 1) {
            this.ge.mainVideoElem.currentTime = 28.3;
          }
          this.ge.mainVideoElem.play();
      }
      
      
      
    }, 400);
    

  }

  lofClicked = (gifName) => {
    if(gifName == 'lie'){
      this.ge.lofGifObj.lie = './assets/lie_checked.gif'
    } else {
      this.ge.lofGifObj.filter = './assets/filter_checked.gif'
    }

    setTimeout(() => {
      this.ge.backgroundGifObj.isActive = false;
      this.ge.lofGifObj.isActive = false;
      this.ge.mainVideoObj.isActive = true;
      if(gifName == 'lie'){
        this.ge.mainVideoElem.currentTime = 118;
      } else {
        this.ge.mainVideoElem.currentTime = 123.78;
      }
      
      this.ge.mainVideoElem.play();
    }, 400);
  }


  homClicked = (gifName) => {
    if(gifName == 'homework'){
      this.ge.homGifObj.homework = './assets/homework_checked.gif'
      this.ge.mainVideoElem.currentTime = 50;
    } else {
      this.ge.homGifObj.music = './assets/music_checked.gif'
      this.ge.mainVideoElem.currentTime = 87;
    }



    setTimeout(() => {
      if(gifName == 'homework'){
        this.ge.homGifObj.homework = './assets/homework_checked.gif'
        this.ge.mainVideoElem.currentTime = 50;
      } else {
        this.ge.homGifObj.music = './assets/music_checked.gif'
        this.ge.mainVideoElem.currentTime = 87;
      }
      this.ge.backgroundGifObj.isActive = false;
      this.ge.homGifObj.isActive = false;
      this.ge.mainVideoObj.isActive = true;
      this.ge.mainVideoElem.play();
    }, 400);
  }

  myselfClicked = () => {
    this.ge.myselfGifObj.src = './assets/myself_checked.gif'
    this.ge.mainVideoElem.currentTime = 195;
    
    setTimeout(() => {
      this.ge.myselfGifObj.isActive = false;
      this.ge.backgroundGifObj.isActive = false;
      this.ge.fomGifObj.isActive = false;
      this.ge.mainVideoObj.isActive = true;
      
      this.ge.mainVideoElem.play();
    }, 600);
    
  }


  replayClick = () => {
    clearInterval(this.ge.mainVidInterval);
    location.reload();
  }


}
