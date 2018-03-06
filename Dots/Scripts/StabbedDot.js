function StabbedDot (position){
    this.position = position.copy();
}

StabbedDot.prototype.getX = function () {
    return this.position.getX();
};

StabbedDot.prototype.getY = function () {
    return this.position.getY();
};

StabbedDot.prototype.getPosition = function () {
    return this.position;
};

StabbedDot.prototype.copy = function () {
    return new StabbedDot(this.position.copy());
};

StabbedDot.prototype.toString = function () {
    return this.position + "";
};
