import { RESIZE, ANT_INFO, ANT_PATHS, ANT_COMPLETE_PATHS } from "./globalVariables.js";
import { IAntPosition } from "./interfaces/antInterfaces.js";

export class PathCanvas {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D | null;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    document.body.appendChild(this.canvas);
  }

  public resize(): void {
    this.canvas.width = RESIZE.STAGE_WIDTH * 2;
    this.canvas.height = RESIZE.STAGE_HEIGHT * 2;
    this.ctx?.scale(2, 2);
  }

  public animate(): void {
    while (ANT_PATHS.getLength() > 0) {
      const { x, y }: IAntPosition = ANT_PATHS.dequeue();

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