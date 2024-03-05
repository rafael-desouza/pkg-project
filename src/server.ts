import path from "path";
import { Express } from 'express'

import { createExpressServer } from "routing-controllers";
import { createDatabaseConnections } from "./configs/database/connection";
import { LoggerService } from "./configs/logger/logger";
import { ProductsController } from "./api/modules/testsRoutes/controller";
import { ErrorHandler } from "./api/middlewares/errorHandler";

export let logger: LoggerService

const app: Express = createExpressServer({
  cors: '*',
  defaultErrorHandler: false,
  controllers: [ProductsController],
  middlewares: [ErrorHandler],
  classTransformer: true
})

export const server = async() => {
  logger = await LoggerService.Instance({
    serviceName: 'loggerTest',
    consoleTransport: true
  })

  logger.info('creating Database connection')
  await createDatabaseConnections()

  return app
}