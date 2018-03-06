var width = 500;
var height = 500;
var columns = 20;
var rows = 20;

function Field() {
	var dots = [];
	var areas = [];

	this.addArea = function (area) {
        areas.push(area);
    };

    this.setDot = function (dot) {
        dots.push(dot);
    };

    this.friends = function (player) {
    	var arr = [];
        for(var i = 0; i < dots.length; i++){
            if(!(dots[i] instanceof StabbedDot) && dots[i].getOwner() == player && !dots[i].isOccupied())
                arr.push(dots[i]);
        }
        return arr;
    	/*return dots.filter(function (dot) {
			return dot.owner == player && !dot.isOccupied();
        })*/
    };

    this.occ = function (occupiedDots) {
        for(var i = 0; i < occupiedDots.length; i++)
            for(var j = 0; j < dots.length; j++)
                if(occupiedDots[i].isEqual(dots[j].getPosition()))
                    dots[j].setOccupied(true);
    };

    this.inPosition = function (position) {
		for(var i = 0; i < dots.length; i++){
			if(position.isEqual(dots[i].getPosition()))
				return dots[i];
		}
		return null;
    };

    this.countOfOccupyDots = function (player) {
        var count = 0;
        for(var i = 0; i < dots.length; i++){
            if(!(dots[i] instanceof StabbedDot) && dots[i].isOccupied() && dots[i].getOwner().getName() != player.getName()){
                count++;
            }
        }
        return count;
    };

    this.friendsNear = function(position) {
        var count = 0;
        var dot = this.inPosition(position);
        if(dot == null || dot instanceof StabbedDot) throw new Error("wrong input!");

        if(isNeighbor(this.inPosition(position.getTop()))) count++;
        if(isNeighbor(this.inPosition(position.getTop().getRight()))) count++;
        if(isNeighbor(this.inPosition(position.getRight()))) count++;
        if(isNeighbor(this.inPosition(position.getRight().getBottom()))) count++;
        if(isNeighbor(this.inPosition(position.getBottom()))) count++;
        if(isNeighbor(this.inPosition(position.getBottom().getLeft()))) count++;
        if(isNeighbor(this.inPosition(position.getLeft()))) count++;
        if(isNeighbor(this.inPosition(position.getLeft().getTop()))) count++;
        return count;

        function isNeighbor(neighbor) {
			return neighbor && !(neighbor instanceof StabbedDot) && dot.getOwner() == neighbor.getOwner();
        }
    };

    this.copy = function () {
        var field = new Field();
        for(var i = 0; i < dots.length; i++){
            field.setDot(dots[i].copy());
        }
        for(i = 0; i < areas.length; i++){
            field.addArea(areas[i]);
        }
        return field;
    };

    this.length = function () {
        return dots.length;
    };

    this.getDot = function (index) {
        if(index < 0 || index > dots.length) throw new Error("Wrong index");
        return dots[index];
    };

    this.areasLength = function () {
        return areas.length;
    };

    this.getArea = function (index) {
        if(index < 0 || index > areas.length) throw new Error("Wrong index");
        return areas[index];
    };
}
