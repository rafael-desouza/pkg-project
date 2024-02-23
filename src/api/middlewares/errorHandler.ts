import { ExpressErrorMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({type: 'after', priority: 1})
export class ErrorHandler implements ExpressErrorMiddlewareInterface {


   async error(error: any, request: any, response: any, next: (err?: any) => any) {
      console.log(error)

      response.status(500)
      response.json('Algo deu errado')
      next()
  }
}