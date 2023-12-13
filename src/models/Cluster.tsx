import { Entity } from "./Entity";

export interface Cluster extends Entity {
  id: string;
  name: string;
  tools: string[];
  notations: string[];
}
