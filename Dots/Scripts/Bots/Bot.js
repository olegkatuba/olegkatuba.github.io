function Bot(name, color, field) {
    Player.call(this, name, color);

    /*this.move = function () {
        while (true){
            var position = new Position(Math.round(Math.random() * 20), Math.round(Math.random() * 20));
            if(checkPosition(position) && field.inPosition(position) == null){
                return position;
            }
        }
    };*/

    function checkPosition(position) {
        var clickArea = 10;
        var x = position.getX() * 25;
        var y = position.getY() * 25;
        return !(x > 400 - clickArea || x <= 25 - clickArea || y <= 25 - clickArea || y >= 500 - 25 + clickArea);
    }
}