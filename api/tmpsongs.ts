const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// 楽曲データファイルのパス
const songsDataPath = path.join(__dirname, '../json/songsData.json');

// 楽曲一覧を返却するエンドポイント
router.get('/songs', (req, res) => {
  // JSONファイルを読み込む
  fs.readFile(songsDataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to load songs data:', err);
      return res.status(500).json({ error: 'Failed to load songs data' });
    }

    const songs = JSON.parse(data);
    res.json(songs);
  });
});

module.exports = router;