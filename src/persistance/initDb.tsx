import { Database } from "./db";
import { Table } from "dexie";
import rawData from "../../resources/data.json";
import { trackDBInitErrors } from "../services/tracking";
import { Data } from "./models/Data";
import { Reason } from "./models/Reason";
import { VisualisationObject } from "./models/VisualisationObject";
import { Notation } from "./models/Notation";
import { Ressort } from "./models/Ressort";
import { Tool } from "./models/Tool";

const data: Data = rawData;
export let db: Database = new Database();

async function recreateDb() {
  await db.delete();
  db = new Database();
  db.open();
}

async function initTable(tableName: string) {
  const table: Table = db.table(tableName);
  const tableData:
    | Reason[]
    | Ressort[]
    | Notation[]
    | VisualisationObject[]
    | Tool[] = data[tableName as keyof Data];
  if (!tableData) {
    throw new Error(`Could not read table data for table '${tableName}'`);
  }
  await table.bulkAdd(tableData, { allKeys: true });
}

export async function initDb() {
  try {
    await recreateDb();

    for (const table of db.tables) {
      await initTable(table.name);
    }
  } catch (e) {
    const error: Error = e instanceof Error ? e : new Error(`${e}`);
    console.error(`Failed to initialise database: ${error.message}`);
    trackDBInitErrors(error);
  }
}
