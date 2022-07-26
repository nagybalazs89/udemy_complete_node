const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
const path = require('path');

const admin = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Page Not Found!'});
});

app.listen(3000);