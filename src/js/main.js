import '../css/main.css';
import * as $ from './Utils';
import {config} from './Config';
import Source from './Source';
import UI from './UI';

const globalSrcBuffer = new Source();

const background = globalSrcBuffer.getSrc(config.backgroundImgSrc, 'image');
const logo = globalSrcBuffer.getSrc(config.logoSrc, 'image');
const wrapper = $.getID('wrapper');
const btnGroup = $.getID('btnGroup');
const startBtn = $.getClass('startBtn');
const rankBtn = $.getClass('rankingBtn');
const setBtn = $.getClass('settingBtn');
const ruleBtn = $.getClass('ruleBtn');
const bombBtn = $.getClass('bombBtn');
const ctrlBtn = $.getClass('ctrlBtn');

const canvas = $.getID('game');
const ctx = canvas.getContext('2d');
const mainUI = new UI({
  wrapper,
  btnGroup,
  canvas,
  ctx, 
  globalSrcBuffer,
  background,
  logo,
  startBtn,
  rankBtn,
  setBtn,
  ruleBtn,
  bombBtn,
  ctrlBtn,
  language: config.language
})

canvas.setAttribute('width', config.canvasWidth);
canvas.setAttribute('height', config.canvasHeight);
mainUI.init();