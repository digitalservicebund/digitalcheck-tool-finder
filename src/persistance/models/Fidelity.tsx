import { Entity } from "./Entity";

export interface Fidelity extends Entity {
  id: string;
  name: string;
  order: number;
}
