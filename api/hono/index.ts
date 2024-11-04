import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

export const config = {
  runtime: 'edge',
}
const app = new Hono().basePath('/api/hono')

app.use(
  '/admin/*',
  basicAuth({
    username: 'admin',
    password: 'secret',
  })
)

app.get('/', (c) => {
  return c.json({
    message: 'Hello from Hono',
  })
})

app.get('/admin', (c) => {
  return c.text('You are authorized!')
})

app.get('/posts/:slug', (c) => {
  return c.json({
    post: {
      title: 'Test Post',
      slug: c.req.param('slug'),
    },
  })
})
