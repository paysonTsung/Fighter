import Plane from './Plane';
import {createObjPool} from './Utils';
import {config} from './Config';
let enemyPool = createObjPool(() => {
  return new Enemy();
});
export default class Enemy extends Plane{
  constructor(x = -999, y = -999){
    super(x, y);
  }
  static getEnemy(x, y, type){
    let enemy = enemyPool.get();
    enemy.x = x;
    enemy.y = y;
    enemy.type = type;
    enemy.blood = config.planeBlood[type];
    return enemy;
  }
  static recoverEnemy(enemyObj){
    return enemyPool.recover(enemyObj);
  }
}