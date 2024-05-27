import sqlite3 from 'sqlite3';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = path.resolve(__dirname, 'instance/database.db');


export class DatabaseConnection {
    static connection = null;

    constructor() {
        if (DatabaseConnection.connection) {
            throw new Error("Use DatabaseConnection.getDbConnection() to get the single instance of this class.");
        }
        DatabaseConnection.connection = new sqlite3.Database(dbPath);
    }

    static getDbConnection() {
        if (!DatabaseConnection.connection) {
            new DatabaseConnection();
        }
        return DatabaseConnection.connection;
    }
}
