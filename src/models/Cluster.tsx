import { Entity } from "./Entity";
import { Image } from "./Image";

export type ClusterId = "schaubild" | "entscheidungsbaum" | "flussdiagramm";

export interface Cluster extends Entity {
  id: ClusterId;
  name: string;
  tools: readonly string[];
  notations: readonly string[];
  description: string;
  img: Image;
}
