/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./out/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***** 默认配置文件 *****/
var config = exports.config = {
  bulletSpeed: 14,
  language: 'chinese', //默认语言
  imgPath: './src/img/', //图片资源路径
  soundPath: './src/sound/', //音效资源路径
  canvasWidth: 480,
  canvasHeight: 853,
  playerWidth: 98,
  playerHeight: 122,
  bulletWidth: 9,
  bulletHeight: 21,
  smallPlaneWidth: 59,
  smallPlaneHeight: 31,
  smallPlaneSpeed: 4,
  mediumPlaneWidth: 70,
  mediumPlaneHeight: 92,
  mediumPlaneSpeed: 2,
  largePlaneWidth: 165,
  largePlaneHeight: 256,
  largePlaneSpeed: 1,
  propWidth: 59,
  propHeight: 103,
  propSpeed: 7,
  bombWidth: 60,
  bombHeight: 53,
  bombMax: 3, //炸弹上限
  buttonWidth: 60,
  buttonHeight: 45,
  planeBlood: {
    smallPlane: 1,
    mediumPlane: 8,
    largePlane: 16
  },
  dieImgNum: {
    player: 4,
    smallPlane: 3,
    mediumPlane: 4,
    largePlane: 6
  },
  score: {
    smallPlane: 100,
    mediumPlane: 800,
    largePlane: 2000
  },
  dieInterval: 10, // 玩家/敌机死亡动画间隔/帧
  propInterval: 300, // 道具发放间隔/帧
  enemyInterval: 40, // 敌机出现初始间隔/帧
  bulletInterval: 8, // 子弹发射间隔/帧
  promoteInterval: 120, //难度提升间隔/帧
  promoteMin: 20, //难度提升最小间隔/帧
  firepowerTime: 2e4, // 火力全开持续时间/ms
  backgroundImgSrc: 'background.jpg',
  logoSrc: 'logo.png',
  loadImageSrc: ['loading1.png', 'loading2.png', 'loading3.png'],
  gameImageSrc: ['player0.png', 'player1.png', 'player_die0.png', 'player_die1.png', 'player_die2.png', 'player_die3.png', 'bullet_normal.png', 'bullet_strength.png', 'bomb.png', 'prop_bomb.png', 'prop_weapon.png', 'smallPlane.png', 'smallPlane_die0.png', 'smallPlane_die1.png', 'smallPlane_die2.png', 'mediumPlane.png', 'mediumPlane_hurt.png', 'mediumPlane_die0.png', 'mediumPlane_die1.png', 'mediumPlane_die2.png', 'mediumPlane_die3.png', 'largePlane0.png', 'largePlane1.png', 'largePlane_hurt.png', 'largePlane_die0.png', 'largePlane_die1.png', 'largePlane_die2.png', 'largePlane_die3.png', 'largePlane_die4.png', 'largePlane_die5.png', 'game_pause.png', 'game_resume.png', 'game_over.png'],
  gameAudioSrc: ['smallPlane_die.mp3', 'mediumPlane_die.mp3', 'largePlane_die.mp3', 'biubiubiu.mp3', 'player_bomb.mp3', 'get_bomb_prop.mp3', 'get_weapon_prop.mp3', 'music.mp3', 'prop_appear.mp3', 'use_bomb.mp3', 'largePlane_flying.mp3', 'button.mp3', 'achievement.mp3']
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***** 工具库 *****/
var getID = function getID(str) {
  return document.getElementById(str);
};
var getClass = function getClass(str) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return document.getElementsByClassName(str)[num];
};
var create = function create(str) {
  return document.createElement(str);
};
var firstUpper = function firstUpper(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};
var removeDOM = function removeDOM(dom) {
  var parentNode = dom.parentNode;
  if (parentNode) {
    parentNode.removeChild(dom);
  }
};
var getStyle = function getStyle(ele, style) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(ele, null)[style];
  } else {
    return ele.currentStyle[style];
  }
};
var createObjPool = function createObjPool(createObjFn) {
  var objPool = [];
  return {
    get: function get() {
      var obj = objPool.length === 0 ? createObjFn.apply(this, arguments) : objPool.shift();
      return obj;
    },
    recover: function recover(obj) {
      objPool.push(obj);
    }
    // _see: function(){
    //   console.log(objPool);
    // }
  };
};
var randomNum = function randomNum(min, max) {
  return Math.floor(min + Math.random() * (max - min));
};
Function.prototype.before = function (beforeFn) {
  var _self = this;
  return function () {
    beforeFn.apply(this, arguments);
    return _self.apply(this, arguments);
  };
};
Function.prototype.after = function (afterFn) {
  var _self = this;
  return function () {
    var ret = _self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return ret;
  };
};
exports.getID = getID;
exports.getClass = getClass;
exports.create = create;
exports.firstUpper = firstUpper;
exports.removeDOM = removeDOM;
exports.getStyle = getStyle;
exports.createObjPool = createObjPool;
exports.randomNum = randomNum;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Config = __webpack_require__(0);

var _Utils = __webpack_require__(1);

var $ = _interopRequireWildcard(_Utils);

var _Language = __webpack_require__(3);

var _FSM = __webpack_require__(9);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lanChangeStrategy = {
  '中文': 'chinese',
  'English': 'english'
};

