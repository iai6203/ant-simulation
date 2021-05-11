// interfaces
import { IResize } from "./interfaces/globalInterfaces.js";
import { IColonyInfo } from "./interfaces/colonyInterfaces.js";
import { AntCompletePath, IAntInfo } from "./interfaces/antInterfaces.js";
import { IFoodInfo } from "./interfaces/foodInterfaces.js";

import { Ant } from "./objects/ant.js";
import { Queue } from "./utils/dataStructure.js";
import Colony from "./objects/colony.js";
import Food from "./objects/food.js";

export const RESIZE: IResize = {
  STAGE_WIDTH: 0,
  STAGE_HEIGHT: 0
}

/**
 * Colony
 */
export const COLONIES: Colony[] = [];
export const COLONY_INFO: IColonyInfo = {
  SIZE: 6
}

/**
 * Ant Variables
 */
export const ANTS: Ant[] = [];
export const NUMBER_OF_ANTS = 1500;
export const ANT_INFO: IAntInfo = {
  SIZE: 1,
  TICK: .2
}

export const ANT_PATHS = new Queue();
export const ANT_COMPLETE_PATHS: AntCompletePath[] = [];

/**
 * Food
 */
export const FOODS: Food[] = [];
export const FOOD_INFO: IFoodInfo = {
  SIZE: 4
}