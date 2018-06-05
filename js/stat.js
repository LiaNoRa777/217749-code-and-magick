'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_DESCRIPTION = 10;
var GAP_CHART = 50;
var CHART_HEIGHT = 150;
var CHART_Y = 80;
var BAR_WIDTH = 40;
var DISTANCE_BETWEEN_BARS = 50;
var TEXT_HEIGHT = 25;
var YOUR_COLOR = "rgba(255, 0, 0, 1)";

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  
  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(CLOUD_X + GAP_DESCRIPTION, CLOUD_Y + GAP_DESCRIPTION, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  
  var maxTime = getMaxElement(times);
  
  for (var i = 0; i < names.length; i++) {
    var barHeight = (CHART_HEIGHT * Math.round(times[i])) / maxTime;
    
    ctx.fillStyle = "black";
    ctx.font = "16px PT Mono";
    ctx.fillText("Ура вы победили!", 235, 35);
    ctx.fillText("Список результатов:", 220, 55);
    
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_CHART + (BAR_WIDTH + DISTANCE_BETWEEN_BARS) * i, CLOUD_Y + CHART_Y + (CHART_HEIGHT - barHeight) - GAP_DESCRIPTION);    
    ctx.fillText(names[i], CLOUD_X + GAP_CHART + (BAR_WIDTH + DISTANCE_BETWEEN_BARS) * i, CLOUD_Y + CHART_Y + CHART_HEIGHT + TEXT_HEIGHT);
    
    if (names[i] == "Вы") {
      ctx.fillStyle = YOUR_COLOR;
    } else {
      ctx.fillStyle = "rgb(28," + Math.floor(Math.random() * 255) + ", 255)";
    }
    
    ctx.fillRect(CLOUD_X + GAP_CHART + (BAR_WIDTH + DISTANCE_BETWEEN_BARS) * i, CLOUD_Y + CHART_Y + (CHART_HEIGHT - barHeight), BAR_WIDTH, barHeight);
  }
};
