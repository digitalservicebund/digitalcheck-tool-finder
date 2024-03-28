import type { ClusterId } from "./Cluster";
import type { Entity } from "./Entity";

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
  cluster: ClusterId;
  order: number;
}
