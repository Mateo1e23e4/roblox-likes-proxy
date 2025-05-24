const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Roblox Likes Proxy Server. Use /likes to get the likes count.');
});

// Likes route
app.get('/likes', async (req, res) => {
  try {
    const universeId = '7333299491'; // Replace with your actual Universe ID
    const response = await axios.get(`https://games.roblox.com/v1/games?universeIds=${universeId}`);
    const likes = response.data.data[0].upVotes;
    res.json({ likes });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
