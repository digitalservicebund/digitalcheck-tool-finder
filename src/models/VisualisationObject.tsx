import { Entity } from "./Entity";

type VisualisationObjectId =
  | "interaktion"
  | "logik"
  | "prozess"
  | "unbekannt"
  | "anderes";

export interface VisualisationObject extends Entity {
  id: VisualisationObjectId;
  name: string;
  description?: string;
  cluster: string;
  order: number;
}
