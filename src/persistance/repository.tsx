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
  tools = removeDuplicates(tools);
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
  return data.notations.filter((notation) =>
    contains(cluster.notations, notation.id),
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
  return data.tools.filter((tool) => contains(notation.tools, tool.id));
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
  return tools.filter((tool) => contains(tool.ressorts, ressort.id));
}

function filterToolsByFidelity(tools: Tool[], fidelity: Fidelity) {
  return tools.filter((tool) => tool.fidelity === fidelity.id);
}

function removeDuplicates(tools: Tool[]) {
  const setOfIds: Set<string> = new Set(tools.map((t) => t.id));
  const arrayOfIds = Array.from(setOfIds);
  const uniqueTools: (Tool | undefined)[] = arrayOfIds.map((id) =>
    tools.find((t) => t.id === id),
  );
  return uniqueTools.filter((tool): tool is Tool => tool !== undefined);
}

function contains(list: string[], entityId: string) {
  return list.indexOf(entityId) !== -1;
}
