    var FPS = 30;
    var dt = 1 / FPS; // synthetic delta time
    var last = Date.now() / 1000;
    var accrued = 0.0;

    //var ri = 0.0; // render interpolation
    var posX = 0;
    var posY = 0;
    //map_x = 121;
    //map_y = 47;

    // dvojrozmerne pole
    /*var pole = new Array(map_y);
    for(var y = 0; y < map_y; y++) {
      pole[y] = new Array(map_x);
      for (var x=0; x<map_x; x++) {
        pole[y][x] = 1;
      }
    }*/

    function drawMap() {
        ctx = canvas.getContext('2d');

        for (var y = 0; y < worldMap.length; y++) {
            var tmpMap = worldMap[y].toString();
            for (var x = 0; x < tmpMap.length; x++) {
                if (tmpMap.charAt(x) == 1) {
                    ctx.fillStyle = "rgb(50,50,128)";
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
        //ctx = canvas.getContext('2d');

        this.gridSize = 6;
        drawMap();
        setInterval(game, 25);

    };

    function game() {
        var now = Date.now() / 1000;
        accrued += (now - last);
        //var mousePos = getMousePos(canvas, evt);
        while (accrued > dt) {
            //Update(dt);
            accrued -= dt;
        }
        //ri = (accrued/dt); // calculate render interpolation
        //draw();
        last = now;
    }
