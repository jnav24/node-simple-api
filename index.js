const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/members', (req, res) => {
    const members = [
        {
            id: 1,
            name: 'Steve Rogers',
            email: 'srogers@avengers.com',
            status: 'active',
        },
        {
            id: 2,
            name: 'Peter Parker',
            email: 'pparker@dailybugle.com',
            status: 'active',
        },
        {
            id: 3,
            name: 'Bruce Banner',
            email: 'bbanner@avengers.com',
            status: 'active',
        },
    ];

    res.json(members);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));