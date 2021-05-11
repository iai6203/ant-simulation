import { RESIZE, FOODS, FOOD_INFO } from "./asset/js/globalVariables.js";
import { BaseCanvas } from "./asset/js/baseCanvas.js";
import { PathCanvas } from "./asset/js/pathCanvas.js";

// objects
import Food from "./asset/js/objects/food.js";

class App {
  private readonly baseCanvas: BaseCanvas;
  private readonly pathCanvas: PathCanvas;

  public constructor() {
    RESIZE.STAGE_WIDTH = document.body.clientWidth;
    RESIZE.STAGE_HEIGHT = document.body.clientHeight;

    this.pathCanvas = new PathCanvas();
    this.baseCanvas = new BaseCanvas();

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    /* FOOD SETTING */
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        FOODS.push(new Food(300 + (FOOD_INFO.SIZE * i), 300 + (FOOD_INFO.SIZE * j)));
      }
    }

    window.requestAnimationFrame(this.animate.bind(this));
  }

  private resize(): void {
    RESIZE.STAGE_WIDTH = document.body.clientWidth;
    RESIZE.STAGE_HEIGHT = document.body.clientHeight;

    this.baseCanvas.resize();
    this.pathCanvas.resize();
  }

  private animate(): void {
    window.requestAnimationFrame(this.animate.bind(this));

    this.baseCanvas.animate();
    this.pathCanvas.animate();
  }
}

window.onload = () => { new App(); }