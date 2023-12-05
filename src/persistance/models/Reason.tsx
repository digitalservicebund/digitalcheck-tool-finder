import { Entity } from "./Entity";

export interface Reason extends Entity {
  id: string;
  name: string;
  order: number;
}
