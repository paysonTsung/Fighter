/***** 工具库 *****/
var getID = function(str){
  return document.getElementById(str);
};
var getClass = function(str, num = 0){
  return document.getElementsByClassName(str)[num];
}
var create = function(str){
  return document.createElement(str);
};
var firstUpper = function(str){
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};
var removeDOM = function(dom){
  var parentNode = dom.parentNode;
  if(parentNode){
    parentNode.removeChild(dom);
  }
};
var getStyle = function(ele, style){
	if(window.getComputedStyle){
		return window.getComputedStyle(ele,null)[style];
	}else{
		return ele.currentStyle[style];
	}
};
var createObjPool = function(createObjFn){
  var objPool = [];
  return {
    get: function(){
      var obj = objPool.length === 0 ?
        createObjFn.apply(this, arguments) : objPool.shift();
      return obj;
    },
    recover: function(obj){
      objPool.push(obj);
    }
    // _see: function(){
    //   console.log(objPool);
    // }
  }
};
var randomNum = function(min, max){
  return Math.floor(min + Math.random() * (max - min));
}
Function.prototype.before = function(beforeFn){
  var _self = this;
  return function(){
    beforeFn.apply(this, arguments);
    return _self.apply(this, arguments);
  }
}
Function.prototype.after = function(afterFn){
  var _self = this;
  return function(){
    var ret = _self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return ret;
  }
}
export {
  getID,
  getClass,
  create,
  firstUpper,
  removeDOM,
  getStyle,
  createObjPool,
  randomNum
}