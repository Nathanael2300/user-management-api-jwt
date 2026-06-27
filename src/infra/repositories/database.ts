import { Database } from "bun:sqlite";
import { DATABASE_PATH } from "./config";

function createDatabase(): Database {
  try {
    const db = new Database(DATABASE_PATH);

    console.log("Database connected successfully");

    return db;
  } catch (error) {
    console.error("Error connecting to database:", error);

    throw new Error("Failed to initialize database");
  }
}

export const db = createDatabase();
