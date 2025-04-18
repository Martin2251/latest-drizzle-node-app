import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { usersTable } from '../db/schema.js'
import { db } from '../db/index.js'

const usersRoute = new Hono()

usersRoute.get('/',async (c) => {
const users = await db.select().from(usersTable)
return c.json(users)
})

export default usersRoute