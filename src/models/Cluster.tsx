import data from "resources/data";
import type { Entity } from "./Entity";
import type { Image } from "./Image";
import type { NotationId } from "./Notation";
import type { ToolId } from "./Tool";

export type ClusterId = (typeof data)["clusters"][number]["id"];

export interface Cluster extends Entity {
  id: ClusterId;
  name: string;
  tools: readonly ToolId[];
  notations: readonly NotationId[];
  description: string;
  img: Image;
}
