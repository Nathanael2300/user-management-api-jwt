import { Database } from "bun:sqlite";
import { DATABASE_PATH } from "../src/infra/repositories/config";

const db = new Database(DATABASE_PATH);

db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL
);
`);

console.log("Created tabble successfully");

db.close();
