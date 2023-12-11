import Dexie, { Table } from "dexie";
import { Notation } from "../models/Notation";
import { VisualisationObject } from "../models/VisualisationObject";
import { Reason } from "../models/Reason";
import { Ressort } from "../models/Ressort";
import { Tool } from "../models/Tool";
import { Fidelity } from "../models/Fidelity";
import { Cluster } from "../models/Cluster";

export class Database extends Dexie {
  objects!: Table<VisualisationObject>;
  reasons!: Table<Reason>;
  clusters!: Table<Cluster>;
  notations!: Table<Notation>;
  tools!: Table<Tool>;
  fidelities!: Table<Fidelity>;
  ressorts!: Table<Ressort>;

  constructor() {
    super("tool-finder-database");
    this.version(1).stores({
      objects: "&id, name, cluster, order",
      reasons: "&id, name, order",
      clusters: "&id, name, *notations",
      notations: "&id, name, *tools",
      tools: "&id, name, fidelity, *ressorts",
      fidelities: "&id, name, order",
      ressorts: "&id, name",
    });
  }
}
