function Dot(owner, position) {
    this.owner = owner;
    this.position = position;
    this.occupied = false;
}

Dot.prototype.getX = function() {
    return this.position.getX();
}

Dot.prototype.getY = function () {
    return this.position.getY();
};

Dot.prototype.getPosition = function () {
    return this.position;
};

Dot.prototype.getOwner = function () {
    return this.owner;
};

Dot.prototype.isOccupied = function () {
    return this.occupied;
};

Dot.prototype.setOccupied = function (Occupied) {
    this.occupied = Occupied;
};

Dot.prototype.copy = function () {
    var dot = new Dot(this.owner.copy(), this.position.copy());
    dot.setOccupied(this.occupied);
    return dot;
};

Dot.prototype.getColor = function () {
    return this.owner.getColor();
};

Dot.prototype.toString = function () {
    return this.owner + ", " + this.position;
};