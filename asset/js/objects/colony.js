import { COLONY_INFO } from "../globalVariables.js";
export default class Colony {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, COLONY_INFO.SIZE, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fillStyle = '#000000';
        ctx.fill();
    }
}
