import { Cluster } from "./Cluster";
import { Notation } from "./Notation";
import { Tool } from "./Tool";

export class Result {
  constructor(cluster: Cluster, notations: Notation[], tools: Tool[]) {
    this.cluster = cluster;
    this.notations = notations;
    this.tools = tools;
  }

  cluster: Cluster;
  notations: Notation[];
  tools: Tool[];
}
