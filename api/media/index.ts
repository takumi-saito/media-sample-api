import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { html } from 'hono/html';
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
  '/basicauthpage',
  basicAuth({
    username: 'mediaapi',
    password: 'mediaapi-2024',
  }),
  (c) => {
  return c.html(
    html`<!doctype html>
      <h1>Hello World 2024.</h1>`
  )
})

app.get(
  '/basicauthpage2',
  basicAuth({
    username: 'mediaapi',
    password: 'mediaapi-2025',
  }),
  (c) => {
  return c.html(
    html`<!doctype html>
      <h1>Hello World 2025.</h1>`
  )
})

// リダイレクト用のパスを追加
app.get('/redirect_test', basicAuth({
  username: 'kaiin',
  password: 'naisho',
}), (c) => {
  return c.redirect('https://leggiero.sakura.ne.jp/xxxxbasic_auth_testxxxx/secret/kaiin_page_top.htm')
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