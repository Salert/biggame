function polygon(c, n, x, y, r, angle, counterclockwise) {
  angle = angle || 0;
  counterclockwise = counterclockwise || false;
  c.moveTo(x + r*Math.sin(angle),
       y - r*Math.cos(angle));
  var delta = 2*Math.PI/n;
  for(var i = 1; i < n; i++){
    angle += counterclockwise ? -delta : delta;
    c.lineTo(x + r * Math.sin(angle),
             y - r * Math.cos(angle));
    xx = x - (x + r * Math.sin(angle));
    yy = y - (y - r * Math.cos(angle));
  }
  c.closePath();
}
var canvas = document.getElementById('mapGame');
if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  xy = sizeGeks*2;


  for(var j = 0; j < mapSizeY; j++){
    var offSX = (j % 2 != 0) ? 1  : 0;
    for(var i = 0; i < mapSizeX - offSX; i++){
      var offSetY = sizeGeks * (Math.sqrt(3) / 2);
      var offSetX = (j % 2 != 0) ? (sizeGeks + sizeGeks / 2) : 0;
      polygon(ctx, 6, xy + (sizeGeks * 2 + sizeGeks) * i + offSetX, xy + (offSetY * j), sizeGeks, Math.PI/6);
    }
  }

  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();
}else{console.log('Хз что такое(((')}

