import express, { Router } from 'express';

const app = express();

const router = Router();

// サンプルの楽曲データ
const songsData = [
  {
    "title": "Cheerful_Tunes",
    "artist": "ISSEI AIR",
    "duration": 164000,
    "cover": "/media/covers/Cheerful_Tunes.jpg",
    "url": "/media/tracks/Cheerful_Tunes.mp3"
  },
  {
    "title": "Dream Weaver",
    "artist": "ISSEI AIR",
    "duration": 164000,
    "cover": "/media/covers/Dream_Weaver.jpg",
    "url": "/media/tracks/Dream_Weaver.mp3"
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