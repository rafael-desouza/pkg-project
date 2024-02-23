import 'reflect-metadata'
import { server } from './server'

const port = 5000

try{
server().then(app => {

 app.listen(port, () => console.log(`🚀 Server running on port ${port}!`))
})
}catch(error){
  console.log(error)
}