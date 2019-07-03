const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger');
const router = require('./router');
const PORT = process.env.PORT || 5000;

// app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/members', router);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));