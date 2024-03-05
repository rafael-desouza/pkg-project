import 'reflect-metadata'
import { logger, server } from './server'
import { getConfigValue } from './helpers/functions'

const port = 5000

try{
server().then(app => {
  const testYamlFile = getConfigValue<string>('test')
  logger.info(`testYamlFile: ${testYamlFile}`)
 app.listen(port, () => logger.info(`Server running on port ${port}!`))
})
}catch(error){
  console.log(error)
}