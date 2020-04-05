function drawMap() {
  gridSize = 6
  ctx = canvas.getContext('2d');

  for (var y = 0; y < worldMap.length; y++) {
    var tmpMap = worldMap[y].toString();
    for (var x = 0; x < tmpMap.length; x++) {
      if (tmpMap.charAt(x) != 2) { // water
        //ctx.fillStyle = "rgb(50,50,128)";
        ctx.fillStyle = `rgb(
        ${Math.floor(100 + 10 * tmpMap.charAt(x))},
        ${Math.floor(50 + 10 *  tmpMap.charAt(x))},
        ${Math.floor(140 + 10 *  tmpMap.charAt(x))})`;
        ctx.fillRect(x * (gridSize + 2), y * (gridSize + 2), gridSize, gridSize);
      } else {
        ctx.fillStyle = "rgb(2,2,2)";
        ctx.fillRect(x * (gridSize + 2), y * (gridSize + 2), gridSize, gridSize);
      }
    }
  }
}

window.onload = function() {
  var canvas = document.getElementById('canvas');
  drawMap();
};
