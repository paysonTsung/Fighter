import {createObjPool} from './Utils';
let bulletPool = createObjPool(() => {
  return new Bullet();
});
export default class Bullet{
  constructor(x = -99, y = -99, type='normal'){
    this.x = x;
    this.y = y;
    this.type = type;
  }
  static getBullet(x, y, type){
    let bullet = bulletPool.get();
    bullet.x = x;
    bullet.y = y;
    bullet.type = type;
    return bullet;
  }
  static recoverBullet(bulletObj){
    return bulletPool.recover(bulletObj);
  }
}