var UI = function () {
  function UI(paramObj) {
    _classCallCheck(this, UI);

    paramObj.curState = 'MAIN_UI';
    paramObj.controller = null;
    paramObj.score = null;
    paramObj.loaded = false;
    Object.assign(this, paramObj);
  }

  _createClass(UI, [{
    key: 'setBtnText',
    value: function setBtnText(lanSet) {
      if (lanSet) {
        lanSet = lanSet.toLowerCase();
      }
      if (!_Language.lanStrategy[lanSet]) {
        lanSet = 'chinese';
      }
      for (var i = 0, btn; btn = ['startBtn', 'rankBtn', 'setBtn', 'ruleBtn'][i++];) {
        this[btn].innerHTML = _Language.lanStrategy[lanSet][btn];
      }
    }
  }, {
    key: 'drawBackground',
    value: function drawBackground() {
      var offsetY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.ctx.drawImage(this.background, 0, offsetY);
    }
  }, {
    key: 'drawLogo',
    value: function drawLogo() {
      this.ctx.drawImage(this.logo, (this.canvas.width - this.logo.width) / 2, 200);
    }
  }, {
    key: 'drawImg',
    value: function drawImg(src) {
      var offsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var offsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      this.ctx.drawImage(this.globalSrcBuffer.getSrc(src, 'image'), offsetX, offsetY);
    }
  }, {
    key: 'drawLoading',
    value: function drawLoading(callback) {
      var _this = this;

      var loadImgArr = _Config.config.loadImageSrc;
      var loadImgLen = loadImgArr.length;
      var index = 0;
      var loadText = _Language.lanStrategy[this.language].loading;
      var loadTimer = setInterval(function () {
        var loadSrc = _this.globalSrcBuffer.getSrc(loadImgArr[index], 'image');
        var textWidth = void 0;
        _this.drawBackground();
        _this.ctx.fillStyle = 'black';
        _this.ctx.font = '30px sans-serif';
        textWidth = _this.ctx.measureText(loadText).width;
        _this.ctx.fillText(loadText, (_Config.config.canvasWidth - textWidth) / 2, 500);
        if (!loadSrc.onload) {
          loadSrc.onload = function () {
            _this.ctx.drawImage(loadSrc, 140, 400);
            index++;
            if (index === loadImgLen) {
              console.log('loaded over');
              clearInterval(loadTimer);
              setTimeout(callback, 300);
            }
          };
        }
      }, 250);
    }
  }, {
    key: '_renderMainUI',
    value: function _renderMainUI() {
      var _this2 = this;

      this.background.onload = function () {
        _this2.drawBackground();
        _this2.logo.onload = function () {
          _this2.drawLogo();
          _this2.setBtnText(_this2.language);
        };
      };
    }
  }, {
    key: '_bindBtnEvent',
    value: function _bindBtnEvent() {
      var _this3 = this;

      var _loop = function _loop(i, btn) {
        _this3[btn].addEventListener('touchend', function () {
          _FSM.FSM[_this3.curState]['click' + $.firstUpper(btn)].call(_this3);
        });
      };

      for (var i = 0, btn; btn = ['startBtn', 'rankBtn', 'setBtn', 'ruleBtn'][i++];) {
        _loop(i, btn);
      }
    }
  }, {
    key: 'bindCtrlEvent',
    value: function bindCtrlEvent() {
      var _this4 = this;

      this.ctrlBtn.addEventListener('touchend', function () {
        _this4.globalSrcBuffer.soundPlay('button.mp3');
        _FSM.FSM[_this4.curState].clickCtrlBtn.call(_this4);
      });
    }
  }, {
    key: '_bindSetEvent',
    value: function _bindSetEvent() {
      var _this5 = this;

      var lanSet = $.getClass('lanSet');
      if (!lanSet.onchange) {
        lanSet.onchange = function () {
          _this5.language = lanChangeStrategy[lanSet.value];
          for (var i = 0, ui; ui = ['rank', 'set', 'rule'][i++];) {
            _this5.deleteUI(ui);
          }
          _this5.setBtnText(_this5.language);
          _this5.showUI('set', _Language.lanStrategy[_this5.language].setContent);
        };
      }
    }
  }, {
    key: 'createUI',
    value: function createUI(name, content) {
      var tempDiv = $.create('div');
      tempDiv.className = name;
      tempDiv.style.zIndex = 100;
      this.wrapper.appendChild(tempDiv);
      if (typeof content == 'function') {
        tempDiv.innerHTML = content();
      } else {
        tempDiv.innerHTML = content;
      }
      if (name == 'set') {
        this._bindSetEvent();
      }
      return tempDiv;
    }
  }, {
    key: 'deleteUI',
    value: function deleteUI(name) {
      if (this[name]) {
        $.removeDOM(this[name]);
        delete this[name];
      }
    }
  }, {
    key: 'showUI',
    value: function showUI(name, content) {
      this.hideAllUI();
      if (!this[name] || name == 'rank') {
        this[name] = this.createUI(name, content);
      }
      this[name].style.display = 'block';
    }
  }, {
    key: 'hideAllUI',
    value: function hideAllUI() {
      for (var i = 0, ui; ui = ['start', 'rank', 'set', 'rule'][i++];) {
        if (this[ui]) {
          this[ui].style.display = 'none';
        }
      }
    }
  }, {
    key: 'init',
    value: function init() {
      this._renderMainUI();
      this._bindBtnEvent();
    }
  }], [{
    key: 'getRatio',
    value: function getRatio() {
      return {
        x: $.getStyle($.getID('wrapper'), 'width').slice(0, -2) / _Config.config.canvasWidth,
        y: $.getStyle($.getID('wrapper'), 'height').slice(0, -2) / _Config.config.canvasHeight
      };
    }
  }]);

  return UI;
}();

