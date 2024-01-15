const express = require('express');
const app = express();
const contactManager = require('../contact.js'); // Assuming your module file is named contactManager.js

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
  const contacts = contactManager.ALLCONTACTS();
  res.render('index', { contacts });
});

// Add contact route
app.post('/add', (req, res) => {
  const { id, name, lastName, username, phone } = req.body;
  contactManager.addContact(id, name, lastName, username, phone);
  res.redirect('/');
});

// Delete contact route
app.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  contactManager.deleteContact(id);
  res.redirect('/');
});

// Edit contact route
app.post('/edit/:id', (req, res) => {
  const { id } = req.params;
  const { property, editedProperty } = req.body;
  contactManager.editContact(id, property, editedProperty);
  res.redirect('/');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
