import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const usersRoute = new Hono()

usersRoute.get('/', (c) => {
  return c.text('Hello from users route!')
})

export default usersRoute