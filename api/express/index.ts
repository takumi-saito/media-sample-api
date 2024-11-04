import express, { Router } from 'express';

const app = express();

const router = Router();

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

router.get('/', (_, res) => {
  res.json({
    message: 'Hello from express!',
  });
});

router.get('/posts/:slug', (req, res) => {
  res.json({
    post: {
      title: 'Test Post',
      slug: req.params['slug'],
    },
  });
});

// 新しい楽曲一覧のルート
router.get('/songs', (_, res) => {
  res.json(songsData);
});

app.use('/api/express', router);

export default app;