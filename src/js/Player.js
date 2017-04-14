import {config} from './Config';
import BossBullet from './BossBullet';
import Plane from './Plane';
import UI from './UI';
export default class Player extends Plane {
  constructor(){
    super();
    this.width = config.playerWidth;
    this.height = config.playerHeight;
    this.x = (config.canvasWidth - this.width)/2;
    this.y = config.canvasHeight - this.height - 100;
    this.playerIndex = 0; //图片显示index
    this.bomb = 0; //炸弹数量
    this.score = 0; //分数
    this.isFullFirepower = false; //火力全开状态
    this.weaponLevel = 0; //武器等级
    this.isInvincible = false; //无敌状态
    this.dieFlag = false; //死亡flag
    this.dieLen = config.dieImgNum.player; //死亡图片数
  }
  attacked(srcBuffer){
    this.dieFlag = true;
    this.countDown = this.dieLen * config.dieInterval;
    srcBuffer.soundPlay('player_bomb.mp3');
  }
  bindTouchEvent(dom){ //绑定移动事件
    let planeBoundaryMinX = 0;
    let planeBoundaryMaxX = config.canvasWidth -  config.playerWidth;
    let planeBoundaryMinY = 0;
    let planeBoundaryMaxY = config.canvasHeight - config.playerHeight;
    let ratio = UI.getRatio();
    let ratioX = ratio.x;   
    let ratioY = ratio.y;
    dom.addEventListener('touchstart', (e) => {
      let oldTouchX = e.touches[0].clientX / ratioX;
      let oldTouchY = e.touches[0].clientY / ratioY;
      let oldPlaneX = this.x;
      let oldPlaneY = this.y;
      dom.addEventListener('touchmove', (e) => {
        let newTouchX = e.touches[0].clientX / ratioX;
        let newTouchY = e.touches[0].clientY / ratioY;
        let newPlaneX = oldPlaneX + newTouchX - oldTouchX;
        let newPlaneY = oldPlaneY + newTouchY - oldTouchY;
        if(newPlaneX < planeBoundaryMinX){
          newPlaneX = planeBoundaryMinX;
        }
        if(newPlaneX > planeBoundaryMaxX){
          newPlaneX = planeBoundaryMaxX;
        }
        if(newPlaneY < planeBoundaryMinY){
          newPlaneY = planeBoundaryMinY;
        }
        if(newPlaneY > planeBoundaryMaxY){
          newPlaneY = planeBoundaryMaxY;
        }
        this.x = newPlaneX;
        this.y = newPlaneY;
      });
    });
  }
  bindBombEvent(dom, srcBuffer, enemyArr, dieArr, ctrler){ //绑定爆炸事件
    dom.addEventListener('touchend', (e) => {
      if(this.bomb){
        this.bomb--;
        for(let i = enemyArr.length - 1, enemy; enemy = enemyArr[i--];){
          enemy.blood = 0;
          let dieEnemy = enemyArr.splice(i, 1)[0];
          let dieLen = config.dieImgNum[dieEnemy.type];
          dieEnemy.dieLen = dieLen;
          dieEnemy.countDown = dieLen * config.dieInterval;
          dieArr.push(dieEnemy);
          this.score += config.score[dieEnemy.type];
          srcBuffer.soundPlay('use_bomb.mp3');
        }
        let {boss} = ctrler;
        if(boss && boss.state !== 'Appear'){
          let damage = 200 + this.weaponLevel * 50;
          boss.attacked(damage, ctrler);
          for(let i = boss.bullets.length - 1, bullet; bullet = boss.bullets[i--];){
            BossBullet.recoverBullet(bullet);
          }
          boss.bullets = [];
        }
      }
    });
  }
}