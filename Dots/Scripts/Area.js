/* function Area(enemies, color) {

    this.getDots = function () {
        return enemies;
    };

    this.getColor = function () {
        return color;
    };

    this.copy = function () {
        var dots = [];
        for(var i = 0; i < enemies.length; i++){
            dots.push(enemies[i]);
        }
        var area = new Area(dots, color.copy());
    };
} */

class Area {
    constructor(enemies, color){
        this.enemies = enemies;
        this.color = color;
    }

    getDots() {
        return this.enemies;
    }

    getColor() {
        return this.color;
    }

    copy() {
        var dots = [];
        for(var i = 0; i < enemies.length; i++){
            dots.push(enemies[i]);
        }
        var area = new Area(dots, color.copy());
    }
}
