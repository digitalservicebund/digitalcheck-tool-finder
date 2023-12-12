import { Entity } from "./Entity";

export class VisualisationObject implements Entity {
  constructor() {
    this.id = "";
    this.name = "";
    this.cluster = "";
    this.order = 0;
  }

  id: string;
  name: string;
  description?: string;
  cluster: string;
  order: number;
}
