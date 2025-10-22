// interfaces
import { IResize } from "./interfaces/globalInterfaces";
import { IColonyInfo } from "./interfaces/colonyInterfaces";
import { AntCompletePath, IAntInfo, IAntPheromone } from "./interfaces/antInterfaces";
import { IFoodInfo } from "./interfaces/foodInterfaces";

import { Ant } from "./objects/ant";
import { Queue } from "./utils/dataStructure";
import Colony from "./objects/colony";
import Food from "./objects/food";

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
export const ANT_INFO: IAntInfo = {
  SIZE: 1,
  TICK: .2
}

export const ANT_PATHS = new Queue();
export const ANT_COMPLETE_PATHS: AntCompletePath[] = [];
export const ANT_PHEROMONES: Record<string, IAntPheromone> = {};

/**
 * Food
 */
export const FOODS: Food[] = [];
export const FOOD_INFO: IFoodInfo = {
  SIZE: 4
}
