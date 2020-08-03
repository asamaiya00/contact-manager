const express = require('express');
const cors = require('cors')
const app = express();

const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const contactsRoute = require('./routes/contacts');

const connectDB = require('./config/db');

connectDB();

app.use(express.json({ extended: false })); 

app.get('/', (req, res) => {
  res.json({ msg: 'Contact Keeper API' });
});

app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/contacts', contactsRoute);

app.use(cors({
  origin: 'http://localhost:5000',
  credentials: true
}))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
