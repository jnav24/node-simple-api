const express = require('express');
const path = require('path');
const app = express();
const moment = require('moment');
const PORT = process.env.PORT || 5000;

const logger = (req, res, next) => {
    console.log('hello');
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

app.use(logger);

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