import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalElementsService {

  constructor() { }

  mainVideoElem;
  secondaryVideoElem;
  mainVidInterval;
  mainVideoObj = {src: "./assets/no_slides.mp4", isActive: false, currentTime: 7};
  secondaryVideoObj = {src: "./assets/first-loop.mp4", isActive: true, currentTime: 0};
  initialInterval;
  enterGif = './assets/enter_unchecked.gif'
 
  fomGifObj = {father: './assets/father_unchecked.gif', mother: './assets/mother_unchecked.gif', question: './assets/parent_side.gif', isActive: false, fomCounter: 0};
  homGifObj = {homework: './assets/homework_unchecked.gif', music: './assets/music_unchecked.gif', question: './assets/pick_diversion.gif', isActive: false};
  lofGifObj = {lie: './assets/lie_unchecked.gif', filter: './assets/filter_unchecked.gif', question: './assets/pick_reaction.gif', isActive: false};
  backgroundGifObj = {src: './assets/background-gif.gif', isActive: false};
  myselfGifObj = {src: './assets/myself_unchecked.gif', isActive: false};
  endSceneGif = {src: './assets/credit.gif', isActive: false}
  replayGifObj = {src: './assets/replay.gif', isActive: false};

}
