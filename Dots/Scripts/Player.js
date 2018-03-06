function Player(name, color, game) {
    var canvas = document.getElementById('canvas');

    this.getName = function () {
        return name;
    };

    this.getColor = function () {
        return color;
    };

	this.copy = function () {
		return new Player(name, color.copy());
    };

	this.move = function () {
        canvas.onclick = function () {
            var clickPosition = getClickPosition();
            if(clickPosition && game.getField().inPosition(clickPosition)==null){
                canvas.onclick = undefined;
                game.getNext(clickPosition);
            }
        };
    };

    function getClickPosition() {
        var clickArea = 12.5;

        var x = event.clientX-canvas.getBoundingClientRect().left;
        var y = event.clientY-canvas.getBoundingClientRect().top;
        if(x>400-clickArea || x<=25-clickArea || y<=25-clickArea || y>=500-25+clickArea)
            return false;
        var tx = x % 25;
        var ty = y % 25;
        if(tx>25-clickArea)
            x+=25-tx;
        else if(tx<clickArea)
            x-=tx;
        else
            return false;
        if(ty>25-clickArea)
            y+=25-ty;
        else if(ty<clickArea)
            y-=ty;
        else
            return false;
        return new Position(x/25, y/25);
    }

	this.toString = function () {
		return name + ", " + color;
	};
}
