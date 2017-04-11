import {lanStrategy} from './Language';
import {config} from './Config';
import {getStyle, getID, getClass, createObjPool, randomNum} from './Utils';
import Controller from './Controller';
import Bullet from './Bullet';
import Enemy from './Enemy';
import Prop from './Prop';


let changeUIState = function(type, ui){
  function show(){
    this.showUI(ui, lanStrategy[this.language][`${ui}Content`]);
  }
  function hide(){
    this.hideUI(ui);
  }
  let upperState = ui.toUpperCase();
  if(type == 'show'){
    return show.after(function(){
      this.curState = `${upperState}_UI`;
    });
  }else{
    return hide.after(function(){
      this.curState = 'MAIN_UI';
    });
  }
};

let showRank = changeUIState('show', 'rank');
let showSet = changeUIState('show', 'set');
let showRule = changeUIState('show', 'rule');
let hideRank = changeUIState('hide', 'rank');
let hideSet = changeUIState('hide', 'set');
let hideRule = changeUIState('hide', 'rule');


let pause = function(){ //暂停游戏
  this.controller.isPaused = true;
  if(!this.ctrl){
    this.ctrl = this.createUI('ctrl', lanStrategy[this.language].ctrlContent);
    let ctrlResume = getClass('ctrl-resume');
    let ctrlAgain = getClass('ctrl-again');
    ctrlResume.addEventListener('touchend', resumeGame.bind(this));
    ctrlAgain.addEventListener('touchend', againGame.bind(this));
  }
  this.globalSrcBuffer.soundPause('music.mp3');
  this.ctrl.style.display = 'block';
  this.curState = 'GAME_PAUSE_UI';
}
let resume = function(){ //继续游戏
  this.controller.isPaused = false;
  this.ctrl.style.display = 'none';
  this.curState = 'IN_GAME_UI';
  this.globalSrcBuffer.soundPlay('music.mp3', {loop:true, replay:false});
  gameRun.call(this);
}
let again = function(){ //重新游戏
  this.controller = null;
  this.ctrl.style.display = 'none';
  this.curState = 'IN_GAME_UI';
  this.globalSrcBuffer.soundPlay('music.mp3', {loop:true, replay:true});
  startGame.call(this);
}

let pauseGame = pause.after(function(){
  this.curState = 'GAME_PAUSE_UI';
});
let resumeGame = resume.before(function(){
  this.curState = 'IN_GAME_UI';
});
let againGame = again.before(function(){
  this.curState = 'IN_GAME_UI';
});


let randomPlane = function(){ //随机敌机
  let index = Math.random();
  if(index < 0.7){
    return 'smallPlane';
  }
  if(index >= 0.7 && index < 0.9){
    return 'mediumPlane';
  }
  if(index >= 0.9){
    return 'largePlane';
  }
}

let randomAI = function(){ //随机智能机群
  let index = Math.random();
  if(index < 0.33){
    return 'AI-I';
  }
  if(index >= 0.33 && index <= 0.66){
    return 'AI-II';
  }
  if(index > 0.66){
    return 'AI-III';
  }
}

let randomProp = function(){ //随机道具
  let index = Math.random();
  if(index < 0.3){
    return 'bomb';
  }
  if(index >= 0.3){
    return 'weapon';
  }
}

let propStrategy = { //道具策略
  bomb: function(player){
    let bombNum = player.bomb;
    if(bombNum < config.bombMax){
      player.bomb = bombNum + 1;      
    }
  },
  weapon: function(player){
    let {weaponLevel} = player;
    if(weaponLevel < 4){
      player.weaponLevel = weaponLevel + 1;
    }
    if(!player.isFullFirepower){
      player.isFullFirepower = true;
    }else{
      clearTimeout(player.firepowerTimer);
    }
    player.firepowerTimer = setTimeout(function(){
      player.isFullFirepower = false;
      player.weaponLevel = 0;
    }, config.firepowerTime);
  }
}

let {
  dieInterval,
  propInterval,
  bulletInterval,
  propWidth,
  propHeight,
  bombWidth,
  bombHeight,
  buttonWidth,
  buttonHeight,
  score,
  promoteInterval,
  promoteMin
} = config;


