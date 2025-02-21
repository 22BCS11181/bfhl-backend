const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// ✅ GET Request - Returns operation code
app.get('/bfhl', (req, res) => {
    res.status(200).json({ "operation_code": 1 });
});

// ✅ POST Request - Processes JSON input
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    if (!Array.isArray(data)) return res.status(400).json({ "is_success": false });

    const numbers = data.filter(x => !isNaN(x));
    const alphabets = data.filter(x => isNaN(x));
    const highest_alphabet = alphabets.length ? [alphabets.sort().pop()] : [];

    res.json({
        "is_success": true,
        "user_id": "your_name_ddmmyyyy",
        "email": "your_email@xyz.com",
        "roll_number": "YOUR_ROLL_NUMBER",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": highest_alphabet
    });
});

// ✅ Default Route - Fixes "Cannot GET /" error
app.get('/', (req, res) => {
    res.send('Backend is running! Use /bfhl for API requests.');
});

// ✅ Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
