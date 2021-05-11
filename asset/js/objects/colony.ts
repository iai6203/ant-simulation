import { COLONY_INFO } from "../globalVariables.js";

export default class Colony {
  public readonly x: number;
  public readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, COLONY_INFO.SIZE, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = '#000000';
    ctx.fill();
  }
}