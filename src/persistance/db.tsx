import Dexie, { Table } from "dexie";

export interface Notation {
  id: string;
  name: string;
  tools: string[];
}
export interface VisualisationObject {
  name: string;
  notations: string[];
}
export interface Reason {
  name: string;
}
export interface Ressort {
  id: string;
  name: string;
}
export interface Tool {
  id: string;
  name: string;
  ressorts: string[];
}

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
      objects: "name, *notations",
      reasons: "name",
      ressorts: "&id, name",
      tools: "&id, name, *ressorts",
    });
  }
}
