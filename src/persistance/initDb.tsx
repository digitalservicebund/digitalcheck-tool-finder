import { Database } from "./db";
import { Table } from "dexie";
import data from "../../resources/data.json";
import { trackDBInitErrors } from "../services/tracking";

async function recreateDb(): Promise<Database> {
  let db = new Database();
  await db.delete();
  db = new Database();
  db.open();
  return db;
}

async function initTable<Type>(db: Database, tableName: string) {
  const table: Table<Type> = db.table(tableName);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const tableData: Type[] = data[tableName];
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
    trackDBInitErrors(e);
  }
}
