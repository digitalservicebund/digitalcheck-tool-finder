import { db } from "./initDb";
import { Ressort } from "./models/Ressort";
import { VisualisationObject } from "./models/VisualisationObject";
import { Reason } from "./models/Reason";

export async function findAllRessorts(): Promise<Array<Ressort>> {
  return db.ressorts.toArray();
}

export async function findAllObjects(): Promise<Array<VisualisationObject>> {
  return db.objects.toArray();
}

export async function findAllReasons(): Promise<Array<Reason>> {
  return db.reasons.toArray();
}
