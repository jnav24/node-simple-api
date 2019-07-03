const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger');
const members = require('./models/members');
const PORT = process.env.PORT || 5000;

// app.use(logger);

app.get('/api/members', (req, res) => {
    res.json(members);
});

app.get('/api/members/:id', (req, res) => {
    const index = members.findIndex((member) => Number(req.params.id) === Number(member.id));

    if (index > -1) {
        return res.status(200).json({
            data: members[index],
            msg: '',
        });
    }

    res.status(400).json({
        data: {},
        msg: `Member is not found`,
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));