exports.default = UI;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function getScoreArr() {
  if (!sessionStorage.fighterScore) {
    sessionStorage.fighterScore = '[]';
  }
  var scores = JSON.parse(sessionStorage.fighterScore);
  var len = scores.length;
  if (len < 6) {
    for (var i = len; i < 6; i++) {
      scores.push(0);
    }
  }
  return scores;
}
/******** 策略模式：语言环境策略对象 ********/
var lanStrategy = exports.lanStrategy = {
  chinese: {
    startBtn: '新的游戏',
    rankBtn: '分数排行',
    setBtn: '游戏设置',
    ruleBtn: '游戏说明',
    rankContent: function rankContent() {
      var scores = getScoreArr();
      return '<h2>\u5206\u6570\u6392\u884C</h2>\n          <ol>\n            <li>' + scores[0] + '</li>\n            <li>' + scores[1] + '</li>\n            <li>' + scores[2] + '</li>\n            <li>' + scores[3] + '</li>\n            <li>' + scores[4] + '</li>\n            <li>' + scores[5] + '</li>\n          </ol>';
    },
    setContent: '<h2>游戏设置</h2>\
        游戏音乐: &nbsp <input type="range"><br>\
        游戏音效: &nbsp <input type="range"><br>\
        语言环境: &nbsp <select style="width:130px" class="lanSet">\
        <option selected>中文</option>\
        <option>English</option>\
        </select>',
    ruleContent: '<h2>游戏说明</h2>\
        触摸飞机移动<br>\
        躲避敌机碰撞<br>\
        击毁敌机<br>\
        获取积分<br>\
        小型飞机： 100分<br>\
        中型飞机： 500分<br>\
        大型飞机： 1000分',
    loading: '游戏加载中, 请稍候...',
    score: '分数',
    ctrlContent: '<span class="ctrl-resume">继续游戏</span>\
        <span class="ctrl-again">重新游戏</span>'
  },
  english: {
    startBtn: 'start',
    rankBtn: 'rankings',
    setBtn: 'settings',
    ruleBtn: 'instructions',
    rankContent: function rankContent() {
      var scores = getScoreArr();
      return '<h2>Rankings</h2>\n          <ol>\n            <li>' + scores[0] + '</li>\n            <li>' + scores[1] + '</li>\n            <li>' + scores[2] + '</li>\n            <li>' + scores[3] + '</li>\n            <li>' + scores[4] + '</li>\n            <li>' + scores[5] + '</li>\n          </ol>';
    },
    setContent: '<h2>Settings</h2>\
        Game Music: &nbsp <input type="range"><br>\
        Game Sound: &nbsp <input type="range"><br>\
        Language: &nbsp <select style="width:130px" class="lanSet">\
        <option>中文</option>\
        <option selected>English</option>\
        </select>',
    ruleContent: '<h2>Instructions</h2>\
        Touch the plane to move<br>\
        keep yourself from hitting<br>\
        killing the enemies<br>\
        getting score<br>\
        Small Fighter: 100 points<br>\
        Medium Fighter: 500 points<br>\
        Large Fighter: 1000 points',
    loading: 'Game loading ......',
    score: 'Score',
    ctrlContent: '<span class="ctrl-resume">Resume</span>\
        <span class="ctrl-again">Again</span>'
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plane = function Plane() {
  _classCallCheck(this, Plane);

  this.x = -999;
  this.y = -999;
};

exports.default = Plane;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Config = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******* 资源创建策略对象 *******/
var srcStrategy = {
  image: function image(fileSrc, eventFunc) {
    var img = new Image();
    if (eventFunc) {
      img.addEventListener('load', eventFunc);
    }
    img.src = _Config.config.imgPath + fileSrc;
    return img;
  },
  sound: function sound(fileSrc, eventFunc) {
    var sound = new Audio();
    if (eventFunc) {
      sound.addEventListener('canplaythrough', eventFunc);
    }
    sound.src = _Config.config.soundPath + fileSrc;
    return sound;
  }
};

var Source = function () {
  function Source() {
    _classCallCheck(this, Source);

    this.srcBuffer = {};
  }

  _createClass(Source, [{
    key: 'getSrc',
    value: function getSrc(fileSrc, type) {
      if (!this.srcBuffer[fileSrc]) {
        this.srcBuffer[fileSrc] = srcStrategy[type](fileSrc);
      }
      return this.srcBuffer[fileSrc];
    }
  }, {
    key: 'soundPlay',
    value: function soundPlay(src) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { loop: false, replay: true };

      if (src == 'music.mp3') {
        console.log('play');
      }
      var sound = this.getSrc(src, 'sound');
      if (typeof config.loop === 'undefined') {
        config.loop = false;
      }
      if (typeof config.replay === 'undefined') {
        config.replay = true;
      }
      if (config.loop) {
        sound.loop = 'loop';
      }
      if (config.replay) {
        sound.currentTime = 0;
      }
      sound.play();
      return sound;
    }
  }, {
    key: 'soundPause',
    value: function soundPause(src) {
      if (src == 'music.mp3') {
        console.log('pause');
      }
      var sound = this.getSrc(src, 'sound');
      sound.pause();
      return sound;
    }
  }, {
    key: 'preloadSrc',
    value: function preloadSrc(srcArr, type, callback) {
      var toLoadLen = srcArr.length;
      var loadedLen = 0;
      for (var i = toLoadLen; i--;) {
        var src = srcArr[i];
        this.srcBuffer[src] = srcStrategy[type](src, function () {
          loadedLen++;
          if (typeof callback == 'function' && loadedLen == toLoadLen) {
            callback();
          }
        });
      }
    }
  }]);

  return Source;
}();

exports.default = Source;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bulletPool = (0, _Utils.createObjPool)(function () {
  return new Bullet();
});

var Bullet = function () {
  function Bullet() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -99;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -99;
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'normal';

    _classCallCheck(this, Bullet);

    this.x = x;
    this.y = y;
    this.type = type;
  }

  _createClass(Bullet, null, [{
    key: 'getBullet',
    value: function getBullet(x, y, type) {
      var bullet = bulletPool.get();
      bullet.x = x;
      bullet.y = y;
      bullet.type = type;
      return bullet;
    }
  }, {
    key: 'recoverBullet',
    value: function recoverBullet(bulletObj) {
      return bulletPool.recover(bulletObj);
    }
  }]);

  return Bullet;
}();

