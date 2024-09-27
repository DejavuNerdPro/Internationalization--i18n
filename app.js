const express = require('express');
const i18next = require('./i18next_Config/i18next_config');
const i18nextMiddleware = require('i18next-express-middleware');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware
app.use(cookieParser());
//app.use(i18next.init);
app.use(i18nextMiddleware.handle(i18next));

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Routes
app.get('/', (req, res) => {
  res.render('index', { t: req.t }); // Render the Pug template with translation function
});

app.get('/switch-lang/:lang', (req, res) => {
  const { lang } = req.params;
  res.cookie('i18next', lang); // Set the selected language in a cookie
  res.redirect('back'); // Redirect to the previous page
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
