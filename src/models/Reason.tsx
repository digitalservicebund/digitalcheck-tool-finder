import { Entity } from "./Entity";

export class Reason implements Entity {
  constructor() {
    this.id = "";
    this.name = "";
    this.order = 0;
  }

  id: string;
  name: string;
  order: number;
}