let startGame = function(){ //启动游戏
  // console.log('game start');

  //背景音乐
  this.globalSrcBuffer.soundPlay('music.mp3', {loop:true, replay:true});

  //透明按钮
  this.bombBtn.style.display = 'block';
  this.ctrlBtn.style.display = 'block';

  //启动游戏控制器
  this.controller = new Controller();

  let {
    enemyArr,
    dieArr
  } = this.controller;

  //绑定飞机移动事件、炸弹事件、暂停事件
  this.controller.player.bindTouchEvent(this.canvas);
  this.controller.player.bindBombEvent(this.bombBtn, this.globalSrcBuffer, enemyArr, dieArr);
  if(!this.ctrlEventBinded){
    this.bindCtrlEvent();
    this.ctrlEventBinded = true;
  }

  //改变当前状态
  this.curState = 'IN_GAME_UI';

  //运行游戏
  gameRun.call(this);

}

let gameRun = function(){ //运行游戏真动画
  let canvas = this.canvas;
  let {width, height} = canvas;
  
  let ctrler = this.controller;
  let {
    player,
    bulletArr,
    enemyArr,
    dieArr,
    frame,
    back,
  } = ctrler;

  frame.counter++;

  let promote = () => {
    if(ctrler.enemyInterval == promoteMin){
      return;
    }
    if(frame.counter % promoteInterval == 0){
      ctrler.enemyInterval--;
    }
  }
  let backScroll = () => {
    back.y1 = (back.y1 === height) ? -height : (back.y1 + 1);
    back.y2 = (back.y2 === height) ? -height : (back.y2 + 1);
    this.drawBackground(back.y1);
    this.drawBackground(back.y2);
  }
  let renderPlayer = () => {
    if(!player.dieFlag){
      this.drawImg(`player${player.playerIndex}.png`, player.x, player.y);
      if(frame.counter % 5 == 0){
        player.playerIndex = Number(!player.playerIndex);
      }
    }else{
      if(player.countDown == 0){
        this.curState = 'GAME_OVER_UI';
        this.drawImg('game_over.png', 0, 0);
        this.bombBtn.style.display = 'none';
        this.ctrlBtn.style.display = 'none';

        this.globalSrcBuffer.soundPlay('achievement.mp3');

        this.ctx.font = '50px sans-serif';
        let textWidth = this.ctx.measureText(player.score).width;
        this.ctx.fillText(player.score, (width - textWidth) / 2, height / 2);
        if(!sessionStorage.fighterScore){
          sessionStorage.fighterScore = '[]';
        }
        let db = JSON.parse(sessionStorage.fighterScore);
        db.push(player.score);
        db = db.sort(function(a, b){
          return b - a;
        });
        sessionStorage.fighterScore = JSON.stringify(db);

        let touchScreen = () => {
          this.globalSrcBuffer.soundPause('music.mp3');
          this.drawBackground();
          this.drawLogo();
          this.setBtnText(this.language);
          this.btnGroup.style.display = 'block';
          this.curState = 'MAIN_UI';
          canvas.removeEventListener('touchstart', touchScreen);
        }

        setTimeout(() => {
          canvas.addEventListener('touchstart', touchScreen);
        }, 1000);
        
        return true;
      }else{
        let dieIndex = Math.floor(player.dieLen - player.countDown / 10);      
        this.drawImg(`player_die${dieIndex}.png`, player.x, player.y);
      }
      player.countDown--;
    }
  }
  let sendBullet = () => {
    let {bulletSpeed} = config;
    if(frame.counter % bulletInterval == 0){
      switch(player.weaponLevel){
        case 0:
          {
            let newBullet = Bullet.getBullet(player.x + player.width/2 - 3, player.y, 0, -bulletSpeed, 'normal', 1);
            bulletArr.push(newBullet);
            break;
          }
        case 1:
          {
            let newLeftBullet = Bullet.getBullet(player.x + player.width/2 - 20, player.y, 0, -bulletSpeed,  'normal', 1);
            let newRightBullet = Bullet.getBullet(player.x + player.width/2 + 14, player.y, 0, -bulletSpeed,  'normal', 1);
            bulletArr.push(newLeftBullet, newRightBullet);
            break;
          }
        case 2:
          {
            let newLeftBullet = Bullet.getBullet(player.x + player.width/2 - 38, player.y + 20, -bulletSpeed/3, -bulletSpeed,  'strength', 1);
            let newMidBullet = Bullet.getBullet(player.x + player.width/2 - 3, player.y, 0, -bulletSpeed,  'normal', 1);
            let newRightBullet = Bullet.getBullet(player.x + player.width/2 + 30, player.y + 20, bulletSpeed/3, -bulletSpeed,  'strength', 1);
            bulletArr.push(newLeftBullet, newMidBullet, newRightBullet);
            break;
          }
        case 3:
          {
            let newLeftBullet = Bullet.getBullet(player.x + player.width/2 - 38, player.y + 20, -bulletSpeed/3, -bulletSpeed,  'strength', 1);
            let newMidLeftBullet = Bullet.getBullet(player.x + player.width/2 - 20, player.y, 0, -bulletSpeed,  'normal', 1);
            let newMidRightBullet = Bullet.getBullet(player.x + player.width/2 + 14, player.y, 0, -bulletSpeed,  'normal', 1);
            let newRightBullet = Bullet.getBullet(player.x + player.width/2 + 30, player.y + 20, bulletSpeed/3, -bulletSpeed,  'strength', 1);
            bulletArr.push(newLeftBullet, newMidLeftBullet, newMidRightBullet, newRightBullet);
            break;
          }
        case 4:
          {
            let newLeftBullet = Bullet.getBullet(player.x + player.width/2 - 38, player.y + 20, -bulletSpeed/3, -bulletSpeed,  'strength', 1);
            let newMidLeftBullet = Bullet.getBullet(player.x + player.width/2 - 20, player.y, -bulletSpeed/4, -bulletSpeed,  'normal', 1);
            let newMidBullet = Bullet.getBullet(player.x + player.width/2 - 3, player.y, 0, -bulletSpeed,  'super', 2);
            let newMidRightBullet = Bullet.getBullet(player.x + player.width/2 + 14, player.y, bulletSpeed/4, -bulletSpeed,  'normal', 1);
            let newRightBullet = Bullet.getBullet(player.x + player.width/2 + 30, player.y + 20, bulletSpeed/3, -bulletSpeed,  'strength', 1);
            bulletArr.push(newLeftBullet, newMidLeftBullet, newMidBullet, newMidRightBullet, newRightBullet);
            break;
          }
        default:
          break;
      }
      // if(!player.isFullFirepower){
      //   let newBullet = Bullet.getBullet(player.x + player.width/2 - 3, player.y, 'normal');
      //   bulletArr.push(newBullet);
      // }else{
      //   let newLeftBullet = Bullet.getBullet(player.x + player.width/2 - 20, player.y, 'strength');
      //   let newRightBullet = Bullet.getBullet(player.x + player.width/2 + 14, player.y, 'strength');
      //   bulletArr.push(newLeftBullet);
      //   bulletArr.push(newRightBullet);
      // }
      this.globalSrcBuffer.soundPlay('biubiubiu.mp3');
    }
  }
  let renderBullet = () => {
     for(let i = bulletArr.length; i--;){
      let bullet = bulletArr[i];
      if(bullet.y < -config.bulletHeight){
        let delBullet = bulletArr.splice(i, 1)[0];
        Bullet.recoverBullet(delBullet);
        continue;
      }
      this.drawImg(`bullet_${bullet.type}.png`, bullet.x, bullet.y);
      bullet.y += bullet.shiftY;
      if(bullet.shiftX){
        bullet.x += bullet.shiftX;
      }
      for(let j = enemyArr.length; j--;){
        let enemy = enemyArr[j];
        if(bullet.x + config.bulletWidth > enemy.x &&
          bullet.x < enemy.x + config[`${enemy.type}Width`] &&
          bullet.y + config.bulletHeight > enemy.y &&
          bullet.y < enemy.y + config[`${enemy.type}Height`]
        ){
          let delBullet = bulletArr.splice(i, 1)[0];
          Bullet.recoverBullet(delBullet);
          enemy.blood -= delBullet.damage;
          if(enemy.blood <= 0){
            let dieEnemy = enemyArr.splice(j, 1)[0];
            let dieLen = config.dieImgNum[dieEnemy.type];
            dieEnemy.dieLen = dieLen;
            dieEnemy.countDown = dieLen * dieInterval;
            dieArr.push(dieEnemy);
            if(dieEnemy.isAI){
              player.score += 2 * score[dieEnemy.type];
            }else{
              player.score += score[dieEnemy.type];
            }
            this.globalSrcBuffer.soundPlay(`${dieEnemy.type}_die.mp3`);
          }
          break;
        }
      }
    }
  }
  let sendEnemy = () => {
    if(frame.counter % ctrler.enemyInterval == 0){
      let planeType = randomPlane();
      let newEnemy = Enemy.getEnemy(
        randomNum(0, width - config[`${planeType}Width`]), 
        -config[`${planeType}Height`],
        planeType
      );
      if(planeType == 'largePlane'){
        newEnemy.imgIndex = 0;
        this.globalSrcBuffer.soundPlay('largePlane_flying.mp3');
      }
      enemyArr.push(newEnemy);
    }
  }
  let sendAIEnemey = () => {
    if(frame.counter % ctrler.AIInterval == 0){
      let AI = randomAI();
      switch(AI){
        case 'AI-I': //横飞智能机
          {
            let {smallPlaneHeight} = config;
            let randomY = randomNum(100, height - config['smallPlaneWidth'] - 100);
            let cnt = 0;
            ctrler.AITimer = setInterval(() => {
              if(cnt == 12){
                clearInterval(ctrler.AITimer);
              }
              let newEnemy1 = Enemy.getEnemy(
                -smallPlaneHeight, 
                randomY - 80,
                'smallPlane',
                5,
                0,
                true,
                'right'
              );
              let newEnemy2 = Enemy.getEnemy(
                width, 
                randomY,
                'smallPlane',
                -5,
                0,
                true,
                'left'
              );
              let newEnemy3 = Enemy.getEnemy(
                -smallPlaneHeight, 
                randomY + 80,
                'smallPlane',
                5,
                0,
                true,
                'right'
              );
              enemyArr.push(newEnemy1, newEnemy2, newEnemy3);
              cnt++;
            }, 300);
            break;
          }
        case 'AI-II': //锁敌智能机
          {
            let {smallPlaneWidth, smallPlaneHeight} = config;
            let cnt = 0;
            ctrler.AITimer = setInterval(() => {
              if(cnt == 15){
                clearInterval(ctrler.AITimer);
              }
              let newEnemy1 = Enemy.getEnemy(
                -smallPlaneWidth,
                -smallPlaneHeight,
                'smallPlane',
                (player.x + player.width/2) / 90,
                (player.y + player.height/2) / 90,
                true
              );
              let newEnemy2 = Enemy.getEnemy(
                width,
                -smallPlaneHeight,
                'smallPlane',
                (player.width/2 -(width - player.x)) / 90,
                (player.y + player.height/2) / 90,
                true
              );
              enemyArr.push(newEnemy1, newEnemy2);
              cnt++;
            }, 300);
            break;
          }
        case 'AI-III': //并飞智能机
          {
            let {mediumPlaneWidth, mediumPlaneHeight} = config;
            let cnt = 0;
            let randomX = randomNum(0, width/2 - mediumPlaneWidth);
            ctrler.AITimer = setInterval(() => {
              if(cnt == 8){
                clearInterval(ctrler.AITimer);
              }
              let newEnemy1 = Enemy.getEnemy(
                randomX,
                -mediumPlaneHeight,
                'mediumPlane',
                0,
                3,
                true
              );
              let newEnemy2 = Enemy.getEnemy(
                width - randomX - mediumPlaneWidth,
                -mediumPlaneHeight,
                'mediumPlane',
                0,
                3,
                true
              );
              enemyArr.push(newEnemy1, newEnemy2);
              cnt++;
            }, 500);
          }
        default:
          break;
      }
    }
  }
  let renderEnemy = () => {
    for(let i = enemyArr.length; i--;){
      let enemy = enemyArr[i];
      let {type, dir} = enemy;
      let enemyHeight = config[`${type}Height`];
      let enemyWidth = config[`${type}Width`];
      if(enemy.y > height + enemyHeight || enemy.x < -300 || enemy.x > width + 300){
        let del = enemyArr.splice(i, 1)[0];
        Enemy.recoverEnemy(del);
        continue;
      }
      if(type == 'largePlane'){
        if(frame.counter % 7 == 0){
          enemy.imgIndex = Number(!enemy.imgIndex);
        }
        if(enemy.blood < config.planeBlood.largePlane / 2 && enemy.imgIndex == 1){
          this.drawImg('largePlane_hurt.png', enemy.x, enemy.y);
        }else{
          this.drawImg(`${type}${enemy.imgIndex}.png`, enemy.x, enemy.y);
        }
      }else{
        if(type == 'mediumPlane' && enemy.blood < config.planeBlood.mediumPlane / 2){
          this.drawImg('mediumPlane_hurt.png', enemy.x, enemy.y);
        }
        if(dir){
          this.drawImg(`${type}_${dir}.png`, enemy.x, enemy.y);
        }else{
          this.drawImg(`${type}.png`, enemy.x, enemy.y);
        }
      }
      if(
        enemy.x + 0.8*enemyWidth > player.x &&
        enemy.x + 0.2*enemyWidth < player.x + player.width &&
        enemy.y + 0.8*enemyHeight > player.y &&
        enemy.y + 0.2*enemyHeight < player.y + player.height &&
        !player.dieFlag
      ){
        // console.info(1);
        player.dieFlag = true;
        player.countDown = player.dieLen * config.dieInterval;
        this.globalSrcBuffer.soundPlay('player_bomb.mp3');
      }
      enemy.y += enemy.shiftY;
      enemy.x += enemy.shiftX;
    }
  }
  let renderDieEnemy = () => {
    for(let i = dieArr.length; i--;){
      let diePlane = dieArr[i];
      if(diePlane.countDown == 0){
        let delEnemy = dieArr.splice(i, 1)[0];
        Enemy.recoverEnemy(delEnemy);
      }else{
        let dieIndex = Math.floor(diePlane.dieLen - diePlane.countDown / 10);
        if(diePlane.dir){
          this.drawImg(`${diePlane.type}_${diePlane.dir}_die${dieIndex}.png`, diePlane.x, diePlane.y);
        }else{
          this.drawImg(`${diePlane.type}_die${dieIndex}.png`, diePlane.x, diePlane.y);
        }
      }
      diePlane.countDown--;
    }
  }
  let sendProps = () => {
    if(frame.counter % propInterval == 0){
      let propType = randomProp();
      this.globalSrcBuffer.soundPlay('prop_appear.mp3');
      ctrler.curProp = Prop.getProp(
        randomNum(0, width - config.propWidth), 
        -config.propHeight,
        propType
      );
    }
  }
  let renderProps = () => {
    if(ctrler.curProp){
      this.drawImg(`prop_${ctrler.curProp.type}.png`, ctrler.curProp.x, ctrler.curProp.y);
      ctrler.curProp.y += config.propSpeed;
      if(
        player.x < ctrler.curProp.x + propWidth &&
        player.x + player.width > ctrler.curProp.x &&
        player.y < ctrler.curProp.y + propHeight &&
        player.y + player.height > ctrler.curProp.y
      ){
        propStrategy[ctrler.curProp.type](player);
        this.globalSrcBuffer.soundPlay(`get_${ctrler.curProp.type}_prop.mp3`);
        Prop.recoverProp(ctrler.curProp);
        ctrler.curProp = null;
      }else if(ctrler.curProp.y > height + propHeight){
        Prop.recoverProp(ctrler.curProp);
        ctrler.curProp = null;
      }
    }
  }
  let renderBomb = () => {
    if(player.bomb){
      this.drawImg('bomb.png', 10, height - bombHeight - 10);
      this.ctx.font = '30px sans-serif';
      this.ctx.fillText(`× ${player.bomb}`, bombWidth + 20, height - bombHeight / 2);
    }
  }
  let renderScore = () => {
    if(player.score){
      this.ctx.font = '34px sans-serif';
      this.ctx.fillText(`${lanStrategy[this.language].score}：${player.score}`, 70, 40);
    }
  }
  let renderCtrl = () => {
    if(!ctrler.isPaused){
      this.drawImg('game_pause.png', 0, 5);
    }else{
      this.drawImg('game_resume.png', 0, 5);
    }
  }

  promote(); //敌机增加
  backScroll(); //滚动背景
  sendBullet(); //发放子弹
  renderBullet(); //渲染子弹
  sendEnemy(); //派发敌机
  sendAIEnemey(); //派发智能机群
  renderEnemy(); //渲染敌机
  renderDieEnemy(); //渲染爆炸敌机
  if(renderPlayer()){ //渲染玩家飞机
    return;//终止
  }
  sendProps(); //发放道具
  renderProps(); //渲染道具
  renderBomb(); //渲染炸弹
  renderScore(); //渲染分数
  renderCtrl(); //渲染控制按钮
  
  if(this.curState === 'IN_GAME_UI'){
    requestAnimationFrame(gameRun.bind(this));      
  }
};

let loadGame = function(){ //加载游戏
  this.drawBackground();
  this.btnGroup.style.display = 'none';
  this.hideAllUI();
  
  if(!this.loaded){
    // let loadedSrc = 0;
    this.drawLoading(startGame.bind(this));
    // this.globalSrcBuffer.preloadSrc(config.gameImageSrc, 'image', () => {
    //   console.log('image loaded');
    //   if(++loadedSrc == 2){
    //     this.loaded = true;
    //   }
    // });
    // this.globalSrcBuffer.preloadSrc(config.gameAudioSrc, 'sound', () => {
    //   console.log('sound loaded');
    //   if(++loadedSrc == 2){
    //     this.loaded = true;
    //   }
    // });
    this.loaded = true;
  }else{
    startGame.call(this);
  }
}

/******** UI-有限状态机 ********/
export const FSM = {
    'MAIN_UI': {
      clickStartBtn: loadGame,
      clickRankBtn: showRank,
      clickSetBtn: showSet,
      clickRuleBtn: showRule
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
    'GAME_OVER_UI': {
      
    }
}