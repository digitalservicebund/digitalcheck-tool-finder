import type { Entity } from "./Entity";

export type NotationId = "frei" | "rulemap" | "dmn" | "bpmn" | "fim";

export interface Notation extends Entity {
  id: NotationId;
  name: string;
}
