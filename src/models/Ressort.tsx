import type { Entity } from "./Entity";

export type RessortId =
  | "bmwk"
  | "bmf"
  | "bmi"
  | "aa"
  | "bmj"
  | "bmas"
  | "bmvg"
  | "bmel"
  | "bmfsfj"
  | "bmg"
  | "bmdv"
  | "bmuv"
  | "bmbf"
  | "bmz"
  | "bmwsb";

export interface Ressort extends Entity {
  id: RessortId;
  name: string;
}
