function Game() {
    var field = new Field();
    var player1;
    var player2;
    var currentPlayer;
    var gameResult = new GameResult();

    this.getField = function () {
        return field;
    };

    this.startGame = function (Player1, Player2) {
        player1 = Player1;
        player2 = Player2;

        var count = 0;
        currentPlayer = player1;

        while (!isGameOver()){
            count++;
            var pos = currentPlayer.move();
            if(!pos) throw new Error(pos.toString());
            if(!pos.isCorrect()) throw new Error(pos.toString());
            var dot = new Dot(currentPlayer, pos);
            field.setDot(dot);
            if(currentPlayer==player1)
                currentPlayer=player2;
            else
                currentPlayer=player1;
            if(field.friendsNear(dot.getPosition()) > 1){
                isConnect(currentPlayer);
            }
            gameResult.addStep(field.copy());
        }
        gameResult.setWinner((field.countOfOccupyDots(player1) > field.countOfOccupyDots(player2)) ? player1 : player2);
        
        return gameResult;
    };

    function nextPlayer() {
        if(currentPlayer==player1)
            return player2;
        return player1;
    }

    function isGameOver() {
        return field.length() >= 285;
    }

    function isConnect(player) {
        var occupiedPositions = [];
        var stack = [];
        var enemies = [];
        var checked = [];
        var occupiedDots = [];

        function occupy(dot) {
            if(!isChecked(dot.getPosition()))
                stack.push(dot.getPosition());

            occupiedDots.push(dot.getPosition());

            while(stack.length > 0){
                var position = stack.pop();
                checked.push(position);
                if(!check(position.getTop()))
                    return;
                if(!check(position.getRight()))
                    return;
                if(!check(position.getBottom()))
                    return;
                if(!check(position.getLeft()))
                    return;
            }
            if(enemies.length > 3){
                field.addArea(new Area(sortEnemies(enemies), nextPlayer().getColor().copy()));
                //connect(enemies);
                field.occ(occupiedDots);
                for (var i = 0; i < checked.length; i++) {
                    if(field.inPosition(checked[i])==null)
                        field.setDot(new StabbedDot(checked[i].copy()));
                }
            }
            enemies = [];
            stack = [];
            checked = [];
            occupiedDots = [];
            occupiedPositions = [];

            function check(position) {
                if(!position.isCorrect()){
                    stack = [];
                    enemies = [];
                    checked = [];
                    occupiedDots = [];
                    occupiedPositions = [];
                    return false;
                }
                var space = field.inPosition(position);
                if(!isChecked(position)){
                    if(space != null && !(space instanceof StabbedDot)){
                        if(!space.isOccupied()){
                            if(space.getOwner() != player){
                                if(field.friendsNear(position) < 2){
                                    stack.push(position);
                                }
                                else{
                                    checked.push(position);
                                    enemies.push(position);
                                }
                            }
                            else {
                                occupiedDots.push(position);
                                stack.push(position);
                            }
                        }
                        else{
                            stack.push(position);
                        }
                    }
                    else {
                        stack.push(position);
                    }
                }
                return true;
            }

            function isChecked(position) {
                for(var j = 0; j < checked.length; j++){
                    if(position.isEqual(checked[j]))
                        return true;
                }
                return false;
            }
        }

        var friends = field.friends(currentPlayer);
        for(var i = 0; i < friends.length; i++){
            if(friends[i].getOwner() == player && !friends[i].isOccupied())
                occupy(friends[i]);
        }
    }

	function sortEnemies(enemies) {
        if(!enemies) alert("alarm!");
        if(!enemies[0]) alert("afwwea");
        var sorted = new Array(enemies.length);
        sorted[0] = enemies[0];
        //
        var a = "";
        for(i = 0; i < enemies.length; i++)
            a += enemies[i] + "\n";
        //
        try {
            for(var i = 1; i < sorted.length; i++)
                for(var j = 1; j < enemies.length; j++)
                    if(enemies[j] !== null && sorted[i-1].isNear(enemies[j])){
                        sorted[i] = enemies[j];
                        enemies[j] = null;
                        break;
                    }
            return sorted;
        }
        catch (e){
            var b = "";
            for(i = 0; i < sorted.length; i++)
                b += sorted[i] + "\n";
            alert(b);
            alert(a);
        }

        //drawer.drawArea(sorted, currentPlayer == player1 ? player2.getColor() : player1.getColor());
    }
}
