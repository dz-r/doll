const express = require('express');
const app = express();

// These are the prefix and postfix variables for the title
const titleprefix = 'blabla';
const titlepostfix = ' - MySite';

app.get('/q', (req, res) => {
    // Get the 'q' query parameter (e.g., /q?q=KEYWORD KEYWORD)
    const keyword = req.query.q || '';

    // Construct the dynamic title
    const title = `${titleprefix} ${keyword} ${titlepostfix}`;

    // Respond with simple HTML containing the dynamic title and the link to mysite.com
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
            <a href="https://mysite.com">Go to My Site</a>
        </body>
        </html>
    `);
});

// Set the server to listen on the port provided by Render.com or 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
