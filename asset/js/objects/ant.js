import { ANT_INFO, ANT_PATHS, ANT_COMPLETE_PATHS, FOODS, FOOD_INFO, COLONIES, COLONY_INFO } from "../globalVariables.js";
// math
import { getDistance } from "../utils/math.js";
const getRandomVelocity = () => {
    let r = Math.round(Math.random() * 4);
    r = Math.round(Math.random()) === 1 ? r : -r;
    return r;
};
export class Ant {
    constructor(x, y) {
        this.CURRENT_PATH = { path: [], path_idx: 0, path_direction: -1 };
        this.hand = false;
        this.wayToHome = [];
        this.saving = true;
        this.x = x;
        this.y = y;
        this.velocity = { x: getRandomVelocity() * ANT_INFO.TICK, y: getRandomVelocity() * ANT_INFO.TICK };
    }
    getRadius() {
        return {
            minX: this.x - ANT_INFO.SIZE,
            maxX: this.x + ANT_INFO.SIZE,
            minY: this.y - ANT_INFO.SIZE,
            maxY: this.y + ANT_INFO.SIZE
        };
    }
    windowBounce(stageWidth, stageHeight) {
        const { minX, maxX, minY, maxY } = this.getRadius();
        if (minX < 0 || maxX > stageWidth) {
            this.velocity.x *= -1;
            this.x += this.velocity.x;
        }
        else if (minY < 0 || maxY > stageHeight) {
            this.velocity.y *= -1;
            this.y += this.velocity.y;
        }
    }
    foodBounce() {
        const antRadius = this.getRadius();
        for (let i = 0; i < FOODS.length; i++) {
            const dis = getDistance(this.x, this.y, FOODS[i].x, FOODS[i].y);
            if (dis < FOOD_INFO.SIZE + ANT_INFO.SIZE) {
                if (!this.hand) {
                    FOODS[i].life = false;
                    this.hand = true;
                }
                const foodRadius = FOODS[i].getRadius();
                if (antRadius.minX < foodRadius.maxX || antRadius.maxX > foodRadius.minX) {
                    this.velocity.x *= -1;
                    this.x += this.velocity.x;
                }
                if (antRadius.minY < foodRadius.maxY || antRadius.maxY > foodRadius.minY) {
                    this.velocity.y *= -1;
                    this.y += this.velocity.y;
                }
            }
        }
    }
    pathFind() {
        let flag = false;
        for (let i = 0; i < ANT_COMPLETE_PATHS.length; i++) {
            const complete_path = ANT_COMPLETE_PATHS[i];
            for (let j = 0; j < complete_path.length; j++) {
                const cur_x = complete_path[j].x;
                const cur_y = complete_path[j].y;
                if (cur_x - 1 < this.x && this.x < cur_x + 1 && cur_y - 1 < this.y && this.y < cur_y + 1) {
                    this.CURRENT_PATH.path = complete_path;
                    this.CURRENT_PATH.path_idx = j;
                    if (complete_path.length / 2 > j)
                        this.CURRENT_PATH.path_direction = 1;
                    else
                        this.CURRENT_PATH.path_direction = -1;
                    flag = true;
                    break;
                }
            }
            if (flag)
                break;
        }
        if (!flag)
            this.CURRENT_PATH.path = [];
    }
    pathFollow() {
        if (this.CURRENT_PATH.path_idx + 1 > this.CURRENT_PATH.path.length - 1 || this.CURRENT_PATH.path_idx - 1 < 0) {
            this.CURRENT_PATH.path = [];
            return;
        }
        this.saving = false;
        if (this.CURRENT_PATH.path_direction === -1)
            this.CURRENT_PATH.path_idx--;
        else if (this.CURRENT_PATH.path_direction === 1)
            this.CURRENT_PATH.path_idx++;
        this.x = this.CURRENT_PATH.path[this.CURRENT_PATH.path_idx].x;
        this.y = this.CURRENT_PATH.path[this.CURRENT_PATH.path_idx].y;
    }
    savePath() {
        this.wayToHome.push({ x: this.x, y: this.y });
    }
    findHome() {
        const colony = COLONIES[0];
        const disX = this.x - colony.x;
        const disY = this.y - colony.y;
        if (disX > 0) { // 개미가 오른쪽
            if (this.velocity.x > 0)
                this.velocity.x -= .02;
        }
        else if (disX < 0) { // 개미가 왼쪽
            if (this.velocity.x < 0)
                this.velocity.x += .02;
        }
        if (disY > 0) { // 개미가 아래쪽
            if (this.velocity.y > 0)
                this.velocity.y -= .02;
        }
        else if (disY < 0) { // 개미가 위쪽
            if (this.velocity.y < 0)
                this.velocity.y += .02;
        }
        const dis = getDistance(this.x, this.y, colony.x, colony.y);
        if (dis < ANT_INFO.SIZE + COLONY_INFO.SIZE) {
            ANT_COMPLETE_PATHS.push(this.wayToHome);
            this.hand = false;
            this.wayToHome = [];
        }
    }
    update(stageWidth, stageHeight) {
        const position = { x: this.x, y: this.y };
        ANT_PATHS.enqueue(position);
        this.velocity.x += Math.round(Math.random()) === 1 ? ANT_INFO.TICK : -ANT_INFO.TICK;
        this.velocity.y += Math.round(Math.random()) === 1 ? ANT_INFO.TICK : -ANT_INFO.TICK;
        this.windowBounce(stageWidth, stageHeight);
        if (this.velocity.x < -1)
            this.velocity.x = -1;
        else if (this.velocity.x > 1)
            this.velocity.x = 1;
        if (this.velocity.y < -1)
            this.velocity.y = -1;
        else if (this.velocity.y > 1)
            this.velocity.y = 1;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.foodBounce();
        if (this.CURRENT_PATH.path.length > 0)
            this.pathFollow();
        else
            this.pathFind();
        if (this.hand && this.saving) {
            this.savePath();
            this.findHome();
        }
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, ANT_INFO.SIZE, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fillStyle = this.hand ? '#ee6969' : '#000000';
        ctx.fill();
    }
}
