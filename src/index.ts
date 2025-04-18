import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import usersRoute from './routes/users-routes.js'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.route('/users', usersRoute)
const port = 3000;
console.log(`Server is running on http://localhost:${port}`)



serve({
  fetch: app.fetch,
  port: 3000

})
