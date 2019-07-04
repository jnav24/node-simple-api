const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const router = require('./router');
const PORT = process.env.PORT || 5000;

// app.use(logger);
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Member App',
    });
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/members', router);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));