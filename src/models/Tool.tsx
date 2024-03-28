import type { Entity } from "./Entity";
import type { Image } from "./Image";

export type ToolId =
  | "papier-schaubild"
  | "papier-entscheidungsbaum"
  | "papier-flussdiagramm"
  | "bundescloud-drawio-schaubild"
  | "bundescloud-drawio-entscheidungsbaum"
  | "bundescloud-drawio-flussdiagramm"
  | "logos"
  | "adonis"
  | "bic"
  | "conceptboard-schaubild"
  | "conceptboard-entscheidungsbaum"
  | "conceptboard-flussdiagramm"
  | "msvisio"
  | "modulo"
  | "aris"
  | "aris-cloud"
  | "powerpoint";

export interface Tool extends Entity {
  id: ToolId;
  name: string;
  description: string;
  link: string;
  access?: string;
  img: Image;
}
