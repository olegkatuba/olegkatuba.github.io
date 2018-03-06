function Drawer() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    this.drawDot = function (dot) {
        drawCircle(dot.getOwner().getColor(), dot.getX()*25 + Math.random() * 2 - 0.5, dot.getY()*25 + Math.random() * 2 - 0.5, 8);// + Math.random() * 2 - 0.5
    };

    function drawCircle(color, x, y, radius) {
        ctx.fillStyle = color;
        ctx.strokeStyle = "#000";
        ctx.lineWidth = "2";
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }

    this.drawField = function () {

        document.getElementById('stepNumber').style.backgroundColor = "#FFFFFF";
        document.getElementById('Play').style.backgroundColor = "#FFFFFF";
        document.getElementById('Stop').style.backgroundColor = "#FFFFFF";
        document.getElementById('Stop').style.display = "inline";
        document.getElementById('Play').style.display = "inline";

        ctx.strokeStyle = "#000";
        ctx.lineWidth = "1";
        ctx.beginPath();
        for(var i = width/columns; i < width; i+=width/columns){
            if(i===400)
                continue;
            ctx.moveTo(i,0);
            ctx.lineTo(i,500);
        }
        for(var j = height/rows; j < height; j+=height/rows){
            ctx.moveTo(0,j);
            ctx.lineTo(500,j);
        }
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "#f00";
        ctx.lineWidth = "3";
        ctx.moveTo(width/columns*(columns-4),0);
        ctx.lineTo(width/columns*(columns-4),500);
        ctx.stroke();
        ctx.strokeStyle = "#000";
    };

    this.drawArea = function (sorted, color) {
        ctx.strokeStyle = color;
        ctx.fillStyle = color.getTransparent(0.5);
        ctx.lineWidth = "2";
        ctx.beginPath();
        ctx.moveTo(sorted[0].getX() * 25, sorted[0].getY() * 25);
        for(var i = 1; i < sorted.length; i++)
            ctx.lineTo(sorted[i].getX() * 25, sorted[i].getY() * 25);
        ctx.lineTo(sorted[0].getX() * 25, sorted[0].getY() * 25);
        ctx.stroke();
        ctx.fill();
    };

    this.clean = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    this.drawWinner = function (winner, count) {

        document.getElementById('stepNumber').style.backgroundColor = "#B2B2B2";
        document.getElementById('Play').style.backgroundColor = "#B2B2B2";
        document.getElementById('Stop').style.backgroundColor = "#B2B2B2";
        document.getElementById('Stop').style.display = "none";
        document.getElementById('Play').style.display = "none";

        ctx.fillStyle = new Color(0, 0, 0, 0.3);
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = "bold 60px Comic Sans MS, cursive, sans-serif";
        ctx.lineWidth = 8;
        ctx.strokeStyle = "black";
        ctx.strokeText(winner.getName().toUpperCase() + " WINS!", 65, 285);

        ctx.lineWidth = 3;
        ctx.strokeStyle = "white";
        ctx.fillStyle = winner.getColor();
        ctx.strokeText(winner.getName().toUpperCase() + " WINS!", 60, 280);
        ctx.fillText(winner.getName().toUpperCase() + " WINS!", 60, 280);

        ctx.font = "bold 35px Comic Sans MS, cursive, sans-serif";
        ctx.lineWidth = 3;
        ctx.strokeStyle = "black";
        ctx.strokeText(count + " occupied dots!", 82, 322);

        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.fillStyle = winner.getColor();
        ctx.strokeText(count + " occupied dots!", 80, 320);
        ctx.fillText(count + " occupied dots!", 80, 320);
    };

    this.drawResult = function (blueCount, redCount) {

        drawLines(blueCount, 72, "#00f");

        drawLines(redCount, 322, "#f00");

        function drawLine(x, y, color) {
            ctx.strokeStyle = color;
            ctx.lineWidth = "2";
            ctx.beginPath();
            ctx.moveTo(x + Math.random() * 2 - 1 , y + Math.random() * 2 - 1);
            ctx.lineTo(x + 2 + Math.random() * 2 - 1, y - 20 + Math.random() * 2 - 1);
            ctx.stroke();
        }

		function drawStrokeLine(x, y, color){
			ctx.strokeStyle = color;
            ctx.lineWidth = "2";
            ctx.beginPath();
            ctx.moveTo(x + Math.random() * 2 - 1 , y + Math.random() * 2 - 8);
            ctx.lineTo(x + 90 + Math.random() * 2 - 1, y - 20 + Math.random() * 2);
            ctx.stroke();
		}

        function drawLines(count, height, color) {
            for(var i = 0; i < Math.floor(count/10); i++){
                for(var j = 0; j < 9; j++){
                    drawLine(j * 9 + 410 , i * 25 + height, color);
                }
				drawStrokeLine(405, i * 25 + height+3, color);
            }
            for(j = 0; j < count % 10; j++){
                drawLine( j * 9 + 410, i * 25 + height, color);
            }
        }
    };
}
