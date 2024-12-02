// myApp.js
import express from 'express';

const app = express();
const port = 4000;

// Serve static HTML for the app
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>RAPID web app is here!!!</title>
        </head>
        <body>
            <h1>Simple Addition App</h1>
            <form id="additionForm" action="/add" method="GET">
                <label for="num1">Number 1 (can be a decimal):</label>
                <input type="number" step="any" id="num1" name="num1" required>
                <br><br>
                <label for="num2">Number 2 (can be a decimal):</label>
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
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid input! Please go back and enter valid numbers.');
    }

    const result = num1 + num2;

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Result</title>
        </head>
        <body>
            <h1>Result</h1>
            <p>The result of adding ${num1} and ${num2} is ${result}.</p>
            <a href="/">Go Back</a>
        </body>
        </html>
    `);
});

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

export default app; // Ensure the app is exported correctly for testing
