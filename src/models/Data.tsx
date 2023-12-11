import { Cluster } from "./Cluster";
import { Fidelity } from "./Fidelity";
import { Notation } from "./Notation";
import { Reason } from "./Reason";
import { Ressort } from "./Ressort";
import { Tool } from "./Tool";
import { VisualisationObject } from "./VisualisationObject";

export interface Data {
  objects: VisualisationObject[];
  reasons: Reason[];
  clusters: Cluster[];
  notations: Notation[];
  ressorts: Ressort[];
  fidelities: Fidelity[];
  tools: Tool[];
}
