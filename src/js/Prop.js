import {createObjPool} from './Utils';
let propPool = createObjPool(() => {
  return new Prop();
});
export default class Prop{
  constructor(x = -999, y = -999){
    this.x = x;
    this.y = y;
  }
  static getProp(x, y, type){
    let prop = propPool.get();
    prop.x = x;
    prop.y = y;
    prop.type = type;
    return prop;
  }
  static recoverProp(propObj){
    return propPool.recover(propObj);
  }
}