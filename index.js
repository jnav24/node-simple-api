const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger');
const members = require('./models/members');
const PORT = process.env.PORT || 5000;

app.use(logger);

app.get('/api/members', (req, res) => {
    res.json(members);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));