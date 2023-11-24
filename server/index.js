const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/SocialMedia');


const socialMediaSchema = new mongoose.Schema({
  socialMedia: [String],
});

const SocialMediaModel = mongoose.model('SocialMedia', socialMediaSchema);


app.post('/api/socialMedia', async (req, res) => {
  try {
    const { socialMedia } = req.body;
    console.log(socialMedia)
    const newData = new SocialMediaModel({ socialMedia });
    await newData.save();
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
