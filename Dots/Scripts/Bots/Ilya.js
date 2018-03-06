function Ilya(name, color, field) {
    Bot.call(this, name, color, field);

    this.move = function () {
        var empty = [];
        var position;
        for(var i = 1; i <= 15; i++){
            for(var j = 1; j <= 19; j++){
                position = new Position(i, j);
                if(field.inPosition(position) === null){
                    empty.push(position);
                }
            }
        }
        var pos = empty[Math.round(Math.random()*(empty.length-1))];
        //alert("Ilya " + pos);
        return pos;
    };
}