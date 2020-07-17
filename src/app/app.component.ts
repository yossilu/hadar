import { GlobalElementsService } from './global-elements.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'hadar';
  firstVisited = false;
  secondVisited = false;
  thirdVisited = false;
  endCredit = false;
  
  constructor(public ge: GlobalElementsService) {}

  ngOnInit() {
    this.ge.mainVideoElem = document.getElementById('main-video');
    this.ge.mainVideoElem.pause();
    this.checkMainTime();
  }  

  

  ngDoCheck(){
    if(this.ge.endSceneGif.isActive && !this.endCredit){
      this.endCredit = true;
      setTimeout(() => {
        this.ge.endSceneGif.isActive = false;

        setTimeout(() => {
          this.ge.replayGifObj.isActive = true;
        }, 800);
      }, 4800);
      
    }
  }

  checkMainTime = () => {
    this.ge.mainVidInterval = setInterval(() => {
      console.log(Math.round(this.ge.mainVideoElem.currentTime))
      if(Math.round(this.ge.mainVideoElem.currentTime) == 26){
        this.ge.mainVideoElem.pause();
        this.ge.backgroundGifObj.isActive = true;
        this.ge.fomGifObj.isActive = true;

        this.ge.mainVideoObj.isActive = false;
        this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/second-loop.mp4'
      }


      if(Math.round(this.ge.mainVideoElem.currentTime) > 36 && Math.round(this.ge.mainVideoElem.currentTime) <= 38 && !this.firstVisited ){
        this.firstVisited = true;
        setTimeout(() => {
          this.ge.mainVideoElem.pause();
          
            this.ge.mainVideoObj.isActive = false;
            this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/third-loop.mp4';

            setTimeout(() => {
                this.ge.backgroundGifObj.isActive = true;
                this.ge.homGifObj.isActive = true;
            }, 1500);
          
          
          
        }, 450);
        
      } 

      if(Math.round(this.ge.mainVideoElem.currentTime) == 67 && (!this.ge.homGifObj.music.includes('unchecked') && !this.ge.homGifObj.homework.includes('unchecked'))){
        
        console.log("both checked")
        this.ge.mainVideoElem.pause();
        this.ge.backgroundGifObj.isActive = true;
        this.ge.fomGifObj.isActive = true;
        
        this.ge.mainVideoObj.isActive = false;
        this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/fourth-loop.mp4'
      }


      if(Math.round(this.ge.mainVideoElem.currentTime) == 67 && (!this.ge.homGifObj.homework.includes('unchecked') || !this.ge.homGifObj.music.includes('unchecked')) && !this.secondVisited){
        this.ge.mainVideoElem.pause();
        this.secondVisited = true;
        console.log("one unchecked")
        setTimeout(() => {
          this.ge.backgroundGifObj.isActive = true;
          this.ge.fomGifObj.isActive = true;
          this.ge.mainVideoObj.isActive = false;
          this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/fourth-loop.mp4'
        }, 400);
        
        
        
      }


      if(Math.round(this.ge.mainVideoElem.currentTime) >= 85 && Math.round(this.ge.mainVideoElem.currentTime) <= 86 && !this.thirdVisited){
        this.thirdVisited = true;
        this.ge.mainVideoElem.pause();
        this.ge.backgroundGifObj.isActive = true;
        this.ge.homGifObj.isActive = true;

        this.ge.mainVideoObj.isActive = false;
        this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/third-loop.mp4'
      }

      if(Math.round(this.ge.mainVideoElem.currentTime) >= 85 && Math.round(this.ge.mainVideoElem.currentTime) <= 86 && (!this.ge.homGifObj.music.includes('unchecked') && !this.ge.homGifObj.homework.includes('unchecked'))){
        this.ge.mainVideoElem.currentTime = 107
        this.ge.mainVideoElem.play();
      }

      if((Math.round(this.ge.mainVideoElem.currentTime) >= 104 && Math.round(this.ge.mainVideoElem.currentTime) < 106)
          && (this.ge.homGifObj.music.includes('unchecked') || this.ge.homGifObj.homework.includes('unchecked'))){
        this.ge.mainVideoElem.pause();
        this.ge.backgroundGifObj.isActive = true;
        this.ge.homGifObj.isActive = true;
        this.ge.mainVideoObj.isActive = false;
        this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/third-loop.mp4'
      }

      if((Math.round(this.ge.mainVideoElem.currentTime) >= 104 && Math.round(this.ge.mainVideoElem.currentTime) < 106 ) 
        && (!this.ge.homGifObj.music.includes('unchecked') && !this.ge.homGifObj.homework.includes('unchecked'))){
        this.ge.mainVideoElem.currentTime = 107
        this.ge.mainVideoElem.play();
      }

      if(Math.round(this.ge.mainVideoElem.currentTime) >= 106 && Math.round(this.ge.mainVideoElem.currentTime) < 108){
        this.ge.homGifObj.isActive = false;
        this.ge.mainVideoObj.isActive = true;
        this.ge.fomGifObj.isActive = false;
        this.ge.backgroundGifObj.isActive = false;
      }



      if(Math.round(this.ge.mainVideoElem.currentTime) == 115){
        this.ge.mainVideoElem.pause();
        this.ge.backgroundGifObj.isActive = true;
        this.ge.lofGifObj.isActive = true;

        this.ge.mainVideoObj.isActive = false;
        this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/fifth-loop.mp4'
      }

      if(Math.round(this.ge.mainVideoElem.currentTime) == 183){
        this.ge.fomGifObj.mother = './assets/mother_checked.gif';
        this.ge.fomGifObj.father = './assets/father_checked.gif';
        
        this.ge.myselfGifObj.isActive = true;
        this.ge.mainVideoElem.pause();
        this.ge.backgroundGifObj.isActive = true;
        this.ge.fomGifObj.isActive = true;

        this.ge.mainVideoObj.isActive = false;
        this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/sixth-loop.mp4'
      }

      if(Math.round(this.ge.mainVideoElem.currentTime) == 196){
        this.ge.mainVideoElem.currentTime = 197;
        this.ge.mainVideoElem.pause();
        this.ge.endSceneGif.isActive = true;

        
        
      }


    }, 1000)
  }


  

}
