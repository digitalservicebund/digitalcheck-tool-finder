import { Cluster } from "./Cluster";
import { Fidelity } from "./Fidelity";
import { Tool } from "./Tool";

export type Recommendation = {
  fidelity: Fidelity;
  primaryTool: Tool;
  alternativeTools: Tool[];
};

export interface Result {
  cluster: Cluster;
  recommendations: Recommendation[];
}
