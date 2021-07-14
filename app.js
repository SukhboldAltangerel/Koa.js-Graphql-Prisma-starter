import Koa from 'koa'
import logger from 'koa-logger'
import cors from '@koa/cors'
import json from 'koa-json'
import apiRoutes from './routes/api.js'
import graphqlRoutes from './schemas/root.js'

const app = new Koa()

app.use(logger())
   .use(cors())
   .use(json())
   .use(apiRoutes.routes())
   .use(apiRoutes.allowedMethods())
   .use(graphqlRoutes.routes())
   .use(graphqlRoutes.allowedMethods())

app.listen(9000, () => console.log('Server running at http://localhost:9000'))
