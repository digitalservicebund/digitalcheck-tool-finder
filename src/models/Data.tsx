import { Cluster } from "./Cluster";
import { Fidelity } from "./Fidelity";
import { Notation } from "./Notation";
import { Reason } from "./Reason";
import { Ressort } from "./Ressort";
import { Tool } from "./Tool";
import { VisualisationObject } from "./VisualisationObject";

export interface Data {
  objects: readonly VisualisationObject[];
  reasons: readonly Reason[];
  clusters: readonly Cluster[];
  notations: readonly Notation[];
  ressorts: readonly Ressort[];
  fidelities: readonly Fidelity[];
  tools: readonly Tool[];
}
