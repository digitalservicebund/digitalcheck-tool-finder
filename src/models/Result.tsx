import { Cluster } from "./Cluster";
import { Tool } from "./Tool";

export class Result {
  constructor(cluster: Cluster, tools: Tool[]) {
    this.cluster = cluster;
    this.tools = tools;
  }

  cluster: Cluster;
  tools: Tool[];
}
