import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class GlobalElementsService {

  constructor(private sanitizer: DomSanitizer) { }

  mainVideoElem;
  secondaryVideoElem;
  mainVidInterval;
  mainVideoObj = {src: "https://mymp4videos.s3.eu-central-1.amazonaws.com/no_slides.mp4", isActive: false, currentTime: 7};
  secondaryVideoObj = {src: "https://mymp4videos.s3.eu-central-1.amazonaws.com/first-loop.mp4", isActive: true, currentTime: 0};
  initialInterval;
  enterGif = './assets/enter_unchecked.gif'
 
  fomGifObj = {father: './assets/father_unchecked.gif', mother: './assets/mother_unchecked.gif', question: './assets/parent_side.gif', isActive: false, fomCounter: 0};
  homGifObj = {homework: './assets/homework_unchecked.gif', music: './assets/music_unchecked.gif', question: './assets/pick_diversion.gif', isActive: false};
  lofGifObj = {lie: './assets/lie_unchecked.gif', filter: './assets/filter_unchecked.gif', question: './assets/pick_reaction.gif', isActive: false};
  backgroundGifObj = {src: './assets/background-gif.gif', isActive: false};
  myselfGifObj = {src: './assets/myself_unchecked.gif', isActive: false};
  endSceneGif = {src: './assets/credit.gif', isActive: false}
  replayGifObj = {src: './assets/replay.gif', isActive: false};


  // getMainVideo = () => {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(this.mainVideoob)
  //   this.mainVideoElem;
  // }

  // getSecondaryVideo = () => {
  //   return this.secondaryVideoElem;
  // }
}
