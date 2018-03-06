function Oleg(name, color, field) {
    Bot.call(this, "Oleg", color);

    var position = new Position(0, 1);

    this.move = function () {
        position = position.getRight();
        if(position.getTop().isCorrect())
            position = position.getTop();
        if(field.inPosition(position) != null){
            position = position.getBottom();
        }
        if(!position.getRight().isCorrect()){
            this.move = down;
        }
        return position;
    };

    function down() {
        position = position.getBottom();
        if(position.getRight().isCorrect())
            position = position.getRight();
        if(field.inPosition(position) != null){
            position = position.getLeft();
        }
        if(!position.getBottom().isCorrect()){
            this.move = left;
        }
        return position;
    }

    function left() {
        position = position.getLeft();
        if(position.getBottom().isCorrect())
            position = position.getBottom();
        if(field.inPosition(position) != null){
            position = position.getTop();
        }
        if(!position.getLeft().isCorrect()){
            this.move = up;
        }
        return position;
    }

    function up() {
        position = position.getTop();
        if(position.getLeft().isCorrect())
            position = position.getLeft();
        if(field.inPosition(position) != null){
            position = position.getRight();
        }
        if(!position.getTop().isCorrect()){
            this.move = random;
        }
        return position;
    }

    function random() {
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
    }
}
