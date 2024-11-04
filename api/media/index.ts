import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { handle } from 'hono/nextjs'

export const config = {
  runtime: 'edge',
}

// サンプルの楽曲データ
const songsData = [
  {
    "title": "Cheerful_Tunes",
    "artist": "ISSEI AIR",
    "duration": 164000,
    "cover": "https://media-sample-api-tr6g.vercel.app/media/covers/Cheerful_Tunes.jpg",
    "url": "https://media-sample-api-tr6g.vercel.app/media/tracks/Cheerful_Tunes.mp3"
  },
  {
    "title": "Dream Weaver",
    "artist": "ISSEI AIR",
    "duration": 164000,
    "cover": "https://media-sample-api-tr6g.vercel.app/media/covers/Dream_Weaver.jpg",
    "url": "https://media-sample-api-tr6g.vercel.app/media/tracks/Dream_Weaver.mp3"
  }
];

const app = new Hono().basePath('/api/media')

app.get('/', (c) => {
  return c.json({
    message: 'Hello World!',
  })
})

app.get(
  '/songs',
  basicAuth({
    username: 'mediaapi',
    password: 'mediaapi-2024',
  }),
  (c) => {
    return c.json(songsData)
  }
)

export default handle(app)