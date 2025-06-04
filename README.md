# Portfolio Contact Page with Express.js

A responsive portfolio contact page with Express.js backend, form handling, and server logging.

## Features

- Responsive contact form with Bootstrap styling
- Server-side form processing with Express.js
- Form validation using HTML5 attributes
- Logging of all form submissions to server console
- JSON array storage for temporary data persistence
- Thank you page after form submission

## Project Structure

```
portfolio-contact-app/
├── public/
│   ├── index.html          # Main contact form page
│   ├── thank-you.html      # Thank you page after submission
│   └── styles.css          # CSS styling with Bootstrap
├── server.js               # Express.js server with routing
├── package.json            # Dependencies and scripts
└── README.md               # Setup and deployment instructions
```

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio-contact-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the server:**
   ```bash
   # For production
   npm start

   # For development with auto-restart
   npm run dev
   ```

4. **Access the application:**
   Open your browser and go to `http://localhost:3000`

## Deployment

### For Render:
1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `node server.js`

### For Glitch:
1. Import from GitHub or copy files directly
2. Glitch will auto-install dependencies
3. Your app will be live immediately

### For Replit:
1. Create new Node.js project
2. Copy all files to your repl
3. Run `npm install` in shell
4. Click "Run" button

## Customization

- Edit CSS in `public/styles.css` to match your portfolio's design
- Modify HTML forms in `public/index.html` to add or change form fields
- Update server handling in `server.js` to process additional form fields or add more advanced features

## Dependencies

- Express.js - Web server framework
- Body-parser - Middleware for parsing form data
- Nodemon (dev) - Auto-restart during development

## License

MIT

