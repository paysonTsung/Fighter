import {config} from './Config';
import {createObjPool} from './Utils';
import Plane from './Plane';
let enemyPool = createObjPool(() => {
  return new Enemy();
});
export default class Enemy extends Plane{
  constructor(x = -999, y = -999){
    super(x, y);
  }
  static getEnemy(x, y, type, shiftX=0, shiftY=config[`${type}Speed`], isAI=false, dir=''){
    let enemy = enemyPool.get();
    enemy.x = x;
    enemy.y = y;
    enemy.type = type;
    enemy.blood = config.planeBlood[type];
    enemy.shiftX = shiftX;
    enemy.shiftY = shiftY;
    enemy.dir = dir;
    enemy.isAI = isAI;
    return enemy;
  }
  static recoverEnemy(enemyObj){
    return enemyPool.recover(enemyObj);
  }
}