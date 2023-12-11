import { Entity } from "./Entity";

export interface Cluster extends Entity {
  id: string;
  name: string;
  notations: string[];
}
