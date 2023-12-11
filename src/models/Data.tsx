import { Notation } from "./Notation";
import { VisualisationObject } from "./VisualisationObject";
import { Reason } from "./Reason";
import { Ressort } from "./Ressort";
import { Tool } from "./Tool";
import { Cluster } from "./Cluster";
import { Fidelity } from "./Fidelity";

export interface Data {
  objects: VisualisationObject[];
  reasons: Reason[];
  clusters: Cluster[];
  notations: Notation[];
  ressorts: Ressort[];
  fidelities: Fidelity[];
  tools: Tool[];
}
