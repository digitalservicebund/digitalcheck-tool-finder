import { Entity } from "./Entity";

type NotationId = "frei" | "rulemap" | "dmn" | "bpmn" | "fim";

export interface Notation extends Entity {
  id: NotationId;
  name: string;
}
