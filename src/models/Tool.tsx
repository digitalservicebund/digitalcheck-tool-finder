import { Entity } from "./Entity";

export interface Tool extends Entity {
  id: string;
  name: string;
  fidelity: string;
  ressorts: string[];
}
