export interface IAntInfo {
  SIZE: number;
  TICK: number;
}

export interface IAntPosition {
  x: number;
  y: number;
}

export interface IAntVelocity {
  x: number;
  y: number;
}

export interface IAntRadius {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export interface IAntCurrentPath {
  path: AntCompletePath;
  path_idx: number;
  path_direction: -1 | 1;
}


/*
  개미의 집부터 음식까지의 완성된 경로
 */
export interface IAntPath {
  x: number;
  y: number;
}
export type AntCompletePath = IAntPath[];