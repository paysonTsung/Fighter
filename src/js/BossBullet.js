import {createObjPool} from './Utils';
let bulletPool = createObjPool(() => {
  return new BossBullet();
});
export default class BossBullet{
  constructor(x = -99, y = -99, shiftX=0, shiftY=-1, aX, aY){
    this.x = x;
    this.y = y;
    this.shiftX = shiftX;
    this.shiftY = shiftY;
    this.aX = aX;
    this.aY = aY;
  }
  static getBullet(x, y, shiftX, shiftY, aX = 0, aY = 0){
    let bullet = bulletPool.get();
    bullet.x = x;
    bullet.y = y;
    bullet.shiftX = shiftX;
    bullet.shiftY = shiftY;
    bullet.aX = aX;
    bullet.aY = aY;
    return bullet;
  }
  static recoverBullet(bulletObj){
    return bulletPool.recover(bulletObj);
  }
}