const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Booking = require('./models/Booking');

const app = express();
const port = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/Travel_booking_system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.use(bodyParser.json());
app.post('/register', async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = new User({ username, email });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/bookings', async (req, res) => {
  try {
    const { userId, location, checkInDate, checkOutDate } = req.body;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const booking = new Booking({ user: userId, location, checkInDate, checkOutDate });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (err) {
    console.error('Error creating booking:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
