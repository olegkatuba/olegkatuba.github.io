function GameResult() {
	var winner;
	var history = [];
	
	this.addStep = function (field) {
        history.push(field);
	};

	this.getWinner = function () {
		return winner;
	};

	this.setWinner = function (player) {
		winner = player;
    };

	this.length = function () {
		return history.length;
    };

    this.getStep = function (index) {
    	if(index > history.length || index < 0) throw new Error("Wrong index");
    	return history[index];
    };
}
