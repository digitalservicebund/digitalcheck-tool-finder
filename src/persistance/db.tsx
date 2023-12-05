import Dexie, { Table } from "dexie";
import { Notation } from "./models/Notation";
import { VisualisationObject } from "./models/VisualisationObject";
import { Reason } from "./models/Reason";
import { Ressort } from "./models/Ressort";
import { Tool } from "./models/Tool";

export class Database extends Dexie {
  notations!: Table<Notation>;
  objects!: Table<VisualisationObject>;
  reasons!: Table<Reason>;
  ressorts!: Table<Ressort>;
  tools!: Table<Tool>;

  constructor() {
    super("tool-finder-database");
    this.version(1).stores({
      notations: "&id, name, *tools",
      objects: "&id, name, *notations",
      reasons: "&id, name",
      ressorts: "&id, name",
      tools: "&id, name, *ressorts",
    });
  }
}
