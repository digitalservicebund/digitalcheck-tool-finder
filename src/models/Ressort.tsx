import { Entity } from "./Entity";

export class Ressort implements Entity {
  constructor() {
    this.id = "";
    this.name = "";
  }

  id: string;
  name: string;
}
