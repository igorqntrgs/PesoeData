import * as SQLite from 'expo-sqlite';

export const create = async () => {
    try {
        db = await SQLite.openDatabaseAsync('databaseName');
        result = await db.runAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS pesos (id INTEGER PRIMARY KEY NOT NULL, data TEXT NOT NULL, peso REAL NOT NULL);
        `);
        if (result.changes > 0)
            console.log("[LOG] Query executada");
        else
            console.log("[LOG] Nenhum resultado retornado pela query");
    } catch (error) {
        console.log(error);
    }
    return db;
}
