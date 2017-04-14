import Plane from './Plane';
import {config} from './Config';
export default class Boss extends Plane{
  constructor(level, x = -999, y = -999){
    super(x, y);
    this.x = (config.canvasWidth - config.bossWidth)/2,
    this.y = -config.bossHeight;
    this.state = 'Appear';
    this.level = level;
    this.blood = config.bossBlood + this.level * 120;
    this.maxBlood = this.blood;
    this.dieFlag = false;
    this.bullets = [];
  }
  _moveAppear(){
    if(this.y > 80){
      this.state = 'Left';
    }
    return this.y += 1;
  }
  _moveLeft(){
    if(this.x < 0){
      this.state = 'Right';
    }
    return this.x--;
  }
  _moveRight(){
    if(this.x > config.canvasWidth - config.bossWidth){
      this.state = 'Left';
    }
    return this.x++;
  }
  move(){
      this[`_move${this.state}`]();
  }
  attacked(damage, ctrler){
    this.blood -= damage;
    if(this.blood < 0){
      ctrler.bossLevel++;
      ctrler.player.score += (1e4 + this.level*2000);
      this.dieFlag = true;
      this.countDown = 120;
    }
  }
}