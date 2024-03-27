import { Entity } from "./Entity";

type ReasonId =
  | "austausch"
  | "selbst"
  | "dokumentation"
  | "unbekannt"
  | "anderes";

export interface Reason extends Entity {
  id: ReasonId;
  name: string;
  description?: string;
  order: number;
}
