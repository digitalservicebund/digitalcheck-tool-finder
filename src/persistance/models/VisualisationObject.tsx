import { Entity } from "./Entity";

export interface VisualisationObject extends Entity {
  id: string;
  name: string;
  notations: string[];
  order: number;
}
