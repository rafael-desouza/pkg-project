import path from "path";
import { Express } from 'express'

import { createExpressServer } from "routing-controllers";

const controllersPath = path.join(__dirname, 'api', 'routes', '**', 'controller.*')
const middlewaresPath = path.join(__dirname, 'api', 'middlewares', '**', '*.*')

const app: Express = createExpressServer({
  cors: '*',
  defaultErrorHandler: false,
  controllers: [controllersPath],
  middlewares: [middlewaresPath],
  classTransformer: true
})

export const server = async() => {
  return app
}