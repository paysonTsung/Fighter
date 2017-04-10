import {createObjPool} from './Utils';
let bulletPool = createObjPool(() => {
  return new Bullet();
});
export default class Bullet{
  constructor(x = -99, y = -99, shiftX=0, shiftY=-1, type = 'normal', damage= 1){
    this.x = x;
    this.y = y;
    this.shiftX = shiftX;
    this.shiftY = shiftY;
    this.type = type;
    this.damage = damage;
  }
  static getBullet(x, y, shiftX, shiftY, type, damage){
    let bullet = bulletPool.get();
    bullet.x = x;
    bullet.y = y;
    bullet.type = type;
    bullet.damage = damage;
    bullet.shiftX = shiftX;
    bullet.shiftY = shiftY;
    return bullet;
  }
  static recoverBullet(bulletObj){
    return bulletPool.recover(bulletObj);
  }
}