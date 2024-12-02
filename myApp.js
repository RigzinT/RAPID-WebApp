import express from 'express';

const app = express();
const port = 4000;

// Serve static HTML for the form
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Addition App</title>
        </head>
        <body>
            <h1>RAPID Web App is here!!</h1>
            <form id="additionForm" action="/add" method="GET">
                <label for="num1">Number 1:</label>
                <input type="number" step="any" id="num1" name="num1" required>
                <br><br>
                <label for="num2">Number 2:</label>
                <input type="number" step="any" id="num2" name="num2" required>
                <br><br>
                <button type="submit">Add</button>
            </form>
        </body>
        </html>
    `);
});

// Route to perform addition
app.get('/add', (req, res) => {
    // Parse query parameters as floats
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid input! Please go back and enter valid numbers.');
    }

    // Perform addition
    const result = num1 + num2;

    // Display the result as HTML
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Result</title>
        </head>
        <body>
            <h1>Result</h1>
            <p>The result of adding <strong>${num1}</strong> and <strong>${num2}</strong> is <strong>${result}</strong>.</p>
            <a href="/">Go Back</a>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running. Visit http://localhost:${port} to use the addition app.`);
});
