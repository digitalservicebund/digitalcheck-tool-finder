import {
  Database,
  Notation,
  Reason,
  Ressort,
  Tool,
  VisualisationObject,
} from "./db";
import { Table } from "dexie";
import data from "../../resources/data.json";
import { trackDBInitErrors } from "../services/tracking";

let db = new Database();

async function initTable<Type>(tableName: string) {
  const table: Table<Type> = db.table(tableName);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const tableData: Type[] = data[tableName];
  if (!tableData) {
    throw new Error(`Could not read table data for table '${tableName}'`);
  }
  await table.bulkAdd(tableData, { allKeys: true });
}

async function recreateDb() {
  await db.delete();
  db = new Database();
  db.open();
}

export async function initDb() {
  await recreateDb();
  try {
    await initTable<Notation>("notations");
    await initTable<VisualisationObject>("objects");
    await initTable<Reason>("reasons");
    await initTable<Ressort>("ressorts");
    await initTable<Tool>("tools");
  } catch (e) {
    trackDBInitErrors(e);
  }
}
