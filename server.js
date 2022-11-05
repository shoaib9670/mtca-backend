const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));





// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// // DB Config
// const db = require('../config/keys').mongoURI;

// // Connect to MongoDB
// mongoose
//   .connect(db)
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// app.get('/', (req, res) => res.send('Hello World'));


// const port = process.env.PORT || 4000;

// app.listen(port, () => console.log(`Server running on port ${port}`));
// // app.get('/', (req, res) => res.send('<h3 style="color:orange">Hello World!</h3>'))
// // app.get('/king', (req, res) => res.send('<h3 style="color:orange">Welcome To OS Developer Home</h3>'))
// // app.post('/', (req, res) => res.send('<h1 style="color:aqua">I Am OS Developer</h1>'))
// // app.listen(3000, () => console.log('Server ready'))