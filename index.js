const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/bfhl', (req, res) => {
    res.status(200).json({ "operation_code": 1 });
});

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
