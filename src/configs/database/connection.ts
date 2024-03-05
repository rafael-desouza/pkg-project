import path from "path"
import { createConnection } from "typeorm-fire"
import { SqliteConnectionOptions } from "typeorm-fire/driver/sqlite/SqliteConnectionOptions"
import { TestEntity } from "../../api/modules/testsRoutes/entities/testroute.entity"

export const createDatabaseConnections = async () => {
  const sqlLitePath = path.resolve(process.cwd(), 'testDatabase.db')
 

  const sqlLiteConnectionOptions: SqliteConnectionOptions = {
    type: 'sqlite',
    database: sqlLitePath,
    entities: [TestEntity],
    synchronize: true
  }

  await createConnection(sqlLiteConnectionOptions)
}