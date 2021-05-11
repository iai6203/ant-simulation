export const getDistance = (sx, sy, tx, ty) => {
    const disX = sx - tx;
    const disY = sy - ty;
    return Math.sqrt((disX * disX) + (disY * disY));
};
