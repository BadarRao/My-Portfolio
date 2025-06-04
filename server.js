const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Store submitted form data
let submittedData = [];

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post('/submit-form', (req, res) => {
  const formData = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    timestamp: new Date().toISOString()
  };

  // Log form data to console
  console.log('Form submission received:');
  console.log(JSON.stringify(formData, null, 2));

  // Save to array
  submittedData.push(formData);

  // Redirect to thank you page
  res.redirect('/thank-you.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
