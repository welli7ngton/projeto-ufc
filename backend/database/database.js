import sqlite3 from 'sqlite3';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = path.resolve(__dirname, 'instance/database.db');


export class SingletonDatabaseConnection {
    static connection = null;

    constructor() {
        if (SingletonDatabaseConnection.connection) {
            throw new Error("Use SingletonDatabaseConnection.getDbConnection() to get the single instance of this class.");
        }
        SingletonDatabaseConnection.connection = new sqlite3.Database(dbPath);
    }

    static getDbConnection() {
        if (!SingletonDatabaseConnection.connection) {
            new SingletonDatabaseConnection();
        }
        return SingletonDatabaseConnection.connection;
    }
}
