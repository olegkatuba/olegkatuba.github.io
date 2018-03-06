function Color(r, g, b, a) {
    if(r > 255 || r < 0) throw new Error("r unacceptable");
    if(g > 255 || g < 0) throw new Error("g unacceptable");
    if(b > 255 || b < 0) throw new Error("b unacceptable");
    if(!a) a = 1;
    if(a > 1 || a < 0) throw new Error("a unacceptable");

    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
}

Color.prototype.getTransparent = function(transparency) {
    if(transparency > 1 || transparency < 0) throw new Error("transparency unacceptable");
        return new Color(this.r, this.g, this.b, transparency);
}
Color.prototype.toString = function() {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a +")";
}
Color.prototype.copy = function() {
    return new Color(this.r, this.g, this.b, this.a);
}
