import { Entity } from "./Entity";
import { Image } from "./Image";

export interface Tool extends Entity {
  id: string;
  name: string;
  description: string;
  link: string;
  fidelity: string;
  ressorts: string[];
  img: Image;
}
