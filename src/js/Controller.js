import Player from './Player';
import {config} from './Config';
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
  }
}