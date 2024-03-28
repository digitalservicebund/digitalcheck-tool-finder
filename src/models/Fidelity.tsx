import data from "resources/data";
import type { ClusterId } from "./Cluster";
import type { Entity } from "./Entity";
import type { RessortId } from "./Ressort";
import type { ToolId } from "./Tool";

type FidelityId = (typeof data)["fidelities"][number]["id"];

export interface Fidelity extends Entity {
  id: FidelityId;
  name: string;
  order: number;
  clusterRessortToolMap: {
    [K in ClusterId]?: readonly {
      ressorts: readonly RessortId[];
      primaryTool: ToolId;
      alternativeTools?: readonly ToolId[];
    }[];
  };
}
