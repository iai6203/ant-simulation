// global variables
import { FOOD_INFO } from "../globalVariables.js";
export default class Food {
    constructor(x, y) {
        this.life = true;
        this.x = x;
        this.y = y;
    }
    getRadius() {
        return {
            minX: this.x,
            maxX: this.x + FOOD_INFO.SIZE,
            minY: this.y,
            maxY: this.y + FOOD_INFO.SIZE
        };
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, FOOD_INFO.SIZE, FOOD_INFO.SIZE);
        ctx.closePath();
        ctx.fillStyle = '#ee6969';
        ctx.fill();
    }
}
