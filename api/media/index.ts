import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { html } from 'hono/html';
import { logger } from "hono/logger";
import { handle } from 'hono/nextjs'

const username = 'mediaapi'
const pass = 'mediaapi-2024'

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
  },
  {
    "title": "Piano_Improvisation_2020_Spring_No3",
    "artist": "brightwaltz",
    "duration": 753000,
    "cover": "https://media-sample-api-tr6g.vercel.app/media/covers/Piano_Improvisation_2020_Spring_No3.jpg",
    "url": "https://media-sample-api-tr6g.vercel.app/media/tracks/Piano_Improvisation_2020_Spring_No3.mp3"
  }
];

// ルートパス
const app = new Hono().basePath('/api/media')
// 全てのパスにBasic認証を適用
app.use(
  "/*",
  basicAuth({
    username: "hono",
    password: "password",
  })
);
// 楽曲データを返す
app.get(
  '/songs',
  basicAuth({
    username: username,
    password: pass,
  }),
  (c) => {
    return c.json(songsData)
  }
)

app.get('/', (c) => {
  return c.json({
    message: 'Hello World!',
  })
})

export default handle(app)