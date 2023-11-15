export const getDistance = (sx: number, sy: number, tx: number, ty:number): number => {
  const disX = sx - tx;
  const disY = sy - ty;

  return Math.sqrt((disX * disX) + (disY * disY));
}