exports.default = Bullet;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Player = __webpack_require__(10);

var _Player2 = _interopRequireDefault(_Player);

var _Config = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function Controller() {
  _classCallCheck(this, Controller);

  this.back = {
    y1: -_Config.config.canvasHeight,
    y2: 0
  };
  this.player = new _Player2.default();
  this.bulletArr = [];
  this.enemyArr = [];
  this.dieArr = [];
  this.curProp = null;
  this.frame = {
    counter: 0
  };
  this.isPaused = false;
  this.enemyInterval = _Config.config.enemyInterval;
};

exports.default = Controller;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Plane2 = __webpack_require__(4);

var _Plane3 = _interopRequireDefault(_Plane2);

var _Utils = __webpack_require__(1);

var _Config = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var enemyPool = (0, _Utils.createObjPool)(function () {
  return new Enemy();
});

var Enemy = function (_Plane) {
  _inherits(Enemy, _Plane);

  function Enemy() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -999;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -999;

    _classCallCheck(this, Enemy);

    return _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, x, y));
  }

  _createClass(Enemy, null, [{
    key: 'getEnemy',
    value: function getEnemy(x, y, type) {
      var enemy = enemyPool.get();
      enemy.x = x;
      enemy.y = y;
      enemy.type = type;
      enemy.blood = _Config.config.planeBlood[type];
      return enemy;
    }
  }, {
    key: 'recoverEnemy',
    value: function recoverEnemy(enemyObj) {
      return enemyPool.recover(enemyObj);
    }
  }]);

  return Enemy;
}(_Plane3.default);

exports.default = Enemy;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FSM = undefined;

var _Language = __webpack_require__(3);

var _Config = __webpack_require__(0);

var _Utils = __webpack_require__(1);

var _Controller = __webpack_require__(7);

var _Controller2 = _interopRequireDefault(_Controller);

var _Bullet = __webpack_require__(6);

var _Bullet2 = _interopRequireDefault(_Bullet);

var _Enemy = __webpack_require__(8);

var _Enemy2 = _interopRequireDefault(_Enemy);

var _Prop = __webpack_require__(11);

