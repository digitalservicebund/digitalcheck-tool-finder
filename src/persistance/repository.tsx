import { db } from "./initDb";
import { Ressort } from "../models/Ressort";
import { VisualisationObject } from "../models/VisualisationObject";
import { Reason } from "../models/Reason";

export async function getRessort(
  ressortId: string,
): Promise<Ressort | undefined> {
  return db.ressorts.get(ressortId);
}

export async function getObject(
  objectId: string,
): Promise<VisualisationObject | undefined> {
  return db.objects.get(objectId);
}

export async function getReason(reasonId: string): Promise<Reason | undefined> {
  return db.reasons.get(reasonId);
}

export async function findAllRessorts(): Promise<Array<Ressort>> {
  return db.ressorts.toArray();
}

export async function findAllObjects(): Promise<Array<VisualisationObject>> {
  return db.objects.toArray();
}

export async function findAllReasons(): Promise<Array<Reason>> {
  return db.reasons.toArray();
}
