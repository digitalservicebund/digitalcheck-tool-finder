import { Entity } from "./Entity";

export interface Tool extends Entity {
  id: string;
  name: string;
  ressorts: string[];
}
