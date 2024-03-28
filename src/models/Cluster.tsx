import type { Entity } from "./Entity";
import type { Image } from "./Image";
import type { NotationId } from "./Notation";
import type { ToolId } from "./Tool";

export type ClusterId = "schaubild" | "entscheidungsbaum" | "flussdiagramm";

export interface Cluster extends Entity {
  id: ClusterId;
  name: string;
  tools: readonly ToolId[];
  notations: readonly NotationId[];
  description: string;
  img: Image;
}
