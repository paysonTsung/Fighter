import {config} from './Config';
import * as $ from './Utils';
import {lanStrategy} from './Language';
import {FSM} from './FSM';

let lanChangeStrategy = {
  '中文': 'chinese',
  'English': 'english'
}

export default class UI {
  constructor(paramObj){
    paramObj.curState = 'MAIN_UI';
    paramObj.controller = null;
    paramObj.score = null;
    paramObj.loaded = false;
    Object.assign(this, paramObj);
  }

  static getRatio(){
    return {
      x: $.getStyle($.getID('wrapper'),'width').slice(0, -2) / config.canvasWidth,
      y: $.getStyle($.getID('wrapper'),'height').slice(0, -2) / config.canvasHeight
    }
  }

  _setBtnText(lanSet){
    if(lanSet){
      lanSet = lanSet.toLowerCase();
    }
    if(!lanStrategy[lanSet]){
      lanSet = 'chinese';
    }
    for(let i = 0, btn; btn = ['startBtn','rankBtn','setBtn','ruleBtn'][i++];){
      this[btn].innerHTML = lanStrategy[lanSet][btn];
    }
  }

  _drawBackground(offsetY = 0){
    this.ctx.drawImage(this.background, 0, offsetY);
  }

  _drawLogo(){
    this.ctx.drawImage(this.logo, (this.canvas.width - this.logo.width)/2, 200);
  }

  _drawImg(src, offsetX = 0, offsetY = 0){
    this.ctx.drawImage(this.globalSrcBuffer.getSrc(src, 'image'), offsetX, offsetY);
  }

  _drawLoading(callback){
    let loadImgArr = config.loadImageSrc;
    let loadImgLen = loadImgArr.length;
    let index = 0;
    let loadText = lanStrategy[this.language].loading;
    let loadTimer = setInterval(() => {
      let loadSrc = this.globalSrcBuffer.getSrc(loadImgArr[index], 'image');
      let textWidth;
      this._drawBackground();      
      this.ctx.fillStyle = 'black';
      this.ctx.font = '30px sans-serif';
      textWidth = this.ctx.measureText(loadText).width;      
      this.ctx.fillText(loadText, (config.canvasWidth - textWidth) / 2, 500);
      if(!loadSrc.onload){
        loadSrc.onload = () => {
          this.ctx.drawImage(loadSrc, 140, 400);   
          index++;
          if(index === loadImgLen){
            console.log('loaded over');
            clearInterval(loadTimer);
            setTimeout(callback, 300);
          }
        }
      }
    }, 250);
  }

  _renderMainUI(){
    this.background.onload = () => {
      this._drawBackground();
      this.logo.onload = () => {
        this._drawLogo();
        this._setBtnText(this.language);
      }
    }
  }

  _bindBtnEvent(){
    for(let i = 0, btn; btn = ['startBtn','rankBtn','setBtn','ruleBtn'][i++];){
      this[btn].addEventListener('touchend', () => {
        FSM[this.curState][`click${$.firstUpper(btn)}`].call(this);
      })
    }
  }

  bindCtrlEvent(){
    this.ctrlBtn.addEventListener('touchend', () => {
      this.globalSrcBuffer.soundPlay('button.mp3');
      FSM[this.curState].clickCtrlBtn.call(this);
    })
  }

  _bindSetEvent(){
    const lanSet = $.getClass('lanSet');
    if(!lanSet.onchange){
      lanSet.onchange = () => {
        this.language = lanChangeStrategy[lanSet.value];
        for(var i = 0, ui; ui = ['rank','set','rule'][i++];){
          this._deleteUI(ui);
        }
        this._setBtnText(this.language);
        this._showUI('set', lanStrategy[this.language].setContent);
      }
    }
  }

  _createUI(name, content){
    let tempDiv = $.create('div');
    tempDiv.className = name;
    tempDiv.style.zIndex = 100;
    this.wrapper.appendChild(tempDiv);
    if(typeof content == 'function'){
      tempDiv.innerHTML = content();
    }else{
      tempDiv.innerHTML = content;
    }
    if(name == 'set'){
      this._bindSetEvent();
    }
    return tempDiv;
  }
  
  _deleteUI(name){
    if(this[name]){
      $.removeDOM(this[name]);
      delete this[name];
    }
  }

  _showUI(name, content){
    this._hideAllUI();
    if(!this[name] || name == 'rank'){
      this[name] = this._createUI(name, content);
    }
    this[name].style.display = 'block';
  }

  _hideAllUI(){
    for(let i = 0, ui; ui = ['start','rank','set','rule'][i++];){
      if(this[ui]){
        this[ui].style.display = 'none';
      }
    }
  }
  
  init(){
    this._renderMainUI();
    this._bindBtnEvent();
  }
}