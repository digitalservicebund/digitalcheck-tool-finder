import rawData from "../../resources/data.json";
import { Cluster } from "../models/Cluster";
import { Data } from "../models/Data";
import { Entity } from "../models/Entity";
import { Fidelity } from "../models/Fidelity";
import { Notation } from "../models/Notation";
import { Reason } from "../models/Reason";
import { Ressort } from "../models/Ressort";
import { Result } from "../models/Result";
import { Tool } from "../models/Tool";
import { VisualisationObject } from "../models/VisualisationObject";

const data: Data = rawData;

export function getAllRessorts(): Ressort[] {
  return data.ressorts;
}

export function getAllObjects(sorted: boolean = true): VisualisationObject[] {
  let objects = data.objects;
  if (sorted) {
    objects = objects.sort((a, b) => a.order - b.order);
  }
  return objects;
}

export function getAllReasons(sorted: boolean = true): Reason[] {
  let reasons = data.reasons;
  if (sorted) {
    reasons = reasons.sort((a, b) => a.order - b.order);
  }
  return reasons;
}

export function findResultByObjectAndRessort(
  object: VisualisationObject,
  ressort: Ressort,
): Result {
  const cluster: Cluster = getClusterOrThrow(object.cluster);
  const notations: Notation[] = findNotationsByCluster(cluster);
  if (notations.length === 0) {
    throw new Error("Could not find any notation for cluster " + cluster.id);
  }

  let tools = findToolsByNotations(notations);
  tools = filterToolsByRessort(tools, ressort);
  tools = findRecommendedTools(tools);
  return new Result(cluster, notations, tools);
}

function getClusterOrThrow(clusterId: string): Cluster {
  return getOrThrow(data.clusters, clusterId);
}

function getOrThrow<Type extends Entity>(list: Type[], entityId: string): Type {
  const entity = list.find((e) => e.id === entityId);
  if (!entity) {
    throw new Error("Could not find entity" + entityId);
  }
  return entity;
}

function findNotationsByCluster(cluster: Cluster): Notation[] {
  return data.notations.filter(
    (notation) => cluster.notations.indexOf(notation.id) !== 0,
  );
}

function findToolsByNotations(notations: Notation[]) {
  const tools: Tool[] = [];
  notations.forEach((notation) => {
    tools.push(...findToolsByNotation(notation));
  });
  return tools;
}

function findToolsByNotation(notation: Notation): Tool[] {
  return data.tools.filter((tool) => notation.tools.indexOf(tool.id) !== 0);
}

function findRecommendedTools(tools: Tool[]) {
  const recommendedTools: Tool[] = [];
  data.fidelities.forEach((fidelity) => {
    const recommendedToolForFidelity = findRecommendedToolByFidelity(
      tools,
      fidelity,
    );
    if (recommendedToolForFidelity) {
      recommendedTools.push(recommendedToolForFidelity);
    }
  });
  return recommendedTools;
}

function findRecommendedToolByFidelity(tools: Tool[], fidelity: Fidelity) {
  // TODO choose by priority instead of taking the first
  return filterToolsByFidelity(tools, fidelity).at(0);
}

function filterToolsByRessort(tools: Tool[], ressort: Ressort) {
  return tools.filter((tool) => tool.ressorts.indexOf(ressort.id) !== -1);
}

function filterToolsByFidelity(tools: Tool[], fidelity: Fidelity) {
  return tools.filter((tool) => tool.fidelity === fidelity.id);
}
