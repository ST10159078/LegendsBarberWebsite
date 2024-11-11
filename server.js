const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());
app.use('/assets', express.static(path.join(__dirname, 'assets'))); // Serves static files from 'public' folder

// Endpoint to handle booking submissions
app.post('/Bookings', (req, res) => {
    const bookingData = req.body;
    console.log('Booking received:', bookingData);
    
    // Here you can add logic to store bookingData in Firebase
    // Example placeholder response:
    res.status(200).json({ success: true, message: 'Booking received successfully!' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
