import {config} from './Config';
import Player from './Player';
export default class Controller {
  constructor(){
    this.back = {
      y1: -config.canvasHeight,
      y2: 0
    }
    this.player = new Player();
    this.bulletArr = [];
    this.enemyArr = [];
    this.dieArr = [];
    this.curProp = null;
    this.frame = {
      counter: 0
    };
    this.isPaused = false;
    this.enemyInterval = config.enemyInterval;
    this.AIInterval = config.AIInterval;
    this.boss = null;
    this.gameLevel = 1;
    this.showBossScore = config.showBossScore;
  }

  randomPlane(){ //随机敌机
    let index = Math.random();
    if(index < 0.7){
      return 'smallPlane';
    }
    if(index >= 0.7 && index < 0.9){
      return 'mediumPlane';
    }
    if(index >= 0.9){
      return 'largePlane';
    }
  }

  randomAI(){ //随机智能机群
    let index = Math.random();
    if(index < 0.33){
      return 'AI-I';
    }
    if(index >= 0.33 && index <= 0.66){
      return 'AI-II';
    }
    if(index > 0.66){
      return 'AI-III';
    }
  }

  randomProp(){ //随机道具
    let index = Math.random();
    if(index < 0.3){
      return 'bomb';
    }
    if(index >= 0.3){
      return 'weapon';
    }
  }

}