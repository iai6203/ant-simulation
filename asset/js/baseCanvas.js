import { RESIZE, COLONIES, ANTS, NUMBER_OF_ANTS, FOODS } from "./globalVariables.js";
import Colony from "./objects/colony.js";
import { Ant } from "./objects/ant.js";
export class BaseCanvas {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        // colony
        COLONIES.push(new Colony(RESIZE.STAGE_WIDTH / 2, RESIZE.STAGE_HEIGHT / 2));
        // ant
        for (let i = 0; i < NUMBER_OF_ANTS; i++) {
            ANTS.push(new Ant(RESIZE.STAGE_WIDTH / 2, RESIZE.STAGE_HEIGHT / 2));
        }
        document.body.appendChild(this.canvas);
    }
    resize() {
        this.canvas.width = RESIZE.STAGE_WIDTH * 2;
        this.canvas.height = RESIZE.STAGE_HEIGHT * 2;
        this.ctx?.scale(2, 2);
    }
    animate() {
        this.ctx?.clearRect(0, 0, RESIZE.STAGE_WIDTH, RESIZE.STAGE_HEIGHT);
        COLONIES.forEach(colony => {
            this.ctx && colony.draw(this.ctx);
        });
        ANTS.forEach(ant => {
            ant.update(RESIZE.STAGE_WIDTH, RESIZE.STAGE_HEIGHT);
            this.ctx && ant.draw(this.ctx);
        });
        for (let i = 0; i < FOODS.length; i++) {
            if (!FOODS[i].life) {
                FOODS.splice(i, 1);
                i--;
            }
            this.ctx && FOODS[i].draw(this.ctx);
        }
    }
}