var _Prop2 = _interopRequireDefault(_Prop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeUIState = function changeUIState(type, ui) {
  var upperState = ui.toUpperCase();
  if (type == 'show') {
    return function () {
      this.showUI(ui, _Language.lanStrategy[this.language][ui + 'Content']);
      this.curState = upperState + '_UI';
    };
  } else {
    return function () {
      this[ui].style.display = 'none';
      this.curState = 'MAIN_UI';
    };
  }
};

var showRank = changeUIState('show', 'rank');
var showSet = changeUIState('show', 'set');
var showRule = changeUIState('show', 'rule');
var hideRank = changeUIState('hide', 'rank');
var hideSet = changeUIState('hide', 'set');
var hideRule = changeUIState('hide', 'rule');

// let showRank = function(){
//   this._showUI('rank', lanStrategy[this.language].rankContent);
//   this.curState = 'RANK_UI';
// }
// let showSet = function(){
//   this._showUI('set', lanStrategy[this.language].setContent);
//   this.curState = 'SET_UI';
// }
// let showRule = function(){
//   this._showUI('rule', lanStrategy[this.language].ruleContent);
//   this.curState = 'RULE_UI';
// }
// let hideRank = function(){
//   this.rank.style.display = 'none';
//   this.curState = 'MAIN_UI';
// }
// let hideSet = function(){
//   this.set.style.display = 'none';
//   this.curState = 'MAIN_UI';
// }
// let hideRule = function(){
//   this.rule.style.display = 'none';
//   this.curState = 'MAIN_UI';
// }

var pauseGame = function pauseGame() {
  this.controller.isPaused = true;
  if (!this.ctrl) {
    this.ctrl = this.createUI('ctrl', _Language.lanStrategy[this.language].ctrlContent);
    var ctrlResume = (0, _Utils.getClass)('ctrl-resume');
    var ctrlAgain = (0, _Utils.getClass)('ctrl-again');
    ctrlResume.addEventListener('touchend', resumeGame.bind(this));
    ctrlAgain.addEventListener('touchend', againGame.bind(this));
  }
  this.globalSrcBuffer.soundPause('music.mp3');
  this.ctrl.style.display = 'block';
  this.curState = 'GAME_PAUSE_UI';
};
var resumeGame = function resumeGame() {
  this.controller.isPaused = false;
  this.ctrl.style.display = 'none';
  this.curState = 'IN_GAME_UI';
  this.globalSrcBuffer.soundPlay('music.mp3', { loop: true, replay: false });
  gameRun.call(this);
};
var againGame = function againGame() {
  this.controller = null;
  this.ctrl.style.display = 'none';
  this.curState = 'IN_GAME_UI';
  this.globalSrcBuffer.soundPlay('music.mp3', { loop: true, replay: true });
  startGame.call(this);
};

var randomPlane = function randomPlane() {
  var index = Math.random();
  if (index < 0.7) {
    return 'smallPlane';
  }
  if (index >= 0.7 && index < 0.9) {
    return 'mediumPlane';
  }
  if (index >= 0.9) {
    return 'largePlane';
  }
};

var randomProp = function randomProp() {
  var index = Math.random();
  if (index < 0.5) {
    return 'bomb';
  }
  if (index >= 0.5) {
    return 'weapon';
  }
};

var propStrategy = {
  bomb: function bomb(player) {
    var bombNum = player.bomb;
    if (bombNum < _Config.config.bombMax) {
      player.bomb = bombNum + 1;
    }
  },
  weapon: function weapon(player) {
    if (!player.isFullFirepower) {
      player.isFullFirepower = true;
    } else {
      clearTimeout(player.firepowerTimer);
    }
    player.firepowerTimer = setTimeout(function () {
      player.isFullFirepower = false;
    }, _Config.config.firepowerTime);
  }
};

var dieInterval = _Config.config.dieInterval,
    propInterval = _Config.config.propInterval,
    bulletInterval = _Config.config.bulletInterval,
    propWidth = _Config.config.propWidth,
    propHeight = _Config.config.propHeight,
    bombWidth = _Config.config.bombWidth,
    bombHeight = _Config.config.bombHeight,
    buttonWidth = _Config.config.buttonWidth,
    buttonHeight = _Config.config.buttonHeight,
    score = _Config.config.score,
    promoteInterval = _Config.config.promoteInterval,
    promoteMin = _Config.config.promoteMin;


var startGame = function startGame() {
  console.log('game start');

  //背景音乐
  this.globalSrcBuffer.soundPlay('music.mp3', { loop: true, replay: true });

  //透明按钮
  this.bombBtn.style.display = 'block';
  this.ctrlBtn.style.display = 'block';

  //启动游戏控制器
  this.controller = new _Controller2.default();

  var _controller = this.controller,
      enemyArr = _controller.enemyArr,
      dieArr = _controller.dieArr;

  //绑定飞机移动事件、炸弹事件、暂停事件

  this.controller.player.bindTouchEvent(this.canvas);
  this.controller.player.bindBombEvent(this.bombBtn, this.globalSrcBuffer, enemyArr, dieArr);
  if (!this.ctrlEventBinded) {
    this.bindCtrlEvent();
    this.ctrlEventBinded = true;
  }

  //改变当前状态
  this.curState = 'IN_GAME_UI';

  //运行游戏
  gameRun.call(this);
};

var gameRun = function gameRun() {
  var _this = this;

  var canvas = this.canvas;
  var width = canvas.width,
      height = canvas.height;


  var ctrler = this.controller;
  var player = ctrler.player,
      bulletArr = ctrler.bulletArr,
      enemyArr = ctrler.enemyArr,
      dieArr = ctrler.dieArr,
      frame = ctrler.frame,
      back = ctrler.back;


  frame.counter++;

  var promote = function promote() {
    if (ctrler.enemyInterval == promoteMin) {
      return;
    }
    if (frame.counter % promoteInterval == 0) {
      ctrler.enemyInterval--;
    }
  };
  var backScroll = function backScroll() {
    back.y1 = back.y1 === height ? -height : back.y1 + 1;
    back.y2 = back.y2 === height ? -height : back.y2 + 1;
    _this.drawBackground(back.y1);
    _this.drawBackground(back.y2);
  };
  var renderPlayer = function renderPlayer() {
    if (!player.dieFlag) {
      _this.drawImg('player' + player.playerIndex + '.png', player.x, player.y);
      if (frame.counter % 5 == 0) {
        player.playerIndex = Number(!player.playerIndex);
      }
    } else {
      if (player.countDown == 0) {
        _this.curState = 'GAME_OVER_UI';
        _this.drawImg('game_over.png', 0, 0);
        _this.bombBtn.style.display = 'none';
        _this.ctrlBtn.style.display = 'none';

        _this.globalSrcBuffer.soundPlay('achievement.mp3');

        _this.ctx.font = '50px sans-serif';
        var textWidth = _this.ctx.measureText(player.score).width;
        _this.ctx.fillText(player.score, (width - textWidth) / 2, height / 2);
        if (!sessionStorage.fighterScore) {
          sessionStorage.fighterScore = '[]';
        }
        var db = JSON.parse(sessionStorage.fighterScore);
        db.push(player.score);
        db = db.sort(function (a, b) {
          return b - a;
        });
        sessionStorage.fighterScore = JSON.stringify(db);

        var touchScreen = function touchScreen() {
          _this.globalSrcBuffer.soundPause('music.mp3');
          _this.drawBackground();
          _this.drawLogo();
          _this.setBtnText(_this.language);
          _this.btnGroup.style.display = 'block';
          _this.curState = 'MAIN_UI';
          canvas.removeEventListener('touchstart', touchScreen);
        };

        setTimeout(function () {
          canvas.addEventListener('touchstart', touchScreen);
        }, 1000);

        return true;
      } else {
        var dieIndex = Math.floor(player.dieLen - player.countDown / 10);
        _this.drawImg('player_die' + dieIndex + '.png', player.x, player.y);
      }
      player.countDown--;
    }
  };
  var sendBullet = function sendBullet() {
    if (frame.counter % bulletInterval == 0) {
      if (!player.isFullFirepower) {
        var newBullet = _Bullet2.default.getBullet(player.x + player.width / 2 - 3, player.y, 'normal');
        bulletArr.push(newBullet);
      } else {
        var newLeftBullet = _Bullet2.default.getBullet(player.x + player.width / 2 - 20, player.y, 'strength');
        var newRightBullet = _Bullet2.default.getBullet(player.x + player.width / 2 + 14, player.y, 'strength');
        bulletArr.push(newLeftBullet);
        bulletArr.push(newRightBullet);
      }
      _this.globalSrcBuffer.soundPlay('biubiubiu.mp3');
    }
  };
  var renderBullet = function renderBullet() {
    for (var i = bulletArr.length; i--;) {
      var bullet = bulletArr[i];
      if (bullet.y < -_Config.config.bulletHeight) {
        var delBullet = bulletArr.splice(i, 1)[0];
        _Bullet2.default.recoverBullet(delBullet);
        continue;
      }
      _this.drawImg('bullet_' + bullet.type + '.png', bullet.x, bullet.y);
      bullet.y -= _Config.config.bulletSpeed;
      for (var j = enemyArr.length; j--;) {
        var enemy = enemyArr[j];
        if (bullet.x + _Config.config.bulletWidth > enemy.x && bullet.x < enemy.x + _Config.config[enemy.type + 'Width'] && bullet.y + _Config.config.bulletHeight > enemy.y && bullet.y < enemy.y + _Config.config[enemy.type + 'Height']) {
          var _delBullet = bulletArr.splice(i, 1)[0];
          _Bullet2.default.recoverBullet(_delBullet);
          if (--enemy.blood == 0) {
            var dieEnemy = enemyArr.splice(j, 1)[0];
            var dieLen = _Config.config.dieImgNum[dieEnemy.type];
            dieEnemy.dieLen = dieLen;
            dieEnemy.countDown = dieLen * dieInterval;
            dieArr.push(dieEnemy);
            player.score += score[dieEnemy.type];
            _this.globalSrcBuffer.soundPlay(dieEnemy.type + '_die.mp3');
          }
          break;
        }
      }
    }
  };
  var sendEnemy = function sendEnemy() {
    if (frame.counter % ctrler.enemyInterval == 0) {
      var planeType = randomPlane();
      var newEnemy = _Enemy2.default.getEnemy((0, _Utils.randomNum)(0, width - _Config.config[planeType + 'Width']), -_Config.config[planeType + 'Height'], planeType);
      if (planeType == 'largePlane') {
        newEnemy.imgIndex = 0;
        _this.globalSrcBuffer.soundPlay('largePlane_flying.mp3');
      }
      enemyArr.push(newEnemy);
    }
  };
  var renderEnemy = function renderEnemy() {
    for (var i = enemyArr.length; i--;) {
      var enemy = enemyArr[i];
      var type = enemy.type;
      var enemyHeight = _Config.config[type + 'Height'];
      var enemyWidth = _Config.config[type + 'Width'];
      if (enemy.y > height + enemyHeight) {
        var del = enemyArr.splice(i, 1)[0];
        _Enemy2.default.recoverEnemy(del);
        continue;
      }
      if (type == 'largePlane') {
        if (frame.counter % 7 == 0) {
          enemy.imgIndex = Number(!enemy.imgIndex);
        }
        if (enemy.blood < _Config.config.planeBlood.largePlane / 2 && enemy.imgIndex == 1) {
          _this.drawImg('largePlane_hurt.png', enemy.x, enemy.y);
        } else {
          _this.drawImg('' + type + enemy.imgIndex + '.png', enemy.x, enemy.y);
        }
      } else {
        if (type == 'mediumPlane' && enemy.blood < _Config.config.planeBlood.mediumPlane / 2) {
          _this.drawImg('mediumPlane_hurt.png', enemy.x, enemy.y);
        }
        _this.drawImg(type + '.png', enemy.x, enemy.y);
      }
      if (enemy.x + enemyWidth > player.x && enemy.x < player.x + player.width && enemy.y + enemyHeight > player.y && enemy.y < player.x + player.height && !player.dieFlag) {
        // console.info(1);
        player.dieFlag = true;
        player.countDown = player.dieLen * _Config.config.dieInterval;
        _this.globalSrcBuffer.soundPlay('player_bomb.mp3');
      }
      enemy.y += _Config.config[type + 'Speed'];
    }
  };
  var renderDieEnemy = function renderDieEnemy() {
    for (var i = dieArr.length; i--;) {
      var diePlane = dieArr[i];
      if (diePlane.countDown == 0) {
        var delEnemy = dieArr.splice(i, 1)[0];
        _Enemy2.default.recoverEnemy(delEnemy);
      } else {
        var dieIndex = Math.floor(diePlane.dieLen - diePlane.countDown / 10);
        _this.drawImg(diePlane.type + '_die' + dieIndex + '.png', diePlane.x, diePlane.y);
      }
      diePlane.countDown--;
    }
  };
  var sendProps = function sendProps() {
    if (frame.counter % propInterval == 0) {
      var propType = randomProp();
      _this.globalSrcBuffer.soundPlay('prop_appear.mp3');
      ctrler.curProp = _Prop2.default.getProp((0, _Utils.randomNum)(0, width - _Config.config.propWidth), -_Config.config.propHeight, propType);
    }
  };
  var renderProps = function renderProps() {
    if (ctrler.curProp) {
      _this.drawImg('prop_' + ctrler.curProp.type + '.png', ctrler.curProp.x, ctrler.curProp.y);
      ctrler.curProp.y += _Config.config.propSpeed;
      if (player.x < ctrler.curProp.x + propWidth && player.x + player.width > ctrler.curProp.x && player.y < ctrler.curProp.y + propHeight && player.y + player.height > ctrler.curProp.y) {
        propStrategy[ctrler.curProp.type](player);
        _this.globalSrcBuffer.soundPlay('get_' + ctrler.curProp.type + '_prop.mp3');
        _Prop2.default.recoverProp(ctrler.curProp);
        ctrler.curProp = null;
      } else if (ctrler.curProp.y > height + propHeight) {
        _Prop2.default.recoverProp(ctrler.curProp);
        ctrler.curProp = null;
      }
    }
  };
  var renderBomb = function renderBomb() {
    if (player.bomb) {
      _this.drawImg('bomb.png', 10, height - bombHeight - 10);
      _this.ctx.font = '30px sans-serif';
      _this.ctx.fillText('\xD7 ' + player.bomb, bombWidth + 20, height - bombHeight / 2);
    }
  };
  var renderScore = function renderScore() {
    if (player.score) {
      _this.ctx.font = '34px sans-serif';
      _this.ctx.fillText(_Language.lanStrategy[_this.language].score + '\uFF1A' + player.score, 70, 40);
    }
  };
  var renderCtrl = function renderCtrl() {
    if (!ctrler.isPaused) {
      _this.drawImg('game_pause.png', 0, 5);
    } else {
      _this.drawImg('game_resume.png', 0, 5);
    }
  };

  promote(); //敌机增加
  backScroll(); //滚动背景
  sendBullet(); //发放子弹
  renderBullet(); //渲染子弹
  sendEnemy(); //派发敌机
  renderEnemy(); //渲染敌机
  renderDieEnemy(); //渲染爆炸敌机
  if (renderPlayer()) {
    //渲染玩家飞机
    return;
  }
  sendProps(); //发放道具
  renderProps(); //渲染道具
  renderBomb(); //渲染炸弹
  renderScore(); //渲染分数
  renderCtrl(); //渲染控制按钮

  if (this.curState === 'IN_GAME_UI') {
    requestAnimationFrame(gameRun.bind(this));
  }
};

var loadGame = function loadGame() {
  var _this2 = this;

  this.drawBackground();
  this.btnGroup.style.display = 'none';
  this.hideAllUI();

  if (!this.loaded) {
    this.drawLoading(startGame.bind(this));
    this.globalSrcBuffer.preloadSrc(_Config.config.gameImageSrc, 'image', function () {
      console.log('image loaded');
      _this2.globalSrcBuffer.preloadSrc(_Config.config.gameAudioSrc, 'sound', function () {
        console.log('sound loaded');
        _this2.loaded = true;
      });
    });
  } else {
    startGame.call(this);
  }
};

/******** 状态模式：UI-有限状态机 ********/
var FSM = exports.FSM = {
  'MAIN_UI': {
    clickStartBtn: loadGame,
    clickRankBtn: showRank, //changeUIState.bind(ui, 'show', 'rank');
    clickSetBtn: showSet, //changeUIState.bind(ui, 'show', 'set');
    clickRuleBtn: showRule //changeUIState.bind(ui, 'show', 'rule');
  },
  'RANK_UI': {
    clickStartBtn: loadGame,
    clickRankBtn: hideRank,
    clickSetBtn: showSet,
    clickRuleBtn: showRule
  },
  'SET_UI': {
    clickStartBtn: loadGame,
    clickRankBtn: showRank,
    clickSetBtn: hideSet,
    clickRuleBtn: showRule
  },
  'RULE_UI': {
    clickStartBtn: loadGame,
    clickRankBtn: showRank,
    clickSetBtn: showSet,
    clickRuleBtn: hideRule
  },
  'IN_GAME_UI': {
    clickCtrlBtn: pauseGame
  },
  'GAME_PAUSE_UI': {
    clickCtrlBtn: resumeGame
  },
  'GAME_OVER_UI': {}
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Config = __webpack_require__(0);

var _Plane2 = __webpack_require__(4);

var _Plane3 = _interopRequireDefault(_Plane2);

var _UI = __webpack_require__(2);

var _UI2 = _interopRequireDefault(_UI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Plane) {
  _inherits(Player, _Plane);

  function Player() {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

    _this.width = _Config.config.playerWidth;
    _this.height = _Config.config.playerHeight;
    _this.x = (_Config.config.canvasWidth - _this.width) / 2;
    _this.y = _Config.config.canvasHeight - _this.height - 100;
    _this.playerIndex = 0;
    _this.bomb = 0;
    _this.score = 0;
    _this.isFullFirepower = false;
    _this.isInvincible = false;
    _this.dieFlag = false;
    _this.dieLen = _Config.config.dieImgNum.player;
    return _this;
  }

  _createClass(Player, [{
    key: 'bindTouchEvent',
    value: function bindTouchEvent(dom) {
      var _this2 = this;

      var planeBoundaryMinX = 0;
      var planeBoundaryMaxX = _Config.config.canvasWidth - _Config.config.playerWidth;
      var planeBoundaryMinY = 0;
      var planeBoundaryMaxY = _Config.config.canvasHeight - _Config.config.playerHeight;
      var ratio = _UI2.default.getRatio();
      var ratioX = ratio.x;
      var ratioY = ratio.y;
      dom.addEventListener('touchstart', function (e) {
        var oldTouchX = e.touches[0].clientX / ratioX;
        var oldTouchY = e.touches[0].clientY / ratioY;
        var oldPlaneX = _this2.x;
        var oldPlaneY = _this2.y;
        dom.addEventListener('touchmove', function (e) {
          var newTouchX = e.touches[0].clientX / ratioX;
          var newTouchY = e.touches[0].clientY / ratioY;
          var newPlaneX = oldPlaneX + newTouchX - oldTouchX;
          var newPlaneY = oldPlaneY + newTouchY - oldTouchY;
          if (newPlaneX < planeBoundaryMinX) {
            newPlaneX = planeBoundaryMinX;
          }
          if (newPlaneX > planeBoundaryMaxX) {
            newPlaneX = planeBoundaryMaxX;
          }
          if (newPlaneY < planeBoundaryMinY) {
            newPlaneY = planeBoundaryMinY;
          }
          if (newPlaneY > planeBoundaryMaxY) {
            newPlaneY = planeBoundaryMaxY;
          }
          _this2.x = newPlaneX;
          _this2.y = newPlaneY;
        });
      });
    }
  }, {
    key: 'bindBombEvent',
    value: function bindBombEvent(dom, srcBuffer, enemyArr, dieArr) {
      var _this3 = this;

      dom.addEventListener('touchend', function (e) {
        if (_this3.bomb) {
          _this3.bomb--;
          for (var i = enemyArr.length - 1, enemy; enemy = enemyArr[i--];) {
            enemy.blood = 0;
            var dieEnemy = enemyArr.splice(i, 1)[0];
            var dieLen = _Config.config.dieImgNum[dieEnemy.type];
            dieEnemy.dieLen = dieLen;
            dieEnemy.countDown = dieLen * _Config.config.dieInterval;
            dieArr.push(dieEnemy);
            _this3.score += _Config.config.score[dieEnemy.type];
            srcBuffer.soundPlay('use_bomb.mp3');
          }
        }
      });
    }
  }]);

  return Player;
}(_Plane3.default);

exports.default = Player;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var propPool = (0, _Utils.createObjPool)(function () {
  return new Prop();
});

var Prop = function () {
  function Prop() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -999;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -999;

    _classCallCheck(this, Prop);

    this.x = x;
    this.y = y;
  }

  _createClass(Prop, null, [{
    key: 'getProp',
    value: function getProp(x, y, type) {
      var prop = propPool.get();
      prop.x = x;
      prop.y = y;
      prop.type = type;
      return prop;
    }
  }, {
    key: 'recoverProp',
    value: function recoverProp(propObj) {
      return propPool.recover(propObj);
    }
  }]);

  return Prop;
}();

exports.default = Prop;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(1);

var $ = _interopRequireWildcard(_Utils);

var _Config = __webpack_require__(0);

var _Source = __webpack_require__(5);

var _Source2 = _interopRequireDefault(_Source);

var _UI = __webpack_require__(2);

var _UI2 = _interopRequireDefault(_UI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import '../css/main.css';
var globalSrcBuffer = new _Source2.default();

var background = globalSrcBuffer.getSrc(_Config.config.backgroundImgSrc, 'image');
var logo = globalSrcBuffer.getSrc(_Config.config.logoSrc, 'image');
var wrapper = $.getID('wrapper');
var btnGroup = $.getID('btnGroup');
var startBtn = $.getClass('startBtn');
var rankBtn = $.getClass('rankingBtn');
var setBtn = $.getClass('settingBtn');
var ruleBtn = $.getClass('ruleBtn');
var bombBtn = $.getClass('bombBtn');
var ctrlBtn = $.getClass('ctrlBtn');

var canvas = $.getID('game');
var ctx = canvas.getContext('2d');

var mainUI = new _UI2.default({
  wrapper: wrapper,
  btnGroup: btnGroup,
  canvas: canvas,
  ctx: ctx,
  globalSrcBuffer: globalSrcBuffer,
  background: background,
  logo: logo,
  startBtn: startBtn,
  rankBtn: rankBtn,
  setBtn: setBtn,
  ruleBtn: ruleBtn,
  bombBtn: bombBtn,
  ctrlBtn: ctrlBtn,
  language: _Config.config.language
});

canvas.setAttribute('width', _Config.config.canvasWidth);
canvas.setAttribute('height', _Config.config.canvasHeight);
mainUI.init();

/***/ })
/******/ ]);