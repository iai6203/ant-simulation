import { RESIZE, ANT_INFO, ANT_PATHS } from "./globalVariables.js";
export class PathCanvas {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    }
    resize() {
        this.canvas.width = RESIZE.STAGE_WIDTH * 2;
        this.canvas.height = RESIZE.STAGE_HEIGHT * 2;
        this.ctx?.scale(2, 2);
    }
    animate() {
        while (ANT_PATHS.getLength() > 0) {
            const { x, y } = ANT_PATHS.dequeue();
            if (this.ctx) {
                this.ctx.beginPath();
                this.ctx.arc(x, y, ANT_INFO.SIZE / 2, 0, Math.PI * 2, false);
                this.ctx.closePath();
                this.ctx.fillStyle = '#e9ecef';
                this.ctx.fill();
            }
        }
        // ANT_COMPLETE_PATHS.forEach(completePath => {
        //   completePath.forEach(path => {
        //     if (this.ctx) {
        //       this.ctx.beginPath();
        //       this.ctx.arc(path.x, path.y, ANT_INFO.SIZE / 2, 0, Math.PI * 2, false);
        //       this.ctx.closePath();
        //       this.ctx.fillStyle = '#ec9292';
        //       this.ctx.fill();
        //     }
        //   })
        // });
    }
}
