import rawData from "../../resources/data";
import type { Cluster } from "../models/Cluster";
import type { Data } from "../models/Data";
import type { Entity } from "../models/Entity";
import type { Reason } from "../models/Reason";
import type { Ressort } from "../models/Ressort";
import type { Recommendation, Result } from "../models/Result";
import type { VisualisationObject } from "../models/VisualisationObject";

const data: Data = rawData;

export function getAllRessorts() {
  return data.ressorts;
}

export function getAllObjects(): readonly VisualisationObject[] {
  return data.objects.toSorted((a, b) => a.order - b.order);
}

export function getAllReasons(): readonly Reason[] {
  return data.reasons.toSorted((a, b) => a.order - b.order);
}

function getOrThrow<Type extends Entity>(
  list: readonly Type[],
  entityId: string,
): Type {
  const entity = list.find((e) => e.id === entityId);
  if (!entity) {
    throw new Error("Could not find entity" + entityId);
  }
  return entity;
}

export function findResultByObjectAndRessort(
  object: VisualisationObject,
  ressort: Ressort,
): Result {
  const cluster: Cluster = getOrThrow(data.clusters, object.cluster);
  const recommendations = data.fidelities
    .map((fidelity) => {
      // Find the clusterRessortToolMap for the current cluster
      const map = fidelity.clusterRessortToolMap[cluster.id];
      if (!map) return;

      // Find the tools for the current ressort
      const toolForRessort = map.find((m) => m.ressorts.includes(ressort.id));
      if (!toolForRessort) return;
      const primaryTool = getOrThrow(data.tools, toolForRessort.primaryTool);
      const alternativeTools = toolForRessort.alternativeTools?.map((id) =>
        getOrThrow(data.tools, id),
      );

      return {
        fidelity,
        primaryTool,
        alternativeTools,
      };
    })
    .filter((r): r is Recommendation => !!r);

  return {
    cluster,
    recommendations,
  };
}
