function Nikita(name, color, field) {
    Bot.call(this, "Oleg", color);

    var topleft = new Position(5, 5);
    var bottomright = new Position(10, 10);

    this.move = function () {

        if(field.length() < 1){
            return new Position(Math.round(Math.random() * 5 + 5), Math.round(Math.random() * 5 + 7));
        }
        else {
            var newDot = field.getDot(field.length()-1).getPosition();
            alert("Oleg" + newDot);
            //alert(newDot.getOwner() + "    "  + newDot.getPosition());
            alert("Old"+topleft + "\n" + bottomright);

            if(newDot.getY() <= topleft.getY()){
                topleft = new Position(topleft.getX(), newDot.getY());
                topleft = (topleft.getTop().isCorrect()) ? topleft.getTop() : topleft;
            }
            else if(newDot.getY() >= bottomright.getY()){
                bottomright = new Position(bottomright.getX(), newDot.getY());
                bottomright = (bottomright.getBottom().isCorrect()) ? bottomright.getBottom() : bottomright;
            }
            if(newDot.getX() <= topleft.getX()){
                topleft = new Position(newDot.getX(), topleft.getY());
                topleft = (topleft.getLeft().isCorrect()) ? topleft.getLeft() : topleft;
            }
            else if(newDot.getX() >= bottomright.getX()){
                topleft = new Position(newDot.getX(), bottomright.getY());
                bottomright = (bottomright.getRight().isCorrect()) ? bottomright.getRight() : bottomright;
            }

            alert("New"+topleft + "\n" + bottomright);

            var variants = [];
            var position;
            for(var i = topleft.getY(); i <= bottomright.getY(); i++){
                for(var j = topleft.getX(); j <= bottomright.getX(); j++){
                    position = new Position(i, j);
                    if(position && field.inPosition(position) === null)
                        variants.push(position);
                }
            }

            return variants[Math.round(Math.random()*(variants.length-1))];
        }

        function checkPosition(position) {
            var clickArea = 10;
            var x = position.x * 25;
            var y = position.y * 25;
            return !(x > 400 - clickArea || x <= 25 - clickArea || y <= 25 - clickArea || y >= 500 - 25 + clickArea);
        }
    };
}
