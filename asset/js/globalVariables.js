import { Queue } from "./utils/dataStructure.js";
export const RESIZE = {
    STAGE_WIDTH: 0,
    STAGE_HEIGHT: 0
};
/**
 * Colony
 */
export const COLONIES = [];
export const COLONY_INFO = {
    SIZE: 6
};
/**
 * Ant Variables
 */
export const ANTS = [];
export const NUMBER_OF_ANTS = 1500;
export const ANT_INFO = {
    SIZE: 1,
    TICK: .2
};
export const ANT_PATHS = new Queue();
export const ANT_COMPLETE_PATHS = [];
/**
 * Food
 */
export const FOODS = [];
export const FOOD_INFO = {
    SIZE: 4
};
