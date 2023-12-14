import { Entity } from "./Entity";
import { Image } from "./Image";

export interface Cluster extends Entity {
  id: string;
  name: string;
  tools: string[];
  notations: string[];
  description: string;
  img: Image;
}
