function Position(x, y) {
    this.x = x;
    this.y = y;
}

Position.prototype.getX = function () {
    return this.x;
};

Position.prototype.getY = function () {
    return this.y;
};

Position.prototype.isEqual = function (position) {
    return this.x === position.getX() && this.y === position.getY();
};

Position.prototype.isCorrect = function () {
    //return x > 0 && y > 0 && x <= 20 && y <= 20;
    return this.x > 0 && this.y > 0 && this.x < 16 && this.y < 20;
};

Position.prototype.getRight = function () {
    return new Position(this.x+1, this.y);
};

Position.prototype.getLeft = function () {
    return new Position(this.x-1,this.y);
};

Position.prototype.getTop = function () {
    return new Position(this.x, this.y-1);
};

Position.prototype.getBottom = function () {
    return new Position(this.x, this.y+1);
};

Position.prototype.isNear = function (next){
    if(next.isEqual(this.getTop()))
        return true;
    if(next.isEqual(this.getTop().getRight()))
        return true;
    if(next.isEqual(this.getRight()))
        return true;
    if(next.isEqual(this.getRight().getBottom()))
        return true;
    if(next.isEqual(this.getBottom()))
        return true;
    if(next.isEqual(this.getBottom().getLeft()))
        return true;
    if(next.isEqual(this.getLeft()))
        return true;
    if(next.isEqual(this.getLeft().getTop()))
        return true;
    return false;
};

Position.prototype.copy = function () {
    return new Position(this.x, this.y);
};

Position.prototype.toString = function () {
    return "(" + this.x + ":" + this.y + ")";
};