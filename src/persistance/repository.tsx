import rawData from "../../resources/data.json";
import { Data } from "../models/Data";
import { Reason } from "../models/Reason";
import { Ressort } from "../models/Ressort";
import { VisualisationObject } from "../models/VisualisationObject";

const data: Data = rawData;

export function findAllRessorts(): Ressort[] {
  return data.ressorts;
}

export function findAllObjects(sorted: boolean = true): VisualisationObject[] {
  let objects = data.objects;
  if (sorted) {
    objects = objects.sort((a, b) => a.order - b.order);
  }
  return objects;
}

export function findAllReasons(sorted: boolean = true): Reason[] {
  let reasons = data.reasons;
  if (sorted) {
    reasons = reasons.sort((a, b) => a.order - b.order);
  }
  return reasons;
}
