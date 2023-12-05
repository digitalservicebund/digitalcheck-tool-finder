import { Notation } from "./Notation";
import { VisualisationObject } from "./VisualisationObject";
import { Reason } from "./Reason";
import { Ressort } from "./Ressort";
import { Tool } from "./Tool";

export interface Data {
  notations: Notation[];
  objects: VisualisationObject[];
  reasons: Reason[];
  ressorts: Ressort[];
  tools: Tool[];
}
