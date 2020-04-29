const rectSize = 8
const space = 0

const colors = {
  0: '#EFC958',
  1: '#344E5C',
  2: '#FFFFFF',
  3: '#4AB19D',
  4: '#EF3D59',
  5: '#123456',
  6: '#E17A47'
}

function drawMap () {
  let ctx = canvas.getContext('2d')
  for (var y = 0; y < worldMap.length; y++) {
    var tmpMap = worldMap[y].toString()
    for (var x = 0; x < tmpMap.length; x++) {
      ctx.fillStyle = colors[tmpMap.charAt(x)]
      ctx.fillRect(x * (rectSize + space), y * (rectSize + space), rectSize, rectSize)
    }
  }
}

window.onload = function () {
  var canvas = document.getElementById('canvas')
  drawMap()
}
