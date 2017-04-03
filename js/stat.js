'use strict';

window.renderStatistics = function(ctx, names, times) {
ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
ctx.fillRect (110, 20, 420, 270);
ctx.fillStyle = 'white';
ctx.fillRect (100, 10, 420, 270);
ctx.font = '16px PT Mono';
ctx.fillStyle = 'black';
ctx.fillText('Ура, вы победили!', 120, 40);
ctx.fillText('Список результатов:', 120, 60);

var histogramHeight = 150; // px
var columnWidth = 40; // px
var indent = 50; // px
var colorColumnYou = 'rgba(255, 0, 0, 1)';
var colorColumnOther = function() {
	return 'rgba(0, 0, 255, ' + Math.random() +')'
}

var max = -1;
var maxIndex = -1;
for(var i = 0; i < times.length; i++) {
	var time = times[i];
	if(time > max) {
		max = time;
		maxIndex = i;
	}
}
var step = histogramHeight / (max - 0);

// левый нижний край гистограммы
var initialX = 130; 
var initialY = 250;

for(var i = 0; i < times.length; i++) {
	if('Вы' == names[i]) {
		ctx.fillStyle = colorColumnYou;
	} else {
		ctx.fillStyle = colorColumnOther();
	}
	var columnY = initialY - times[i] * step;
	ctx.fillRect(
		initialX + i * (columnWidth + indent), 
		columnY, 
		columnWidth, 
		times[i] * step
	);
	ctx.fillStyle = 'black';
	ctx.textBaseline = 'bottom';
	ctx.fillText(names[i], initialX + i * (columnWidth + indent), initialY + 20);
	ctx.fillText(Math.round(times[i]), initialX + i * (columnWidth + indent), columnY - 5);
	}
}