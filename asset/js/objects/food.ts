// global variables
import { FOOD_INFO } from "../globalVariables.js";

// interfaces
import { IFoodRadius } from "../interfaces/foodInterfaces.js";

export default class Food {
  life: boolean;
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.life = true;
    this.x = x;
    this.y = y;
  }

  getRadius(): IFoodRadius {
    return {
      minX: this.x,
      maxX: this.x + FOOD_INFO.SIZE,
      minY: this.y,
      maxY: this.y + FOOD_INFO.SIZE
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, FOOD_INFO.SIZE, FOOD_INFO.SIZE);
    ctx.closePath();

    ctx.fillStyle = '#ee6969';
    ctx.fill();
  }
}