import {
  Database,
  Notation,
  Reason,
  Ressort,
  Tool,
  VisualisationObject,
} from "./db";
import { Table } from "dexie";
import rawData from "../../resources/data.json";
import { trackDBInitErrors } from "../services/tracking";

interface Data {
  notations: Notation[];
  objects: VisualisationObject[];
  reasons: Reason[];
  ressorts: Ressort[];
  tools: Tool[];
}

const data: Data = rawData;

async function recreateDb(): Promise<Database> {
  let db = new Database();
  await db.delete();
  db = new Database();
  db.open();
  return db;
}

async function initTable(db: Database, tableName: string) {
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
    const db = await recreateDb();

    for (const table of db.tables) {
      await initTable(db, table.name);
    }
  } catch (e) {
    const error: Error = e instanceof Error ? e : new Error(`${e}`);
    trackDBInitErrors(error);
  }
}
