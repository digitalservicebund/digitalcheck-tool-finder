import { Entity } from "./Entity";

export interface VisualisationObject extends Entity {
  id: string;
  name: string;
  cluster: string;
  order: number;
}
